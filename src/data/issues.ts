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
    title: "Street Sweeping Enforcement",
    emoji: "🚧",
    status: "developing",
    statusLabel: "Awaiting City Response",
    lastUpdated: "July 7, 2026",
    summary:
      "Tracking corrected signs, final maps, alternate-side streets, warning periods, citation timing, and whether residents receive clear notice before enforcement begins.",
    href: "/accountability/street-sweeping/",
    featured: true
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
    statusLabel: "Awaiting Clarification",
    lastUpdated: "July 7, 2026",
    summary:
      "Tracking sewer fund reserves, public repair planning, budget amendments, contracts, grants, emergency spending, and major city funds residents should understand.",
    href: "/accountability/budget-spending/"
  }
];

export const featuredIssue = issues.find((issue) => issue.featured) ?? issues[0];
