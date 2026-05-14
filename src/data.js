export const profile = {
  name: "Vikash Raj",
  title: "Senior Salesforce Vlocity Developer & Consultant",
  company: "IdeaHelix",
  location: "Electronic City, Bangalore, 560100",
  email: "vikashr370@gmail.com",
  phone: "+91 9057257152",
  phone2: "+91 9529284466",
  linkedin: "https://www.linkedin.com/in/vikashraj-a12489119/",
  trailblazer: "https://trailblazer.me/id/vikash-raj",
  languages: ["English", "Hindi"],
  about: [
    "Accomplished and ambitious Software Engineer with 6+ years of hands-on experience in Telecom, Media Cloud, Insurance, and Salesforce Industry Cloud domains. Currently working as a Senior Salesforce Vlocity Developer at IdeaHelix, Bangalore.",
    "In a leadership role, I manage a team of three Salesforce developers, driving high-quality delivery and fostering a collaborative, agile development environment. I'm a Trailhead Ranger with deep expertise in Salesforce Vlocity, Industry CPQ, Vlocity Order Management, CLM, EPC, and Lightning Web Components.",
    "I bring strong capabilities in architecting scalable Apex frameworks, configuring complex product catalogues (2000+ products), building 500+ Order Management solutions, and delivering end-to-end CPQ and Quote-to-Cash flows across multiple industry verticals.",
  ],
  stats: [
    { num: "6+", label: "Years Experience" },
    { num: "9", label: "Certifications" },
    { num: "500+", label: "OM Tasks Delivered" },
    { num: "2000+", label: "Products Configured" },
  ],
};

export const skills = [
  {
    category: "Vlocity / OmniStudio",
    tags: [
      "OmniStudio", "OmniScript", "DataRaptor", "Integration Procedures",
      "FlexCards", "Vlocity CPQ", "Vlocity EPC", "Vlocity CLM",
      "Order Management", "Calculation Procedures", "Calculation Matrices", "Vlocity Actions",
    ],
  },
  {
    category: "Salesforce Platform",
    tags: [
      "Apex Classes", "Apex Triggers", "SOQL / SOSL", "LWC",
      "Aura Components", "Visualforce", "Flows", "Process Builder",
      "Profiles & Permission Sets", "Validation Rules", "Flexi Pages",
    ],
  },
  {
    category: "Industry Clouds",
    tags: [
      "Communications Cloud", "Revenue Cloud", "Energy & Utility Cloud",
      "Media Cloud", "Industry CPQ", "Agentforce", "Experience Cloud", "Customer360",
    ],
  },
  {
    category: "DevOps & Tools",
    tags: [
      "Copado", "Git / Git Bash", "Visual Studio Code", "Workbench",
      "JIRA", "Apex PMD", "Salesforce CLI", "package.xml",
    ],
  },
  {
    category: "Integrations & Web",
    tags: [
      "REST / SOAP APIs", "Apex Integrations", "MuleSoft",
      "JavaScript", "JSON / XML", "HTML5", "CSS3", "Java", "Microsoft Azure", "AWS",
    ],
  },
  {
    category: "Revenue Cloud (ARM)",
    tags: [
      "PCM Product Modelling", "Quote-to-Cash", "Billing Schedule",
      "Legal Entity Setup", "Billing Policy", "Invoice Scheduler",
      "Payment Terms", "Tax Terms", "Order-to-Cash",
    ],
  },
];

export const experience = [
  {
    company: "IdeaHelix",
    role: "Senior Vlocity Developer",
    period: "Aug 2025 – Present",
    clients: [
      {
        name: "REV",
        period: "Aug 2025 – Present",
        domain: "Telecommunication Domain",
        bullets: [
          "End-to-end CPQ journey using ESM: Lead Convert → Account/Opportunity → Quote → Locations/Subscribers → Master Orders/Suborders → Contract via CLM",
          "Architected configurable Apex round-robin framework for automatic record assignment across Opportunities, Leads, Cases, and custom entities with audit logging",
          "Deep work on Vlocity OmniScript, Order Management, DataRaptor, Integration Procedures, CLM, Industry CPQ, EPC, Calculation Procedures & Matrices",
        ],
        tags: ["OmniScript", "Order Management", "Industry CPQ", "Vlocity CLM", "Vlocity EPC", "Apex"],
      },
      {
        name: "Bill",
        period: "Sept 2025 – Present",
        domain: "Revenue Cloud / Salesforce ARM",
        bullets: [
          "Led PCM-based product & offer modelling: product hierarchies, bundles, attributes, and dependencies",
          "Implemented Industry CPQ for guided selling, pricing, discounts, and rule-based configurations",
          "Configured Billing Schedules (one-time, recurring, milestone), Legal Entities, Billing Policies, Invoice Schedulers, Payment Terms, and Tax Terms",
          "Supported full Q2C flow: quote creation → contract → order → fulfillment → billing → asset lifecycle",
        ],
        tags: ["Revenue Cloud", "ARM", "PCM", "Industry CPQ", "Billing", "Q2C"],
      },
    ],
  },
  {
    company: "Triarit Private Limited",
    role: "Salesforce Industries Developer",
    period: "Dec 2021 – Jul 2025",
    clients: [
      {
        name: "M1 Singapore",
        period: "Aug 2023 – Aug 2025",
        domain: "Telecommunication Domain — Team Lead (3 developers)",
        bullets: [
          "Led 500+ Order Management tasks: Decomposition relationships, Orchestration Plan/Item Definitions, Auto Task, Manual Task, Callouts, Milestone, Push Events, and Subplans",
          "Built end-to-end flows from start to Nokia/Billing/MuleSoft callouts through to Assetize for both New Connect and After Sales flows",
          "Configured 2000+ products in Vlocity EPC: attributes, bindings, picklists, price lists, and advanced attribute-based pricing",
          "Built Context Rules for cart product visibility and Advanced Rules for product relationships (Relies On, Requires, Exclude, Auto Add/Remove/Replace)",
          "Delivered 1000+ page CLM document templates for Quote and Contract Proposals",
        ],
        tags: ["Team Lead", "Order Management", "Vlocity EPC", "CLM", "Industry CPQ", "Integration Procedures"],
      },
      {
        name: "Synergy",
        period: "Dec 2024 – May 2025",
        domain: "Energy & Utility Cloud — Experience Cloud",
        bullets: [
          "Delivered OmniScript, DataRaptor, CLM, EPC, Integration Procedures, and Calculation Matrices on the Energy & Utility domain",
        ],
        tags: ["Energy & Utility Cloud", "Experience Cloud", "Industry CPQ"],
      },
      {
        name: "Liberty Latin America",
        period: "Oct 2022 – Dec 2023",
        domain: "Telecommunication — Experience Cloud",
        bullets: [
          "Built and configured the Vodafone Butterfly Enterprise Sales Application for community and Salesforce users",
          "CPQ configuration: product setup, attribute bindings, price lists, pricing plans, and layout management",
          "Developed Apex classes, triggers, test classes, LWC components, flows, and validation rules",
          "Managed Copado deployments end-to-end for Salesforce and Vlocity components",
        ],
        tags: ["Vlocity CPQ", "Experience Cloud", "LWC", "Copado", "Apex"],
      },
      {
        name: "PLDT Malaysia",
        period: "Dec 2021 – Oct 2022",
        domain: "Telecommunication — Experience Cloud",
        bullets: [
          "PLDT Application development using OmniScript, DataRaptor, CLM, EPC, Customer360, Integration Procedures, and Calculation Matrices",
          "CPQ product configuration, attribute bindings, picklist setups, and CMT Administration job runs",
        ],
        tags: ["Vlocity CPQ", "Customer360", "DataRaptor", "Copado"],
      },
    ],
  },
  {
    company: "Accenture Technology",
    role: "Salesforce Vlocity Developer",
    period: "Aug 2019 – Dec 2021",
    clients: [
      {
        name: "AXA Digital",
        period: "Aug 2019 – Dec 2021",
        domain: "Insurance / Health Cloud — Experience Cloud",
        bullets: [
          "Leveraged OmniScript, DataRaptor, and Customer360 to enhance Experience Cloud for optimized health cloud solutions",
          "Developed Apex classes, triggers, and LWC components to integrate Bank Validation tools and SemaPhone",
          "Managed Flexi Pages, Profiles, Permission Sets, and comprehensive Salesforce development activities",
          "End-to-end Copado deployments using VS Code, Git Bash, and other tooling in an Agile environment",
        ],
        tags: ["Health Cloud", "OmniScript", "Customer360", "LWC", "Apex", "Copado"],
      },
    ],
  },
];

export const certifications = [
  { name: "Revenue Cloud Consultant", icon: "💰" },
  { name: "Certified OmniStudio Developer", icon: "🔧" },
  { name: "Certified OmniStudio Consultant", icon: "👥" },
  { name: "Certified Industry CPQ Developer", icon: "📈" },
  { name: "Certified Platform Developer II", icon: "⚡" },
  { name: "Certified Platform Developer I", icon: "💻" },
  { name: "Certified Administrator (ADM 201)", icon: "🌟" },
  { name: "Agentforce Specialist", icon: "🤖" },
  { name: "Telecommunication Cloud", icon: "📡" },
];

export const education = [
  {
    year: "2015 – 2019",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Jaipur Engineering College & Research Centre, Rajasthan Technical University, Jaipur",
    score: "68% Aggregate",
  },
  {
    year: "2015",
    degree: "Intermediate (Class XII)",
    field: "",
    institution: "DR. C.P. Thakur College, Patna, Bihar",
    score: "71.8%",
  },
  {
    year: "2013",
    degree: "High School (Class X)",
    field: "",
    institution: "Collegiate High School, Patna, Bihar",
    score: "76.4%",
  },
];
