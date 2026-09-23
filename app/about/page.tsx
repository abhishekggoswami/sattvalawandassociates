"use client";

import { ArrowDownRight, Building2, Scale, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export default function AboutPage() {
  const storyRef = useRef<HTMLElement>(null);
  const [storyLoaded, setStoryLoaded] = useState(false);
  const [ringsLoaded, setRingsLoaded] = useState(false);
  useEffect(() => {
    const story = storyRef.current;
    if (!story) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        setRingsLoaded(false);
        return;
      }
      setStoryLoaded(true);
      setRingsLoaded(false);
      requestAnimationFrame(() => setRingsLoaded(true));
    }, { threshold: 0.35 });
    observer.observe(story);
    return () => observer.disconnect();
  }, []);

  return <main className="about-page">
    <SiteHeader />

    <section className="hero about-hero">
      <div className="hero-slides" aria-hidden="true"><div className="hero-slide is-active" style={{ backgroundImage: "url('/images/sattva/about-handshake.jpg')" }} /></div>
      <div className="hero-shade" />
      <div className="hero-content shell"><div className="hero-copy-set about-hero-copy">
        <p className="eyebrow light"><em>About Sattva</em> <i /> Law &amp; Associates</p>
        <h1>Law that keeps<br />your work <em>moving.</em></h1>
        <div className="hero-actions"><a className="button button-light" href="#story">Our story <ArrowDownRight size={17} /></a></div>
      </div></div>
      <div className="hero-rail">BUSINESS LAW · REGULATORY PRACTICE · CORPORATE GOVERNANCE</div>
    </section>

    <section className={`about-story ${storyLoaded ? "is-loaded" : ""} ${ringsLoaded ? "rings-loaded" : ""}`} id="story" ref={storyRef}>
      <div className="shell about-story-grid">
        <div className="about-story-copy">
          <p className="eyebrow">OUR STORY</p>
          <h2>A considered legal partner for the work ahead.</h2>
          <p>Sattva Law &amp; Associates was created around a simple idea: legal support should be clear, responsive and connected to the way a business actually operates.</p>
          <p>We work alongside founders, companies and regulated professionals on the documentation, registrations, filings and governance that let thoughtful work continue with confidence.</p>
        </div>
      </div>
      <div className="shell focus-ring-row" aria-label="Our areas of focus">
        {["Business foundation", "Ongoing governance", "Regulatory readiness", "Commercial clarity"].map((item, index) => <div className="focus-ring" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
      </div>
    </section>

    <section className="about-approach shell" id="approach">
      <div className="about-approach-heading">
        <div><p className="eyebrow">HOW WE WORK</p><h2>Built around<br />your <em>momentum.</em></h2></div>
        <p>Whether you are getting started, handling a complex requirement or planning the next stage of growth, we keep the legal work grounded and moving forward.</p>
      </div>
      <div className="about-approach-list">
        <article><span>01</span><h3>Understand the context</h3><p>We begin with the commercial and regulatory reality around your decision, not a one-size-fits-all checklist.</p></article>
        <article><span>02</span><h3>Make the path clear</h3><p>We translate requirements into practical next steps, with clear documents, ownership and timelines.</p></article>
        <article><span>03</span><h3>Stay close to the work</h3><p>We remain responsive as the detail changes, helping you move from one decision to the next with confidence.</p></article>
      </div>
      <a className="text-link about-approach-link" href="#contact">Start a conversation <span>&rarr;</span></a>
    </section>

    <section className="about-team shell" id="team">
      <div className="about-team-heading"><div><p className="eyebrow">OUR TEAM</p><h2>The people behind the work.</h2></div><p>Individual profiles will be added here as the team is introduced.</p><a className="text-link" href="#contact">Connect with us <span>→</span></a></div>
      <p className="about-team-note">Individual team profiles will be introduced as they become available.</p>
    </section>

    <section className="about-practice-focus" id="focus">
      <div className="shell"><div className="practice-focus-list"><div><span className="practice-focus-icon"><Scale size={31} strokeWidth={1.35} aria-hidden="true" /></span><p>Business law</p></div><div><span className="practice-focus-icon"><ShieldCheck size={31} strokeWidth={1.35} aria-hidden="true" /></span><p>Regulatory practice</p></div><div><span className="practice-focus-icon"><Building2 size={31} strokeWidth={1.35} aria-hidden="true" /></span><p>Corporate governance</p></div></div><a className="button button-light" href="/#expertise">Explore practice areas <ArrowDownRight size={17} /></a></div>
    </section>

    <SiteFooter />
  </main>;
}
