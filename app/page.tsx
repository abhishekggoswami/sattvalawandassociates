"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, BadgeCheck, BriefcaseBusiness, Building2, Check, ChevronLeft, ChevronRight, FileSignature, Instagram, Landmark, Mail, MapPin, Phone, Scale, Send } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { articles } from "../lib/articles";

const services = [
  { icon: Building2, title: "Business registration", description: "Thoughtful support at the point your enterprise takes shape.", items: ["Private limited companies", "Limited liability partnerships", "One person companies", "Section 8 companies", "Foreign subsidiaries"] },
  { icon: Landmark, title: "Filings & compliance", description: "A reliable rhythm for essential statutory responsibilities.", items: ["GST registration", "Annual ROC & LLP filings", "DIR-3 KYC", "Ongoing company retainership"] },
  { icon: FileSignature, title: "Contracts & drafting", description: "Clear paperwork that reflects the understanding behind a deal.", items: ["Founder & shareholder agreements", "Employment & vendor agreements", "Partnership & franchise agreements", "NDAs & lease documentation"] },
  { icon: BadgeCheck, title: "Licences & registrations", description: "Practical help navigating registrations needed for operations.", items: ["IEC & MSME (Udyam)", "Startup India registration", "Shop & Establishment licence", "12A & 80G registration"] },
  { icon: Scale, title: "SEBI practice support", description: "Process-led assistance for regulated investment professionals.", items: ["Research analyst registration", "Investment adviser registration", "One-time compliance setup", "RA & IA audit readiness"] },
  { icon: BriefcaseBusiness, title: "Strategic assistance", description: "A considered legal perspective when your business is moving forward.", items: ["FEMA reporting: FCGPR & FCTRS", "Funding-readiness guidance", "Board meeting assistance", "Company conversions & secretarial work"] },
];

const navMenu = [
  { label: "Home", target: "#home" },
  { label: "About", target: "/about" },
  { label: "Blog", target: "/blog" },
  { label: "Testimonials", target: "/testimonials" },
  { label: "Capabilities", target: "/services" },
  { label: "Practice Areas", target: "#expertise" },
];

const heroSlides = [
  { image: "/images/sattva/hero/courthouse-corner.jpg", eyebrow: "Corporate & commercial counsel", title: <>Build on a sound<br />legal <em>foundation.</em></>, copy: "Considered support for business formation, structure and the decisions that shape your company from day one." },
  { image: "/images/sattva/hero/courthouse-front.jpg", eyebrow: "Compliance & governance", title: <>Keep every obligation<br />in <em>clear view.</em></>, copy: "A dependable approach to annual filings, company records and the day-to-day responsibilities of running a business." },
  { image: "/images/sattva/hero/justice-relief.jpg", eyebrow: "SEBI & regulatory practice", title: <>Rigour for every<br /><em>regulated</em> decision.</>, copy: "Practical registration, compliance and audit-readiness support for research analysts and investment advisers." },
  { image: "/images/sattva/hero/law-library.jpg", eyebrow: "Contracts & documentation", title: <>Clarity in the details<br />that <em>matter most.</em></>, copy: "Well-considered agreements and documentation that help commercial relationships begin on common ground." },
];

const commitments = [
  { title: "Experienced guidance", copy: "Calm, commercially aware support for company-law, contracts and regulatory questions." },
  { title: "Direct personal support", copy: "A clear point of contact, an agreed workplan and updates that keep the next step visible." },
  { title: "Careful representation", copy: "Documents, filings and communications prepared with attention to the detail behind the decision." },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const subscribe = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (email.trim()) setSubscribed(true); };
  const submitContact = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 11000);
    return () => window.clearInterval(timer);
  }, []);
  const changeSlide = (direction: -1 | 1) => setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  return <main id="home">
    <SiteHeader />
    <section className="hero">
      <div className="hero-slides" aria-hidden="true">{heroSlides.map((slide, index) => <div key={slide.image} className={`hero-slide ${index === activeSlide ? "is-active" : ""}`} style={{ backgroundImage: `url(${slide.image})` }} />)}</div><div className="hero-shade" key={activeSlide} />
      <div className="hero-content shell"><div className="hero-copy-set" key={activeSlide}><p className="eyebrow light"><em>{heroSlides[activeSlide].eyebrow}</em> <i /> Sattva Law & Associates</p><h1>{heroSlides[activeSlide].title}</h1><div className="hero-actions"><a className="button button-light" href="/services">Explore our services <ArrowDownRight size={17} /></a></div></div></div>
      <div className="hero-mobile-meta" aria-hidden="true"><span>{String(activeSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}</span><span>Sattva Law &amp; Associates</span></div>
      <div className="hero-slider-controls"><button type="button" onClick={() => changeSlide(-1)} aria-label="Previous slide"><ChevronLeft size={17} /></button><div>{heroSlides.map((slide, index) => <button key={slide.image} type="button" className={index === activeSlide ? "is-active" : ""} onClick={() => setActiveSlide(index)} aria-label={`Show slide ${index + 1}`} />)}</div><button type="button" onClick={() => changeSlide(1)} aria-label="Next slide"><ChevronRight size={17} /></button></div>
      <div className="hero-rail">BUSINESS LAW · REGULATORY PRACTICE · CORPORATE GOVERNANCE</div>
    </section>
    <section className="featured-services" id="featured-services"><div className="shell">
      <div className="featured-services-heading"><div><p className="eyebrow">FEATURED SERVICES</p><h2>Start with the right<br /><em>foundation.</em></h2></div><p>Our most-requested support brings clarity to the first steps of building a business or regulated practice.</p></div>
      <div className="featured-services-grid">
        <article className="gateway-card gateway-card-incorporation"><div className="gateway-card-image" style={{ backgroundImage: "url('/images/sattva/practice-areas/corporate-commercial-law.jpg')" }} /><div className="gateway-card-body"><div className="gateway-card-meta"><span>01</span><p>Company incorporation</p></div><h3>Build the right<br /><em>starting point.</em></h3><p>Choose a company structure with the ownership, records and early compliance work considered together.</p><div className="gateway-card-links"><a href="/company-incorporation">Explore all incorporation routes <ArrowDownRight size={17} /></a><span>Private limited · LLP · OPC · Section 8 · Foreign subsidiary</span></div></div></article>
        <article className="gateway-card gateway-card-regulatory"><div className="gateway-card-image" style={{ backgroundImage: "url('/images/sattva/practice-areas/investment-advisory.jpg')" }} /><div className="gateway-card-body"><div className="gateway-card-meta"><span>02</span><p>IA / RA registration</p></div><h3>Bring discipline<br />to <em>regulated work.</em></h3><p>Practical support for investment advisers and research analysts, from registration to the systems that follow.</p><div className="gateway-card-links"><a href="/ra-practice">Explore IA / RA services <ArrowDownRight size={17} /></a><span>Registration · Compliance setup · Audit readiness</span></div></div></article>
      </div>
    </div></section>
    <section className="service-section" id="services"><div className="shell"><div className="section-heading"><div><p className="eyebrow">OUR PRACTICE AREAS</p><h2>Services shaped<br />around your <em>business.</em></h2></div><p>From incorporation through everyday compliance and specialised regulatory work, our support is precise, practical and personal.</p></div><div className="service-grid">{services.map(({ icon: Icon, title, description, items }, index) => <article className="service-card" key={title}><div className="service-top"><span>0{index + 1}</span><span className="service-icon"><Icon size={38} strokeWidth={1.35} /></span></div><h3>{title}</h3><p>{description}</p><ul>{items.map((item) => <li key={item}><Check size={13} strokeWidth={1.8} />{item}</li>)}</ul><a className="service-card-cta" href={`/services#service-selector`}>Enquire now <ArrowDownRight size={16} /></a></article>)}</div></div></section>
    <section className="sebi-section" id="expertise"><div className="sebi-image" /><div className="sebi-copy"><p className="eyebrow light">SPECIALIST FOCUS</p><h2>For research analysts, <em>rigour is essential.</em></h2><p>SEBI&apos;s framework calls for more than a registration. It calls for a clear operating practice. We help research analysts and investment advisers establish the processes, documentation and ongoing discipline their work requires.</p><a href="#contact" className="button button-outline">Discuss your requirements <ArrowUpRight size={17} /></a></div></section>
    <section className="practice-bridge"><div className="shell"><div><p className="eyebrow">A CONSIDERED APPROACH</p><h2>Clear systems leave room for <em>better decisions.</em></h2></div><div className="practice-bridge-copy"><p>We bring structure to the work behind a regulated practice, so each requirement has a clear owner, process and place.</p><div className="practice-bridge-steps" aria-label="Our approach"><span>01&nbsp; Understand</span><span>02&nbsp; Structure</span><span>03&nbsp; Sustain</span></div></div></div></section>
    <section className="commitment-section"><div className="shell"><div className="commitment-opening"><div><p className="eyebrow light">OUR COMMITMENT</p><h2>Measured advice.<br /><em>Meaningful support.</em></h2></div><div className="commitment-mark" aria-hidden="true"><span>S</span><i>01</i></div></div><div className="commitment-principles">{commitments.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div className="commitment-rule" /><h3>{item.title}</h3><p>{item.copy}</p><i aria-hidden="true">→</i></article>)}</div><div className="commitment-closing"><p className="eyebrow">HOW WE WORK</p><p>Every engagement starts with context: the business, the decision and the outcome that matters. We then define a proportionate scope, the information needed and the clearest route forward.</p></div></div></section>
    <section className="insights shell" id="insights"><div className="section-heading compact"><div><p className="eyebrow">KNOWLEDGE CENTRE</p><h2>Notes from the<br /><em>practice.</em></h2></div><a href="#contact" className="text-link">Subscribe for updates <span>→</span></a></div><div className="insight-grid">{articles.map((article) => <article key={article.slug}><a className="insight-card-link" href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`} /><div className="insight-image" style={{ backgroundImage: `url(${article.image})` }} /><small>{article.category} · {article.read}</small><h3>{article.title}</h3><a href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`}><ArrowUpRight /></a></article>)}</div></section>
    <section className="clients shell" id="testimonials"><p className="eyebrow centered">BUSINESSES WE HAVE SUPPORTED</p><div className="client-row"><img src="/images/sattva/money-ventures.png" alt="Money Ventures Research" /><div className="client-logo-slot client-logo-slot-vest-eq"><img src="/images/sattva/client-logos/vest-eq-black-text-v3.png" alt="VestEQ" /></div><div className="client-logo-slot client-logo-slot-rajesh"><img src="/images/sattva/client-logos/rajesh-chaurasia-transparent.png" alt="Rajesh Chaurasia" /></div><div className="client-logo-slot" aria-hidden="true" /></div></section>
    <section className="newsletter shell"><div><p className="eyebrow light">STAY INFORMED</p><h2>Compliance updates,<br /><em>without the noise.</em></h2></div><form onSubmit={subscribe}><label htmlFor="newsletter-email">Email address</label><div><input id="newsletter-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" required /><button type="submit">{subscribed ? "Thank you" : "Subscribe"} <Send size={15} /></button></div><p>{subscribed ? "You are on the list." : "Occasional, relevant updates. You can opt out at any time."}</p></form></section>
    <section className="contact-section shell" id="contact"><div className="contact-info"><p className="eyebrow">CONTACT</p><h2>Let&apos;s start a<br /><em>conversation.</em></h2><p>Tell us a little about what you need. We will come back to you with the right next step.</p><a href="mailto:sattvalawandassociates@gmail.com"><Mail size={17} />sattvalawandassociates@gmail.com</a><a href="tel:+919832350411"><Phone size={17} />+91 9832350411</a><span><MapPin size={17} />India</span></div><form className="contact-form" onSubmit={submitContact}><div className="two-fields"><label>Name<input required placeholder="Your name" /></label><label>Email address<input required type="email" placeholder="Enter your email address" /></label></div><div className="two-fields"><label>Phone<input placeholder="Your contact number" /></label><label>Subject<input placeholder="How can we assist?" /></label></div><label>Message<textarea required placeholder="Share a brief outline of your requirement" rows={4} /></label><div className="form-bottom"><button type="submit" className="button button-dark">{sent ? "Message received" : "Send enquiry"} <Send size={16} /></button><p>By sending this form, you agree that we may use the information to respond to your enquiry.</p></div></form></section>
    <SiteFooter />
  </main>;
}
