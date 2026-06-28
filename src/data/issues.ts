export type IssueStatus = "monitoring" | "developing" | "urgent" | "resolved";

export interface Issue {
  slug: string;
  title: string;
  emoji: string;
  status: IssueStatus;
  statusLabel: string;
  lastUpdated: string;
  summary: string;
  href: string;
  featured?: boolean;
}

export const issues: Issue[] = [
  {
    slug: "street-sweeping",
    title: "Street Sweeping",
    emoji: "🚧",
    status: "developing",
    statusLabel: "Developing",
    lastUpdated: "June 27, 2026",
    summary:
      "Tracking enforcement timing, parking signs, warnings, possible citations, and what residents need to know before penalties begin.",
    href: "/accountability/street-sweeping/",
    featured: true
  },
  {
    slug: "del-norte",
    title: "Del Norte Project",
    emoji: "🏗️",
    status: "monitoring",
    statusLabel: "Monitoring",
    lastUpdated: "June 2026",
    summary:
      "Following the approved housing project, park land dedication, traffic concerns, field questions, and long-term neighborhood impacts.",
    href: "/development/del-norte-project-west-covina/"
  },
  {
    slug: "city-yard",
    title: "City Yard / Brandywine",
    emoji: "🏢",
    status: "developing",
    statusLabel: "Developing",
    lastUpdated: "June 2026",
    summary:
      "Tracking public land, Fire Station 1 funding, housing plans, Surplus Land Act questions, and future City Council action.",
    href: "/development/west-covina-city-yard-brandywine/"
  },
  {
    slug: "athens",
    title: "Athens Services Contract",
    emoji: "🗑️",
    status: "monitoring",
    statusLabel: "Monitoring",
    lastUpdated: "June 2026",
    summary:
      "Following West Covina's long-term trash agreement, rate impacts, contract extensions, and city leverage through 2048.",
    href: "/city-hall/athens-services-west-covina-trash-contract-rate-increases-2048/"
  }
];

export const featuredIssue = issues.find((issue) => issue.featured) ?? issues[0];
