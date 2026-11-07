/* ==========================================================================
   OMKAR MALGI — CENTRAL PORTFOLIO CONFIGURATION (js/content.js)
   Loaded via standard local script tag in index.html (100% Offline).
   GENUINE SOURCE OF TRUTH: Every field in this file is dynamically bound
   to the visible DOM in js/script.js while preserving all CSS classes,
   3D tilt effects, animations, filters, and lightbox interactions.

   QUICK EDITING GUIDE FOR OMKAR:
   1. HERO & ABOUT CONTENT: Edit `profile` (name, firstName, lastName,
      designation, heroHeadline, heroSupporting, aboutPositioning,
      aboutBioParagraph1, aboutBioParagraph2, factSheet, telemetry, corePillars).
   2. CONTACT, LINKEDIN & GITHUB: Edit `profile.email`, `profile.phoneDisplay`,
      `profile.phoneHref`, `profile.location`, `profile.linkedin`, and
      `profile.github`. All header, hero, project, contact, and footer links
      update automatically.
   3. REPLACE PORTRAIT: Overwrite `assets/images/omkar-profile.png` with the
      same filename, or change `profile.portraitPath`.
   4. ACTIVATE RESUME PDF: Place `Omkar-Malgi-Resume.pdf` inside `assets/resume/`
      and set `resumeAvailable: true`. The "RESUME COMING SOON" badge is removed
      automatically and both Resume buttons become active PDF downloads.
   5. SKILLS, WORKFLOW, EXPERIENCE & EDUCATION: Edit the `skills`, `workflow`,
      `experience`, and `education` arrays below.
   6. GETIR FEATURED PROJECT & KPI CARDS: Edit `featuredGetirProject`
      (headlineKpis, dashboardImage, dashboardCaption, tableauPublicUrl,
      caseStudy, and scopeLimitations).
   7. PROJECTS 02–08: Edit any object in the `projects` array (title, period,
      filterTags, tools, summary, image, imageCaption, dimensions,
      caseStudyBlocks, tableauUrl, githubUrl).
   ========================================================================== */

window.PORTFOLIO_CONTENT = {
  profile: {
    name: "Omkar Malgi",
    firstName: "OMKAR",
    lastName: "MALGI",
    brandSubtext: "BUSINESS & DATA ANALYST",
    designation: "BUSINESS ANALYST | DATA ANALYST",
    heroHeadline: "TURNING DATA INTO BUSINESS DECISIONS.",
    heroSupporting:
      "Transforming complex data into meaningful insights, solving business problems and building analytical solutions that support smarter decisions.",
    aboutPositioning:
      "An analytical professional combining financial services experience, business analysis methodologies, data analysis and technical problem-solving.",
    aboutBioParagraph1:
      "Based in <strong>Pune, Maharashtra, India</strong>, I bring <strong>3+ years of experience</strong> across financial services, business operations, and process improvement. My work centres on structuring ambiguous operational problems into measurable KPIs, validating multi-table datasets, and delivering clear, evidence-based recommendations for business stakeholders.",
    aboutBioParagraph2:
      "As a <strong>Business Analyst Fellow at NextLeap</strong> and former <strong>Associate Financial Analyst at XL Dynamics India Pvt. Ltd.</strong> (following an engineering operations internship at <strong>Air India Limited</strong>), I combine US mortgage credit underwriting and regulatory compliance discipline with structured Business Requirement Documents (BRDs), SQL and PostgreSQL querying, Microsoft Excel modelling, and Tableau dashboard development.",
    location: "Pune, Maharashtra, India",
    heroLocationTag: "PUNE, MAHARASHTRA, INDIA",
    email: "omkarmalgi98@gmail.com",
    phoneDisplay: "+91 93251 32927",
    phoneHref: "+919325132927",
    linkedin: "https://www.linkedin.com/in/omkarmalgi/",
    github: "https://github.com/omkarmalgi/",
    portraitPath: "assets/images/omkar-profile.png",
    portraitAlt: "Portrait of Omkar Malgi, Business Analyst and Data Analyst",
    /* SINGLE-SETTING RESUME SWITCH: Change resumeAvailable from false to true after placing Omkar-Malgi-Resume.pdf in assets/resume/ */
    resumeAvailable: false,
    resumePath: "assets/resume/Omkar-Malgi-Resume.pdf",
    telemetry: [
      { label: "EXPERIENCE", value: "3+ Years Finance & Ops" },
      { label: "CORE STACK", value: "SQL • Excel • Tableau • BRD" },
      { label: "CURRENT ROLE", value: "BA Fellow @ NextLeap" },
      { label: "LOCATION", value: "Pune, Maharashtra, IN" }
    ],
    factSheet: [
      { label: "Name & Location", value: "Omkar Malgi — Pune, India" },
      { label: "Industry Experience", value: "3+ Years (Financial Services & Ops)" },
      { label: "Current Fellowship", value: "Business Analyst Fellow, NextLeap" },
      { label: "Prior Corporate Role", value: "Associate Financial Analyst, XL Dynamics" }
    ],
    corePillars: [
      "Business Analysis",
      "Requirements Gathering",
      "Business Requirement Documents",
      "KPI Analysis",
      "Stakeholder Communication",
      "Financial & Credit Analysis",
      "Operational Reporting",
      "Root Cause Analysis",
      "Process Optimisation"
    ]
  },

  skills: [
    {
      id: "ba",
      title: "Business Analysis",
      badge: "6 CAPABILITIES",
      accent: "teal",
      items: [
        "Business Analysis",
        "Requirements Gathering",
        "Business Requirement Documents (BRD)",
        "KPI Analysis",
        "Stakeholder Communication",
        "Business Process Analysis"
      ]
    },
    {
      id: "da",
      title: "Data Analytics",
      badge: "7 CAPABILITIES",
      accent: "blue",
      items: [
        "SQL",
        "PostgreSQL",
        "Microsoft Excel",
        "Tableau",
        "Data Analysis",
        "Data Visualisation",
        "Exploratory Data Analysis"
      ]
    },
    {
      id: "domain",
      title: "Domain Expertise",
      badge: "6 CAPABILITIES",
      accent: "purple",
      items: [
        "Credit Analysis",
        "Risk Assessment",
        "US Mortgage Underwriting",
        "FNMA/FHLMC",
        "Banking Regulations",
        "Process Optimisation"
      ]
    },
    {
      id: "tools",
      title: "Tools",
      badge: "5 PLATFORMS",
      accent: "teal",
      items: [
        "PostgreSQL",
        "Microsoft Excel",
        "Tableau",
        "GitHub",
        "AI-assisted productivity tools"
      ]
    }
  ],

  workflow: [
    {
      step: "01",
      title: "Business Problem Identification",
      desc: "Frame the core commercial, financial, or operational challenge before querying any dataset."
    },
    {
      step: "02",
      title: "Requirements Gathering",
      desc: "Align stakeholders, document BRDs, and validate functional and non-functional scope."
    },
    {
      step: "03",
      title: "KPI Definition",
      desc: "Establish Primary, Secondary, and Diagnostic KPI hierarchies with exact denominators."
    },
    {
      step: "04",
      title: "Data Analysis",
      desc: "Consolidate relational tables in SQL & Excel, validate data integrity, and test formal hypotheses."
    },
    {
      step: "05",
      title: "Dashboard Development",
      desc: "Build Tableau and Excel dashboards with multi-dimensional slicers and executive KPI cards."
    },
    {
      step: "06",
      title: "Insight Generation",
      desc: "Distinguish observed empirical findings from business interpretations and sample-size caveats."
    },
    {
      step: "07",
      title: "Business Recommendations",
      desc: "Deliver prioritized operational actions mapped to owners and tracked against baseline KPIs."
    }
  ],

  featuredGetirProject: {
    id: "project-01-getir",
    badge: "PROJECT 01 // FEATURED GRADUATION PROJECT",
    title: "Getir Returns Analysis — Quick-Commerce Operational Investigation",
    period: "JANUARY 2021 – JUNE 2026",
    datasetCoverage: "January 1, 2021 – June 1, 2026 (01 Jan 2021 – 01 Jun 2026)",
    metricPrecisionNote: "1,125 ÷ 1,424 = 79.00% (79.0028%) • 1,424 ÷ 30,271 = 4.70% (4.7042%) • 1,125 ÷ 30,271 = 3.72% (3.7164%)",
    scopeSummary: "30,271 Order-Product Records • 30 Columns • 10,000 Unique Orders • 1,000 Customers • 100 SKUs • 10 Product Categories • 5 Operating Regions (10 Cities in Turkey)",
    tools: [
      "Microsoft Excel",
      "Tableau",
      "Data Cleaning (5 Stages)",
      "Hypothesis Testing (H1–H8)",
      "14-Metric KPI Framework"
    ],
    businessQuestion:
      "How can a quick-commerce business identify preventable product returns and improve operational efficiency?",
    dashboardTopbarLabel: "TABLEAU DASHBOARD SCREENSHOT // getir | RETURNS ANALYSIS",
    dashboardImage: "assets/images/getir-tableau-dashboard.jpg",
    dashboardLightboxCaption:
      "Tableau Dashboard Screenshot ('getir | RETURNS ANALYSIS') — Reporting Period: January 2021 – June 2026. Full-screen preview of the 5-card KPI ribbon (30,271 records; 4.70% Total Return Rate; 3.72% Avoidable Return Rate; 79.00% Avoidable Share; ₹16.89 Avg Cost Returned), category rates, top 10 avoidable reasons, order time bands, discount ranges, regional map, age cohorts, and 5×5 correlation heatmap.",
    dashboardCaption:
      "<strong>Tableau Dashboard Screenshot ('getir | RETURNS ANALYSIS'):</strong> Static preview of the completed Tableau dashboard deliverable (click image or button above to inspect in full-screen lightbox). Integrates the 5-card executive KPI ribbon (30,271 records, 4.70% Total Return Rate, 3.72% Avoidable Return Rate, 79.00% Avoidable Share, ₹16.89 Avg Cost Returned), Avoidable Return Rate by Product Category, Top 10 Avoidable Return Reasons donut, Order Time Band dual-line chart, Discount Range bar-line combo, Turkey Regional Return Insights map, Customer Age Group dot plot, and 5×5 Pearson Correlation Heatmap.",
    /* Leave tableauPublicUrl empty ("") until your verified live Tableau Public URL is published. Only when populated will the live Tableau button appear. */
    tableauPublicUrl: "",
    githubUrl: "",
    headlineKpis: [
      {
        label: "Total Records",
        numericTarget: 30271,
        decimals: 0,
        prefix: "",
        suffix: "",
        sub: "10,000 Orders • 30 Columns",
        accent: "blue",
        tooltip: "30,271 consolidated order-product records (OrderID + ProductID) across 10,000 unique orders from January 2021 to June 2026"
      },
      {
        label: "Total Return Rate",
        numericTarget: 4.70,
        decimals: 2,
        prefix: "",
        suffix: "%",
        sub: "1,424 Returned Records",
        accent: "blue",
        tooltip: "Diagnostic KPI: 1,424 returned order-product records ÷ 30,271 total records = 4.70%"
      },
      {
        label: "Avoidable Return Rate",
        numericTarget: 3.72,
        decimals: 2,
        prefix: "",
        suffix: "%",
        sub: "Primary KPI • 1,125 Avoidable",
        accent: "teal",
        tooltip: "Primary KPI: 1,125 potentially avoidable returns ÷ 30,271 total records = 3.72%"
      },
      {
        label: "Avoidable Share",
        numericTarget: 79.00,
        decimals: 2,
        prefix: "",
        suffix: "%",
        sub: "1,125 of 1,424 Returns",
        accent: "teal",
        tooltip: "Secondary KPI: 1,125 potentially avoidable returns ÷ 1,424 total returns = 79.00% (vs. 299 'Customer Changed Mind' at 21.00%)"
      },
      {
        label: "Avg Cost Returned",
        numericTarget: 16.89,
        decimals: 2,
        prefix: "₹",
        suffix: "",
        sub: "₹26,962.47 Avoidable Value",
        accent: "purple",
        tooltip: "Secondary KPI: Average Cost to Business (Unit Cost × Quantity) per returned record is ₹16.89; Total Avoidable Return Value (Price Paid) = ₹26,962.47"
      }
    ],
    caseStudy: {
      businessProblemAndObjective:
        "Product returns and refund expenses create operational and margin pressure across quick-commerce fulfilment. Before modifying customer return policies—which risks penalising loyal customers—this investigation evaluates <strong>30,271 order-product records</strong> across <strong>10,000 unique orders, 1,000 customers, 100 products, 10 product categories, and 5 operating regions (10 cities) in Turkey from <span class=\"getir-period-text\">JANUARY 2021 – JUNE 2026</span></strong> to quantify potentially avoidable returns and determine where operational improvements should be prioritised.",
      datasetArchitecture:
        "Merged 5 relational tables totaling 26 source columns on 4 shared join keys (<code>OrderID</code>, <code>CustomerID</code>, <code>ProductID</code>, <code>CategoryID</code>): <strong>Order Details</strong> (30,271 rows, 10 cols), <strong>Orders</strong> (10,000 rows, 4 cols), <strong>Customers</strong> (1,000 rows, 7 cols), <strong>Products</strong> (100 rows, 3 cols), and <strong>Categories</strong> (10 rows, 2 cols). Removing 4 repeated join keys left <strong>22 distinct base attributes</strong>, which combined with <strong>1 duplicate-validation field (<code>Dupl</code>)</strong> and <strong>7 derived analytical fields</strong> formed the final 30-column dataset.",
      cleaningStages: [
        "<strong>Stage 1 — Relational Consolidation:</strong> Joined all 5 tables across 30,271 order-product line items.",
        "<strong>Stage 2 — Duplicate & Type Validation:</strong> Verified composite key (<code>OrderID + ProductID</code>) via <code>Dupl</code>; all 30,271 rows verified unique.",
        "<strong>Stage 3 — Potentially Avoidable Classification:</strong> Assigned binary <code>Avoidable = 1</code> where <code>IsReturned = 1 AND ReturnReason ≠ 'Customer Changed Mind'</code> (1,125 avoidable vs. 299 changed-mind returns).",
        "<strong>Stage 4 — Financial Value & Cost Derivation:</strong> Calculated net customer spend <code>Price Paid = Unit Price × Quantity × (1 − Discount Rate)</code> (₹26,962.47 avoidable return value) and <code>Cost to Business = Unit Cost × Quantity</code> (₹16.89 mean per returned record vs. 18.18 across all records).",
        "<strong>Stage 5 — Analytical Banding:</strong> Engineered <code>PaidPriceCat</code> (5 equal quintiles ~6,054 rows each), <code>Discount Range</code> (7 bands: 0% to Above 25%), <code>Order Time Band</code> (4 active windows: Morning, Afternoon, Evening, Late Night), and <code>Customer Age Group</code> (5 brackets: Under 25 to 55+)."
      ],
      kpiFramework: [
        "<strong>Primary KPI:</strong> Avoidable Return Rate = <strong>3.72%</strong> (1,125 ÷ 30,271).",
        "<strong>Secondary KPIs:</strong> Avoidable Share of Returns = <strong>79.00%</strong> (1,125 ÷ 1,424); Avoidable Return Value = <strong>₹26,962.47</strong>; Average Cost per Returned Record = <strong>₹16.89</strong>.",
        "<strong>Diagnostic KPIs:</strong> Overall Return Rate = <strong>4.70%</strong> (1,424 ÷ 30,271) plus 9 subgroup diagnostic rates across category, SKU, region, segment, reason, discount, order time, age group, and price quintile.",
        "<strong>Hypothesis Testing (8 Formal Hypotheses):</strong> <strong>5 Supported</strong> (H1 Categories, H2 Return Reasons, H4 Operating Regions, H6 Order Time Bands, H8 Age Groups), <strong>2 Partially Supported</strong> due to non-monotonic patterns (H3 Discount Bands, H7 Paid Price Quintiles), and <strong>1 Not Supported</strong> (H5 Customer Segments: VIP 3.82%, Premium 3.70%, Standard 3.69% — only 0.13 pp spread)."
      ],
      findings: [
        "<strong>Freshness & Picking Dominate Avoidable Returns:</strong> Across 28 avoidable return reasons, <em>Expired Date</em> (#1: 156 returns; <strong>13.87%</strong>) and <em>Wrong Item Sent</em> (#2: 114 returns; <strong>10.13%</strong>) represent <strong>24.00%</strong> of avoidable returns. All three picking errors combined (Wrong Item 114, Wrong Product 68, Wrong Flavor 67) total <strong>249 returns (22.13%)</strong>, followed by Packaging Defect (65; 5.78%) and Packaging Damage (48; 4.27%).",
        "<strong>Category & Timing Hotspots:</strong> Household Cleaning (<strong>5.51%</strong>), Bakery (<strong>4.87%</strong>), and Beverages (<strong>4.65%</strong>) record the highest avoidable rates, while Late Night (9 PM–12 AM) peaks at <strong>4.32% avoidable (5.28% overall)</strong>.",
        "<strong>Discount, Regional & Correlation Insights:</strong> Return rates peak in the <strong>21–25% discount band (5.03% avoidable; 6.24% overall)</strong> and in the <strong>Mediterranean region (4.50% avoidable: Adana 4.61%, Antalya 4.44%)</strong>, while Marmara drives 55.73% of avoidable volume (627 returns). Off-diagonal Pearson correlations are negligible (<code>|r| ≤ 0.020</code>), confirming linear discount depth or order hour alone does not establish causation."
      ],
      recommendations: [
        "<strong>Pillar 01 — Pre-Dispatch Expiry & Packaging Audits (High Priority):</strong> Implement dark-store expiry verification before dispatch to address Expired Date (13.87%) and audit container/seal integrity in Household Cleaning, Bakery, and Beverages.",
        "<strong>Pillar 02 — Picking Accuracy & Late-Shift Review (High/Medium Priority):</strong> Enforce barcode/SKU checks at packing to target the 249 picking errors (22.13%) and review Late Night (9 PM–12 AM) and Evening dispatch workflows.",
        "<strong>Pillar 03 — 21–25% Discount SKU Review (Medium Priority):</strong> Audit the specific products and stock condition in the 21–25% discount band (5.03% avoidable) and Medium price quintile (4.02%) before altering promotional rules.",
        "<strong>Pillar 04 — Preserve Uniform Customer Return Policies:</strong> Because loyalty segments differ by only 0.13 pp (3.69%–3.82%), do not tighten customer return policies; prioritise operational investigations in Mediterranean and high-volume Marmara while gathering larger sample sizes for Black Sea (258 records; 7 avoidable returns)."
      ],
      scopeLimitationsTitle: "07 // Scope & Methodological Disclosures",
      scopeLimitations: [
        "<strong>Project & Reporting Period:</strong> January 2021 – June 2026 (Dataset <code>OrderDate</code> coverage: January 1, 2021 – June 1, 2026).",
        "<strong>Dataset Scope:</strong> 30,271 consolidated order-product records across 10,000 unique orders, 1,000 customers, 100 SKUs, 10 categories, and 5 regions (10 cities).",
        "<strong>Dataset Provenance:</strong> External live operational provenance of the supplied graduation project dataset is unspecified; all metrics reflect structured analysis of the provided relational workbook.",
        "<strong>Observational & Inferential Boundaries:</strong> Descriptive subgroup comparisons and Pearson correlations (all off-diagonal <code>|r| ≤ 0.020</code>) capture observational patterns and do not establish causation or formal statistical significance.",
        "<strong>Subgroup Sample-Size Caution:</strong> Smaller analytical slices—such as the Black Sea operating region (258 total records; 7 avoidable returns) and narrow discount bands (21–25%: 577 records)—require sample-size caution before operational generalisation."
      ]
    }
  },

  projects: [
    {
      id: "project-02-swiggy",
      number: "PROJECT 02 // WEB ANALYTICS & BI",
      title: "Swiggy Traffic Analysis Dashboard",
      period: "July – October (Reporting Window)",
      filterTags: ["tableau"],
      tools: ["Tableau", "Data Analysis"],
      summary:
        "Multi-dimensional website traffic and acquisition funnel investigation covering July to October, evaluating session volume, conversion efficiency, bounce rates, traffic sources, device split, and landing-page performance.",
      image: "assets/images/swiggy-traffic-architecture.png",
      imageCaption: "Project 02: Swiggy Traffic Analysis Dashboard Architecture (July – October) — Replaceable in js/content.js.",
      schematicLeftLabel: "ANALYTICAL DIMENSIONS",
      schematicRightLabel: "TABLEAU TELEMETRY",
      dimensions: [
        "Sessions",
        "Conversion Rate",
        "Bounce Rate",
        "Avg. Session Duration",
        "Traffic Sources",
        "Device Distribution",
        "Geographical Analysis",
        "New vs. Returning Visitors",
        "Landing-Page Performance"
      ],
      caseStudyBlocks: [
        {
          heading: "Business Problem & Objective",
          body: "Evaluated July–October website traffic to understand how traffic sources, device segments, geographical regions, and landing pages influence conversion rate, bounce rate, and average session duration across new and returning visitors."
        },
        {
          heading: "Analytical Methodology & Recommendations",
          body: "Built a Tableau dashboard tracking session cohorts, channel conversion efficiency, and high-bounce entry pages to guide landing-page UX optimisation and marketing channel reallocation."
        }
      ],
      tableauUrl: "",
      githubUrl: ""
    },
    {
      id: "project-03-fraud",
      number: "PROJECT 03 // FINANCIAL RISK & FRAUD ANALYTICS",
      title: "Credit Card Fraud Detection Analysis",
      period: "Analytical Risk Case Study",
      filterTags: ["sql", "excel", "tableau"],
      tools: ["SQL", "Excel", "Tableau"],
      summary:
        "Financial risk investigation examining fraudulent credit card transaction trends, transaction amount distributions, high-risk anomalies, and rule-based risk-mitigation recommendations.",
      image: "assets/images/credit-fraud-architecture.png",
      imageCaption: "Project 03: Credit Card Fraud Detection Analytical Architecture — Replaceable in js/content.js.",
      schematicLeftLabel: "FRAUD INVESTIGATION MODULES",
      schematicRightLabel: "SQL • EXCEL • TABLEAU",
      dimensions: [
        "Fraud Trend Analysis",
        "Transaction Distribution",
        "Fraud-Related KPIs",
        "SQL Analytical Investigation",
        "Dashboard Visualisation",
        "Risk-Mitigation Rules"
      ],
      caseStudyBlocks: [
        {
          heading: "Business Problem & SQL Investigation",
          body: "Used SQL filtering, conditional aggregations, and velocity segmentation to profile high-risk transaction buckets while minimizing false positives on legitimate cardholders."
        },
        {
          heading: "Dashboard Visualisation & Risk Mitigation",
          body: "Validated transaction value distributions in Excel and built Tableau risk monitoring views to recommend step-up verification triggers on anomalous transaction bands."
        }
      ],
      tableauUrl: "",
      githubUrl: ""
    },
    {
      id: "project-04-loan",
      number: "PROJECT 04 // CREDIT UNDERWRITING ANALYTICS",
      title: "Loan Approval Analysis",
      period: "Credit Decisioning Case Study",
      filterTags: ["sql", "excel", "tableau"],
      tools: ["SQL", "Excel", "Tableau"],
      summary:
        "Credit underwriting and lending decision analysis investigating applicant income tiers, credit history impact, demographic segments, approval rates, and lending trends.",
      image: "assets/images/loan-approval-architecture.png",
      imageCaption: "Project 04: Loan Approval & Underwriting Analytical Architecture — Replaceable in js/content.js.",
      schematicLeftLabel: "UNDERWRITING DIMENSIONS",
      schematicRightLabel: "SQL • EXCEL • TABLEAU",
      dimensions: [
        "Loan Approval Analysis",
        "Applicant Income Analysis",
        "Credit History Impact",
        "Demographic Analysis",
        "Approval Rate KPIs",
        "Lending Recommendations"
      ],
      caseStudyBlocks: [
        {
          heading: "Domain Context & Underwriting Scope",
          body: "Grounded in practical mortgage credit analysis experience, this project examines how applicant income, credit bureau history, and demographic attributes interact to influence loan approval outcomes."
        },
        {
          heading: "Analytical Recommendations",
          body: "Formulated tiered credit-screening guidelines combining credit history compliance and income-to-loan thresholds to accelerate prime approvals and standardise manual exception reviews."
        }
      ],
      tableauUrl: "",
      githubUrl: ""
    },
    {
      id: "project-05-amazon",
      number: "PROJECT 05 // ENTERPRISE SQL & E-COMMERCE STRATEGY",
      title: "Amazon India Strategic Analysis",
      period: "Strategic PostgreSQL Case Study",
      filterTags: ["sql", "ba"],
      tools: ["SQL", "PostgreSQL", "Business Analysis"],
      summary:
        "Relational database investigation of e-commerce sales performance, customer cohorts, product category revenue, and year-over-year growth using advanced PostgreSQL techniques.",
      image: "assets/images/amazon-india-sql-architecture.png",
      imageCaption: "Project 05: Amazon India PostgreSQL Analytical Architecture — Replaceable in js/content.js.",
      schematicLeftLabel: "POSTGRESQL ANALYTICAL TECHNIQUES",
      schematicRightLabel: "RELATIONAL ANALYSIS",
      dimensions: [
        "Multi-Table Joins",
        "Aggregations",
        "Common Table Expressions (CTEs)",
        "Subqueries",
        "Window Functions",
        "GROUP BY & HAVING",
        "YoY Revenue Growth"
      ],
      caseStudyBlocks: [
        {
          heading: "Business Problem & Relational SQL Architecture",
          body: "Structured transactional e-commerce tables in PostgreSQL using multi-table INNER/LEFT JOINs, modular CTEs, and HAVING filters to evaluate regional revenue contribution and repeat customer cohorts."
        },
        {
          heading: "Window Functions & Commercial Insights",
          body: "Applied <code>DENSE_RANK()</code> for Top-N SKU performance within each category and <code>LAG()</code> window functions to quantify year-over-year category growth and seasonal momentum."
        }
      ],
      tableauUrl: "",
      githubUrl: ""
    },
    {
      id: "project-06-spotify-brd",
      number: "PROJECT 06 // PRODUCT & SYSTEMS SPECIFICATION",
      title: "Spotify Business Requirements Document",
      period: "Business Analysis Deliverable",
      filterTags: ["ba"],
      tools: ["BRD", "Requirements Gathering", "KPI Design"],
      summary:
        "End-to-end Business Requirements Document translating user engagement challenges into structured stakeholder, functional, and non-functional specifications with measurable product KPIs.",
      image: "assets/images/spotify-brd-architecture.png",
      imageCaption: "Project 06: Spotify Business Requirements Document (BRD) Architecture — Replaceable in js/content.js.",
      schematicLeftLabel: "BRD SPECIFICATION COMPONENTS",
      schematicRightLabel: "BUSINESS ANALYSIS",
      dimensions: [
        "Business Problem",
        "Stakeholder Requirements",
        "User Requirements",
        "Functional Requirements",
        "Non-Functional Requirements",
        "KPIs & Success Metrics"
      ],
      caseStudyBlocks: [
        {
          heading: "Structured Requirements Methodology",
          body: "Defined clear problem statements, stakeholder RACI alignment, user requirements with acceptance criteria, functional workflows, system latency/availability NFRs, and post-launch adoption and retention KPIs."
        }
      ],
      tableauUrl: "",
      githubUrl: ""
    },
    {
      id: "project-07-spotify-market",
      number: "PROJECT 07 // MARKET SIZING & GROWTH STRATEGY",
      title: "Spotify Music Streaming Market Analysis – India",
      period: "Strategic Market Analysis",
      filterTags: ["ba"],
      tools: ["Market Sizing", "TAM Analysis", "Growth Strategy"],
      summary:
        "Strategic market sizing and growth opportunity assessment of the Indian audio streaming ecosystem, evaluating mobile-first user adoption and top-down addressable market funnels.",
      image: "assets/images/spotify-india-market-architecture.png",
      imageCaption: "Project 07: Spotify India Market Sizing & TAM Architecture — Replaceable in js/content.js.",
      schematicLeftLabel: "MARKET SIZING ARCHITECTURE",
      schematicRightLabel: "STRATEGIC ANALYSIS",
      dimensions: [
        "Total Addressable Market (TAM)",
        "Top-Down Market Sizing",
        "Year-over-Year Growth",
        "Mobile-First User Adoption",
        "Market Opportunity Analysis"
      ],
      caseStudyBlocks: [
        {
          heading: "Top-Down Market Sizing & Mobile-First Opportunity",
          body: "Segmented India's internet and smartphone penetration cohorts to estimate Total Addressable Market (TAM), analyzing regional vernacular catalogue consumption, freemium-to-paid conversion drivers, and YoY streaming expansion."
        }
      ],
      tableauUrl: "",
      githubUrl: ""
    },
    {
      id: "project-08-flipkart",
      number: "PROJECT 08 // CX OPERATIONS & RETENTION ANALYTICS",
      title: "Flipkart Customer Service Retention Analysis",
      period: "Operational Retention Case Study",
      filterTags: ["excel", "ba"],
      tools: ["Metric Tree", "EDA", "Excel Dashboard"],
      summary:
        "Root-cause investigation linking customer support service KPIs with repeat purchase retention through structured metric trees, exploratory data analysis, and an interactive Microsoft Excel dashboard.",
      image: "assets/images/flipkart-retention-architecture.png",
      imageCaption: "Project 08: Flipkart Customer Service Retention Metric Tree & Excel Architecture — Replaceable in js/content.js.",
      schematicLeftLabel: "RETENTION & SERVICE KPI MODULES",
      schematicRightLabel: "EXCEL • METRIC TREE",
      dimensions: [
        "Metric Tree",
        "Exploratory Data Analysis",
        "Customer Retention",
        "Service KPIs",
        "Excel Dashboard",
        "Business Recommendations"
      ],
      caseStudyBlocks: [
        {
          heading: "Metric Tree Decomposition & CX Recommendations",
          body: "Decomposed customer churn drivers into first-contact resolution (FCR), resolution turnaround time, and delivery escalation rates, presenting actionable operational improvements via an interactive Microsoft Excel dashboard."
        }
      ],
      tableauUrl: "",
      githubUrl: ""
    }
  ],

  experience: [
    {
      role: "Business Analyst Fellow",
      company: "NextLeap",
      period: "June 2026 – Present",
      highlights: [
        "Business and product case studies.",
        "Structured problem-solving.",
        "Business Requirement Documents (BRDs).",
        "Functional and non-functional requirements.",
        "Product metrics and KPIs.",
        "Analytical dashboards using SQL, Excel and Tableau.",
        "Actionable business insights."
      ]
    },
    {
      role: "Associate Financial Analyst",
      company: "XL Dynamics India Pvt. Ltd.",
      period: "December 2020 – August 2024",
      highlights: [
        "Financial and credit analysis for US mortgage applications.",
        "Borrower income, asset, liability and credit history assessments.",
        "Lending guideline compliance (FNMA/FHLMC & banking regulations).",
        "SQL-based operational data analysis and validation.",
        "Microsoft Excel-based reporting and KPI monitoring.",
        "Root cause investigation.",
        "Operational reporting and process improvement.",
        "Data validation and quality assurance.",
        "Team coordination and SLA monitoring."
      ]
    },
    {
      role: "Aircraft Maintenance & Operations Intern",
      company: "Air India Limited",
      period: "December 2018 – January 2019",
      highlights: [
        "Assisted with aircraft maintenance and inspections.",
        "Worked with Boeing aircraft.",
        "Developed knowledge of precision engineering and compliance procedures."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering – Aeronautical Engineering",
      institution: "Annasaheb Dange College of Engineering",
      year: "2020"
    },
    {
      degree: "Diploma – Mechanical Engineering",
      institution: "Government Polytechnic Miraj",
      year: "2017"
    }
  ]
};
