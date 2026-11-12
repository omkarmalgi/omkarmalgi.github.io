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
      filterTags, tools, summary, images, caseStudyBlocks, tableauUrl,
      githubUrl, and resources). `images` supports actual dashboard/document
      previews; `resources` adds direct download links for project deliverables.
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
    githubUrl: "https://github.com/omkarmalgi/getir-quick-commerce-returns-analysis",
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
        "<strong>Dataset Provenance:</strong> The project dataset was supplied through the NextLeap Business Analyst Fellowship. The analysis is an independent portfolio exercise and is not verified Getir internal reporting.",
        "<strong>Observational & Inferential Boundaries:</strong> Descriptive subgroup comparisons and Pearson correlations (all off-diagonal <code>|r| ≤ 0.020</code>) capture observational patterns and do not establish causation or formal statistical significance.",
        "<strong>Subgroup Sample-Size Caution:</strong> Smaller analytical slices—such as the Black Sea operating region (258 total records; 7 avoidable returns) and narrow discount bands (21–25%: 577 records)—require sample-size caution before operational generalisation."
      ]
    }
  },

  projects: [
    {
        "id": "project-02-swiggy",
        "number": "PROJECT 02 // WEBSITE PERFORMANCE & WEB ANALYTICS",
        "title": "Swiggy Website Performance Analysis",
        "period": "July–October 2024 | Tableau Dashboard",
        "filterTags": [
            "tableau",
            "excel",
            "ba"
        ],
        "tools": [
            "Tableau",
            "Website Analytics",
            "Data Analysis"
        ],
        "summary": "A session-level website performance analysis covering traffic acquisition, visitor behaviour, geographic distribution, landing pages and conversion performance. The dashboard reports 30,110 sessions across the July–October 2024 reporting window.",
        "images": [
            {
                "src": "assets/images/swiggy-website-performance-dashboard.png",
                "alt": "Swiggy Website Performance Dashboard showing sessions, conversion rate, bounce rate, session duration, traffic trends, geography and traffic sources.",
                "label": "Actual Tableau dashboard",
                "caption": "Swiggy Website Performance Dashboard — July to October 2024."
            }
        ],
        "caseStudyBlocks": [
            {
                "heading": "Dashboard KPIs",
                "body": "The published dashboard displays <strong>30,110 total sessions</strong>, a <strong>45.6% conversion rate</strong>, a <strong>22.7% bounce rate</strong> and <strong>5.50 minutes</strong> average session duration."
            },
            {
                "heading": "Traffic & Page-Level Observations",
                "body": "The dashboard attributes 15,007 sessions to Organic, 8,957 to Direct, 3,104 to Paid and 3,042 to Referral. The Homepage records 15,134 sessions, followed by Product Page (6,006), Blog (3,106), Contact Us (2,945) and Checkout (2,919)."
            },
            {
                "heading": "Dataset & Deliverable",
                "body": "The supplied session dataset contains 10,000 rows and 15 columns. The work is presented through a Tableau dashboard and a published Tableau Public view. The displayed KPI totals are dashboard aggregations, not the raw row count."
            }
        ],
        "tableauUrl": "https://public.tableau.com/app/profile/omkar.malgi/viz/SwiggyTrafficAnalysisDashboard_17889819421700/TrafficDashboard",
        "githubUrl": "https://github.com/omkarmalgi/other-business-analyst-projects/tree/main/swiggy-website-performance-analysis",
        "resources": [
            {
                "label": "Download Dashboard Screenshot",
                "url": "assets/images/swiggy-website-performance-dashboard.png",
                "download": true
            }
        ]
    },
    {
        "id": "project-03-fraud",
        "number": "PROJECT 03 // FINANCIAL RISK & FRAUD ANALYTICS",
        "title": "Credit Card Fraud Detection Analysis",
        "period": "Anonymised Credit Card Transaction Dataset",
        "filterTags": [
            "sql",
            "excel",
            "tableau"
        ],
        "tools": [
            "MySQL",
            "Microsoft Excel",
            "Tableau"
        ],
        "summary": "A business-focused fraud analytics project using anonymised credit card transactions to compare genuine and fraudulent activity, examine transaction amounts and present fraud-monitoring KPIs through Excel and Tableau dashboards.",
        "images": [
            {
                "src": "https://raw.githubusercontent.com/omkarmalgi/credit-card-fraud-detection-analysis/main/Dashboards/tableau_dashboard.png",
                "alt": "Actual Tableau dashboard preview from the Credit Card Fraud Detection Analysis repository.",
                "label": "Tableau dashboard",
                "caption": "Credit Card Fraud Detection — Tableau dashboard preview."
            },
            {
                "src": "https://raw.githubusercontent.com/omkarmalgi/credit-card-fraud-detection-analysis/main/Dashboards/excel_dashboard.jpg",
                "alt": "Actual Excel dashboard preview from the Credit Card Fraud Detection Analysis repository.",
                "label": "Excel dashboard",
                "caption": "Credit Card Fraud Detection — Excel dashboard preview."
            }
        ],
        "caseStudyBlocks": [
            {
                "heading": "Dataset & Business Questions",
                "body": "The dataset uses anonymised transaction features: <code>Time</code>, <code>V1–V28</code>, <code>Amount</code> and <code>Class</code> (0 = genuine, 1 = fraud). The analysis addresses fraud frequency, genuine-versus-fraud comparison, transaction value distributions and fraud-related transaction value."
            },
            {
                "heading": "SQL Analysis & Visualisation",
                "body": "The repository contains SQL analysis for total transactions, fraud counts and percentage, transaction amount statistics, fraud transaction values, amount segmentation and business summary metrics. Excel and Tableau dashboards present the resulting KPIs and patterns."
            },
            {
                "heading": "Tools & Scope",
                "body": "The existing project documentation identifies MySQL, Microsoft Excel and Tableau as the tools used. This portfolio card describes the contents of the submitted project; it does not claim a production fraud-detection model or measured reduction in fraud losses."
            }
        ],
        "tableauUrl": "",
        "githubUrl": "https://github.com/omkarmalgi/credit-card-fraud-detection-analysis",
        "resources": [
            {
                "label": "Download SQL Analysis",
                "url": "https://github.com/omkarmalgi/credit-card-fraud-detection-analysis/raw/refs/heads/main/SQL/Credit%20Card%20Fraud%20Analysis.sql",
                "download": true
            },
            {
                "label": "Download Tableau Dashboard Image",
                "url": "https://github.com/omkarmalgi/credit-card-fraud-detection-analysis/raw/refs/heads/main/Dashboards/tableau_dashboard.png",
                "download": true
            },
            {
                "label": "Download Excel Dashboard Image",
                "url": "https://github.com/omkarmalgi/credit-card-fraud-detection-analysis/raw/refs/heads/main/Dashboards/excel_dashboard.jpg",
                "download": true
            }
        ]
    },
    {
        "id": "project-04-loan",
        "number": "PROJECT 04 // CREDIT DECISIONING & LOAN ANALYTICS",
        "title": "Loan Approval Analysis",
        "period": "614 Loan Applications | Credit Decisioning Case Study",
        "filterTags": [
            "sql",
            "excel",
            "tableau"
        ],
        "tools": [
            "PostgreSQL",
            "Microsoft Excel",
            "Tableau"
        ],
        "summary": "An end-to-end loan application analysis using 614 records to study approval outcomes and compare applicant segments across credit history, education, marital status, income and property area.",
        "images": [
            {
                "src": "https://raw.githubusercontent.com/omkarmalgi/loan-approval-analysis/main/Dashboards/Tableau%20Dashboard.png",
                "alt": "Actual Tableau dashboard preview for the Loan Approval Analysis project.",
                "label": "Tableau dashboard",
                "caption": "Loan Approval Analysis — Tableau dashboard preview."
            },
            {
                "src": "https://raw.githubusercontent.com/omkarmalgi/loan-approval-analysis/main/Dashboards/Excel%20Dashboard.jpg",
                "alt": "Actual Excel dashboard preview for the Loan Approval Analysis project.",
                "label": "Excel dashboard",
                "caption": "Loan Approval Analysis — Excel dashboard preview."
            }
        ],
        "caseStudyBlocks": [
            {
                "heading": "Dataset & Primary KPI",
                "body": "The project analyses <strong>614 loan applications</strong>. The repository reports an overall loan approval rate of <strong>68.73%</strong> and includes applicant, co-applicant, loan, credit-history, education, marital-status and property-area fields."
            },
            {
                "heading": "Key Findings in the Project README",
                "body": "The documented analysis identifies credit history as the strongest factor associated with loan approval. Graduate applicants received more approvals than non-graduates, married applicants had higher approval counts, and semi-urban areas recorded the highest number of approved loans."
            },
            {
                "heading": "Deliverables & Tools",
                "body": "The existing repository includes an SQL analysis script, Excel and Tableau dashboard previews, a Tableau workbook and the cleaned dataset. The dashboard tracks approval KPIs and segment comparisons."
            }
        ],
        "tableauUrl": "",
        "githubUrl": "https://github.com/omkarmalgi/loan-approval-analysis",
        "resources": [
            {
                "label": "Download SQL Analysis",
                "url": "https://github.com/omkarmalgi/loan-approval-analysis/raw/refs/heads/main/SQL/Loan_Approval_Analysis.sql",
                "download": true
            },
            {
                "label": "Download Tableau Dashboard Image",
                "url": "https://github.com/omkarmalgi/loan-approval-analysis/raw/refs/heads/main/Dashboards/Tableau%20Dashboard.png",
                "download": true
            },
            {
                "label": "Download Excel Dashboard Image",
                "url": "https://github.com/omkarmalgi/loan-approval-analysis/raw/refs/heads/main/Dashboards/Excel%20Dashboard.jpg",
                "download": true
            }
        ]
    },
    {
        "id": "project-05-amazon",
        "number": "PROJECT 05 // POSTGRESQL & E-COMMERCE STRATEGY",
        "title": "Amazon Brazil Market Analysis — Strategic Report for Amazon India",
        "period": "NextLeap Business Analyst Fellowship | Milestone 4",
        "filterTags": [
            "sql",
            "ba"
        ],
        "tools": [
            "PostgreSQL",
            "SQL",
            "Excel",
            "Business Analysis"
        ],
        "summary": "A 30-page strategic analysis using the six NextLeap-provided Amazon Brazil project tables. PostgreSQL queries examine payment preferences, seasonal sales, product pricing, customer frequency, high-value customers and data quality, with recommendations discussed in an Amazon India context.",
        "images": [
            {
                "src": "assets/images/amazon-brazil-report-cover.png",
                "alt": "Cover page of Omkar Malgi's Amazon Brazil Market Analysis strategic report for Amazon India.",
                "label": "30-page report",
                "caption": "Amazon Brazil Market Analysis — original strategic report cover page."
            }
        ],
        "caseStudyBlocks": [
            {
                "heading": "Dataset & SQL Scope",
                "body": "The project dataset was provided by <strong>NextLeap</strong> and contains six relational tables: Customer Data, Orders, Order Items, Payments, Products and Sellers. The original SQL script is preserved as submitted."
            },
            {
                "heading": "Selected Findings from the Report",
                "body": "The report identifies credit cards as 73.9% of payment transactions; Spring seasonal sales at approximately BRL 4.21M; 3,140 customers with multiple orders; 614 records with missing or single-character category names; and approximately BRL 1.26M revenue for Beauty &amp; Health among the top five categories."
            },
            {
                "heading": "Recommendations & Context",
                "body": "Recommendations cover credit-card checkout, seasonal inventory and promotions, product-category data quality, customer retention, high-value customer programmes, high-performing categories and payment-method monitoring. Amazon India is the strategic case-study context; the analysis is based on NextLeap-provided Amazon Brazil project data, not Amazon internal records."
            }
        ],
        "tableauUrl": "",
        "githubUrl": "https://github.com/omkarmalgi/other-business-analyst-projects/tree/main/amazon-brazil-market-analysis",
        "resources": [
            {
                "label": "Download 30-page Report (PDF)",
                "url": "https://github.com/omkarmalgi/other-business-analyst-projects/raw/refs/heads/main/amazon-brazil-market-analysis/Amazon_Brazil_Market_Analysis_Report_By_Omkar_Malgi.pdf",
                "download": true
            },
            {
                "label": "Download Original SQL Script",
                "url": "https://github.com/omkarmalgi/other-business-analyst-projects/raw/refs/heads/main/amazon-brazil-market-analysis/Amazon_brazil.sql",
                "download": true
            }
        ]
    },
    {
        "id": "project-06-spotify-brd",
        "number": "PROJECT 06 // BUSINESS REQUIREMENTS & PRODUCT ANALYSIS",
        "title": "Spotify India — Business Requirements Document",
        "period": "9-page Business Requirements Document",
        "filterTags": [
            "ba"
        ],
        "tools": [
            "Business Analysis",
            "BRD",
            "Requirements & KPI Definition"
        ],
        "summary": "A business requirements case study focused on improving Spotify India user engagement and listening time. The 9-page BRD defines the business problem, project scope, stakeholder needs, functional and non-functional requirements, KPIs, success criteria, timeline and cost-benefit considerations.",
        "images": [
            {
                "src": "assets/images/spotify-india-brd-cover.png",
                "alt": "First page of the Spotify India Business Requirements Document prepared by Omkar Malgi.",
                "label": "Original BRD",
                "caption": "Spotify India Business Requirements Document — first page preview."
            }
        ],
        "caseStudyBlocks": [
            {
                "heading": "Business Problem & Project Scope",
                "body": "The BRD addresses how Spotify India could improve user engagement and listening time. It documents business drivers, project scope, current and proposed user processes, stakeholders and project considerations."
            },
            {
                "heading": "Requirements & Proposed KPIs",
                "body": "The document includes functional and non-functional requirements, success criteria and proposed KPI targets: average listening time +15%, user retention +10%, premium subscription conversion +5% and early-session drop-offs −20%. These are proposed targets, not measured outcomes."
            },
            {
                "heading": "Deliverable",
                "body": "The original 9-page Spotify India BRD is available as a downloadable PDF in the dedicated project repository. No separate prototype, implementation or production experiment is claimed."
            }
        ],
        "tableauUrl": "",
        "githubUrl": "https://github.com/omkarmalgi/spotify-india-brd-product-analysis",
        "resources": [
            {
                "label": "Download Spotify India BRD (PDF)",
                "url": "https://github.com/omkarmalgi/spotify-india-brd-product-analysis/raw/refs/heads/main/deliverables/Spotify%20India%20BRD.pdf",
                "download": true
            }
        ]
    },
    {
        "id": "project-07-spotify-market",
        "number": "PROJECT 07 // MARKET & COMPETITOR RESEARCH",
        "title": "Spotify India — Market & Competitor Analysis",
        "period": "3-slide Market Research Presentation",
        "filterTags": [
            "ba"
        ],
        "tools": [
            "Market Research",
            "Competitor Analysis",
            "PowerPoint"
        ],
        "summary": "A concise research presentation examining India's music-streaming landscape, competitors, consumer language preferences, competitor user experience, app-store review themes and product opportunity areas for Spotify India.",
        "images": [
            {
                "src": "assets/images/spotify-india-market-slide-1.png",
                "alt": "First slide of Omkar Malgi's Spotify India market and competitor analysis presentation.",
                "label": "Original presentation",
                "caption": "Spotify India Market & Competitor Analysis — first-slide preview."
            }
        ],
        "caseStudyBlocks": [
            {
                "heading": "Research Coverage",
                "body": "The 3-slide presentation covers the Indian music-streaming market landscape, competitor offerings including JioSaavn, Gaana, YouTube Music and Amazon Music, consumer language preferences, competitor UX observations and app-store review patterns."
            },
            {
                "heading": "Product Opportunity Areas",
                "body": "The presentation highlights playlist discovery, listening sessions, offline mode and regional-content engagement as areas for further product exploration."
            },
            {
                "heading": "Deliverable & Scope",
                "body": "The original PowerPoint presentation is available for direct download. This is a research presentation, not a user-tested prototype, TAM model or implemented product feature."
            }
        ],
        "tableauUrl": "",
        "githubUrl": "https://github.com/omkarmalgi/spotify-india-brd-product-analysis",
        "resources": [
            {
                "label": "Download Market Analysis (PPTX)",
                "url": "https://github.com/omkarmalgi/spotify-india-brd-product-analysis/raw/refs/heads/main/deliverables/Spotify%20Market%20%26%20Competitor%20Analysis.pptx",
                "download": true
            }
        ]
    },
    {
        "id": "project-08-flipkart",
        "number": "PROJECT 08 // CUSTOMER SERVICE & CX ANALYTICS",
        "title": "Flipkart Customer Service Analysis",
        "period": "30,000 Customer Service Interactions",
        "filterTags": [
            "excel",
            "ba"
        ],
        "tools": [
            "Microsoft Excel",
            "PivotTables",
            "Business Analysis"
        ],
        "summary": "An analysis of 30,000 customer-service interactions covering satisfaction, customer sentiment, support-channel performance, call reasons, call-centre volumes, response rate and SLA compliance, supported by an Excel dashboard and a business analysis report.",
        "images": [
            {
                "src": "assets/images/flipkart-customer-service-dashboard.jpg",
                "alt": "Actual Flipkart Customer Service Dashboard showing 30,000 calls, 5.54 average CSAT, 25-minute average duration, 37% response rate and 62% SLA compliance.",
                "label": "Actual Excel dashboard",
                "caption": "Flipkart Customer Service Dashboard — actual project dashboard screenshot."
            }
        ],
        "caseStudyBlocks": [
            {
                "heading": "Dashboard KPIs",
                "body": "The dashboard reports <strong>30,000 total calls</strong>, <strong>5.54 average CSAT</strong>, <strong>25.0-minute average duration</strong>, a <strong>37% response rate</strong> and <strong>62% SLA compliance</strong>."
            },
            {
                "heading": "Customer Service Patterns",
                "body": "Billing Questions account for <strong>72%</strong> of calls, while Payments and Service Outage each account for <strong>14%</strong>. The dashboard compares customer sentiment and average CSAT across Call-Center, Chatbot, Email and Web channels, with filters for channel, call centre and reason."
            },
            {
                "heading": "Analysis Scope & Limitation",
                "body": "The report documents five business hypotheses and operational recommendations. The supplied project does not directly track repeat purchases or observed churn; customer satisfaction and sentiment should not be presented as measured customer-retention outcomes."
            }
        ],
        "tableauUrl": "",
        "githubUrl": "https://github.com/omkarmalgi/other-business-analyst-projects/tree/main/flipkart-customer-service-analysis",
        "resources": [
            {
                "label": "Download Analysis Report (PDF)",
                "url": "https://github.com/omkarmalgi/other-business-analyst-projects/raw/refs/heads/main/flipkart-customer-service-analysis/Flipkart_Customer_Service_Analysis_Report.pdf",
                "download": true
            },
            {
                "label": "Download Dashboard Screenshot",
                "url": "assets/images/flipkart-customer-service-dashboard.jpg",
                "download": true
            }
        ]
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
