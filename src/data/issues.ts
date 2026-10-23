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
  { slug: "fire-station-1", title: "Fire Station 1 Replacement Funding", emoji: "🚒", status: "developing", statusLabel: "Design on Hold — City CIP", lastUpdated: "October 23, 2026", summary: "The October CIP reports a design hold pending funds. Track available funding, prior allocations, the Civic Center location, and the remaining cost.", href: "/city-hall/fire-station-1-design-funding-october-2026/", featured: true },
  {
    slug: "street-sweeping",
    title: "Street Sweeping Enforcement",
    emoji: "🚧",
    status: "developing",
    statusLabel: "Enforcement Suspended — City Notice",
    lastUpdated: "October 23, 2026",
    summary:
      "Warnings and citations are suspended during the transition. The CIP lists Phase I signage complete and Phase II upcoming; costs and restart notice remain questions.",
    href: "/accountability/street-sweeping/",
    featured: false
  },
  {
    slug: "fire-station-3",
    title: "Fire Station 3 Emergency Repairs",
    emoji: "🚒",
    status: "developing",
    statusLabel: "Awaiting Cost and Scope Update",
    lastUpdated: "July 7, 2026",
    summary:
      "Tracking emergency repair authority, total approved cost, amount spent to date, remaining work, temporary firefighter arrangements, and what condition ends the emergency action.",
    href: "/accountability/fire-station-3/"
  },
  {
    slug: "budget-spending",
    title: "Budget & Spending Watch",
    emoji: "📊",
    status: "monitoring",
    statusLabel: "October Records Added",
    lastUpdated: "October 23, 2026",
    summary:
      "New records on Fire Station 1, Altamira, dispatch contract terms, playground grants, and traffic signals, alongside the earlier sewer questions.",
    href: "/accountability/budget-spending/"
  }
];

export const featuredIssue = issues.find((issue) => issue.featured) ?? issues[0];
