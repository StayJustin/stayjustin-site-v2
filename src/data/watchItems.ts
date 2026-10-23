export type WatchItemPriority = "high" | "medium" | "low";

export interface WatchItem {
  lane: "Now" | "Next" | "Still Waiting";
  type: string;
  title: string;
  summary: string;
  href: string;
  priority: WatchItemPriority;
}

export const watchItems: WatchItem[] = [
  {
    "lane": "Now",
    "type": "Fire Station 1",
    "title": "Replacement design on hold pending funds",
    "summary": "The October CIP identifies a design hold and a northwest Civic Center location. Available funding and the remaining cost need reconciliation.",
    "href": "/city-hall/fire-station-1-design-funding-october-2026/",
    "priority": "high"
  },
  {
    "lane": "Now",
    "type": "Street Sweeping",
    "title": "Warnings and citations remain suspended",
    "summary": "The City notice checked October 23 confirms the pause. Phase I signage is complete; Phase II is listed as upcoming.",
    "href": "/city-hall/street-sweeping-phase-one-phase-two-october-2026/",
    "priority": "high"
  },
  {
    "lane": "Next",
    "type": "Altamira",
    "title": "A proposed $50,000 study, not a repair plan",
    "summary": "The preliminary evaluation would recommend whether later investigation is needed. Council action and future costs still need confirmation.",
    "href": "/city-hall/altamira-hillside-study-budget-october-2026/",
    "priority": "medium"
  },
  {
    "lane": "Next",
    "type": "Fire Dispatch",
    "title": "Read the rate exceptions and extension terms",
    "summary": "The Verdugo draft includes extraordinary-cost exceptions. Its fiscal paragraph lists an account code, not a dollar cap.",
    "href": "/city-hall/verdugo-fire-dispatch-contract-october-2026/",
    "priority": "medium"
  }
];
