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
    lane: "Now",
    type: "City Hall",
    title: "Measure A homeless funding questions headed to Council",
    summary:
      "Council is scheduled to consider an August 18 amendment involving Measure A Local Solutions Funding, carryover money, SGVCOG retention, and prior-year spending questions.",
    href: "/city-hall/west-covina-measure-a-homeless-funding-2026/",
    priority: "high"
  },
  {
    lane: "Now",
    type: "Street Sweeping",
    title: "Street sweeping citations are not starting yet",
    summary:
      "The City says enforcement will wait until the program is fully and correctly implemented, including corrected signs, maps, routes, and public notice.",
    href: "/accountability/street-sweeping/",
    priority: "high"
  },
  {
    lane: "Next",
    type: "Accountability",
    title: "Fire Station 3 emergency repairs still need cost answers",
    summary:
      "StayJustIn is tracking total approved cost, spending to date, remaining repair work, temporary firefighter arrangements, and when emergency status ends.",
    href: "/accountability/fire-station-3/",
    priority: "medium"
  },
  {
    lane: "Still Waiting",
    type: "Budget Watch",
    title: "Sewer reserve question still awaiting response",
    summary:
      "StayJustIn is asking what reserve level the City is targeting and what public sewer repair or upgrade plan is tied to the projected fund balance.",
    href: "/accountability/budget-spending/",
    priority: "medium"
  }
];
