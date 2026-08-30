"use client";

import { ArrowDownRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { KeyboardEvent, useEffect, useState } from "react";
import { articles } from "../lib/articles";

type DropdownItem = string | { label: string; href: string };
type SearchEntry = { label: string; href: string; group: string; description: string };

const capabilityItems: DropdownItem[] = [
  { label: "Business formation & structuring", href: "/services?service=business-formation#service-selector" },
  { label: "Registrations & operating licences", href: "/services?service=registrations-licences#service-selector" },
  { label: "Annual and ongoing compliance", href: "/services?service=annual-compliance#service-selector" },
  { label: "Contracts & legal documentation", href: "/services?service=contracts-documentation#service-selector" },
  { label: "SEBI registration & compliance setup", href: "/services?service=sebi-compliance#service-selector" },
  { label: "Audit readiness & regulatory filings", href: "/services?service=audit-readiness#service-selector" },
  { label: "Board, funding & strategic support", href: "/services?service=strategic-support#service-selector" },
];

const practiceItems: DropdownItem[] = [
  { label: "Corporate governance & secretarial matters", href: "/practice-areas/corporate-governance-secretarial-matters" },
  { label: "Commercial contracts & documentation", href: "/practice-areas/commercial-contracts-documentation" },
  { label: "SEBI regulatory practice", href: "/practice-areas/sebi-regulatory-practice" },
  { label: "Investment advisory & research regulation", href: "/practice-areas/investment-advisory-research-regulation" },
  { label: "FEMA, FCGPR & FCTRS filings", href: "/practice-areas/fema-fcgpr-fctrs-filings" },
  { label: "Startup, funding & growth advisory", href: "/practice-areas/startup-funding-growth-advisory" },
];

const standardLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
];

const searchEntries: SearchEntry[] = [
  { label: "Home", href: "/", group: "Page", description: "An overview of the firm and its work" },
  { label: "About Sattva", href: "/about", group: "Page", description: "Our approach, people and working principles" },
  { label: "Contact", href: "/contact", group: "Page", description: "Contact details and a direct enquiry form" },
  { label: "Capabilities", href: "/services", group: "Page", description: "Explore the firm’s service categories" },
  { label: "Practice areas", href: "/#expertise", group: "Page", description: "Corporate, regulatory and compliance focus" },
  { label: "Client testimonials", href: "/testimonials", group: "Page", description: "Client perspectives and feedback" },
  { label: "Notes from the practice", href: "/blog", group: "Page", description: "Legal and compliance insights" },
  ...capabilityItems.map((item) => typeof item === "string" ? null : ({ label: item.label, href: item.href, group: "Capability", description: "View this service and its scope" })),
  ...practiceItems.map((item) => typeof item === "string" ? null : ({ label: item.label, href: item.href, group: "Practice area", description: "View the relevant practice-area scope" })),
  ...articles.map((article) => ({ label: article.title, href: `/blog/${article.slug}`, group: "Article", description: article.category })),
].filter((entry): entry is SearchEntry => entry !== null);

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState({ path: "", search: "" });

  useEffect(() => {
    const closeDropdown = (event: PointerEvent) => {
      if (event.target instanceof Element && !event.target.closest(".nav-dropdown")) setActiveDropdown(null);
    };
    document.addEventListener("pointerdown", closeDropdown);
    return () => document.removeEventListener("pointerdown", closeDropdown);
  }, []);

  useEffect(() => {
    setLocation({ path: window.location.pathname, search: window.location.search });
  }, []);

  const isCurrentEntry = (entry: SearchEntry) => {
    if (!location.path) return false;
    const target = new URL(entry.href, window.location.origin);
    if (target.pathname !== location.path) return false;
    const service = target.searchParams.get("service");
    return service ? new URLSearchParams(location.search).get("service") === service : !location.search;
  };
  const currentEntry = searchEntries.find(isCurrentEntry);
  const normalisedQuery = query.trim().toLowerCase();
  const results = (normalisedQuery
    ? searchEntries.filter((entry) => `${entry.label} ${entry.group} ${entry.description}`.toLowerCase().includes(normalisedQuery))
    : searchEntries.filter((entry) => ["Contact", "Capabilities", "Practice areas", "Notes from the practice", "SEBI registration & compliance setup"].includes(entry.label))).slice(0, 4);
  const onSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") setSearchOpen(false);
    if (event.key === "Enter" && results[0]) window.location.assign(results[0].href);
  };

  return <header className="site-header" id="top">
    <div className="topbar">
      <div className="site-search-panel" role="search" onBlur={() => window.setTimeout(() => setSearchOpen(false), 140)}><div className="site-search-field"><Search size={18} /><input className="input site-search-input" type="text" value={query} onFocus={() => setSearchOpen(true)} onChange={(event) => { setQuery(event.target.value); setSearchOpen(true); }} onKeyDown={onSearchKeyDown} placeholder="Search" aria-label="Search Sattva Law website" /></div>{searchOpen && <div className="site-search-results"><div className="site-search-results-heading"><p>{normalisedQuery ? "Search results" : "Suggested pages"}</p>{currentEntry && <span>Viewing: {currentEntry.label}</span>}</div>{results.length ? results.map((entry) => <a href={entry.href} className={isCurrentEntry(entry) ? "is-current" : ""} key={entry.href}><span><small>{entry.group}</small>{entry.label}<em>{entry.description}</em></span><ArrowDownRight size={17} /></a>) : <p className="site-search-empty">No matching pages found. Try “services”, “SEBI”, “contact” or “blog”.</p>}</div>}</div>
      <a className="brand" href="/" aria-label="Sattva Law & Associates home"><span>Sattva</span><small>LAW &amp; ASSOCIATES</small></a>
      <div className="header-actions"><a className="phone-link" href="tel:+919832350411">+91 9832350411</a><a className="nav-cta" href="/contact">Let&apos;s talk</a></div>
    </div>
    <div className="subnav">
      <button className="menu-button" type="button" onClick={() => setMenuOpen((current) => !current)} aria-label="Open navigation" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {standardLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
        <HeaderDropdown label="Capabilities" href="/services" items={capabilityItems} active={activeDropdown === "Capabilities"} onOpen={() => setActiveDropdown("Capabilities")} onClose={() => setActiveDropdown(null)} />
        <HeaderDropdown label="Practice Areas" href="/#expertise" items={practiceItems} active={activeDropdown === "Practice Areas"} onOpen={() => setActiveDropdown("Practice Areas")} onClose={() => setActiveDropdown(null)} />
        <a href="/contact">Contact</a>
      </nav>
    </div>
    {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
      {standardLinks.map((link) => <a href={link.href} key={link.label} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
      <MobileGroup label="Capabilities" href="/services" items={capabilityItems} onNavigate={() => setMenuOpen(false)} />
      <MobileGroup label="Practice Areas" href="/#expertise" items={practiceItems} onNavigate={() => setMenuOpen(false)} />
      <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
      <a href="/contact" onClick={() => setMenuOpen(false)}>Arrange a conversation</a>
    </nav>}
  </header>;
}

function HeaderDropdown({ label, href, items, active, onOpen, onClose }: { label: string; href: string; items: DropdownItem[]; active: boolean; onOpen: () => void; onClose: () => void }) {
  return <div className={`nav-dropdown ${active ? "is-open" : ""}`} onMouseEnter={onOpen}>
    <button type="button" onFocus={onOpen} onClick={onOpen} aria-expanded={active}>{label}<ChevronDown size={13} /></button>
    <div className="nav-dropdown-menu"><p>{label}</p>{items.map((item) => { const itemLabel = typeof item === "string" ? item : item.label; const itemHref = typeof item === "string" ? href : item.href; return <a href={itemHref} key={itemLabel} onClick={onClose}>{itemLabel}</a>; })}</div>
  </div>;
}

function MobileGroup({ label, href, items, onNavigate }: { label: string; href: string; items: DropdownItem[]; onNavigate: () => void }) {
  return <div className="mobile-nav-group"><a href={href} onClick={onNavigate}>{label}</a>{items.map((item) => { const itemLabel = typeof item === "string" ? item : item.label; const itemHref = typeof item === "string" ? href : item.href; return <a className="mobile-sub-link" href={itemHref} key={itemLabel} onClick={onNavigate}>{itemLabel}</a>; })}</div>;
}
