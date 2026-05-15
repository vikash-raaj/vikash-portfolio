export const profile = {
  name: "Vikash Raj",
  title: "Senior Salesforce Vlocity Developer & Consultant",
  company: "IdeaHelix",
  location: "Electronic City, Bangalore, 560100",
  email: "vikashr370@gmail.com",
  phone: "+91 9057257152",
  phone2: "+91 9529284466",
  linkedin: "https://www.linkedin.com/in/vikash-raj-a12489119/",
  trailblazer: "https://trailblazer.me/id/vikash-raj",
  gitHub: "https://github.com/vikash-raaj",
  languages: ["English", "Hindi"],
  about: [
    "An energetic, self-motivated individual with the ability to grasp new technical concepts and utilize them in a productive manner. Accomplished and ambitious Software Engineer with around 6+ years of working experience in Telecom, Media Cloud, Insurance, and Salesforce Industry Cloud domains.",
    "In a leadership role, I manage a team of three Salesforce developers, driving high-quality delivery and fostering a collaborative, agile development environment.",
    "Bachelor of Technology in Computer Science & Engineering. Expertise in Salesforce development with extensive experience in Salesforce Vlocity, Salesforce Industry CPQ, Vlocity Order Management, CLM, EPC, Vlocity CPQ, Apex Classes, Apex Triggers, SOQL, SOSL, Customer360, Lightning Web Components, Lightning Aura Components, Salesforce Admin, Salesforce Sales Cloud, AWS, and Copado. Experienced in designing, developing & deploying applications using the Agile SDLC and Copado process. Trailhead Ranger. Cooperative team leader and team player with a positive attitude.",
  ],
  stats: [
    { num: "10+", label: "Project Delivered" },
    { num: "7+", label: "Years Experience" },
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
          "Working as Senior Salesforce Vlocity Developer leveraging: Vlocity OmniScript, Order Management, DataRaptor, Integration Procedures, CLM, Industry CPQ, EPC, Calculation Procedures, Calculation Matrices, and Vlocity Actions",
          "Delivering end-to-end CPQ journey using ESM: Lead Convert → Account & Opportunity creation → Quote creation → Upload Locations/Subscribers → Create Master Orders & Suborders → Contract & Contract Document via CLM",
          "Architected and implemented a configurable Apex framework for round-robin functionality enabling automatic record assignment across Opportunities, Leads, Cases, and custom entities",
          "Round-robin framework features: dynamic queue/user mapping, custom exception handling, assignment history logging for audit compliance, seamless integration with triggers, flows, and process automation",
          "Framework significantly reduced administrative overhead, improved assignment transparency, and increased operational efficiency across Sales and Service teams",
        ],
        tags: ["OmniScript", "Order Management", "Industry CPQ", "Vlocity CLM", "Vlocity EPC", "Calculation Procedures", "Calculation Matrices", "Apex"],
      },
      {
        name: "Bill",
        period: "Sept 2025 – Present",
        domain: "Revenue Cloud / Salesforce ARM — Order-to-Cash (O2C)",
        bullets: [
          "Working as Senior Salesforce Developer/Consultant on Salesforce ARM / Revenue Cloud, covering end-to-end Order-to-Cash (O2C) processes including implementation readiness, catalog setup, pricing, billing configuration, and orchestration",
          "Led PCM-based product and offer modelling: product hierarchies, bundles, attributes, and dependencies",
          "Implemented Industry CPQ for guided selling, pricing, discounts, and rule-based configurations",
          "Supported full Quote-to-Cash (Q2C) flow: quote creation → contract → order → fulfillment → billing → asset lifecycle management",
          "Configured Billing Schedules (one-time, recurring, and milestone-based)",
          "Set up Legal Entity configuration for multi-entity billing",
          "Configured Billing Policy, Billing Treatment, and Billing Treatment Items",
          "Set up Invoice Scheduler for automated invoice generation",
          "Configured Payment Terms, Payment Term Items, Tax Terms, and tax calculation alignment",
        ],
        tags: ["Revenue Cloud", "ARM", "PCM", "Industry CPQ", "Billing Schedule", "Legal Entity", "Invoice Scheduler", "Q2C", "O2C"],
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
          "Worked as Team Lead managing 3 Salesforce developers while serving as Senior Salesforce Vlocity Developer",
          "Skills used: Vlocity OmniScript, Order Management, DataRaptor, Integration Procedures, CLM, Industry CPQ, EPC, Calculation Procedures, Calculation Matrices, and Vlocity Actions",
          "Involved in 500+ Order Management tasks: configured Decomposition Relationships, Orchestration Plan Definitions, Orchestration Item Definitions (Callouts, Auto Task, Milestone, Manual Task, Push Event, Subplan)",
          "Built Orchestration Item dependencies with well-connected plans, delivering e2e flows from start through Nokia callout, Billing callout, MuleSoft callout to Assetize — covering New Connect and After Sales flows",
          "Worked on creating assets using all new connect orchestration OM processes; implemented OmniScript/Integration Procedure callouts for manual tasks and external system callouts via POST method",
          "Configured and designed 2000+ products in Vlocity EPC: attribute configurations, attribute bindings, picklist configurations, price lists, pricing variables, and pricing plan steps",
          "Implemented advanced pricing using OOTB/SFIX pricing plan steps for attribute-based pricing",
          "Built Context Rules for product visibility in cart based on account record type, region, or price list entries",
          "Configured Advanced Rules for product relationships: Relies On, Requires, Recommends, Exclude, Auto Add, Auto Remove, Auto Replace, and Modify Attributes",
          "Delivered end-to-end CPQ journey using ESM: Lead Convert → Account/Opportunity → Quote → Locations/Subscribers → Master Orders/Suborders → Contract via CLM",
          "Built Vlocity CLM document templates generating Quote Proposals and Contract Proposals exceeding 1000+ pages",
        ],
        tags: ["Team Lead", "Order Management", "Vlocity EPC", "CLM", "Industry CPQ", "Integration Procedures", "OmniScript", "DataRaptor"],
      },
      {
        name: "Synergy",
        period: "Dec 2024 – May 2025",
        domain: "Energy & Utility Cloud — Experience Cloud",
        bullets: [
          "Worked as Salesforce Vlocity Developer on Energy and Utility Cloud domain using Salesforce Industry Cloud and Experience Cloud",
          "Skills used: Vlocity OmniScript, DataRaptor, CLM, Industry CPQ, EPC, Integration Procedures, Calculation Procedures, Calculation Matrices, JSON, and Vlocity Actions",
        ],
        tags: ["Energy & Utility Cloud", "Experience Cloud", "Industry CPQ", "OmniScript", "DataRaptor"],
      },
      {
        name: "Liberty Latin America Spain",
        period: "Oct 2022 – Dec 2023",
        domain: "Telecommunication — Experience Cloud",
        bullets: [
          "Worked as Salesforce Vlocity Developer on Telecommunication Domain using Salesforce Industry Cloud and Experience Cloud",
          "Skills used: Vlocity OmniScript, DataRaptor, CLM, Industry CPQ, EPC, Integration Procedures, Calculation Procedures, Calculation Matrices, JSON, and Vlocity Actions",
          "Configured and designed new and existing products: product configuration, attribute configurations, attribute bindings, picklist configurations, price lists, pricing plans, and layout management; ran various jobs in Vlocity CMT Administration",
          "Designed and configured the Vodafone Butterfly Enterprise Sales Application for both community and Salesforce users",
          "Developed Apex Integrations, Apex Classes, Apex Triggers, Apex Test Classes, Process Builder Flows, Workflow Rules, Validation Rules, and LWC Components",
          "Performed Salesforce development activities: Flexi Pages, Page Layouts, Actions, Compact Layouts, Record Types, Profiles, Permission Sets, Sharing Settings",
          "Experienced in Copado for end-to-end deployments of Salesforce and Vlocity components using VS Code, Git Bash, Workbench, Salesforce Extension Pack, ForceCode, package.xml Generator, and Apex PMD",
          "Worked directly with the client following JIRA processes and performed unit testing for Salesforce and Vlocity components",
        ],
        tags: ["Vlocity CPQ", "Experience Cloud", "LWC", "Copado", "Apex", "JIRA"],
      },
      {
        name: "PLDT Malaysia",
        period: "Dec 2021 – Oct 2022",
        domain: "Telecommunication — Experience Cloud",
        bullets: [
          "Worked as Salesforce Vlocity Developer on PLDT Application using Experience Cloud with: Vlocity OmniScript, DataRaptor, CLM, EPC, Customer360, Integration Procedures, Calculation Procedures, Calculation Matrices, JSON, and Vlocity Actions",
          "Configured and designed new and existing products: product configuration, attribute configurations, attribute bindings, picklist configurations, price lists, pricing plans, and layout management; ran jobs in Vlocity CMT Administration",
          "Developed Apex Integrations, Apex Classes, Apex Triggers, Apex Test Classes, Process Builder Flows, Workflow Rules, Validation Rules, and LWC Components",
          "Performed Salesforce development activities: Flexi Pages, Page Layouts, Actions, Compact Layouts, Record Types, Profiles, Permission Sets, Sharing Settings",
          "Experienced in Copado for end-to-end Salesforce and Vlocity deployments using VS Code, Git Bash, Workbench, Salesforce Extension Pack, ForceCode, package.xml Generator, and Apex PMD",
          "Worked directly with the client following JIRA processes and performed unit testing for all components",
        ],
        tags: ["Vlocity CPQ", "Customer360", "DataRaptor", "EPC", "Copado", "LWC", "Apex"],
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
          "Leveraged Salesforce Vlocity to enhance Experience Cloud using OmniScript, DataRaptor, and Customer360 for optimized health cloud solutions",
          "Developed robust Apex Classes and Triggers alongside LWC Components to integrate Bank Validation tools and SemaPhone",
          "Executed comprehensive Salesforce development activities: Flexi Pages, Profiles, and Permission Sets",
          "Managed end-to-end Copado deployments for Salesforce and Vlocity using VS Code, Git Bash, and other tooling",
          "Collaborated with clients in an Agile environment, performing rigorous unit testing for Salesforce and Vlocity components",
        ],
        tags: ["Health Cloud", "OmniScript", "Customer360", "LWC", "Apex", "Copado", "Experience Cloud"],
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
  },
  {
    year: "2015",
    degree: "Intermediate (Class XII)",
    field: "",
    institution: "DR. C.P. Thakur College, Patna, Bihar",
  
  },
  {
    year: "2013",
    degree: "High School (Class X)",
    field: "",
    institution: "Collegiate High School, Patna, Bihar",
  },
];
