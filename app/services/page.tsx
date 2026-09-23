import { ArrowDownRight, ArrowUpRight, BadgeCheck, BriefcaseBusiness, Building2, Check, FileSignature, Landmark, Scale, ShieldCheck } from "lucide-react";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { heroTitleClass } from "../../lib/hero-title";
import { servicePages } from "../../lib/services";

const pexelsPhoto = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

const images = [
  pexelsPhoto(31786661), pexelsPhoto(22643598), pexelsPhoto(7971345), pexelsPhoto(4308164),
  pexelsPhoto(7681077), pexelsPhoto(36733421), pexelsPhoto(29284301),
];
const imageAlts = [
  "Indian professionals collaborating around a laptop", "Modern office architecture", "Team collaborating on documents and laptops", "Colleagues working with papers at a table", "Financial documents and graphs on a desk", "Professional team collaborating in a modern office", "Business team sharing ideas in an office",
];
const icons = [Building2, Landmark, FileSignature, BadgeCheck, ShieldCheck, Scale, BriefcaseBusiness];
const standaloneCapabilities = servicePages.filter(({ slug }) => slug === "business-formation" || slug === "contracts-documentation" || slug === "strategic-support");

export default function CapabilitiesPage() {
  return <main className="company-incorporation-page capabilities-overview-page">
    <SiteHeader />
    <section className="hero practice-hero company-incorporation-hero">
      <div className="hero-slides" aria-hidden="true"><div className="hero-slide is-active" style={{ backgroundImage: "url('/images/sattva/services-hero.jpg')" }} /></div>
      <div className="hero-shade" />
      <div className="hero-content shell"><div className="hero-copy-set practice-hero-copy"><p className="eyebrow light"><em>Capabilities</em> <i /> Sattva Law &amp; Associates</p><h1 className={heroTitleClass("Business support that moves with you")}>Business support that moves with you</h1><div className="hero-actions"><a className="button button-light" href="#capabilities-directory">Explore capabilities <ArrowDownRight size={17} /></a></div></div></div>
      <div className="hero-rail">BUSINESS LAW &middot; REGULATORY PRACTICE &middot; CORPORATE GOVERNANCE</div>
    </section>

    <section className="company-incorporation-intro"><div className="shell">
      <div><p className="eyebrow">PRACTICAL LEGAL SUPPORT</p><h2><span>Clarity for the</span><br /><em>work in front of you.</em></h2></div>
      <div><p>Business formation, contracts and strategic decisions often need legal support that brings structure to the work before it becomes a filing, transaction or operational change.</p><p>Explore each capability to see how we help make the next step more organised, proportionate and easier to move forward.</p></div>
    </div></section>

    <section className="company-route-directory" id="capabilities-directory"><div className="shell">
      <header className="company-route-heading"><p className="eyebrow">OUR CAPABILITIES</p><h2>Support that stays<br /><em>connected to the work.</em></h2><p>Every capability leads to a focused service page, with the scope, approach and useful starting points for that piece of work.</p></header>
      <div className="company-route-grid">{standaloneCapabilities.map((service) => { const index = servicePages.findIndex(({ slug }) => slug === service.slug); const Icon = icons[index]; return <article className="company-route-card" key={service.slug}>
        <div className="company-route-image" style={{ backgroundImage: `url(${images[index]})` }}><span>{String(index + 1).padStart(2, "0")}</span></div>
        <div className="company-route-card-body"><div className="company-route-card-marker"><Icon size={21} strokeWidth={1.35} aria-hidden="true" /><span>CAPABILITIES</span></div><h3>{service.title}</h3><p>{service.intro}</p><a href={`/services/${service.slug}`}>Explore this capability <ArrowDownRight size={17} /></a></div>
      </article>; })}</div>
    </div></section>

    <section className="company-incorporation-framework"><div className="shell">
      <div><p className="eyebrow light">A CONNECTED APPROACH</p><h2>One clear view of<br /><em>what needs to happen next.</em></h2></div>
      <div className="company-framework-list"><p>The right support is rarely just one isolated task. We help connect the decision, documentation and follow-through so the work remains clear throughout.</p><ul><li><Check size={16} />Advice shaped around the specific business, activity and point of change</li><li><Check size={16} />Documents, filings and practical next actions treated as one workstream</li><li><Check size={16} />Clear ownership and a dependable record for what follows</li></ul><a href="/contact" className="button button-light">Discuss your requirements <ArrowUpRight size={17} /></a></div>
    </div></section>
    <SiteFooter />
  </main>;
}
