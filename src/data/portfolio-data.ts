import { projectPosts } from "./project-posts";

export const personalInfo = {
  name: "Jonah Anderson",
  title: "Senior Product Manager",
  tagline: "Designing and building software in New York City",
  bio: "I design and build software products in New York, with a focus on APIs, integrations, and developer platforms. Explore my experience and projects, and feel free to reach out if you'd like to connect.",
  email: "jonahmanderson10@gmail.com",
  location: "Brooklyn, New York",
  social: {
    github: "https://github.com/jonahanderson",
    linkedin: "https://www.linkedin.com/in/jonahanderson98/",
  },
  interests: [
    "Product Strategy",
    "API Integrations",
    "Data Analytics",
    "Agentic Integrations",
    "Partner Ecosystems",
    "The New York Knicks"
  ],
  aboutParagraphs: [
    "I originally studied computer science with the goal of becoming a software developer. While working through classes and projects, I found myself increasingly drawn to the parts of building software that involved defining the problem, talking to users, and figuring out what should actually be built. I enjoyed writing code, but I liked shaping the product and understanding user needs even more.",
    "That interest eventually led me toward product management. I started my career as an Associate Product Manager on a platform team, where I quickly became involved in work around how systems connect and exchange data. Over time I took ownership of data ingress and egress across platforms and eventually moved into an integrations-focused PM role.",
    "Today I spend a lot of my time working on APIs, developer experience, and platform integrations. I enjoy the challenge of designing systems that allow other teams, partners, and developers to build on top of a platform effectively. There is something satisfying about creating clean interfaces between systems and making complex integrations feel simple for the people using them.",
    "My approach to product management is rooted in curiosity, customer empathy, and continuous learning. I believe the best products are built when teams collaborate across disciplines with a shared vision, and I enjoy working closely with engineers, designers, and customers to understand problems deeply and ship solutions that actually move the needle."
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
    "Vercel",
    "Postman",
    "Snowflake",
    "OpenAI Codex",
    "Claude Code",
  ]
};

export const experience = [
  {
    id: "1",
    company: "DAT Freight and Analytics",
    position: "Senior Product Manager, Integrations",
    period: "April 2024 - Present",
    location: "New York, NY",
    description:"",
    // description: "Directing product strategy and execution for DAT's TMS integrations, protecting enterprise ARR through continued partner adoption.",
    achievements: [],
    roles: [
      {
        title: "Senior Product Manager, Integrations",
        period: "May 2025 - Present",
        achievements: [
          "Owned product strategy for DAT’s integration ecosystem connecting major transportation platforms, supporting millions in recurring revenue and the majority of broker, shipper, and carrier workflow automation across the network",
          "Managed DAT’s developer portal experience, surfacing new APIs and integration capabilities to partners and customers while improving discoverability, documentation, and onboarding for external developers",
          "Led the strategy for deprecating legacy SOAP APIs and migrating partners to REST, designing backward-compatible adapters to protect $6M+ in MRR while preventing disruption to enterprise TMS integrations",
          "Introduced partner attribution within API headers, enabling monitoring of integration performance by TMS partner and unlocking data-driven reliability reporting",
          "Authored the standard playbook for new TMS integrations including PRDs, workflow specifications, and validation frameworks adopted across partner onboarding"
        ]
      },
      {
        title: "Product Ops Analyst (Trucker Tools Acquisition)",
        period: "April 2024 - May 2025",
        achievements: [
          "Owned lifecycle of TMS integrations across tracking, posting, offers, and bids, acting as technical liaison for partners and enterprise brokers",
          "Expanded the partner ecosystem by driving a 30% increase in active TMS integrations across the network",
          "Enabled enterprise deals through integration-led pilots and technical presale support, influencing $25K+ in new recurring revenue",
          "Defined and formalized the “sales engineer” motion for large deals, drafting Statements of Work, integration scopes, and pilot success criteria"
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
    // description: "Orchestrated beta and GA launches and expanded the public API with new endpoints, driving partner adoption and opening new acquisition channels.",
    description:"",
    achievements: [
      "Orchestrated beta and GA launches and expanded the public API with new endpoints, driving partner adoption and opening new acquisition channels",
      "Applied SQL-driven analysis to identify failure patterns in integration transactions, reducing decline rates by 53% within six months",
      "Led the delivery of the complex accounting integration, mastering accounting concepts and software, which facilitated the entry into an additional product area"
    ]
  },
  {
    id: "3",
    company: "Qualtrics",
    position: "Product Manager",
    period: "November 2020 - May 2023",
    location: "Reston, VA",
    // description: "Led product strategy and roadmap for third-party API integrations, expanding partner connectivity and platform capability.",
    description:"",
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

export const projects = projectPosts.map((post) => ({
  id: post.id,
  title: post.title,
  description: post.summary,
  image: post.image,
  tags: post.tags,
  demoUrl: post.productUrl,
  demoLabel: post.productLabel ?? "View Product",
  writeUpUrl: `/projects/${post.slug}`,
  writeUpLabel: post.postLabel ?? "Post",
}));

export const education = [
  {
    id: "1",
    institution: "University of Virginia",
    degree: "Bachelor of Arts in Computer Science",
    period: "2016 - 2020",
    honors: "Minor in Religious Studies"
  }
];
