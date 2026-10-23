export const agendaUrl = "https://public.destinyhosted.com/93782/agenda/agenda.cfm?seq=854";
export const sourcePdf = "/sources/2026-10-20-selected-agenda-records.pdf";
export const reviewedDate = "October 23, 2026";

export interface OctoberStory {
  slug: string;
  title: string;
  category: string;
  summary: string;
  status: string;
  sections: { heading: string; paragraphs: string[] }[];
  questions: string[];
  sourcePages: { page: number; label: string }[];
  related?: { title: string; href: string }[];
}

export const octoberStories: OctoberStory[] = [
  {
    slug: "fire-station-1-design-funding-october-2026",
    title: "Fire Station 1 replacement design is on hold pending funding",
    category: "Fire Station 1",
    summary: "The October capital-project update identifies a funding hold and describes a replacement at the northwest corner of the Civic Center campus. It does not provide a complete financing plan.",
    status: "City-reported project status · October 20 CIP update",
    sections: [
      { heading: "What the new record says", paragraphs: ["The City’s capital improvement presentation lists Fire Station 1 replacement design as on hold while funding is identified. The same slide describes a replacement at the northwest corner of the Civic Center campus. It supplies no dollar amount needed to restart design and no construction start date.", "That establishes the status reported in this update. It does not establish when the hold began, whether every earlier allocation has been exhausted, or whether the identified location has completed all necessary approvals."] },
      { heading: "Why earlier allocations still need reconciliation", paragraphs: ["A project can have a budget allocation and still lack enough available money to proceed. Budget authority, money already spent, unpaid contractual commitments, and the remaining cost are different figures. Residents need a dated ledger that reconciles those categories for this project, including any ARPA funding and subsequent changes.", "The October slide alone cannot resolve earlier statements about design spending or allocations. This update therefore does not treat previously discussed figures as a current cash balance or as proof that money disappeared."] },
      { heading: "The City Yard connection remains a question", paragraphs: ["StayJustIn’s City Yard coverage asks how relocation and redevelopment could affect Fire Station 1. The new CIP status makes a clear funding explanation more important, but it does not establish that a property sale is complete or that sale proceeds are committed and sufficient. Fire Station 3 emergency repairs are a separate project."] }
    ],
    questions: ["What funding amount is required to resume design, and from which sources?", "What are the current budget, cumulative expenditures, encumbrances, available balance, and estimated remaining cost?", "What happened to each earlier ARPA or capital allocation, and what records document any changes?", "Is the northwest Civic Center site approved or still subject to further review?", "Would City Yard proceeds be used, and what would remain after relocation and other obligations?"],
    sourcePages: [{ page: 4, label: "Item 2 CIP presentation: Fire Station 1 and Citrus/Cameron (original supplied PDF p. 31)" }],
    related: [{ title: "City Yard redevelopment", href: "/development/west-covina-city-yard-brandywine/" }, { title: "Budget & Spending Watch", href: "/accountability/budget-spending/" }, { title: "Separate issue: Fire Station 3 repairs", href: "/accountability/fire-station-3/" }]
  },
  {
    slug: "street-sweeping-phase-one-phase-two-october-2026",
    title: "Street sweeping: Phase I signs complete, Phase II ahead, enforcement suspended",
    category: "Street Sweeping",
    summary: "The CIP update marks Phase I signage complete in November 2025 and lists Phase II as upcoming. The City’s current notice says both street-sweeping warnings and citations are suspended during the transition.",
    status: "CIP status plus City service notice checked October 23, 2026",
    sections: [
      { heading: "The completion label applies to Phase I", paragraphs: ["The October presentation explicitly labels Street Sweeping Signage Installation Phase I as completed in November 2025. A separate slide lists Street Sweeping Sign Installation Phase 2 among upcoming capital projects. Saying the City declared the entire rollout finished would leave out that distinction.", "The phased description does not answer every question about signs that later needed changes. Some work could be correction of earlier installation; some could reflect a revised route or a new phase. The contracts, acceptance records, sign inventory, and change orders are needed to separate those possibilities."] },
      { heading: "What residents can rely on now", paragraphs: ["The City’s street-sweeping webpage, checked October 23, says enforcement is temporarily suspended during route reevaluation and implementation. It says neither warnings nor citations will be issued for street-sweeping violations during that period. Sweepers continue operating, although their timing may differ from posted signs.", "The City says it is considering different days or different times for opposite sides of a street and will notify residents when the updated schedule is finalized. This notice concerns street-sweeping restrictions; it does not suspend other parking rules. Recheck the official notice before relying on it for future dates."] },
      { heading: "The accountability question", paragraphs: ["The useful question is what each phase cost, which changes were corrections, and who paid. The completion date alone is not evidence of wasted money or improper acceptance. StayJustIn’s earlier resident-concern coverage remains background; the current notice above is the latest verified service information for this update."] }
    ],
    questions: ["What work was included in Phase I, and what is included in Phase II?", "How many signs need correction versus relocation for a revised route?", "What did each phase cost, and were any corrections covered by a contractor warranty?", "When will the final map, public-notice plan, and enforcement restart date be published?"],
    sourcePages: [{ page: 3, label: "Item 2: completed Phase I signage (original PDF p. 25)" }, { page: 6, label: "Item 2: upcoming Phase II signage (original PDF p. 37)" }],
    related: [{ title: "Official City street-sweeping notice", href: "https://www.westcovina.gov/517/Street-Sweeping" }, { title: "Street Sweeping Enforcement Tracker", href: "/accountability/street-sweeping/" }]
  },
  {
    slug: "altamira-hillside-study-budget-october-2026",
    title: "Altamira hillside: proposed $50,000 study is a first step, not a repair budget",
    category: "Hillside / Budget",
    summary: "The requested preliminary evaluation would use Maintenance District #1 funding. Later testing and mitigation could require separate decisions and additional money.",
    status: "Staff recommendation and draft RFP · Council outcome not verified",
    sections: [
      { heading: "What the evaluation would do", paragraphs: ["Item 4 requests a $50,000 expenditure amendment and release of an RFP for the hillside west of the 2600 block of Altamira Drive. Staff says Council directed a preliminary inspection on September 15. The work would review existing records, inspect visible conditions, and recommend further investigation where warranted.", "The draft scope calls for a proposed scope, schedule, and cost estimate for Phase II and, if appropriate, Phase III. Phase I is not required to determine the cause of reported property damage or assign responsibility unless the evidence supports such conclusions. It is not a funded hillside repair plan."] },
      { heading: "What the budget calculation means", paragraphs: ["The amendment uses Fund 181, Maintenance District #1, and staff says the project was not in the adopted CIP. The exhibit lists $836,900 in current-year revenue and $791,861 in expenditures. Adding $50,000 would bring expenditures to $841,861: $4,961 more than that year’s revenue.", "That is a proposed annual draw on fund balance, not proof of a negative total balance or insolvency. The exhibit does not provide the beginning reserve balance needed to judge the remaining cushion. Residents should also be able to understand the district’s responsibility for this particular hillside."] },
      { heading: "Timing and the next decision", paragraphs: ["The report proposed an October 21 RFP release, November 4 proposal deadline, and completion within three months after a Notice to Proceed. Those are planned milestones, not verified evidence that the procurement was released or a consultant selected. Staff says findings, next steps, and necessary budget amendments would return to Council."] }
    ],
    questions: ["Was the amendment adopted and the RFP released, and who is selected?", "What are Fund 181’s beginning and projected ending balances?", "Why is Maintenance District #1 the appropriate payer for this evaluation?", "What will later investigation or mitigation cost, and who would be responsible?", "When will the findings and recommendations be available to affected residents?"],
    sourcePages: [{ page: 9, label: "Item 4 report: scope and proposed timing (original PDF pp. 42–43)" }, { page: 11, label: "Budget Amendment 2027-12 (original PDF p. 46)" }, { page: 12, label: "Draft RFP scope of services (original PDF pp. 69–70)" }],
    related: [{ title: "Budget & Spending Watch", href: "/accountability/budget-spending/" }]
  },
  {
    slug: "verdugo-fire-dispatch-contract-october-2026",
    title: "Verdugo fire dispatch: extension authority, rate exceptions, and unanswered cost questions",
    category: "Public Safety / Contracts",
    summary: "The proposed agreement would allow two three-year renewals. The draft’s dates, rate exceptions, and missing annual dollar appropriation deserve a closer look.",
    status: "Proposed agreement · Execution and Council outcome not verified",
    sections: [
      { heading: "Why staff recommends continuing", paragraphs: ["Staff reports that Verdugo has provided West Covina fire dispatch since February 2024 and describes reliable service, regional coordination, and continuity with existing emergency systems. Those are material reasons for retaining the provider. The report requests City Manager authority to execute the agreement, exercise extension options, and negotiate amendments subject to City Attorney approval."] },
      { heading: "The dates need to be reconciled", paragraphs: ["Staff describes a three-year initial term and two optional three-year extensions. The attached draft instead specifies February 16, 2027 through June 30, 2030 for the initial term, which is longer than three years. Exercising both full extensions would carry that draft through June 30, 2036. The final executed agreement should reconcile the dates with the summary.", "The draft requires renewal notice 180 days before a term ends. Its express termination clause permits the Verdugo cities, acting by majority vote, to terminate with one year’s notice. Residents should ask what early-exit rights West Covina would have; the ability not to renew is different from a general right to cancel mid-term."] },
      { heading: "The rate has an exception", paragraphs: ["The draft sets $91 per incident through June 30, 2027 and ordinarily allows annual per-incident increases up to 5%, rounded to the nearest dollar. It also provides for additional increases when unplanned events substantially increase system costs, including atypical retirement-system costs, catastrophic hardware failure, or natural disasters.", "The total bill also depends on the number of dispatched calls used in the agreement’s calculation. A 5% per-incident limit therefore is not a 5% ceiling on the total bill, and the extraordinary-cost clause means it is not an unconditional rate cap either."] },
      { heading: "An account code is not a spending cap", paragraphs: ["The fiscal-impact paragraph says spending will not exceed the annual appropriation and identifies Account No. 110.502.32.10.00.00.61.61300. That string is an accounting identifier. It does not state a $110,502.32 budget or contract cap. The paragraph does not supply the dollar appropriation needed to calculate an annual or full-term cost."] }
    ],
    questions: ["What is the annual appropriation and recent actual spending for this service?", "What call volumes and ordinary rate increases are assumed in a full-term forecast?", "Will the executed agreement correct or explain the initial-term date mismatch?", "How would extraordinary increases be documented, allocated, and reported to Council?", "What early termination rights and performance conditions protect West Covina?", "Will renewals and material amendments receive a public report before action?"],
    sourcePages: [{ page: 15, label: "Item 5 recommendation and fiscal-impact report (original PDF pp. 88–90)" }, { page: 18, label: "Draft agreement: term, termination, costs (original PDF p. 95)" }],
    related: [{ title: "Budget & Spending Watch", href: "/accountability/budget-spending/" }]
  },
  {
    slug: "police-slesa-surveillance-funding-october-2026",
    title: "Police funding request includes GPS surveillance and drone-related supplies",
    category: "Police / Technology",
    summary: "The $166,284 SLESA request includes an estimated $24,000 for GPS surveillance. Drone software and accessories share a larger category with other supplies; their individual cost is not stated.",
    status: "Staff expenditure request · Council outcome not verified",
    sections: [
      { heading: "What the request includes", paragraphs: ["Item 6 lists $29,000 for helicopter support, $24,000 for GPS-based surveillance services used by the Special Enforcement Team to track narcotics suspects, $29,500 for SWAT ammunition and tactical supplies, and $40,500 for protective supplies.", "A remaining $43,284 category combines traffic supplies, weapons accessories, unmanned aerial system software and accessories, forensic services, and other frontline supplies. It would be inaccurate to describe all $43,284 as drone spending."] },
      { heading: "The funding source and a date inconsistency", paragraphs: ["Staff identifies restricted state SLESA funds in Fund 155 and reports no General Fund impact because estimated revenue and expenditures were previously budgeted. The report also says some supply and service expenditures have already started.", "The heading and discussion identify FY 2026–27, while the recommendation references FY 2025–26. That may be a drafting error, but Finance should confirm the correct allocation year and whether any carryover is involved. The inconsistency alone is not evidence of improper spending."] },
      { heading: "The policy questions remain", paragraphs: ["The report names broad purposes but does not identify the GPS vendor, itemize the drone portion, or set out data retention, sharing, access, and deployment rules. Those details would help residents evaluate how the technology is used. This request does not establish a new Flock purchase or connect the GPS service to license-plate cameras."] }
    ],
    questions: ["Which fiscal-year allocation is being used, and what has already been spent?", "Who provides GPS surveillance and what contract governs it?", "What is the separate cost and purpose of the UAS software and accessories?", "What policies govern authorization, warrants where applicable, retention, access, sharing, and audits?", "What public usage or oversight reports are available?"],
    sourcePages: [{ page: 19, label: "Item 6 expenditure list and fiscal impact (original PDF pp. 102–103)" }],
    related: [{ title: "Flock ALPR requirements: a separate surveillance issue", href: "/accountability/flock-alpr-requirements/" }]
  },
  {
    slug: "galster-woodgrove-playground-funding-october-2026",
    title: "$1.138 million in playground funding: equipment now, installation bids to follow",
    category: "Parks / Public Spending",
    summary: "Galster and Woodgrove reports identify $1,138,200 in approved RPOSD grant funding. The requested purchases total $508,536.53, with installation contracts planned for later Council review.",
    status: "Grants reported approved by staff · Purchase requests not verified as adopted",
    sections: [
      { heading: "Two projects and two purchasing steps", paragraphs: ["Staff reports $458,400 in RPOSD funding for Galster Park and $679,800 for Woodgrove Park. Item 7 requests up to $229,244 for Galster equipment and poured-in-place surfacing through Innovative Playgrounds. Item 8 requests up to $279,292.53 for Woodgrove equipment through Kompan California.", "Both reports describe equipment procurement first, followed by competitive installation bids. Staff says installation agreements would return to Council. Purchasing equipment does not establish that installation is funded in full, scheduled, or complete."] },
      { heading: "Keep the arithmetic straight", paragraphs: ["The two project allocations total $1,138,200. Subtracting the requested purchases of $508,536.53 leaves $629,663.47 before other costs or commitments. That is an arithmetic remainder, not a verified uncommitted balance or a final installation budget.", "The fiscal tables list matching revenue and expenditure entries. Adding those sides together would double-count the same funding. Likewise, the two Fund 236 amendments start from the same baseline; if both are adopted as written, combined revenues would be $2,360,300 and expenditures $1,478,200, leaving the same $882,100 annual net change. Finance should confirm the actual posted budget."] },
      { heading: "Which Measure A?", paragraphs: ["These reports identify the Los Angeles County Regional Park and Open Space District’s 2016 parks Measure A. It is a different funding program from the homelessness Measure A Local Solutions Funding covered elsewhere on StayJustIn. Shared names do not make the money interchangeable or establish that the programs use the same City account."] }
    ],
    questions: ["Were both purchases and budget amendments approved as proposed?", "What are the installation estimates, bid dates, contingency amounts, and full project budgets?", "How will storage, warranties, accessibility, and ongoing maintenance be handled?", "When will each playground close for work and reopen?", "Does the posted Fund 236 budget include both amendments?"],
    sourcePages: [{ page: 21, label: "Galster report and project funding (original PDF pp. 104–106)" }, { page: 24, label: "Galster budget amendment (original PDF p. 133)" }, { page: 25, label: "Woodgrove report and project funding (original PDF pp. 134–136)" }, { page: 28, label: "Woodgrove budget amendment (original PDF p. 172)" }],
    related: [{ title: "Separate program: Measure A homelessness funding", href: "/city-hall/west-covina-measure-a-homeless-funding-2026/" }, { title: "Galster fire mitigation", href: "/city-hall/galster-fire-mitigation-october-2026/" }]
  },
  {
    slug: "galster-fire-mitigation-october-2026",
    title: "Galster fire mitigation is in design; field-work timing remains unclear",
    category: "Galster / Fire Prevention",
    summary: "The CIP update says the Fire Department is coordinating grant-funded mitigation with SGVCOG within and around Galster Wilderness Park.",
    status: "City-reported design status · October 20 CIP update",
    sections: [
      { heading: "A documented step forward", paragraphs: ["The Hillside Fire Mitigation Project appears in the October CIP presentation as being in design. The slide says the Fire Department is coordinating the scope of grant-funded work with the San Gabriel Valley Council of Governments within and around Galster Wilderness Park.", "This is evidence of a planning effort. It does not establish that vegetation treatment has started, that a particular number of acres will be treated, or that the risk has already been reduced."] },
      { heading: "What residents should be able to see next", paragraphs: ["A scope map, funding amount, work schedule, and maintenance plan would make the project easier to follow. Residents near the park also need to know what work falls on public land, how access will be coordinated, and whether treatment will need to be repeated.", "The playground purchases in the same packet are a separate project. Their funding totals should not be used as the fire-mitigation budget."] }
    ],
    questions: ["What is the grant amount and funding agreement?", "Which areas and acreage are included, and what treatment is planned?", "When will field work begin and who will carry it out?", "Is maintenance funded after the initial work?", "How will adjacent residents receive the scope map and schedule?"],
    sourcePages: [{ page: 5, label: "Item 2: hillside fire mitigation status (original PDF p. 36)" }],
    related: [{ title: "Galster and Woodgrove playground funding", href: "/city-hall/galster-woodgrove-playground-funding-october-2026/" }, { title: "Winter storm preparation", href: "/city-hall/winter-storm-preparation-october-2026/" }]
  },
  {
    slug: "traffic-signals-budget-citrus-cameron-october-2026",
    title: "Ten-intersection signal work comes in below budget; Citrus/Cameron still needs construction funding",
    category: "Traffic / Infrastructure",
    summary: "Staff reports $2,834,961.10 in completed construction for one signal project, $223,980.25 below its budget including contingency. The separate Citrus/Cameron design awaits construction funding.",
    status: "Staff-reported completion and CIP status · Formal acceptance not verified",
    sections: [
      { heading: "A completed project within its authorized budget", paragraphs: ["Item 3 reports completion of signal improvements at ten intersections by Select Electric. The original construction contract was $2,659,949, with $398,992.35 in contingency, making a $3,058,941.35 construction budget. Staff reports actual construction costs of $2,834,961.10.", "The result is $223,980.25 below the budget including contingency, but $175,012.10 above the original contract amount. Both comparisons matter. It is not a $224,000 reduction from the original bid, nor is this construction-only figure the total cost including design. Staff requested formal acceptance and filing of a Notice of Completion."] },
      { heading: "Where that work took place", paragraphs: ["The report lists Sunset/Merced, Cameron/Orange, Vincent/Puente, Lark Ellen/Badillo, Lark Ellen/Rowland, Hollenbeck/Cameron, Azusa/Fairgrove, Amar/Temple, Amar/Shadow Oak, and Sentous/La Puente. Staff says the work met the plans and specifications and was completed within the contractual duration."] },
      { heading: "Citrus/Cameron is a different project", paragraphs: ["The CIP presentation places Citrus at Cameron Signal Design in design, with completion anticipated in spring 2027. It describes a four-way signal with left-turn phasing and a rest-on-red feature, while stating that construction awaits identified funding.", "That slide does not establish what any previous allocation covered or whether money was moved. A project-level budget separating design, construction, commitments, and remaining need is the appropriate next record to request."] }
    ],
    questions: ["What changes account for the $175,012.10 above the initial construction contract?", "What is the final all-in cost, including design and other project expenses?", "Was the Notice of Completion filed and retention released?", "For Citrus/Cameron, what is the construction estimate and remaining funding gap?"],
    sourcePages: [{ page: 7, label: "Item 3 construction report and cost table (original PDF pp. 39–40)" }, { page: 4, label: "Item 2: Citrus/Cameron design and funding status (original PDF p. 31)" }],
    related: [{ title: "Budget & Spending Watch", href: "/accountability/budget-spending/" }]
  },
  {
    slug: "winter-storm-preparation-october-2026",
    title: "West Covina’s winter preparation report: practical steps and budget limits",
    category: "Resident Resources",
    summary: "The October report calls for routine preparation using existing resources and encourages residents to plan ahead for storms, drainage problems, and possible disruptions.",
    status: "City preparedness guidance · Not a live weather alert",
    sections: [
      { heading: "What the report funds", paragraphs: ["Item 9 is an informational storm-preparation report. Staff anticipates no additional fiscal impact from receiving it and says routine maintenance, readiness, and outreach use existing departmental resources and budgets. Extraordinary response or repair costs would be considered through normal City processes.", "That means the report does not establish that every possible storm repair is funded or that all drainage problems have been fixed. It also should not be read as a forecast of a specific storm."] },
      { heading: "The City’s household preparation list", paragraphs: ["The attached presentation recommends signing up for emergency alerts, monitoring official forecasts, preparing a household evacuation and communication plan, and assembling food, water, medication, and other essentials for up to ten days. It asks residents to account for infants, older adults, medical needs, and pets.", "The City also recommends clearing gutters and private drainage paths, addressing roof leaks, and considering sandbags before rain. Check current official notices for supply availability and instructions. This summary is dated October 23; use current City and weather-service alerts for changing conditions."] },
      { heading: "How this connects to ongoing coverage", paragraphs: ["The Altamira investigation and Galster mitigation effort raise separate questions about project scope and timing. Their presence in the same packet does not establish a hazard at every nearby home or a completed solution. Residents need clear maps, schedules, and contact points for their own area."] }
    ],
    questions: ["Where can residents find current drainage-maintenance and storm-preparation updates?", "How will the City notify hillside residents if conditions require additional precautions?", "What extraordinary repair costs would need a later budget action?"],
    sourcePages: [{ page: 29, label: "Item 9 report and fiscal impact (original PDF pp. 173–174)" }, { page: 31, label: "Household preparedness slide (original PDF p. 178)" }],
    related: [{ title: "Official City website and current notices", href: "https://www.westcovina.gov/" }, { title: "National Weather Service Los Angeles/Oxnard", href: "https://www.weather.gov/lox/" }, { title: "Altamira preliminary study", href: "/city-hall/altamira-hillside-study-budget-october-2026/" }]
  }
];
