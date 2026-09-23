import { ArrowDownRight, ArrowUpRight, Building2, Check, Landmark, Scale, ShieldCheck, UserRoundCheck } from "lucide-react";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { heroTitleClass } from "../../lib/hero-title";

const incorporationRoutes = [
  {
    title: "Private limited companies",
    copy: "A versatile company route for founders building a team, defining ownership or preparing for future investment.",
    href: "/practice-areas/private-limited-company",
    image: "/images/sattva/practice-areas/corporate-commercial-law.jpg",
    icon: Building2,
  },
  {
    title: "Limited liability partnerships",
    copy: "A practical framework for partners who want to set out contribution, authority and day-to-day responsibilities clearly.",
    href: "/practice-areas/limited-liability-partnership",
    image: "/images/sattva/practice-areas/commercial-contracts.jpg",
    icon: Landmark,
  },
  {
    title: "One person companies",
    copy: "A focused company structure for an individual founder, with nominee and early governance steps considered from the start.",
    href: "/practice-areas/one-person-company",
    image: "/images/sattva/practice-areas/startup-growth.jpg",
    icon: UserRoundCheck,
  },
  {
    title: "Section 8 companies",
    copy: "A purpose-led company route for not-for-profit work, shaped around clear objects, governance and compliance foundations.",
    href: "/practice-areas/section-8-company",
    image: "/images/sattva/practice-areas/corporate-governance.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Foreign subsidiaries",
    copy: "An Indian company base for cross-border growth, where incorporation and foreign-investment planning move together.",
    href: "/practice-areas/foreign-subsidiary",
    image: "/images/sattva/practice-areas/fema-filings.jpg",
    icon: Scale,
  },
] as const;

export default function CompanyIncorporationPage() {
  return <main className="company-incorporation-page">
    <SiteHeader />
    <section className="hero practice-hero company-incorporation-hero">
      <div className="hero-slides" aria-hidden="true"><div className="hero-slide is-active" style={{ backgroundImage: "url('/images/sattva/practice-areas-hero.jpg')" }} /></div>
      <div className="hero-shade" />
      <div className="hero-content shell"><div className="hero-copy-set practice-hero-copy"><p className="eyebrow light"><em>Company incorporation</em> <i /> Sattva Law &amp; Associates</p><h1 className={heroTitleClass("Company incorporation")}>Company incorporation</h1><div className="hero-actions"><a className="button button-light" href="#incorporation-routes">Explore the routes <ArrowDownRight size={17} /></a></div></div></div>
      <div className="hero-rail">BUSINESS LAW &middot; COMPANY FORMATION &middot; CORPORATE GOVERNANCE</div>
    </section>

    <section className="company-route-directory" id="incorporation-routes"><div className="shell">
      <header className="company-route-heading"><p className="eyebrow">FIVE INCORPORATION ROUTES</p><h2>Choose the structure<br /><em>that fits the work ahead.</em></h2><p>Each route has its own detailed page, covering how the work starts, the documents and decisions involved, and the compliance actions that follow.</p></header>
      <div className="company-route-grid">{incorporationRoutes.map((route, index) => { const Icon = route.icon; return <article className="company-route-card" key={route.title}>
        <div className="company-route-image" style={{ backgroundImage: `url(${route.image})` }}><span>0{index + 1}</span></div>
        <div className="company-route-card-body"><div className="company-route-card-marker"><Icon size={21} strokeWidth={1.35} aria-hidden="true" /><span>COMPANY FORMATION</span></div><h3>{route.title}</h3><p>{route.copy}</p><a href={route.href}>Explore this structure <ArrowDownRight size={17} /></a></div>
      </article>; })}</div>
    </div></section>

    <section className="company-incorporation-framework"><div className="shell">
      <div><p className="eyebrow light">A CLEAR PROCESS</p><h2>Thoughtful at the start.<br /><em>Orderly after incorporation.</em></h2></div>
      <div className="company-framework-list"><p>Whatever structure you choose, the work is planned around the decisions that make it usable from day one.</p><ul><li><Check size={16} />Ownership, management and purpose considered before documents are prepared</li><li><Check size={16} />Incorporation inputs, consents and filings coordinated in a clear workstream</li><li><Check size={16} />First records, decisions and compliance actions mapped after registration</li></ul><a href="/contact" className="button button-light">Discuss your plans <ArrowUpRight size={17} /></a></div>
    </div></section>
    <SiteFooter />
  </main>;
}
