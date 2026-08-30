"use client";

import { ArrowDownRight, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

const reflections = [
  { image: "/images/sattva/testimonial-client-1.jpg", text: "The process felt organised from the outset. We had a clearer view of what needed to be completed, and when.", name: "Aditi S.", role: "Founder · sample testimonial" },
  { image: "/images/sattva/testimonial-client-2.jpg", text: "The guidance was direct and practical. It made the documentation and compliance work easier for our team to work through.", name: "Rahul M.", role: "Business owner · sample testimonial" },
  { image: "/images/sattva/testimonial-client-3.jpg", text: "We appreciated the considered approach to each step. The work stayed clear, responsive and connected to our business needs.", name: "Vikram P.", role: "Director · sample testimonial" },
];

export default function TestimonialsPage() {
  const [active, setActive] = useState(0);
  const reflection = reflections[active];
  const previous = reflections[(active - 1 + reflections.length) % reflections.length];
  const next = reflections[(active + 1) % reflections.length];
  const change = (direction: -1 | 1) => setActive((current) => (current + direction + reflections.length) % reflections.length);

  return <main>
    <SiteHeader />
    <section className="hero testimonials-hero">
      <div className="hero-slides" aria-hidden="true"><div className="hero-slide is-active" style={{ backgroundImage: "url('/images/sattva/testimonials-hero.jpg')" }} /></div>
      <div className="hero-shade" />
      <div className="hero-content shell"><div className="hero-copy-set testimonials-hero-copy"><p className="eyebrow light"><em>Client perspectives</em> <i /> Sattva Law &amp; Associates</p><h1>Reflections on<br /><em>the work.</em></h1><div className="hero-actions"><a className="button button-light" href="#reflections">View reflections <ArrowDownRight size={17} /></a></div></div></div>
      <div className="hero-rail">BUSINESS LAW · REGULATORY PRACTICE · CORPORATE GOVERNANCE</div>
    </section>

    <section className="testimonials-section" id="reflections"><div className="testimonials-content">
      <div className="testimonials-heading">
        <div>
          <p className="eyebrow">CLIENT TESTIMONIALS</p>
          <h2>Client <em>testimonials.</em></h2>
        </div>
      </div>
      <p className="testimonials-intro">Reflections from clients are shared selectively and only where publication has been approved. Each perspective is presented with space to make the experience behind the work clear and easy to read.</p>

      <div className="testimonial-stage">
        <button className="testimonial-preview testimonial-preview-left" type="button" aria-label="Previous testimonial" onClick={() => change(-1)}><img src={previous.image} alt="Temporary client profile" /><span><ArrowLeft size={19} /></span></button>
        <figure className="testimonial-feature-image"><img src={reflection.image} alt="Temporary client profile" /></figure>
        <article className="testimonial-quote" key={active}><Quote size={39} strokeWidth={2} /><p>“{reflection.text}”</p><div><strong>{reflection.name}</strong><small>{reflection.role}</small></div></article>
        <button className="testimonial-preview testimonial-preview-right" type="button" aria-label="Next testimonial" onClick={() => change(1)}><img src={next.image} alt="Temporary client profile" /><span><ArrowRight size={19} /></span></button>
      </div>
      <div className="testimonial-controls"><div>{reflections.map((_, index) => <button type="button" key={index} aria-label={`Show testimonial ${index + 1}`} className={index === active ? "is-active" : ""} onClick={() => setActive(index)} />)}</div></div>
      <div className="testimonials-closing"><div><p className="eyebrow">A THOUGHTFUL PARTNERSHIP</p><p>Every matter is different, but the standard remains the same: clear communication, careful preparation and practical support from the first question to the next decision.</p></div><a className="text-link" href="/contact">Start a conversation <span>→</span></a></div>
    </div></section>

    <section className="testimonials-cta"><div className="shell"><p className="eyebrow light">START A CONVERSATION</p><h2>Let&apos;s make the<br /><em>next step clear.</em></h2><p>Tell us about the legal or compliance work in front of you. We will respond with an appropriate next step.</p><a className="button button-light" href="mailto:hello@sattvalaw.in">Get in touch <ArrowDownRight size={17} /></a></div></section>

    <SiteFooter />
  </main>;
}
