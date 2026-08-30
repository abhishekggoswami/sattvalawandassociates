"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

type DroneModelProps = {
  reducedMotion: boolean;
};

function DroneModel({ reducedMotion }: DroneModelProps) {
  const flightGroup = useRef<THREE.Group>(null);
  const { camera, viewport } = useThree();
  const { scene } = useGLTF("/models/Drone.glb");

  const model = useMemo(() => {
    const cloned = scene.clone(true);
    const bounds = new THREE.Box3().setFromObject(cloned);
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    const longestSide = Math.max(size.x, size.y, size.z);

    const normalized = new THREE.Group();
    cloned.position.sub(center);
    // Scale the centred child inside its own group, so the model does not
    // inherit a large translation from its original scene coordinates.
    normalized.scale.setScalar(9 / longestSide);
    normalized.add(cloned);
    cloned.rotation.set(0.05, Math.PI * 0.18, -0.04);
    cloned.traverse((node) => {
      if (node instanceof THREE.Mesh) {
        node.castShadow = false;
        node.receiveShadow = false;
      }
    });
    return normalized;
  }, [scene]);

  const path = useMemo(() => {
    const desktop = viewport.width >= 10;
    const width = viewport.width;
    const height = viewport.height;
    const yTop = desktop ? height * 0.28 : height * 0.29;
    const baseScale = desktop ? 1 : 0.56;

    return {
      scale: baseScale,
      curve: new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(-width * 0.64, yTop * 0.95, -1.2),
          new THREE.Vector3(-width * 0.35, yTop * 1.06, -0.3),
          new THREE.Vector3(width * 0.08, yTop * 0.9, 0.95),
          new THREE.Vector3(width * 0.42, yTop * 1.16, 0.35),
          new THREE.Vector3(width * 0.68, yTop * 1.36, -0.7),
        ],
        false,
        "catmullrom",
        0.42,
      ),
    };
  }, [viewport.height, viewport.width]);

  useFrame(({ clock }) => {
    if (!flightGroup.current) return;

    const time = clock.getElapsedTime();
    const cycleDuration = reducedMotion ? 26 : 13;
    const progress = reducedMotion ? 0.48 : (time % cycleDuration) / cycleDuration;
    const point = path.curve.getPointAt(progress);
    const tangent = path.curve.getTangentAt(Math.min(progress + 0.003, 1)).normalize();
    const hover = Math.sin(time * 2.1) * 0.045;

    flightGroup.current.position.set(point.x, point.y + hover, point.z);
    flightGroup.current.scale.setScalar(path.scale * (1 + Math.max(point.z, -0.8) * 0.1));
    flightGroup.current.rotation.set(
      -0.12 + tangent.y * 0.22,
      -tangent.x * 0.38,
      tangent.x * -0.14 + Math.sin(time * 1.4) * 0.025,
    );
  });

  return <group ref={flightGroup}><primitive object={model} /></group>;
}

type DroneSceneProps = {
  reducedMotion: boolean;
};

export default function DroneScene({ reducedMotion }: DroneSceneProps) {
  return (
    <Canvas
      className="pointer-events-none absolute inset-0 h-full w-full"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 11], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
    >
      <ambientLight intensity={1.45} />
      <directionalLight position={[5, 7, 6]} intensity={2.1} color="#d8fff3" />
      <directionalLight position={[-5, 2, 3]} intensity={0.85} color="#75d8ff" />
      <Suspense fallback={null}>
        <DroneModel reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/Drone.glb");
