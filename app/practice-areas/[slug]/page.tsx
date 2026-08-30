import { ArrowDownRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";

const practiceAreas = {
  "corporate-commercial-law": {
    eyebrow: "Corporate & commercial law", title: "Corporate & commercial law", image: "/images/sattva/practice-areas/corporate-commercial-law.jpg", imageAlt: "Colleagues in a business meeting",
    focusTitle: "A framework for", focusEmphasis: "business decisions.", workflow: ["Clarify the business structure", "Set out the commercial terms", "Coordinate the next actions"],
    lead: "Practical legal support for the decisions, structures and commercial relationships that sit behind a growing business.",
    body: ["Businesses need legal advice that understands both the immediate decision and the wider direction of travel. We support companies through the foundational corporate work that gives everyday operations a dependable base.", "From structuring a new venture to documenting a new relationship, we help keep the legal position clear, proportionate and connected to the commercial outcome you are working towards."],
    scope: ["Business structure and incorporation support", "Commercial arrangements and governance questions", "Routine corporate documentation", "Support through change, growth and new transactions"],
  },
  "corporate-governance-secretarial-matters": {
    eyebrow: "Corporate governance", title: "Corporate governance & secretarial matters", image: "/images/sattva/practice-areas/corporate-governance.jpg", imageAlt: "Team gathered around a meeting table",
    focusTitle: "Governance that keeps", focusEmphasis: "the work in order.", workflow: ["Map the relevant obligations", "Prepare records and resolutions", "Support the meeting cycle"],
    lead: "A dependable framework for the records, meetings and obligations that support responsible company administration.",
    body: ["Good governance is not just about meeting a deadline. It is a working record of how a company makes decisions, keeps its commitments visible and maintains confidence with its stakeholders.", "We help bring order to the recurring and event-based work behind company administration, so that records, resolutions and filings are ready when they are needed."],
    scope: ["Annual and event-based company filings", "Board and shareholder meeting support", "Statutory registers and corporate records", "Company secretarial documentation"],
  },
  "commercial-contracts-documentation": {
    eyebrow: "Commercial contracts", title: "Commercial contracts & documentation", image: "/images/sattva/practice-areas/commercial-contracts.jpg", imageAlt: "Person signing a business document",
    focusTitle: "Terms that work", focusEmphasis: "in practice.", workflow: ["Understand the arrangement", "Draft and review the terms", "Support a clear execution"],
    lead: "Clear documentation that helps each party understand the terms of a working relationship from the outset.",
    body: ["An agreement should give everyone involved a clear and workable understanding of the arrangement. We begin with the commercial intent, then shape the legal terms around the way the relationship will actually operate.", "Whether the document is for a new venture, customer engagement, supplier relationship or internal appointment, we focus on precision without losing sight of the practical next step."],
    scope: ["Founder, shareholder and partnership agreements", "Vendor, customer and service agreements", "Employment and consultancy documentation", "Non-disclosure, lease and commercial arrangements"],
  },
  "sebi-regulatory-practice": {
    eyebrow: "SEBI regulatory practice", title: "SEBI regulatory practice", image: "/images/sattva/practice-areas/sebi-regulatory.jpg", imageAlt: "Financial market data displayed on a screen",
    focusTitle: "Careful process for", focusEmphasis: "regulated work.", workflow: ["Assess the registration route", "Build the required documentation", "Prepare the compliance rhythm"],
    lead: "Focused support for regulated professionals navigating registration, operating requirements and ongoing compliance.",
    body: ["Regulated work depends on well-prepared documentation and a process that can be maintained after approval. We help clients make sense of the administrative requirements that sit alongside a research or advisory practice.", "Our role is to bring structure to the registration and readiness work, with a clear view of the records, disclosures and operating practices that need attention."],
    scope: ["Research analyst registration", "Investment adviser registration", "Compliance process and documentation setup", "Audit-readiness support for regulated practices"],
  },
  "investment-advisory-research-regulation": {
    eyebrow: "Advisory & research regulation", title: "Investment advisory & research regulation", image: "/images/sattva/practice-areas/investment-advisory.jpg", imageAlt: "Professionals discussing work in an office",
    focusTitle: "Structure for an", focusEmphasis: "advisory practice.", workflow: ["Clarify the regulated activity", "Prepare application materials", "Set up working processes"],
    lead: "Considered assistance for investment advisers and research analysts building practices within the regulatory framework.",
    body: ["The early design of an advisory or research practice can make ongoing compliance more manageable. We help clients identify the relevant regulatory activity and organise the materials needed to move forward with confidence.", "Alongside the application work, we focus on the practical documentation and disclosure processes that help a growing practice operate with care and consistency."],
    scope: ["Registration application preparation", "One-time compliance setup", "Documentation and disclosure support", "Ongoing regulatory-readiness guidance"],
  },
  "fema-fcgpr-fctrs-filings": {
    eyebrow: "FEMA reporting", title: "FEMA, FCGPR & FCTRS filings", image: "/images/sattva/practice-areas/fema-filings.jpg", imageAlt: "Cargo port handling international shipments",
    focusTitle: "Reporting handled", focusEmphasis: "with clarity.", workflow: ["Map the reporting event", "Coordinate supporting documents", "Submit and track the filing"],
    lead: "Structured support for foreign investment reporting and the filings that accompany cross-border corporate activity.",
    body: ["Cross-border transactions often involve several moving parts: the underlying event, supporting corporate documents, bank coordination and a reporting timeline. We help bring these inputs together in a clear sequence.", "The aim is to make the reporting process more manageable, keeping the documentation, submission and follow-up work organised around the specific transaction."],
    scope: ["FCGPR filing support", "FCTRS filing support", "Documentation coordination with AD banks", "FEMA reporting process guidance"],
  },
  "startup-funding-growth-advisory": {
    eyebrow: "Startup, funding & growth", title: "Startup, funding & growth advisory", image: "/images/sattva/practice-areas/startup-growth.jpg", imageAlt: "Startup team collaborating around a table",
    focusTitle: "A sound base for", focusEmphasis: "the next stage.", workflow: ["Understand the stage and plan", "Prepare the core documents", "Support the next raise or step"],
    lead: "Legal support for founders navigating formation, funding conversations and the documentation that comes with growth.",
    body: ["Growth brings a new set of legal decisions into view: how the company is structured, what is agreed between founders, and how a funding conversation is documented. We help founders deal with those questions in a practical order.", "By connecting formation, governance and funding-readiness work, we give teams a more dependable base for the next raise, milestone or commercial relationship."],
    scope: ["Founder and early-stage structuring guidance", "Funding-readiness documentation", "Startup registrations and operational setup", "Company conversion and growth-stage secretarial work"],
  },
} as const;

export function generateStaticParams() { return Object.keys(practiceAreas).map((slug) => ({ slug })); }

export default function PracticeAreaPage({ params }: { params: { slug: string } }) {
  const area = practiceAreas[params.slug as keyof typeof practiceAreas];
  if (!area) notFound();

  return <main className="practice-area-page">
    <SiteHeader />
    <section className="hero practice-hero">
      <div className="hero-slides" aria-hidden="true"><div className="hero-slide is-active" style={{ backgroundImage: "url('/images/sattva/practice-areas-hero.jpg')" }} /></div>
      <div className="hero-shade" />
      <div className="hero-content shell"><div className="hero-copy-set practice-hero-copy"><p className="eyebrow light"><em>Practice areas</em> <i /> Sattva Law &amp; Associates</p><h1>Guidance for the<br /><em>work ahead.</em></h1><div className="hero-actions"><a className="button button-light" href="#scope">Explore the scope <ArrowDownRight size={17} /></a></div></div></div>
      <div className="hero-rail">BUSINESS LAW &middot; REGULATORY PRACTICE &middot; CORPORATE GOVERNANCE</div>
    </section>
    <section className="practice-overview" id="scope"><div className="shell practice-overview-shell">
      <header className="practice-title-block"><p className="eyebrow">PRACTICE AREA</p><h1>{area.title}</h1><p>{area.lead}</p></header>
      <div className="practice-overview-content">
        <div className="practice-overview-copy"><p className="eyebrow">{area.eyebrow}</p><h2>{area.focusTitle}<br /><em>{area.focusEmphasis}</em></h2>{area.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <figure className="practice-image-card"><img src={area.image} alt={area.imageAlt} /><figcaption>Practical legal guidance for the work ahead.</figcaption></figure>
        <aside className="practice-scope-card"><p className="eyebrow">IN THIS AREA</p><ul>{area.scope.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul><a className="text-link" href="#contact">Discuss this area <span>&rarr;</span></a></aside>
      </div>
      <div className="practice-workflow"><div className="practice-workflow-intro"><p className="eyebrow">WORKING APPROACH</p><p>A measured route from the first question to a clear next action.</p></div>{area.workflow.map((step, index) => <div className="practice-workflow-step" key={step}><span>0{index + 1}</span><strong>{step}</strong></div>)}</div>
    </div></section>
    <section className="practice-cta"><div className="shell"><p className="eyebrow light">NEXT STEP</p><h2>Let&apos;s discuss the<br /><em>right way forward.</em></h2><p>Share a brief outline of your requirement. We will respond with an appropriate next step.</p><a className="button button-light" href="mailto:hello@sattvalaw.in">Start an enquiry <ArrowDownRight size={17} /></a></div></section>
    <SiteFooter />
  </main>;
}
