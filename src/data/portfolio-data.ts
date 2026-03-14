export const personalInfo = {
  name: "Jonah Anderson",
  title: "Senior Product Manager",
  tagline: "Building, designing, and coding in the New York metropolitan area",
  bio: "I build, design, and code within the New York metropolitan area. Feel free to take a look at my experience and personal projects. If you like what you see, contact me and we can work together.",
  email: "jonahmanderson10@gmail.com",
  location: "Brooklyn, New York",
  social: {
    github: "https://github.com/jonahanderson",
    linkedin: "https://www.linkedin.com/in/jonahanderson98/",
    twitter: "https://twitter.com/jonahanderson",
  },
  interests: [
    "Product Strategy",
    "API Integrations",
    "Data Analytics",
    "Cross-Functional Leadership",
    "Partner Ecosystems"
  ],
  aboutParagraphs: [
    "I fell in love with product management when I discovered the perfect intersection of technology, business, and user empathy. Throughout my career, I've launched products that have reached millions of users and generated significant business value.",
    "My approach to product management is rooted in continuous learning, customer obsession, and evidence-based decision making. I believe the best products are built when teams collaborate across disciplines with a shared vision.",
    "Beyond building products, I'm passionate about mentoring aspiring PMs, speaking at industry events, and contributing to the product community through writing and sharing frameworks that have worked for me."
  ]
};

export const skills = {
  "Product Strategy": [
    "Product Vision & Roadmap",
    "Go-to-Market Strategy",
    "Partner Ecosystem Growth",
    "Integration Strategy",
    "Stakeholder Management",
    "PRD & Documentation"
  ],
  "Execution & Delivery": [
    "Agile/Scrum",
    "Sprint Planning",
    "Beta & GA Launches",
    "Customer Migration",
    "Feature Prioritization",
    "Cross-Functional Leadership"
  ],
  "Technical Skills": [
    "Python",
    "Java",
    "C/C++",
    "SQL",
    "HTML/CSS",
    "REST & SOAP APIs"
  ],
  "Tools & Platforms": [
    "Jira",
    "Confluence",
    "Figma",
    "AWS",
    "Postman",
    "Airtable"
  ]
};

export const experience = [
  {
    id: "1",
    company: "DAT Freight and Analytics",
    position: "Senior Product Manager, Integrations",
    period: "April 2024 - Present",
    location: "New York, NY",
    description: "Directing product strategy and execution for DAT's TMS integrations, protecting enterprise ARR through continued partner adoption.",
    achievements: [],
    roles: [
      {
        title: "Senior Product Manager, Integrations",
        period: "May 2025 - Present",
        achievements: [
          "Directed product strategy and execution for DAT's TMS integrations, protecting enterprise ARR through continued partner adoption",
          "Built a self-service load tracking integration experience that eliminated onboarding friction and reduced setup-related support escalations by 10%",
          "Implemented partner affiliation in API headers to surface integration health by source, enabling data-driven partner level reporting",
          "Authored partner-facing PRDs, workflow documentation, and validation requirements that became the standard playbook for new integrations",
          "Created partner migration strategy for SOAP API sunset and backward-compatible adapters to prevent revenue reduction during deprecation"
        ]
      },
      {
        title: "Product Ops Analyst (Trucker Tools Acquisition)",
        period: "April 2024 - May 2025",
        achievements: [
          "Owned lifecycle of TMS integrations across tracking, posting, offers, and bids, acting as technical liaison for partners and enterprise brokers",
          "Expanded the partner ecosystem by driving a 30% increase in active TMS integrations across the network",
          "Directly influenced ~$25K new MRR through custom pilots and integration-led presale enablement for enterprise accounts",
          "Defined and formalized the \"sales engineer\" motion for large deals, drafting Statements of Work, integration scopes, and pilot success criteria"
        ]
      }
    ]
  },
  {
    id: "2",
    company: "Coast",
    position: "Technical Product Manager",
    period: "May 2023 - March 2024",
    location: "New York, NY",
    description: "Orchestrated beta and GA launches and expanded the public API with new endpoints, driving partner adoption and opening new acquisition channels.",
    achievements: [
      "Spearheaded a cross-functional project applying SQL data analysis to reduce the decline rate of integration-related transactions by 53% within six months",
      "Led the delivery of the complex accounting integration, mastering accounting concepts and software, which facilitated the entry into an additional product area",
      "Orchestrated beta and GA launches and expanded the public API with new endpoints, driving partner adoption and opening new acquisition channels"
    ]
  },
  {
    id: "3",
    company: "Qualtrics",
    position: "Product Manager",
    period: "November 2020 - May 2023",
    location: "Reston, VA",
    description: "Led product strategy and roadmap for third-party API integrations, expanding partner connectivity and platform capability.",
    achievements: [],
    roles: [
      {
        title: "Product Manager",
        period: "January 2022 - May 2023",
        achievements: [
          "Led product strategy and roadmap for third-party API integrations, expanding partner connectivity and platform capability",
          "Scaled ingestion infrastructure to support a 10% increase in new records processed within six months",
          "Drove customer migration to AWS, improving scalability while reducing operational and infrastructure costs"
        ]
      },
      {
        title: "Product Manager Associate (Clarabridge Acquisition)",
        period: "November 2020 - January 2022",
        achievements: [
          "Collaborated with engineers, marketing, services, and sales teams to deliver custom data pipeline integrations to customers",
          "Eliminated legacy data pipeline dependencies through a deprecation plan, reducing operations and service spend"
        ]
      }
    ]
  }
];

export const projects = [
  {
    id: "1",
    title: "Enterprise Analytics Platform",
    description: "Led development of AI-powered analytics dashboard helping enterprise clients make data-driven decisions. Featured predictive insights and customizable reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tags: ["B2B SaaS", "Analytics", "AI/ML", "Enterprise"],
    demoUrl: "https://example.com",
    caseStudyUrl: "https://example.com/case-study"
  },
  {
    id: "2",
    title: "Mobile Marketplace Redesign",
    description: "Complete product overhaul of mobile marketplace app, introducing personalized discovery, streamlined checkout, and social features that doubled engagement.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tags: ["Mobile", "Marketplace", "UX Redesign", "Growth"],
    demoUrl: "https://example.com",
    caseStudyUrl: "https://example.com/case-study"
  },
  {
    id: "3",
    title: "Payment Integration Platform",
    description: "Zero-to-one product enabling seamless payment processing for small businesses. Simplified complex financial workflows into intuitive user experience.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tags: ["Fintech", "0-to-1", "Payments", "SMB"],
    demoUrl: "https://example.com",
    caseStudyUrl: "https://example.com/case-study"
  },
  {
    id: "4",
    title: "Customer Feedback System",
    description: "Built in-app feedback tool collecting and analyzing customer insights, reducing support tickets by 40% and informing product roadmap decisions.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tags: ["Customer Success", "Feedback", "Analytics", "Tools"],
    demoUrl: "https://example.com",
    caseStudyUrl: "https://example.com/case-study"
  }
];

export const education = [
  {
    id: "1",
    institution: "University of Virginia",
    degree: "Bachelor of Arts in Computer Science",
    period: "2016 - 2020",
    honors: "Minor in Religious Studies"
  }
];
