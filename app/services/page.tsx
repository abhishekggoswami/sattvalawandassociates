"use client";

import { ArrowDownRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import LineSidebar from "../../components/LineSidebar";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

const services = [
  {
    slug: "business-formation",
    label: "Business formation",
    title: "Business formation & structuring",
    intro: "Thoughtful support at the point your enterprise takes shape.",
    detail: "Choosing the appropriate structure at the outset helps create a practical foundation for the work ahead. We assist with the registration process and the supporting steps needed to get a business established.",
    items: ["Private limited company registration", "Limited liability partnership registration", "One person company registration", "Foreign subsidiary and Section 8 company registration"],
  },
  {
    slug: "registrations-licences",
    label: "Registrations & licences",
    title: "Licences & registrations",
    intro: "Practical help navigating registrations needed for operations.",
    detail: "Operating requirements vary by business and location. We help identify the registrations relevant to the activity in question and support the application and documentation process.",
    items: ["IEC and MSME (Udyam) registration", "Startup India registration", "Shop and Establishment licence", "12A and 80G registration"],
  },
  {
    slug: "annual-compliance",
    label: "Annual compliance",
    title: "Filings & compliance",
    intro: "A reliable rhythm for essential statutory responsibilities.",
    detail: "Regular filings and company records need a clear process. We help businesses organise ongoing statutory work so due dates, records and annual requirements remain visible and manageable.",
    items: ["GST registration", "Annual ROC and LLP filings", "DIR-3 KYC filing", "Ongoing company compliance support"],
  },
  {
    slug: "contracts-documentation",
    label: "Contracts",
    title: "Contracts & drafting",
    intro: "Clear paperwork that reflects the understanding behind a deal.",
    detail: "Well-considered documentation can make commercial relationships easier to navigate. We prepare and review practical agreements that set out the terms, responsibilities and expectations involved.",
    items: ["Founder and shareholder agreements", "Employment and vendor agreements", "Partnership and franchise agreements", "Non-disclosure and lease documentation"],
  },
  {
    slug: "sebi-compliance",
    label: "SEBI compliance",
    title: "SEBI registration & compliance",
    intro: "Process-led assistance for regulated investment professionals.",
    detail: "For research analysts and investment advisers, registration is only part of the picture. We support the documentation, setup and compliance steps required to establish a disciplined regulatory practice.",
    items: ["Research analyst registration", "Investment adviser registration", "One-time compliance setup", "RA and IA audit readiness"],
  },
  {
    slug: "audit-readiness",
    label: "Audit readiness",
    title: "Audit readiness & regulatory filings",
    intro: "Measured preparation for regulatory reviews and ongoing filing obligations.",
    detail: "A clear audit trail and reliable filing process can reduce uncertainty around regulated work. We help organise records, review key compliance materials and coordinate filing steps that need careful follow-through.",
    items: ["RA and IA audit readiness", "Compliance process review", "FCGPR and FCTRS filing support", "Coordination with authorised dealer banks"],
  },
  {
    slug: "strategic-support",
    label: "Strategic support",
    title: "Board, funding & strategic support",
    intro: "A considered legal perspective when your business is moving forward.",
    detail: "Some business decisions need legal work that extends beyond one form or filing. We provide focused support around funding, reporting, board processes and the documentation that accompanies change.",
    items: ["FEMA reporting: FCGPR and FCTRS", "Funding-readiness guidance", "Board meeting assistance", "Company conversions and secretarial work"],
  },
];

export default function ServicesPage() {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    const selectServiceFromUrl = () => {
      const requestedService = new URLSearchParams(window.location.search).get("service");
      const requestedIndex = services.findIndex(({ slug }) => slug === requestedService);
      setSelected(requestedIndex >= 0 ? requestedIndex : 0);
    };
    selectServiceFromUrl();
    window.addEventListener("popstate", selectServiceFromUrl);
    return () => window.removeEventListener("popstate", selectServiceFromUrl);
  }, []);
  const service = services[selected];

  return <main>
    <SiteHeader />

    <section className="hero services-hero">
      <div className="hero-slides" aria-hidden="true"><div className="hero-slide is-active" style={{ backgroundImage: "url('/images/sattva/services-hero.jpg')" }} /></div>
      <div className="hero-shade" />
      <div className="hero-content shell"><div className="hero-copy-set services-hero-copy"><p className="eyebrow light"><em>Business &amp; compliance counsel</em> <i /> Sattva Law &amp; Associates</p><h1>Legal support for<br />each <em>stage</em> of business.</h1><div className="hero-actions"><a className="button button-light" href="#service-selector">Explore services <ArrowDownRight size={17} /></a></div></div></div>
      <div className="hero-rail">BUSINESS LAW · REGULATORY PRACTICE · CORPORATE GOVERNANCE</div>
    </section>

    <section className="services-selector shell" id="service-selector">
      <div className="services-selector-heading"><div><p className="eyebrow">OUR SERVICES</p><h2>Choose an area.<br /><em>See what it covers.</em></h2></div><p>Select a service from the list to view its scope and start an enquiry when you are ready.</p></div>
      <div className="services-selector-layout">
        <aside className="services-selector-rail"><p>EXPLORE SERVICES</p><LineSidebar items={services.map(({ label }) => label)} defaultActive={selected} fontSize={0.9} itemGap={19} markerLength={48} maxShift={22} proximityRadius={110} onItemClick={(index) => setSelected(index)} /></aside>
        <article className="service-detail" key={service.title} aria-live="polite"><div className="service-detail-top"><span>{String(selected + 1).padStart(2, "0")}</span><p>{service.intro}</p></div><h2>{service.title}</h2><p className="service-detail-copy">{service.detail}</p><ul>{service.items.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul><a className="button button-dark" href="#service-enquiry">Enquire about this service <ArrowDownRight size={17} /></a></article>
      </div>
    </section>

    <section className="services-cta" id="service-enquiry"><div className="shell"><p className="eyebrow light">NEXT STEP</p><h2>Let&apos;s discuss what<br />your business <em>needs now.</em></h2><p>Share a brief outline of the matter. We will respond with the appropriate next step.</p><a className="button button-light" href="mailto:hello@sattvalaw.in">Start an enquiry <ArrowDownRight size={17} /></a></div></section>

    <SiteFooter />
  </main>;
}
