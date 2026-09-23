"use client";

import { ArrowDownRight } from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { articles } from "../../lib/articles";

export default function BlogPage() {
  return <main>
    <SiteHeader />

    <section className="hero blog-hero">
      <div className="hero-slides" aria-hidden="true"><div className="hero-slide is-active" style={{ backgroundImage: "url('/images/sattva/blog-desk.jpg')" }} /></div>
      <div className="hero-shade" />
      <div className="hero-content shell"><div className="hero-copy-set blog-hero-copy"><p className="eyebrow light"><em>Knowledge centre</em> <i /> Sattva Law &amp; Associates</p><h1>Notes for the<br /><em>next step.</em></h1><div className="hero-actions"><a className="button button-light" href="#articles">Browse the notes <ArrowDownRight size={17} /></a></div></div></div>
      <div className="hero-rail">BUSINESS LAW · REGULATORY PRACTICE · CORPORATE GOVERNANCE</div>
    </section>

    <section className="blog-listing shell" id="articles">
      <div className="blog-listing-heading"><div><p className="eyebrow">KNOWLEDGE CENTRE</p><h2>Notes from the<br /><em>practice.</em></h2></div><a className="text-link" href="#updates">Subscribe for updates <span>→</span></a></div>
      <div className="blog-card-grid">{articles.map((article) => <article className="blog-card" key={article.title}><a className="blog-card-link" href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`} /><div className="blog-card-image" style={{ backgroundImage: `url(${article.image})` }} /><p className="blog-card-meta">{article.category} <i /> {article.read}</p><h3>{article.title}</h3><a className="article-arrow" href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`}><ArrowDownRight size={19} /></a></article>)}</div>
    </section>

    <section className="blog-updates" id="updates"><div className="shell"><p className="eyebrow">STAY INFORMED</p><h2>Thoughtful updates,<br />when they matter.</h2><p>Occasional notes on legal and compliance work for businesses and regulated professionals.</p><a className="button button-light" href="mailto:sattvalawandassociates@gmail.com">Request updates <ArrowDownRight size={17} /></a></div></section>

    <SiteFooter />
  </main>;
}
