"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";

type Falloff = "linear" | "smooth" | "sharp";

export interface LineSidebarProps {
  items: string[];
  accentColor?: string;
  textColor?: string;
  markerColor?: string;
  proximityRadius?: number;
  maxShift?: number;
  falloff?: Falloff;
  markerLength?: number;
  tickScale?: number;
  itemGap?: number;
  fontSize?: number;
  smoothing?: number;
  defaultActive?: number | null;
  onItemClick?: (index: number, label: string) => void;
  className?: string;
}

const curves: Record<Falloff, (value: number) => number> = {
  linear: (value) => value,
  smooth: (value) => value * value * (3 - 2 * value),
  sharp: (value) => value * value * value,
};

export default function LineSidebar({
  items,
  accentColor = "#8e8c60",
  textColor = "#4f5044",
  markerColor = "#bec0b3",
  proximityRadius = 82,
  maxShift = 16,
  falloff = "smooth",
  markerLength = 38,
  tickScale = 0.6,
  itemGap = 13,
  fontSize = 0.78,
  smoothing = 100,
  defaultActive = 0,
  onItemClick,
  className = "",
}: LineSidebarProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const targets = useRef<number[]>([]);
  const current = useRef<number[]>([]);
  const frame = useRef<number | null>(null);
  const previous = useRef(0);
  const active = useRef<number | null>(defaultActive);
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultActive);

  active.current = activeIndex;

  useEffect(() => { setActiveIndex(defaultActive); }, [defaultActive]);

  const runFrame = useCallback((now: number) => {
    const dt = Math.min((now - previous.current) / 1000, 0.05);
    previous.current = now;
    const easing = 1 - Math.exp(-dt / (Math.max(smoothing, 1) / 1000));
    let moving = false;

    itemRefs.current.forEach((element, index) => {
      if (!element) return;
      const target = Math.max(targets.current[index] || 0, active.current === index ? 1 : 0);
      const next = (current.current[index] || 0) + (target - (current.current[index] || 0)) * easing;
      const value = Math.abs(target - next) < 0.0015 ? target : next;
      current.current[index] = value;
      element.style.setProperty("--line-effect", value.toFixed(4));
      if (value !== target) moving = true;
    });

    frame.current = moving ? requestAnimationFrame(runFrame) : null;
  }, [smoothing]);

  const startLoop = useCallback(() => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    previous.current = performance.now();
    frame.current = requestAnimationFrame(runFrame);
  }, [runFrame]);

  const handlePointerMove = useCallback((event: PointerEvent<HTMLUListElement>) => {
    const list = listRef.current;
    if (!list) return;
    const pointerY = event.clientY - list.getBoundingClientRect().top;
    const curve = curves[falloff];
    itemRefs.current.forEach((element, index) => {
      if (!element) return;
      const center = element.offsetTop + element.offsetHeight / 2;
      targets.current[index] = curve(Math.max(0, 1 - Math.abs(pointerY - center) / proximityRadius));
    });
    startLoop();
  }, [falloff, proximityRadius, startLoop]);

  useEffect(() => {
    startLoop();
    return () => { if (frame.current !== null) cancelAnimationFrame(frame.current); };
  }, [activeIndex, startLoop]);

  const style = {
    "--line-accent": accentColor,
    "--line-text": textColor,
    "--line-marker": markerColor,
    "--line-marker-length": `${markerLength}px`,
    "--line-tick-scale": tickScale,
    "--line-max-shift": `${maxShift}px`,
    "--line-gap": `${itemGap}px`,
    "--line-font-size": `${fontSize}rem`,
  } as CSSProperties;

  return <nav className={`line-sidebar ${className}`} style={style} aria-label="Service categories">
    <ul ref={listRef} onPointerMove={handlePointerMove} onPointerLeave={() => { targets.current = targets.current.map(() => 0); startLoop(); }}>
      {items.map((label, index) => <li key={label}>
        <button ref={(element) => { itemRefs.current[index] = element; }} type="button" aria-current={activeIndex === index ? "true" : undefined} onClick={() => { setActiveIndex(index); onItemClick?.(index, label); }}>
          <span className="line-sidebar-tick" aria-hidden="true" />
          <span className="line-sidebar-label"><small>{String(index + 1).padStart(2, "0")}</small>{label}</span>
        </button>
      </li>)}
    </ul>
  </nav>;
}
