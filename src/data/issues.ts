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
  { slug: "fire-station-1", title: "Fire Station 1 Replacement Funding", emoji: "🚒", status: "developing", statusLabel: "Design on Hold — City CIP", lastUpdated: "October 23, 2026", summary: "The October CIP reports a design hold pending funds. Track available funding, prior allocations, the Civic Center location, and the remaining cost.", href: "/city-hall/fire-station-1-design-funding-october-2026/", featured: false },
  {
    slug: "street-sweeping",
    title: "Street Sweeping Enforcement",
    emoji: "🚧",
    status: "developing",
    statusLabel: "Enforcement Suspended — City Notice",
    lastUpdated: "November 11, 2026",
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
    statusLabel: "Closure Proposed — Vote to Verify",
    lastUpdated: "November 11, 2026",
    summary:
      "August 18 staff recommended ending the emergency action and accepting specified remediation work for $130,720.85. Council action and the completion filing still require confirmation.",
    href: "/accountability/fire-station-3/",
    featured: true
  },
  {
    slug: "budget-spending",
    title: "Budget & Spending Watch",
    emoji: "📊",
    status: "monitoring",
    statusLabel: "Adopted Budget Explained",
    lastUpdated: "November 11, 2026",
    summary:
      "West Covina budgeted $148.43 million in citywide spending. See the visual breakdown, tight General Fund margin, staffing changes, insurance obligations, and questions residents should ask.",
    href: "/accountability/budget-spending/",
    featured: false
  }
];

export const featuredIssue = issues.find((issue) => issue.featured) ?? issues[0];
