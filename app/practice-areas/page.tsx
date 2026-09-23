import { ArrowDownRight, ArrowUpRight, BadgeCheck, BriefcaseBusiness, Building2, Check, FileCheck2, Landmark, Scale, ShieldCheck } from "lucide-react";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { heroTitleClass } from "../../lib/hero-title";

const pexelsPhoto = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

const areas = [
  ["Private limited companies", "A versatile company route for founders building a team, defining ownership or preparing for future investment.", "/practice-areas/private-limited-company", 36733322, Building2],
  ["Limited liability partnerships", "A practical framework for partners who want to define contribution, authority and day-to-day responsibilities clearly.", "/practice-areas/limited-liability-partnership", 7971345, Landmark],
  ["One person companies", "A focused company structure for an individual founder, with nominee and early governance steps considered from the start.", "/practice-areas/one-person-company", 29284301, BadgeCheck],
  ["Section 8 companies", "A purpose-led company route for not-for-profit work, shaped around clear objects, governance and compliance foundations.", "/practice-areas/section-8-company", 7691662, ShieldCheck],
  ["Foreign subsidiaries", "An Indian company base for cross-border growth, where incorporation and foreign-investment planning move together.", "/practice-areas/foreign-subsidiary", 33692749, Scale],
  ["Corporate & commercial law", "Practical legal support for the decisions, structures and commercial relationships behind a growing business.", "/practice-areas/corporate-commercial-law", 4342498, BriefcaseBusiness],
  ["Corporate governance & secretarial matters", "A dependable framework for the records, meetings and obligations that support responsible company administration.", "/practice-areas/corporate-governance-secretarial-matters", 18999158, FileCheck2],
  ["Commercial contracts & documentation", "Clear documentation that helps each party understand the terms of a working relationship from the outset.", "/practice-areas/commercial-contracts-documentation", 7681077, FileCheck2],
  ["SEBI regulatory practice", "Focused support for regulated professionals navigating registration, operating requirements and ongoing compliance.", "/practice-areas/sebi-regulatory-practice", 7172827, ShieldCheck],
  ["Research analyst registration", "Structured support from early readiness review through registration materials and the compliance framework that follows.", "/practice-areas/research-analyst-registration", 9301509, BadgeCheck],
  ["Investment adviser registration", "Practical support for launching an advisory practice with a considered client-onboarding and compliance foundation.", "/practice-areas/investment-adviser-registration", 36733421, Landmark],
  ["Investment Adviser & Research Analyst registration", "Considered support for IA and RA registration, compliance setup and ongoing regulatory readiness.", "/practice-areas/investment-advisory-research-regulation", 7433848, Scale],
  ["FEMA, FCGPR & FCTRS filings", "Structured support for foreign-investment reporting and the filings that accompany cross-border corporate activity.", "/practice-areas/fema-fcgpr-fctrs-filings", 26892448, FileCheck2],
  ["Startup, funding & growth advisory", "Legal support for funding, governance and strategic decisions through the next stage of business growth.", "/practice-areas/startup-funding-growth-advisory", 7163378, BriefcaseBusiness],
] as const;

// The incorporation and RA practice directories carry their own specialist routes.
// This overview intentionally keeps only the practice areas not represented there or in Capabilities.
const standalonePracticeAreas = areas.filter(([, , href]) => [
  "/practice-areas/corporate-commercial-law",
  "/practice-areas/corporate-governance-secretarial-matters",
  "/practice-areas/fema-fcgpr-fctrs-filings",
].includes(href));

export default function PracticeAreasPage() {
  return <main className="company-incorporation-page practice-areas-overview-page">
    <SiteHeader />
    <section className="hero practice-hero company-incorporation-hero">
      <div className="hero-slides" aria-hidden="true"><div className="hero-slide is-active" style={{ backgroundImage: "url('/images/sattva/practice-areas-hero.jpg')" }} /></div>
      <div className="hero-shade" />
      <div className="hero-content shell"><div className="hero-copy-set practice-hero-copy"><p className="eyebrow light"><em>Practice areas</em> <i /> Sattva Law &amp; Associates</p><h1 className={heroTitleClass("Legal focus for each stage of business")}>Legal focus for each stage of business</h1><div className="hero-actions"><a className="button button-light" href="#practice-areas-directory">Explore practice areas <ArrowDownRight size={17} /></a></div></div></div>
      <div className="hero-rail">BUSINESS LAW &middot; REGULATORY PRACTICE &middot; CORPORATE GOVERNANCE</div>
    </section>

    <section className="company-incorporation-intro"><div className="shell">
      <div><p className="eyebrow">WHERE WE FOCUS</p><h2><span>Practical counsel for</span><br /><em>the decisions that count.</em></h2></div>
      <div><p>Company incorporation, RA practice and core capabilities each have their own dedicated directories. This page brings together the distinct areas that sit alongside those specialist routes.</p><p>Each area below has its own detailed page, outlining the way we approach the work and the support that can be tailored to your circumstances.</p></div>
    </div></section>

    <section className="company-route-directory" id="practice-areas-directory"><div className="shell">
      <header className="company-route-heading"><p className="eyebrow">PRACTICE AREAS</p><h2>Specialist support,<br /><em>made practical.</em></h2><p>Explore the distinct areas where business law, governance and regulatory work come together in the day-to-day decisions of a growing organisation.</p></header>
      <div className="company-route-grid">{standalonePracticeAreas.map(([title, copy, href, imageId, Icon], index) => <article className="company-route-card" key={href}>
        <div className="company-route-image" style={{ backgroundImage: `url(${pexelsPhoto(imageId)})` }}><span>{String(index + 1).padStart(2, "0")}</span></div>
        <div className="company-route-card-body"><div className="company-route-card-marker"><Icon size={21} strokeWidth={1.35} aria-hidden="true" /><span>PRACTICE AREAS</span></div><h3>{title}</h3><p>{copy}</p><a href={href}>Explore this area <ArrowDownRight size={17} /></a></div>
      </article>)}</div>
    </div></section>

    <section className="company-incorporation-framework"><div className="shell">
      <div><p className="eyebrow light">WORKING WITH SATTVA</p><h2>The right legal lens<br /><em>at the right moment.</em></h2></div>
      <div className="company-framework-list"><p>We bring the relevant legal and regulatory questions into focus, then build a practical route around the action you need to take.</p><ul><li><Check size={16} />A clear starting view of the decision, documents and responsibilities involved</li><li><Check size={16} />Advice that connects commercial intent with the legal and regulatory position</li><li><Check size={16} />A focused next-step plan, with the records and follow-through kept visible</li></ul><a href="/contact" className="button button-light">Start a conversation <ArrowUpRight size={17} /></a></div>
    </div></section>
    <SiteFooter />
  </main>;
}
