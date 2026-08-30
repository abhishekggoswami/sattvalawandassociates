export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type ArticleSection = {
  id: string;
  heading: string;
  blocks: ArticleBlock[];
};

export type Article = {
  slug: string;
  image: string;
  category: string;
  read: string;
  title: string;
  summary: string;
  sections: ArticleSection[];
  contact?: string;
  author: string;
  disclaimer: string;
};

export const articles: Article[] = [
  {
    slug: "common-inspection-violations-research-analysts",
    image: "/images/sattva/articles/research-analyst.jpg",
    category: "RESEARCH ANALYSTS",
    read: "10 MIN READ",
    title: "Common inspection violations for research analysts: what to look out for",
    summary: "As a research analyst, maintaining regulatory compliance is not just a legal obligation - it is important for building and sustaining client trust. Recent SEBI inspections have highlighted common violations that can affect a practice and its client relationships.",
    sections: [
      {
        id: "client-grievances",
        heading: "Redressal of client grievances",
        blocks: [
          { type: "paragraph", text: "Violation observed: Research analysts often fail to resolve client grievances within the timelines specified by SEBI circulars." },
          { type: "paragraph", text: "Solution: Resolve a client's complaint within one month, as set out in the grievance-redressal process. Clients should first reach out to their point of contact; aim to resolve the issue within three to five working days, with options to email or call and an escalation to a senior team member where needed. If the matter remains unresolved after one month, clients can escalate it through SEBI's SCORES portal and then the ODR Portal." },
          { type: "paragraph", text: "Violation observed: Many research analysts do not update or maintain correct complaints data on their websites." },
          { type: "paragraph", text: "Solution: Do not provide incorrect complaint data. Keep complaints data on the website up to date before the seventh of every succeeding month. If there is no website, provide the data to clients by email. The SEBI complaint-data format and Investor Charter format are available in SEBI's investor-charter circular." },
          { type: "paragraph", text: "Violation observed: The specified Investor Charter is not displayed on the website or mobile application. Where these are not maintained, the charter is not sent to clients by email." },
          { type: "paragraph", text: "Solution: Make the Investor Charter easy to find on the website and mobile application. If neither is maintained, send it to all clients by email." },
        ],
      },
      {
        id: "misleading-claims",
        heading: "Assured returns and misleading claims",
        blocks: [
          { type: "paragraph", text: "Violation observed: Some research analysts misguide clients by mentioning services provided by investment advisers." },
          { type: "paragraph", text: "Solution: Offer only services permitted for research analysts. Research analysts can give recommendations on securities as defined in clause (h) of section 2 of the Securities Contracts (Regulation) Act, 1956. Ensure website content, client communications and welcome kits accurately reflect the services offered without exaggerated claims." },
          { type: "paragraph", text: "Violation observed: Advertising personalised advice, making claims such as being the 'best' or affiliated with MIIs, or promising guaranteed returns." },
          { type: "paragraph", text: "Solution: Research analysts must not offer personalised services or show favouritism. Avoid superlative terms such as 'Best', 'No. 1', 'Top Adviser/Research Analyst', 'Leading' or 'One of the best amongst market leaders'. Do not promise assured returns, and clearly explain investment risks to clients." },
          { type: "paragraph", text: "The following disclaimers must appear on the website, mobile application or any other platform used to provide services to clients. The font should not be smaller than 10." },
          { type: "list", items: ["Registration granted by SEBI and certification from NISM is no way guarantee performance of the intermediary or provide any assurance of returns to investors.", "Investment in securities market are subject to market risks. Read all the related documents carefully before investing."] },
          { type: "paragraph", text: "Violation observed: Publishing unverified or misleading claims about the number of research analysts employed by the firm or the accuracy of recommendations." },
          { type: "paragraph", text: "Solution: Ensure all claims about research analysts and recommendations are verified and accurate. Employees, temporary staff and voluntary workers should not encourage or circulate rumours or unverified information obtained from clients, industry, trade or other sources." },
          { type: "paragraph", text: "Violation observed: Showing profit screenshots to attract clients, or promising to recover losses if they invest more despite prior losses." },
          { type: "paragraph", text: "Solution: Research analysts are not allowed to mention past performance. Avoid encouraging clients to invest more by promising to recover previous losses. Focus on clear, realistic advice and do not share profit screenshots. Maintain testimonials in the records in case of an inspection at the registered office." },
        ],
      },
      {
        id: "research-reports",
        heading: "Research reports",
        blocks: [
          { type: "paragraph", text: "Violation observed: Many research analysts fail to maintain duly signed and dated copies of research reports." },
          { type: "paragraph", text: "Solution: Maintain duly signed and dated copies of research reports to support transparency and accountability. They may be stored digitally or physically." },
          { type: "paragraph", text: "Violation observed: There is often no documented rationale for the research recommendations made." },
          { type: "paragraph", text: "Solution: Always document and retain the rationale behind each recommendation. It should be available for review and may be maintained digitally or physically." },
          { type: "paragraph", text: "Violation observed: Research reports sometimes do not include the disclosures mandated under SEBI regulations." },
          { type: "paragraph", text: "Solution: Ensure every report includes the necessary disclosures, including any pending disciplinary action, the research analyst's interest in the subject company and confirmation of the following:" },
          { type: "list", items: ["No financial interest is held in the company.", "There is no actual or beneficial ownership of more than 1% in the company.", "There are no other material conflicts of interest.", "No compensation has been received from the subject company."] },
        ],
      },
      {
        id: "address-of-ra",
        heading: "Address of the research analyst",
        blocks: [
          { type: "paragraph", text: "Violation observed: Material changes - including a change in the principal place of business or the opening of a new corporate office - are not communicated to SEBI." },
          { type: "paragraph", text: "Solution: Inform SEBI promptly of important changes, such as an address update, by submitting an application. Also notify clients of an address or other important change within two weeks." },
          { type: "paragraph", text: "Violation observed: The website lists an address that the research analyst does not own or rent, or rent agreements do not accurately set out the business details." },
          { type: "paragraph", text: "Solution: Use the address registered with SEBI and operate from that location. When the address changes, inform SEBI and update the website and other client-facing platforms. Ensure the rent agreement accurately identifies the type of business being pursued and remains valid." },
        ],
      },
      {
        id: "other-observations",
        heading: "Other observations",
        blocks: [
          { type: "paragraph", text: "Violation observed: Incorrect or incomplete information is provided during inspections." },
          { type: "paragraph", text: "Solution: Give inspection teams accurate and complete information. Put checks in place to verify it before submission." },
          { type: "paragraph", text: "Violation observed: Insufficient due diligence is carried out when hiring employees, or individuals are employed whose previous experience raises concerns about the operation of the research analyst." },
          { type: "paragraph", text: "Solution: Carry out thorough due diligence, including verification of qualifications and background. Regularly review employee expertise against regulatory expectations and operational needs. Train employees not to make client promises based on market rumours." },
          { type: "paragraph", text: "Violation observed: Communications between employees and clients are not monitored effectively." },
          { type: "paragraph", text: "Solution: Set up robust systems to monitor and review employee-client communications, address issues quickly and train employees on the process." },
          { type: "paragraph", text: "Violation observed: Fresh NISM certification is not obtained before the existing certification expires." },
          { type: "paragraph", text: "Solution: Obtain fresh NISM certification before the existing certification expires. A research analyst must ensure that certification remains valid at all times." },
          { type: "paragraph", text: "By addressing these common issues and implementing the solutions, research analysts can enhance their practice, avoid regulatory trouble and build stronger client relationships." },
        ],
      },
    ],
    contact: "For the SEBI materials referenced in this article, visit the SCORES portal, the ODR Portal and SEBI's investor-charter circular.",
    author: "Muskan Agarwal, Legal Associate | Sattva Law and Associates",
    disclaimer: "While every effort has been made to ensure the accuracy of this article, Sattvalawandassociates@gmail.com assumes no responsibility for any errors or omissions. This document does not substitute professional advice, and readers should seek guidance before acting on any information contained herein.",
  },
  {
    slug: "model-portfolio-reports-research-analysts",
    image: "/images/sattva/articles/model-portfolio.jpg",
    category: "RESEARCH ANALYSTS",
    read: "06 MIN READ",
    title: "A comprehensive guide to model portfolio reports for research analysts",
    summary: "Research analysts can create and share model portfolios with clients. This guide explains what goes into a model portfolio, the disclosures it requires and the records that help keep the process in check.",
    sections: [
      {
        id: "what-is-a-model-portfolio",
        heading: "What is a model portfolio?",
        blocks: [
          { type: "paragraph", text: "A model portfolio is a ready-made investment recipe created by a research analyst. It is a basket of stocks, bonds and other securities put together in a research report. The report lists the securities and suggests how much of each security - its weightage - should be included in the portfolio." },
          { type: "paragraph", text: "Key note: If the report does not specify these weightages, simply listing or summarising recommended securities does not qualify as a model portfolio. It is instead a general recommendation without the structure of an actual portfolio." },
        ],
      },
      {
        id: "mandatory-disclosures",
        heading: "Mandatory disclosures in a model portfolio report",
        blocks: [
          { type: "paragraph", text: "When issuing a model portfolio report, include disclosures that give investors the important details needed to make an informed decision." },
          { type: "list", items: ["Factsheet: Every report must include a factsheet summarising the rationale behind the portfolio, methodology, launch date, update date and type of model portfolio.", "Methodology: Explain clearly how securities were selected - whether through fundamental analysis, technical analysis or another approach. State any specific theme, such as 'Make in India', or sector focus, such as Auto or Textile.", "Labelling: The portfolio must be true to label. Its name should match its purpose; for example, a large-cap portfolio should say 'Large-Cap' and include a one-line description of its theme or objective.", "Investment horizon: State how long the portfolio is intended to be held so investors can align it with their own timelines.", "Frequency of review and update: State how often the portfolio will be reviewed or updated. Any rebalancing must fit the framework and be communicated to investors with a rationale.", "Risk disclosures: Clearly state the potential risks associated with the portfolio.", "Benchmarking: Compare performance with a relevant benchmark index - for example, an auto-sector portfolio could use the Nifty Auto Index and a mid-cap portfolio might use the BSE Midcap Index."] },
        ],
      },
      {
        id: "important-points",
        heading: "Other important points",
        blocks: [
          { type: "list", items: ["Launch date: The date on which the model portfolio report is first issued by the research analyst.", "Update date: The date on which the model portfolio is reviewed and updated.", "Audit requirement: Maintain proper records of launch and update dates, and review the portfolio regularly as needed to meet audit requirements."] },
          { type: "paragraph", text: "Understanding these requirements helps research analysts create and share model portfolios that are informative, compliant and useful in building stronger client relationships." },
        ],
      },
    ],
    contact: "For questions or further guidance, write to sattvalawandassociates@gmail.com.",
    author: "Muskan Agarwal, Legal Associate | Sattva Law and Associates",
    disclaimer: "While every effort has been made to ensure the accuracy of this article, Sattvalawandassociates@gmail.com assumes no responsibility for any errors or omissions. This document does not substitute professional advice, and readers should seek guidance before acting on any information contained herein.",
  },
  {
    slug: "fast-track-merger-guide",
    image: "/images/sattva/articles/fast-track-merger.jpg",
    category: "CORPORATE LAW",
    read: "08 MIN READ",
    title: "Fast-track merger: a comprehensive guide",
    summary: "A fast-track merger can offer qualifying companies a quicker, more straightforward route to merge than the conventional process. This guide covers eligibility, procedure, practical timelines and the main advantages of the route.",
    sections: [
      {
        id: "what-is-fast-track-merger",
        heading: "What is a fast-track merger?",
        blocks: [
          { type: "paragraph", text: "A fast-track merger is a streamlined process designed to make merging two or more companies quicker and less complicated than a traditional merger process." },
          { type: "paragraph", text: "Under section 233 of the Companies Act, 2013, read with rule 25 of the Companies (Compromises, Arrangements and Amalgamations) Rules, 2016, certain companies can merge or amalgamate without lengthy court procedures. The route eliminates the need for National Company Law Tribunal approval, reducing time and cost." },
          { type: "paragraph", text: "Unlike the conventional merger process under section 232, the fast-track option offers a simplified approach for specific categories of companies." },
        ],
      },
      {
        id: "eligibility-and-framework",
        heading: "Eligibility and governing framework",
        blocks: [
          { type: "paragraph", text: "A fast-track merger is available in the following situations:" },
          { type: "list", items: ["Between small companies: if both companies qualify as 'small companies' under the Companies Act.", "Between a holding company and its wholly-owned subsidiary: where a parent company wants to merge with its fully owned subsidiary."] },
          { type: "paragraph", text: "The governing provisions are section 233 of the Companies Act, 2013 (fast-track mergers) and rule 25 of the Companies (Compromises, Arrangements and Amalgamations) Rules, 2016 (the procedural framework)." },
        ],
      },
      {
        id: "procedure-and-timelines",
        heading: "Procedure and practical timelines",
        blocks: [
          { type: "paragraph", text: "Both transferor and transferee companies should first confirm that their Articles of Association permit the merger; amendments are needed if they do not. The merger must also be permitted by the object clause in each company's Memorandum of Association." },
          { type: "list", items: ["The boards of both companies convene a board meeting to approve the merger scheme.", "Issue notice of the proposed scheme to the Registrar of Companies, Official Liquidator, Income Tax Department and other affected parties through Form GNL-1 with the ROC.", "Stakeholders, including the ROC and Official Liquidator, have 30 days after the notice to raise objections or provide suggestions.", "Both companies approve a declaration of solvency in a board meeting, file Form CAA-10 with the ROC and Official Liquidator, and submit Form GNL-2 to the ROC before convening the extraordinary general meeting.", "Convene a general meeting of members (or class of members) to approve the scheme. A creditors' meeting (or class of creditors) is also required to obtain a no-objection certificate; the creditor list must be certified by an auditor.", "Within seven days after the general meeting, file Form MGT-14 to record the resolution. The transferee company then files the scheme with the authorities through Form CAA-11.", "The Regional Director issues a confirmation order in Form CAA-12 if no objections are raised within 30 days. Where objections are received, the Regional Director addresses them within the prescribed period.", "File the confirmation order with the ROC in Form INC-28 within 30 days. This filing results in the dissolution of the transferor company without winding up."] },
        ],
      },
      {
        id: "benefits",
        heading: "Benefits of a fast-track merger",
        blocks: [
          { type: "list", items: ["No mandatory NCLT approval.", "No public advertisement is required.", "No court-convened meeting.", "Lower administrative burden.", "A series of hearings may be avoided.", "Registration of the scheme results in the transferor company's dissolution without winding up.", "Comparatively lower cost and time saving."] },
        ],
      },
      {
        id: "learnings",
        heading: "Learnings from the process",
        blocks: [
          { type: "list", items: ["Ensure the merger scheme is clear and comprehensive.", "Keep filings, including annual filings and DPT-3, up to date.", "Anticipate Regional Director queries and prepare documents in advance.", "Coordinate effectively with stakeholders to avoid delays.", "Work closely with auditors, creditors and authorities for a smooth process.", "Prepare documents in advance and ensure they are properly signed and sealed.", "Maintain clear and timely communication with stakeholders throughout the process."] },
          { type: "paragraph", text: "A fast-track merger under section 233 can be a cost-effective and efficient alternative for small companies and group structures. By understanding the timelines, regulatory requirements and practical steps, companies can use this route to pursue their strategic goals with less hassle." },
        ],
      },
    ],
    contact: "For questions or further guidance, write to sattvalawandassociates@gmail.com.",
    author: "Muskan Agarwal, Legal Associate | Sattva Law and Associates",
    disclaimer: "While every effort has been made to ensure the accuracy of this article, Sattvalawandassociates@gmail.com assumes no responsibility for any errors or omissions. This document does not substitute professional advice, and readers should seek guidance before acting on any information contained herein.",
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
