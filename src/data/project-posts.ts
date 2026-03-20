export interface ProjectPost {
  id: string;
  slug: string;
  title: string;
  articleTitle?: string;
  summary: string;
  image: string;
  imageAlt: string;
  tags: string[];
  productUrl: string;
  productLabel?: string;
  postLabel?: string;
  content: string;
}

// Add new posts by copying one object below.
// `summary` is used for both the card description and the post intro.
// `content` supports markdown-lite:
// - Headings: ## Heading / ### Subheading
// - Paragraphs: plain text separated by blank lines
// - Bullets: lines starting with "- "
// - Images: ![alt](/image-path.gif "optional caption")
// - Links: [label](https://example.com)
export const projectPosts: ProjectPost[] = [
  {
    id: "resume-developer-portal",
    slug: "jonahs-resume-developer-portal",
    title: "Jonah's Resume Developer Portal",
    articleTitle: "Jonah's Resume Developer Portal",
    summary:
      "A small full-stack project that turns my resume into a developer-facing API product with live endpoints, OpenAPI schemas, and polished docs.",
    image: "/resume-developer-portal.png",
    imageAlt: "Resume Developer Portal with API endpoints and developer docs",
    tags: ["REST API", "Render", "Mintlify", "OpenAPI", "EmailJS"],
    productUrl: "https://developer.jonahanderson.me/",
    productLabel: "View the Developer Portal",
    postLabel: "Post",
    content: `

My Resume Developer Portal started from a simple idea: instead of sending a static resume, what if my experience and projects were exposed through a set of real, working APIs?

This Resume Developer Portal is exactly that. It is a small platform that exposes my background through endpoints like **/candidate**, **/experience**, and **/projects**, all structured in a clean and consistent way. The goal was not just to display information, but to present it the same way I think about products every day: as something that can be queried, integrated with, and explored.

The backend is deployed on Render and lives in this [github repository](https://github.com/jonahanderson/dev-portal). It serves a set of REST APIs backed by a simple data layer, and the OpenAPI spec defines the structure of each endpoint so response schemas stay intuitive, predictable, and easy to understand.

On the frontend side, I used [Mintlify](https://github.com/jonahanderson/docs) to build the documentation experience. That gave the project the feel of a real developer product, with structured docs, example responses, and a clean interface for exploring the API surface area.

A big part of the project was figuring out how to model "resume data" as an API. Things like experience, projects, and availability had to be structured in a way that made sense programmatically, not just visually. That meant defining clear schemas, keeping naming consistent, and making sure responses were easy to consume without extra context.

I also wanted the portal to do more than expose read-only data. The contact endpoint uses **EmailJS** to trigger an email directly to my inbox, which gave me a lightweight way to add real interaction without having to build and maintain a separate mail service for a small personal project.

This project also doubled as a way to practice shipping a simple full-stack system end to end. Render made it easy to get the API live quickly, and Mintlify provided a fast way to create polished developer-facing documentation without building a custom frontend from scratch.

More than anything, this project reflects how I think about integrations, developer experience, and product design: take something familiar, structure it clearly, and make it easy for other people to explore.

### Future Improvements

- add more write endpoints
- track usage and analytics across endpoints
- expand schemas to support more dynamic or real-time data`,
  },
  {
    id: "empire-game",
    slug: "empire-game",
    title: "Empire",
    articleTitle: "Empire",
    summary:
      "Empire is a lightweight web app I built so groups can play the party game Empire on mobile devices.",
    image: "/empire.png",
    imageAlt: "Empire game setup and live player submission",
    tags: ["Web App", "OpenAI Codex", "Vercel", "AI-Assisted Dev"],
    productUrl: "https://empire.jonahanderson.me",
    productLabel: "View Product",
    postLabel: "Post",
    content: `Link to view on GitHub: [empire-game](https://github.com/jonahanderson/empire-game)

Empire Game is a small web app I built to play the party game **Empire** with friends. The game is usually played manually with slips of paper, but that approach breaks down quickly when people are spread across couches, rooms, or even different locations. I wanted something that could be spun up quickly on a phone so a group could start a game without any setup.

![Empire game setup and live player submission](/empire.gif "Empire game setup and live player submission")

The interesting part of this project was how it was built. I used it primarily as an experiment to learn how to work with modern AI coding tools, specifically **OpenAI Codex**. Instead of writing most of the code myself, I provided the model with a structured set of requirements similar to a lightweight product requirements document. From there it generated the initial design and most of the application functionality.

This ended up being a great way to understand how AI-assisted development actually works in practice. The model handled a large portion of the boilerplate and feature scaffolding, while I focused on refining the behavior and fixing edge cases.

For deployment I used **Vercel**, which made it easy to push the project live quickly. The platform works well for small web apps because it handles hosting, builds, and deployment automatically from the repository, making it simple to iterate and test changes.

Overall the project was less about the game itself and more about learning how to collaborate with AI coding tools. Writing a clear set of requirements and letting the model generate most of the implementation was a surprisingly effective workflow, and it gave me a much better understanding of how these tools can accelerate small product builds.`,
  },
  {
    id: "moon-bot",
    slug: "moon-bot",
    title: "MoonBot",
    articleTitle: "MoonBot",
    summary:
      "MoonBot is a Python tool that helps review Reddit posts and generate AI-assisted comments, built to farm MOONs with fine-tuning models and real world AI automation.",
    image: "/Moonbot.png",
    imageAlt: "MoonBot workflow in terminal",
    tags: ["Python", "Reddit API", "AI", "Fine-Tuning", "SQLite"],
    productUrl: "https://github.com/jonahanderson/MoonBot",
    postLabel: "Post",
    content: `MoonBot is a small Python project I built to get hands-on experience working with AI models, APIs, and fine-tuning. Instead of experimenting in a vacuum, I wanted something that interacted with a real platform and had measurable results. I chose the r/cryptocurrency subreddit because at the time the community distributed MOON tokens based on karma, meaning comments could literally translate into money.

The idea was simple: build a tool that helps review new posts and decide whether to comment manually or generate AI-assisted responses.

The script pulls posts from Reddit using the Reddit API and presents them in an interactive terminal workflow. For each post it prints the title, text, link, karma, and timestamp. From there I can skip the post, type a comment manually, or press **g** to generate several candidate comments using an AI model. If I like one of the generated responses I can select it, optionally tweak it, and confirm posting through the Reddit API.

![MoonBot interactive terminal flow](/Moonbot.gif "MoonBot terminal workflow")

Nothing posts automatically. MoonBot is intentionally **human-in-the-loop**. Every comment is reviewed before it goes live, keeping the workflow closer to AI assistance than spam automation.

The bot also stores processed post IDs in a small SQLite database so it never processes the same submission twice. When the script starts I can run it in several modes:

- **Fetch recent posts** - pulls the ~20 newest posts and processes them interactively
- **Stream new submissions** - listens for new posts in real time
- **Fetch then stream** - processes recent posts first, then switches into live mode
- **Clear processed posts database** - removes stored post IDs so posts can be reprocessed

### Improving the Comment Quality

One of the more interesting parts of the project was experimenting with model quality.

Early on I tried generating comments directly using base models. The output worked, but it usually sounded like obvious AI text: overly structured, generic, and not really how people talk on Reddit.

To improve this, I used the Reddit API to scrape posts from r/cryptocurrency along with the **top three comments for each post**. That gave me a dataset of over **1,000 real examples** of how people in the subreddit actually respond to discussions.

I then used this dataset to fine-tune the model so it better matched the tone and structure of real comments. After fine-tuning, the responses became noticeably more natural and conversational.

### Results

Running MoonBot daily for about a month resulted in roughly **$100 worth of MOON tokens** earned from comment karma.

The income itself wasn't the point. The project was mainly a way to understand how AI APIs behave in practice, how model outputs change with fine-tuning, and how to build small automation systems that still keep a human decision step in the loop.

### Lessons Learned

- **Base models often sound like AI.** Fine-tuning on real community data made a big difference.
- **API limits show up quickly.** Handling rate limits and retries matters when building automation tools.
- **Human oversight works better than full automation.** Reviewing comments before posting leads to better results and avoids spam behavior.

### Future Improvements

If I continued developing MoonBot, I'd likely explore:

- a lightweight web dashboard instead of a terminal interface
- ranking generated comments before presenting them
- tracking karma performance over time
- using embeddings to better match comments to post topics
- expanding support to multiple subreddits`,
  },
  {
    id: "jonahanderson-eth",
    slug: "jonahanderson-eth",
    title: "jonahanderson.eth",
    articleTitle: "jonahanderson.eth",
    summary:
      "A personal experiment using ENS, IPFS, and decentralized hosting to understand how identity and websites can work beyond traditional DNS infrastructure.",
    image: "/ENS.jpg",
    imageAlt: "jonahanderson.eth ENS profile project",
    tags: ["ENS", "Ethereum", "IPFS", "Decentralized Web"],
    productUrl: "https://web3.bio/jonahanderson.eth",
    productLabel: "View ENS Profile",
    postLabel: "Post",
    content: `[View ENS Profile](https://web3.bio/jonahanderson.eth)

A few years ago I experimented with buying an **ENS (Ethereum Name Service)** domain and using it as a decentralized version of a personal website. ENS domains function similarly to traditional DNS domains, but instead of mapping to servers through the normal internet infrastructure, they are tied to the Ethereum blockchain.

I registered **jonahanderson.eth** as a personal project to explore how decentralized identity and hosting worked in practice. One of the interesting parts of ENS is that domains can resolve not only to wallet addresses, but also to content hosted on decentralized storage networks.

To test this out, I hosted a version of my personal website on **IPFS (InterPlanetary File System)** and linked it to the ENS domain. This meant the site could be accessed through an ENS gateway rather than a traditional hosting provider. The result was a version of my site that could be viewed through the ENS domain here:

https://jonahanderson.eth.limo/ - no longer active.

At the time I used **Fleek** to deploy the site to IPFS and manage the connection between the ENS domain and the hosted content. I believe Fleek has since changed significantly or may no longer operate in the same way, so the exact setup I used does not exist anymore.

The project was mostly an experiment to understand how decentralized domains and hosting work. While I still primarily use traditional domains for my projects today, it was an interesting look at how identity, websites, and infrastructure might evolve in more decentralized systems.`,
  },
  {
    id: "website-v1-react",
    slug: "building-my-personal-website-with-react",
    title: "Building My Personal Website with React",
    articleTitle: "Building My Personal Website with React",
    summary:
      "I built my first personal site with React as a hands-on way to learn real frontend architecture, styling, routing, and deployment decisions.",
    image: "/React.png",
    imageAlt: "React logo for personal website project",
    tags: ["React", "Create React App", "CSS", "EmailJS", "Frontend"],
    productUrl: "https://github.com/jonahanderson/jonahanderson-Website",
    productLabel: "View the code on GitHub",
    postLabel: "Post",
    content: `One of the best ways I found to learn React was simply to build something real, so I decided to create my own personal website. Instead of following tutorials or small demo projects, building a site that I actually wanted to use forced me to figure things out across the entire frontend stack. You can still find that version linked as **V1** in the navigation bar.

The project was bootstrapped with Create React App and became a hands-on way to learn how React components, routing, and frontend state all fit together in a real application.

![Some frontend functionality](/jonahandersonsite.gif "Some frontend functionality")

One thing you'll notice quickly if you look at the code is the **huge amount of CSS**. At the time I wrote most of the styling manually, which turned into a much bigger effort than expected. In hindsight, using a component library or a framework like Tailwind or Bootstrap would have saved a lot of time. That mistake actually ended up being useful though as it forced me to understand how layouts, spacing, and responsive design work across different screen sizes.

Another problem I needed to solve was **contact functionality**. I wanted visitors to be able to send me messages directly from the site without building a full backend service. The solution I ended up using was **EmailJS**, which allows frontend applications to send emails directly using predefined templates.

This project ended up being one of the most practical ways I've learned frontend development. It forced me to think about layout, user interaction, responsiveness, deployment, and real-world functionality instead of just isolated code examples.`,
  },
  {
    id: "greek-rho",
    slug: "greek-rho",
    title: "GreekRho",
    articleTitle: "GreekRho",
    summary:
      "GreekRho was an early startup-style campus platform project for Greek organizations, focused on centralizing member, communication, and organization workflows.",
    image: "/greekrho+_logo.svg",
    imageAlt: "GreekRho creating event experience",
    tags: ["Django", "Startup", "Product Development", "Demos", "Search"],
    productUrl: "https://github.com/csyager/greeklink-core",
    postLabel: "Post",
    content: `GreekLink was one of the first projects I worked on that felt like a real startup rather than just a class assignment. The idea was to build a platform for Greek organizations on campus that made it easier to manage members, communication, and organization activity. Instead of relying on scattered spreadsheets, email chains, and group chats, the goal was to centralize those workflows in a single system.

What made the project unique was that we treated it like an actual product. We pitched it to organizations on campus, scheduled demos, and talked directly with potential users about how they managed their chapters. That meant thinking about things like usability, what features actually mattered to organizations, and how to clearly explain the value of the platform during a demo. It was one of the first times I saw the full loop of building software, showing it to users, getting feedback, and improving the product. Looking back, that experience was one of the early reasons I gravitated toward product management.

![GreekRho creating event experience](/GreekRho.gif "GreekRho creating event experience")

From a development perspective, I worked on several core parts of the application, including search, pagination, permissions, and editing existing events.

My favorite part of the implementation was the **search functionality**. The application was built using Django, and implementing search required figuring out how to make different objects in the system discoverable. Users needed to be able to search across entities like members and organizations in a way that returned useful results. That involved thinking about how the models were structured, which fields should be searchable, and how to write queries that returned relevant results quickly.

I also implemented **pagination** to make large lists of data easier to navigate and prevent pages from loading too many records at once. As the number of members, events, and organizations grew, pagination helped keep the interface responsive and organized.

Another area I worked on was **updating permissions**, ensuring that different types of users had the correct level of access. Since the platform was designed for organizations with multiple roles, it was important that only authorized users could modify certain information, and all users had access to other information.

Finally, I implemented the **edit functionality for existing events**, allowing users to update event details after creation. This involved handling form updates, validating the changes, and ensuring the system properly persisted updates without breaking existing data relationships.

GreekLink was a valuable early experience in building a full web application while also thinking about the product side of software. It was the first time I worked on something where both the technical implementation and the user experience mattered, and it gave me an early look at what it is like to build and pitch a product at the same time.`,
  },
  {
    id: "wahoo-gives",
    slug: "wahoo-gives",
    title: "WahooGives",
    articleTitle: "WahooGives",
    summary:
      "WahooGives is a small data project built to collect and structure donation activity during UVA's WahooGives event so trends and momentum can be analyzed more easily.",
    image: "/Wahoogives.png",
    imageAlt: "WahooGives donation activity analysis project",
    tags: ["Python", "Data Pipeline", "Analytics", "Fundraising Data"],
    productUrl: "https://github.com/jonahanderson/WahooGives",
    postLabel: "Post",
    content: `WahooGives is a small project built to explore and analyze activity during the University of Virginia's annual **WahooGives** fundraising event. The event generates a large amount of donation activity over a short period of time, and I wanted a way to programmatically pull and structure that data instead of manually browsing the site.

The project collects data from the WahooGives platform and organizes it so donation activity and participating organizations can be explored more easily. Rather than clicking through dozens of pages, the tool pulls the relevant information into a structured format that can be analyzed or visualized.

This makes it possible to quickly see things like which organizations are gaining traction, how donation totals evolve during the event, and where momentum is building.

The project was mainly an exercise in working with external data sources and building a small pipeline to collect and structure live event data. Even though the scope is simple, it reflects a pattern I enjoy working with: pulling data from a platform, transforming it into something structured, and then using that data to surface insights.

### Potential Improvements

If I continued building on the project, I would likely explore:

- adding real-time dashboards for donation activity
- visualizing donation trends throughout the event
- ranking organizations by growth rate rather than total donations
- storing historical data for year-over-year comparisons`,
  },
];

export function getProjectPostBySlug(slug: string): ProjectPost | undefined {
  return projectPosts.find((post) => post.slug === slug);
}
