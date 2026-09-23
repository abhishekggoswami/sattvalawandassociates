"use client";

import { ArrowDownRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import LineSidebar from "../../components/LineSidebar";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { servicePages as services } from "../../lib/services";

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
        <article className="service-detail" key={service.title} aria-live="polite"><div className="service-detail-top"><span>{String(selected + 1).padStart(2, "0")}</span><p>{service.intro}</p></div><h2>{service.title}</h2><p className="service-detail-copy">{service.detail}</p><ul>{service.items.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul><a className="button button-dark" href={`/services/${service.slug}`}>View service details <ArrowDownRight size={17} /></a></article>
      </div>
    </section>

    <section className="services-cta" id="service-enquiry"><div className="shell"><p className="eyebrow light">NEXT STEP</p><h2>Let&apos;s discuss what<br />your business <em>needs now.</em></h2><p>Share a brief outline of the matter. We will respond with the appropriate next step.</p><a className="button button-light" href="mailto:sattvalawandassociates@gmail.com">Start an enquiry <ArrowDownRight size={17} /></a></div></section>

    <SiteFooter />
  </main>;
}
