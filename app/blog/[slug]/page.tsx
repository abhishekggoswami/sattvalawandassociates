import { ArrowDownRight, Check, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import { articles, getArticle } from "../../../lib/articles";
import { heroTitleClass } from "../../../lib/hero-title";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const related = articles.filter((item) => item.slug !== article.slug);

  return (
    <main>
      <SiteHeader />

      <section className="hero blog-hero article-landing-hero" aria-labelledby="article-title">
        <div className="hero-slides" aria-hidden="true"><div className="hero-slide is-active" style={{ backgroundImage: `url(${article.image})` }} /></div>
        <div className="hero-shade" />
        <div className="hero-content shell">
          <div className="hero-copy-set blog-hero-copy article-landing-copy">
            <p className="eyebrow light"><em>{article.category}</em><i /> Sattva Law &amp; Associates</p>
            <h1 id="article-title" className={heroTitleClass(article.title)}>{article.title}</h1>
            <div className="hero-actions"><a className="button button-light" href="#article">Read the note <ArrowDownRight size={15} /></a></div>
          </div>
        </div>
        <div className="hero-rail">BUSINESS LAW · REGULATORY PRACTICE · CORPORATE GOVERNANCE</div>
      </section>

      <section className="article-reading shell" id="article">
        <article className="article-column">
          <p className="article-meta">{article.category} <span /> {article.read}</p>
          <p className="article-lede">{article.summary}</p>

          {article.sections.map((section, index) => (
            <section className="article-section" id={section.id} key={section.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.heading}</h2>
              {section.blocks.map((block, blockIndex) => block.type === "paragraph" ? (
                <p key={`${section.id}-${blockIndex}`}>{block.text}</p>
              ) : (
                <ul key={`${section.id}-${blockIndex}`}>
                  {block.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ))}
            </section>
          ))}

          <section className="article-source-note" aria-label="Article details">
            <p className="eyebrow">Article details</p>
            <p className="article-author">{article.author}</p>
            {article.contact && <p>{article.contact}</p>}
            <p className="article-disclaimer"><strong>Disclaimer:</strong> {article.disclaimer}</p>
          </section>

          <section className="article-comments" id="comments">
            <MessageCircle aria-hidden="true" />
            <div>
              <p className="eyebrow">Comments &amp; questions</p>
              <h2>Continue the conversation.</h2>
              <p>Have a question about this note or a related requirement? We will add a comments function here in a later phase. Until then, enquiries can be sent directly to our team.</p>
              <a className="button button-dark" href={`mailto:sattvalawandassociates@gmail.com?subject=${encodeURIComponent(`Enquiry: ${article.title}`)}`}>Send an enquiry <ArrowDownRight size={15} /></a>
            </div>
          </section>
        </article>

        <aside className="article-rail" aria-label="Article navigation">
          <div className="article-rail-block">
            <p className="eyebrow">In this note</p>
            {article.sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><small>{String(index + 1).padStart(2, "0")}</small>{section.heading}</a>)}
          </div>
          <div className="article-rail-block">
            <p className="eyebrow">More to explore</p>
            {related.map((item) => <a className="article-related" href={`/blog/${item.slug}`} key={item.slug}><span><small>{item.category}</small>{item.title}</span><ArrowDownRight size={15} /></a>)}
          </div>
          <div className="article-rail-callout"><Check size={17} /><p>These notes are general information, not legal advice for a particular matter.</p></div>
        </aside>
      </section>

      <section className="article-page-cta"><div className="shell"><p className="eyebrow">A PRACTICAL NEXT STEP</p><h2>Need to discuss<br /><em>your own situation?</em></h2><p>Share a short outline of the matter and we will help identify a suitable next step.</p><a className="button button-light" href="mailto:sattvalawandassociates@gmail.com">Start a conversation <ArrowDownRight size={17} /></a></div></section>

      <SiteFooter />
    </main>
  );
}
