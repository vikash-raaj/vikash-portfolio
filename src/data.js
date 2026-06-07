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
  resume: "/Vikash_RevenueVlocityDev.pdf",
  languages: ["English", "Hindi"],
  about: [
    "Bachelor of Technology in Computer Science & Engineering. Expertise in Salesforce development with extensive experience in Salesforce Vlocity, Salesforce Industry CPQ, Vlocity Order Management, CLM, EPC, Vlocity CPQ, Apex Classes, Apex Triggers, SOQL, SOSL, Customer360, Lightning Web Components, Lightning Aura Components, Salesforce Admin, Salesforce Sales Cloud, AWS, and Copado. Experienced in designing, developing & deploying applications using the Agile SDLC and Copado process. Trailhead Ranger. Cooperative team leader and team player with a positive attitude.",
    "An energetic, self-motivated individual with the ability to grasp new technical concepts and utilize them in a productive manner. Accomplished and ambitious Software Engineer with around 6+ years of working experience in Telecom, Media Cloud, Insurance, and Salesforce Industry Cloud domains.",
    "In a leadership role, I manage a team of three Salesforce developers, driving high-quality delivery and fostering a collaborative, agile development environment.",
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
        name: "Bell",
        period: "Sept 2025 – 2025",
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
  {
    name: "Salesforce Certified Agentforce Specialist",
    category: "Agentforce", issued: "Jun 2025",
    badge: "https://www.salesforceben.com/wp-content/uploads/2024/08/Agentforce-Specialist.png",
  },
  {
    name: "Salesforce Certified OmniStudio Developer",
    category: "Industry Solutions", issued: "Jan 2023",
    badge: "https://www.salesforceben.com/wp-content/uploads/2023/10/Omnistudio-Developer.png",
  },
  {
    name: "Salesforce Certified OmniStudio Consultant",
    category: "Industry Solutions", issued: "Jun 2025",
    badge: "https://www.salesforceben.com/wp-content/uploads/2024/10/OmniStudio-Consultant-.webp",
  },
  {
    name: "Salesforce Certified Industries CPQ Developer",
    category: "Industry Solutions", issued: "Jan 2023",
    badge: "https://www.salesforceben.com/wp-content/uploads/2023/10/Industries-CPQ-Developer.png",
  },
  {
    name: "Salesforce Certified Revenue Cloud Consultant",
    category: "Revenue Cloud", issued: "Dec 2025",
    badge: "https://www.salesforceben.com/wp-content/uploads/2025/10/servlet.png",
  },
  {
    name: "Salesforce Certified Platform Administrator",
    category: "Salesforce Platform", issued: "Jan 2023",
    badge: "https://www.salesforceben.com/wp-content/uploads/2023/08/Platform-Administrator.png",
  },
  {
    name: "Salesforce Certified Platform Developer I",
    category: "Salesforce Platform", issued: "Jan 2023",
    badge: "https://www.salesforceben.com/wp-content/uploads/2023/10/Platform-Developer.png",
  },
  {
    name: "Salesforce Certified Platform Developer II",
    category: "Salesforce Platform", issued: "Feb 2023",
    badge: "https://www.salesforceben.com/wp-content/uploads/2023/10/Platform-Developer-II.png",
  },
  {
    name: "Salesforce Certified Platform Sharing and Visibility Architect",
    category: "Salesforce Platform", issued: "2025",
    badge: "https://www.salesforceben.com/wp-content/uploads/2025/07/Platform-Sharing-and-Visibility-Architect.png",
  },
];

export const projects = [
  {
    id: 'rev',
    title: "CPQ Platform & Round-Robin Framework",
    client: "REV",
    domain: "Telecom",
    period: "2025 – Present",
    role: "Senior Vlocity Developer",
    summary: "Architected a configurable Apex round-robin assignment framework and delivering an end-to-end CPQ journey using ESM for a North American telecom operator.",
    highlights: [
      "Round-robin framework: dynamic queue/user mapping across Opportunities, Leads & Cases",
      "Assignment history logging for full audit compliance across Sales & Service teams",
      "CPQ journey via ESM: Lead Convert → Quote → Locations → Master Orders → CLM",
      "Significantly reduced admin overhead and improved assignment transparency",
    ],
    tags: ["OmniScript", "Industry CPQ", "Vlocity CLM", "Order Management", "Apex", "Flows"],
    accent: "#CC1230",
  },
  {
    id: 'bell',
    title: "Revenue Cloud Order-to-Cash",
    client: "Bell Canada",
    domain: "Revenue Cloud",
    period: "2025 – 2025",
    role: "Senior SF Developer / Consultant",
    summary: "Implementing a full Order-to-Cash solution on Salesforce ARM / Revenue Cloud covering PCM product modelling, pricing, billing, and asset lifecycle management.",
    highlights: [
      "PCM-based product modelling: hierarchies, bundles, attributes & dependencies",
      "Billing Schedules (one-time, recurring, milestone-based) & Legal Entity setup",
      "Invoice Scheduler, Payment Terms, Tax Terms & automated invoice generation",
      "Full Q2C: Quote → Contract → Order → Fulfillment → Billing → Asset lifecycle",
    ],
    tags: ["Revenue Cloud", "ARM", "PCM", "Industry CPQ", "Billing", "Invoice Scheduler", "Q2C"],
    accent: "#0067A4",
  },
  {
    id: 'synergy',
    title: "Energy & Utility Cloud CPQ Platform",
    client: "Synergy",
    domain: "Energy & Utility",
    period: "2024 – 2025",
    role: "Salesforce Vlocity Developer",
    summary: "Delivered a Salesforce Vlocity CPQ and Industry Cloud solution for an energy and utility client, leveraging Experience Cloud for customer-facing digital journeys.",
    highlights: [
      "Built OmniScript-driven customer journeys for Energy & Utility product ordering",
      "Configured Industry CPQ and EPC for energy product catalogue management",
      "Implemented Calculation Procedures and Matrices for complex tariff pricing models",
      "Integrated external systems via Integration Procedures and Vlocity Actions",
    ],
    tags: ["Energy & Utility Cloud", "Experience Cloud", "Industry CPQ", "OmniScript", "DataRaptor", "CLM"],
    accent: "#F7941D",
  },
  {
    id: 'm1',
    title: "CPQ & Order Management Platform",
    client: "M1 Singapore",
    domain: "Telecom",
    period: "2023 – 2025",
    role: "Team Lead · 3 Developers",
    summary: "Led end-to-end delivery of a large-scale CPQ and Order Management platform for Singapore's third-largest telco, managing a team of 3 Salesforce developers.",
    highlights: [
      "Delivered 500+ OM tasks covering New Connect and After Sales orchestration flows",
      "Configured 2000+ products in Vlocity EPC with attribute-based pricing & context rules",
      "Built Orchestration Plans with Nokia, Billing & MuleSoft external callouts end-to-end",
      "CLM document templates generating 1000+ page Quote and Contract Proposals",
    ],
    tags: ["OmniScript", "Order Management", "Industry CPQ", "Vlocity EPC", "CLM", "DataRaptor"],
    accent: "#FF9E1B",
  },
  {
    id: 'liberty',
    title: "Vodafone Butterfly Enterprise Sales App",
    client: "Liberty Latin America Spain",
    domain: "Telecom",
    period: "2022 – 2023",
    role: "Salesforce Vlocity Developer",
    summary: "Designed and configured the Vodafone Butterfly Enterprise Sales Application for telecom product ordering, serving both community and internal Salesforce users across Spain.",
    highlights: [
      "Designed Vodafone Butterfly Enterprise Sales App for community and Salesforce users",
      "Configured products: attribute bindings, picklist configs, price lists & pricing plans",
      "Developed Apex integrations, LWC components, Flows, and Validation Rules",
      "End-to-end Copado deployments following JIRA-driven agile processes",
    ],
    tags: ["Vlocity CPQ", "Experience Cloud", "LWC", "Copado", "Apex", "EPC", "CLM"],
    accent: "#E8471C",
  },
  {
    id: 'pldt',
    title: "PLDT Telecom CPQ & Customer Portal",
    client: "PLDT Malaysia",
    domain: "Telecom",
    period: "2021 – 2022",
    role: "Salesforce Vlocity Developer",
    summary: "Built a Vlocity-powered CPQ and customer portal for PLDT's Malaysian operations using Experience Cloud, covering product configuration, ordering, and asset management.",
    highlights: [
      "Configured product catalogue: attributes, attribute bindings, price lists & pricing plans",
      "Built Customer360 views via DataRaptor for unified customer profile management",
      "Developed Apex Classes, Triggers, LWC components, Flows, and Validation Rules",
      "End-to-end Copado deployments with JIRA-driven agile delivery and unit testing",
    ],
    tags: ["Vlocity CPQ", "Customer360", "DataRaptor", "EPC", "Copado", "LWC", "Apex"],
    accent: "#CE2035",
  },
  {
    id: 'axa',
    title: "Health Cloud Patient Portal",
    client: "AXA Digital",
    domain: "Insurance",
    period: "2019 – 2021",
    role: "Salesforce Vlocity Developer",
    summary: "Enhanced AXA Digital's Experience Cloud health portal using Salesforce Vlocity, integrating Bank Validation tools and SemaPhone for seamless insurance journeys.",
    highlights: [
      "OmniScript-driven patient journeys with Customer360 views via DataRaptor",
      "Integrated Bank Validation tools and SemaPhone via Apex Classes & Triggers",
      "LWC components for healthcare-specific UI within Experience Cloud",
      "End-to-end Copado deployments in an Agile, client-facing environment",
    ],
    tags: ["Health Cloud", "OmniScript", "Customer360", "LWC", "Apex", "Copado"],
    accent: "#00008F",
  },
];

export const testimonials = [
  {
    quote: "Vikash is an exceptional Vlocity developer who consistently delivers complex Order Management solutions with precision. His deep understanding of CPQ and EPC configuration made him indispensable to our project delivery.",
    name: "Maciej Sobczyński",
    role: "Delivery Manager",
    company: "Triarit Private Limited",
    initial: "M",
    color: "#0070d2",
  },
  {
    quote: "As a team lead, Vikash brought both technical excellence and collaborative leadership. He mentored developers effectively while delivering 2000+ product configurations on time with zero critical defects.",
    name: "Vikas Sharma",
    role: "Engagement Lead",
    company: "M1 Singapore",
    initial: "V",
    color: "#7c3aed",
  },
  {
    quote: "Vikash has an impressive ability to translate complex telecom business requirements into scalable Vlocity solutions. His Apex round-robin framework has become a cornerstone of our sales operations.",
    name: "Michael Torres",
    role: "Salesforce Architect",
    company: "Accenture",
    initial: "M",
    color: "#059669",
  },
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
