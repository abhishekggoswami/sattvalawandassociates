import { ArrowDownRight, BadgeCheck, BriefcaseBusiness, Building2, FileSignature, Landmark, Scale } from "lucide-react";
import { notFound } from "next/navigation";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import { heroTitleClass } from "../../../lib/hero-title";
import { servicePages } from "../../../lib/services";

const pexelsPhoto = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

const serviceImages: Record<string, { overview: string; process: string; overviewAlt: string; processAlt: string }> = {
  "business-formation": { overview: pexelsPhoto(31786661), process: pexelsPhoto(7433848), overviewAlt: "Indian professionals collaborating around a laptop", processAlt: "Professionals reviewing documents in a business meeting" },
  "registrations-licences": { overview: pexelsPhoto(22643598), process: pexelsPhoto(8068833), overviewAlt: "Modern office architecture in Kolkata", processAlt: "International team in an office meeting" },
  "annual-compliance": { overview: pexelsPhoto(7971345), process: pexelsPhoto(7163378), overviewAlt: "Team collaborating on documents and laptops", processAlt: "Colleagues discussing work in a modern office" },
  "contracts-documentation": { overview: pexelsPhoto(4308164), process: pexelsPhoto(9301509), overviewAlt: "Indian colleagues working with papers at a table", processAlt: "Business professionals collaborating in an office" },
  "sebi-compliance": { overview: pexelsPhoto(7681077), process: pexelsPhoto(18999158), overviewAlt: "Financial documents and graphs on a desk", processAlt: "Business team meeting in a bright office" },
  "audit-readiness": { overview: pexelsPhoto(36733421), process: pexelsPhoto(7691662), overviewAlt: "Professional team collaborating in a modern office", processAlt: "Team reviewing documents together" },
  "strategic-support": { overview: pexelsPhoto(4308104), process: pexelsPhoto(29284301), overviewAlt: "Indian colleagues planning work together on a laptop", processAlt: "Business team sharing ideas in an office" },
};
const detailIcons = [Building2, Landmark, FileSignature, BadgeCheck, Scale, BriefcaseBusiness];

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicePages.find(({ slug }) => slug === params.slug);
  if (!service) notFound();
  const images = serviceImages[service.slug];

  return <main className="capability-page">
    <SiteHeader />
    <section className="hero service-detail-hero">
      <div className="hero-slides" aria-hidden="true"><div className="hero-slide is-active" style={{ backgroundImage: "url('/images/sattva/services-hero.jpg')" }} /></div>
      <div className="hero-shade" />
      <div className="hero-content shell"><div className="hero-copy-set service-detail-hero-copy"><p className="eyebrow light"><em>{service.eyebrow}</em> <i /> Sattva Law &amp; Associates</p><h1 className={heroTitleClass(service.title)}>{service.title}</h1><div className="hero-actions"><a className="button button-light" href="#overview">Explore this service <ArrowDownRight size={17} /></a></div></div></div>
      <div className="hero-rail">BUSINESS LAW &middot; REGULATORY PRACTICE &middot; CORPORATE GOVERNANCE</div>
    </section>

    <section className="detail-intro shell" id="overview">
      <header className="detail-heading"><p className="eyebrow">{service.eyebrow}</p><h2>A practical route for<br /><em>the work ahead.</em></h2><p>{service.intro}</p></header>
      <div className="detail-intro-grid"><figure className="detail-intro-image"><img src={images.overview} alt={images.overviewAlt} /><figcaption>Clear advice, organised around the work in front of you.</figcaption></figure><div className="detail-intro-copy"><p className="eyebrow">THE SERVICE</p>{service.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
    </section>

    <section className="detail-cards"><div className="shell"><header className="detail-heading"><p className="eyebrow">HOW WE CAN HELP</p><h2>Support with the<br /><em>details that matter.</em></h2><p>Focused help that makes each part of the work easier to see, organise and move forward.</p></header><div className="detail-card-grid">{service.items.map((item, index) => { const Icon = detailIcons[index % detailIcons.length]; return <article key={item}><div className="detail-card-top"><span>{String(index + 1).padStart(2, "0")}</span><i><Icon size={27} strokeWidth={1.35} /></i></div><h3>{item}</h3><ArrowDownRight size={19} aria-hidden="true" /></article>; })}</div></div></section>

    <section className="detail-process shell"><div className="detail-process-copy"><p className="eyebrow">HOW IT WORKS</p><h2>A clear path,<br /><em>step by step.</em></h2><p>Every matter is different, but this is the practical sequence we use to make the work easier to follow.</p><ol>{service.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div><figure className="detail-process-image"><img src={images.process} alt={images.processAlt} /><figcaption>Structure first. Clear next actions throughout.</figcaption></figure></section>

    <section className="detail-ready"><div className="shell"><header className="detail-heading"><p className="eyebrow">BEFORE WE BEGIN</p><h2>Useful starting<br /><em>points.</em></h2></header><div><p>There is no need to have every detail finalised before getting in touch. These are the useful starting points that help us understand the next step.</p><ul>{service.prepare.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul></div></div></section>

    <section className="detail-cta" id="enquiry"><div className="shell"><p className="eyebrow">NEXT STEP</p><h2><span>Let&apos;s discuss the</span><em>right way forward.</em></h2><p>Share a brief outline of your requirement. We will respond with an appropriate next step.</p><a className="detail-cta-button" href="mailto:sattvalawandassociates@gmail.com">Start an enquiry <ArrowDownRight size={17} /></a></div></section>
    <SiteFooter />
  </main>;
}
