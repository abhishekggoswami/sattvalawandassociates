import { ArrowDownRight, ArrowUpRight, BadgeCheck, Check, ClipboardCheck, FileCheck2, Landmark, Scale, ShieldCheck } from "lucide-react";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { heroTitleClass } from "../../lib/hero-title";

const raPracticeRoutes = [
  { title: "SEBI registration & compliance setup", copy: "A considered starting framework for regulated activity, registration inputs and the first operating controls.", href: "/services/sebi-compliance", image: "/images/sattva/practice-areas/sebi-regulatory.jpg", icon: ShieldCheck },
  { title: "SEBI regulatory practice", copy: "Practical support for the regulatory questions, documentation and ongoing discipline behind a growing practice.", href: "/practice-areas/sebi-regulatory-practice", image: "/images/sattva/practice-areas/sebi-regulatory.jpg", icon: Landmark },
  { title: "Investment adviser registration", copy: "Build a client-focused advisory practice around readiness, suitability, documentation and a clear compliance rhythm.", href: "/practice-areas/investment-adviser-registration", image: "/images/sattva/practice-areas/investment-advisory.jpg", icon: BadgeCheck },
  { title: "Research analyst registration", copy: "Prepare the registration route and the disclosure, research and record-keeping foundation that supports it.", href: "/practice-areas/research-analyst-registration", image: "/images/sattva/practice-areas/sebi-regulatory.jpg", icon: FileCheck2 },
  { title: "Audit readiness & regulatory filings", copy: "Keep records, policies, review points and filing actions organised before an audit or regulatory milestone arrives.", href: "/services/audit-readiness", image: "/images/sattva/practice-areas/corporate-governance.jpg", icon: ClipboardCheck },
  { title: "Annual and ongoing compliance", copy: "Create a dependable annual rhythm for recurring obligations, evidence trails and changes that need attention.", href: "/services/annual-compliance", image: "/images/sattva/practice-areas/corporate-governance.jpg", icon: Check },
  { title: "Registrations & operating licences", copy: "Identify and coordinate the practical registrations that support a compliant launch and day-to-day operation.", href: "/services/registrations-licences", image: "/images/sattva/practice-areas/startup-growth.jpg", icon: Scale },
] as const;

export default function RaPracticePage() {
  return <main className="company-incorporation-page ra-practice-page">
    <SiteHeader />
    <section className="hero practice-hero company-incorporation-hero">
      <div className="hero-slides" aria-hidden="true"><div className="hero-slide is-active" style={{ backgroundImage: "url('/images/sattva/practice-areas-hero.jpg')" }} /></div>
      <div className="hero-shade" />
      <div className="hero-content shell"><div className="hero-copy-set practice-hero-copy"><p className="eyebrow light"><em>RA Practice</em> <i /> Sattva Law &amp; Associates</p><h1 className={heroTitleClass("IA / RA registration")}>IA / RA registration</h1><div className="hero-actions"><a className="button button-light" href="#ra-practice-services">Explore the services <ArrowDownRight size={17} /></a></div></div></div>
      <div className="hero-rail">SEBI REGULATORY PRACTICE &middot; REGISTRATION &middot; COMPLIANCE</div>
    </section>

    <section className="company-incorporation-intro"><div className="shell">
      <div><p className="eyebrow">BUILD A REGULATED PRACTICE</p><h2><span>Start with a clear</span><br /><em>regulatory foundation.</em></h2></div>
      <div><p>Investment-advisory and research-analyst work needs more than an application. The registration route, documents, operating model and ongoing controls need to tell one consistent story.</p><p>We help bring those decisions into a practical sequence, from the earliest readiness questions to the records and review points that support the practice after registration.</p></div>
    </div></section>

    <section className="company-route-directory" id="ra-practice-services"><div className="shell">
      <header><p className="eyebrow">RA PRACTICE SERVICES</p><p>Explore the registration, compliance and operational support available at each stage of an investment-advisory or research-analyst practice.</p></header>
      <div className="company-route-grid">{raPracticeRoutes.map((route, index) => { const Icon = route.icon; return <article className="company-route-card" key={route.title}>
        <div className="company-route-image" style={{ backgroundImage: `url(${route.image})` }}><span>0{index + 1}</span></div>
        <div className="company-route-card-body"><div className="company-route-card-marker"><Icon size={21} strokeWidth={1.35} aria-hidden="true" /><span>RA PRACTICE</span></div><h3>{route.title}</h3><p>{route.copy}</p><a href={route.href}>Explore this service <ArrowDownRight size={17} /></a></div>
      </article>; })}</div>
    </div></section>

    <section className="company-incorporation-framework"><div className="shell">
      <div><p className="eyebrow light">A DISCIPLINED START</p><h2>Registration is only<br /><em>the first milestone.</em></h2></div>
      <div className="company-framework-list"><p>The work is designed around a practice that can operate with clarity after registration—not only a filing at the point of application.</p><ul><li><Check size={16} />The proposed activity, client journey and responsibilities considered from the outset</li><li><Check size={16} />Application materials, policies and disclosures prepared as one connected workstream</li><li><Check size={16} />Records, reviews and recurring compliance actions mapped for the practice ahead</li></ul><a href="/contact" className="button button-light">Discuss your requirements <ArrowUpRight size={17} /></a></div>
    </div></section>
    <SiteFooter />
  </main>;
}
