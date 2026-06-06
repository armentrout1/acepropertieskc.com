export type ExpansionArea = {
  slug: string;
  city: string;
  state: string;
  county: string;
  description: string;
  body: string;
  neighborhoodFocus: string[];
  sellerSituations: string[];
  titleNotes: string;
  nearbyLinks: { label: string; href: string }[];
};

export const expansionAreas: ExpansionArea[] = [
  {
    slug: "blue-springs-mo",
    city: "Blue Springs",
    state: "MO",
    county: "Jackson County",
    description:
      "Sell your Blue Springs house as-is for cash or compare flexible options. Local help for inherited homes, repairs, relocation, tenants, and tight timelines.",
    body:
      "Blue Springs sellers often want a clean plan when a house needs repairs, family members are coordinating an estate, or a move needs to happen without a long listing process. We review the property as-is, explain title and payoff items, and give you a written path before you decide.",
    neighborhoodFocus: ["Downtown Blue Springs", "Lake Tapawingo area", "Adams Dairy Parkway corridor"],
    sellerSituations: [
      "Inherited homes where heirs need one written option",
      "Repair-heavy houses that may not show well on the MLS",
      "Relocation timelines tied to schools, jobs, or another purchase",
      "Vacant houses where utilities, lawn care, and insurance keep adding up",
    ],
    titleNotes:
      "Most Blue Springs closings involve Jackson County title and tax review. If probate, liens, or payoffs are involved, we help gather those items early so closing dates stay realistic.",
    nearbyLinks: [
      { label: "Independence", href: "/areas/independence-mo/" },
      { label: "Lee's Summit", href: "/areas/lees-summit-mo/" },
      { label: "Jackson County probate guide", href: "/resources/jackson-county-probate-property-sale/" },
    ],
  },
  {
    slug: "raytown-mo",
    city: "Raytown",
    state: "MO",
    county: "Jackson County",
    description:
      "Cash home buyers in Raytown, Missouri. Sell as-is with repairs, tenants, inherited property, late payments, or a vacant house.",
    body:
      "Raytown has many long-held homes where repairs, clean-out, and family timing matter more than a polished listing. We help sellers compare a direct as-is offer with the cost and time of listing.",
    neighborhoodFocus: ["Downtown Raytown", "South Raytown", "Blue Ridge Boulevard area"],
    sellerSituations: [
      "Older homes needing roof, HVAC, plumbing, or cosmetic updates",
      "Estate properties with belongings still inside",
      "Rental houses where tenants need respectful communication",
      "Payment or tax pressure that needs a clear closing plan",
    ],
    titleNotes:
      "Raytown sellers may need payoff letters, tax balances, estate paperwork, or lease details reviewed before closing. We outline those items in writing.",
    nearbyLinks: [
      { label: "Kansas City, MO", href: "/areas/kansas-city-mo/" },
      { label: "64131", href: "/areas/64131/" },
      { label: "Sell as-is guide", href: "/resources/sell-house-as-is-kansas-city/" },
    ],
  },
  {
    slug: "gladstone-mo",
    city: "Gladstone",
    state: "MO",
    county: "Clay County",
    description:
      "Sell a Gladstone house as-is. Compare cash and flexible options for repairs, inherited property, tenants, downsizing, or relocation.",
    body:
      "Gladstone homeowners often reach out when a house needs updates, a family member is downsizing, or an inherited property needs a simple decision. We keep the conversation practical and focused on net proceeds, timing, and certainty.",
    neighborhoodFocus: ["Antioch Road corridor", "Linden area", "North Oak Trafficway area"],
    sellerSituations: [
      "Senior downsizing with repairs or belongings to handle",
      "Inherited homes where family members live outside the metro",
      "Rental properties with long-term tenants",
      "Houses that need cosmetic updates before listing",
    ],
    titleNotes:
      "Clay County title work may involve tax prorations, HOA or utility balances, and payoff statements. We coordinate the checklist with title before asking you to pick a closing date.",
    nearbyLinks: [
      { label: "North Kansas City", href: "/areas/north-kansas-city-mo/" },
      { label: "Kansas City, MO", href: "/areas/kansas-city-mo/" },
      { label: "Inherited house checklist", href: "/resources/kansas-city-inherited-house-checklist/" },
    ],
  },
  {
    slug: "north-kansas-city-mo",
    city: "North Kansas City",
    state: "MO",
    county: "Clay County",
    description:
      "North Kansas City as-is home buyers. Get a cash offer or compare options for rentals, repairs, inherited homes, and tight sale timelines.",
    body:
      "North Kansas City properties can involve older homes, rentals, small multifamily buildings, and sellers who want privacy or speed. We review condition, occupancy, and title items before outlining a direct sale option.",
    neighborhoodFocus: ["Armour Road area", "Macken Park area", "Burlington corridor"],
    sellerSituations: [
      "Small rentals or duplexes with tenants in place",
      "Older homes that need mechanical or cosmetic updates",
      "Inherited properties close to downtown employment centers",
      "Sellers who want fewer showings and a predictable close",
    ],
    titleNotes:
      "North Kansas City title review can include Clay County taxes, lease details, utility balances, and payoff statements. We keep those items organized early.",
    nearbyLinks: [
      { label: "Gladstone", href: "/areas/gladstone-mo/" },
      { label: "Kansas City, MO", href: "/areas/kansas-city-mo/" },
      { label: "Tenant sale guide", href: "/resources/sell-house-with-tenants-kansas-city/" },
    ],
  },
  {
    slug: "grandview-mo",
    city: "Grandview",
    state: "MO",
    county: "Jackson County",
    description:
      "Sell your Grandview house as-is. Cash and flexible options for repairs, inherited homes, vacant properties, tenants, and relocation.",
    body:
      "Grandview sellers often want direct answers when repairs, vacancy, inherited property, or payment pressure make listing feel uncertain. We explain the as-is offer and compare it against a realistic listing path.",
    neighborhoodFocus: ["Main Street area", "Byars Road area", "South Grandview neighborhoods"],
    sellerSituations: [
      "Vacant homes with ongoing carrying costs",
      "Houses needing repairs before retail buyers will move forward",
      "Inherited homes where clean-out is still pending",
      "Fast timelines tied to relocation or financial pressure",
    ],
    titleNotes:
      "Grandview sales usually run through Jackson County title and tax review. If liens, taxes, probate, or payoffs are part of the file, we identify them early.",
    nearbyLinks: [
      { label: "64131", href: "/areas/64131/" },
      { label: "Kansas City, MO", href: "/areas/kansas-city-mo/" },
      { label: "Vacant house calculator", href: "/resources/vacant-house-carrying-cost-calculator/" },
    ],
  },
  {
    slug: "prairie-village-ks",
    city: "Prairie Village",
    state: "KS",
    county: "Johnson County",
    description:
      "Prairie Village home buyers for as-is sales, inherited homes, older properties, estate decisions, repairs, and flexible closing timelines.",
    body:
      "Prairie Village homes can have strong resale demand, but older condition, estate coordination, and repair scope still matter. We help sellers compare the likely MLS path against a direct as-is option.",
    neighborhoodFocus: ["The Village area", "Meadowbrook area", "Nall Avenue corridor"],
    sellerSituations: [
      "Inherited homes where family wants a clean comparison",
      "Older homes needing updates before retail buyers compete",
      "Sellers who want to avoid repair coordination",
      "Flexible move-out needs tied to downsizing or another purchase",
    ],
    titleNotes:
      "Johnson County inherited or trust-owned properties may require careful title review. We document what title needs before setting expectations.",
    nearbyLinks: [
      { label: "Overland Park", href: "/areas/overland-park-ks/" },
      { label: "Mission", href: "/areas/mission-ks/" },
      { label: "Johnson County inherited guide", href: "/resources/johnson-county-inherited-house-sale/" },
    ],
  },
  {
    slug: "mission-ks",
    city: "Mission",
    state: "KS",
    county: "Johnson County",
    description:
      "Sell a Mission, Kansas house as-is. Compare cash offers and listing options for repairs, inherited property, rentals, and fast timelines.",
    body:
      "Mission sellers often need practical options for older homes, rental properties, and inherited houses close to the urban core. We compare direct sale certainty against listing prep and buyer repair expectations.",
    neighborhoodFocus: ["Downtown Mission", "Lamar Avenue area", "Roe Avenue corridor"],
    sellerSituations: [
      "Older homes needing updates before listing",
      "Inherited properties with multiple decision-makers",
      "Small rentals or tenant-occupied homes",
      "Sellers who want a predictable closing date",
    ],
    titleNotes:
      "Johnson County title may need payoff statements, tax prorations, HOA information, trust documents, or lease details. We help organize those before closing.",
    nearbyLinks: [
      { label: "Prairie Village", href: "/areas/prairie-village-ks/" },
      { label: "Shawnee", href: "/areas/shawnee-ks/" },
      { label: "Cash buyer vs agent", href: "/resources/cash-buyer-vs-real-estate-agent-kansas-city/" },
    ],
  },
  {
    slug: "leawood-ks",
    city: "Leawood",
    state: "KS",
    county: "Johnson County",
    description:
      "Leawood as-is home sale options. Compare direct offers with MLS net sheets for inherited homes, repairs, downsizing, and flexible closings.",
    body:
      "Leawood homes may have strong retail potential, so the decision should be careful. We help sellers compare repairs, timing, commissions, and carrying costs against a direct offer when privacy or certainty matters.",
    neighborhoodFocus: ["Old Leawood", "Town Center area", "South Leawood neighborhoods"],
    sellerSituations: [
      "Inherited or trust-owned homes needing family alignment",
      "High-equity homes where sellers want to compare net options",
      "Properties needing updates before premium buyers compete",
      "Downsizing moves where closing and possession timing matter",
    ],
    titleNotes:
      "Leawood sales can involve HOA details, trust documents, estate paperwork, or larger payoff and tax items. We keep the net sheet transparent.",
    nearbyLinks: [
      { label: "Overland Park", href: "/areas/overland-park-ks/" },
      { label: "Prairie Village", href: "/areas/prairie-village-ks/" },
      { label: "Investor offer vs MLS net sheet", href: "/resources/investor-offer-vs-mls-net-sheet-kansas-city/" },
    ],
  },
  {
    slug: "kansas-city-ks",
    city: "Kansas City",
    state: "KS",
    county: "Wyandotte County",
    description:
      "Kansas City, Kansas home buyers for as-is sales, repairs, code issues, inherited homes, tenants, back taxes, and distressed properties.",
    body:
      "Kansas City, Kansas sellers may be dealing with repairs, code notices, liens, taxes, tenants, or inherited property. We review the situation as-is and explain whether a direct sale can simplify the next step.",
    neighborhoodFocus: ["Rosedale", "Armourdale", "Piper and western KCK"],
    sellerSituations: [
      "Distressed properties with code or repair concerns",
      "Back taxes, liens, or payment pressure",
      "Tenant-occupied rentals where showings are difficult",
      "Inherited homes where title and clean-out both need attention",
    ],
    titleNotes:
      "Wyandotte County files may involve taxes, utility balances, liens, code items, leases, or estate documents. We help sellers get a clear title checklist.",
    nearbyLinks: [
      { label: "Wyandotte County distressed guide", href: "/resources/wyandotte-county-distressed-property-sale/" },
      { label: "Mission", href: "/areas/mission-ks/" },
      { label: "Kansas City, MO", href: "/areas/kansas-city-mo/" },
    ],
  },
  {
    slug: "belton-mo",
    city: "Belton",
    state: "MO",
    county: "Cass County",
    description:
      "Sell a Belton house as-is with cash or flexible options for repairs, inherited property, vacant homes, tenants, and relocation timelines.",
    body:
      "Belton sellers often want a simple option when repairs, estate decisions, vacancy, or relocation make listing feel like too much coordination. We review the property as-is, compare the likely net, and document a closing path before you decide.",
    neighborhoodFocus: ["Downtown Belton", "Markey Parkway area", "North Belton neighborhoods"],
    sellerSituations: [
      "Inherited homes where family needs a clean written option",
      "Repair-heavy properties that may need updates before retail buyers compete",
      "Vacant houses with utilities, mowing, and insurance still running",
      "Sellers coordinating a move across Cass County or the KC metro",
    ],
    titleNotes:
      "Belton sales may involve Cass County tax review, mortgage payoffs, estate documents, or utility balances. We help identify what title needs before setting the closing date.",
    nearbyLinks: [
      { label: "Grandview", href: "/areas/grandview-mo/" },
      { label: "64131", href: "/areas/64131/" },
      { label: "Vacant house calculator", href: "/resources/vacant-house-carrying-cost-calculator/" },
    ],
  },
  {
    slug: "liberty-mo",
    city: "Liberty",
    state: "MO",
    county: "Clay County",
    description:
      "Liberty, Missouri home buyers for as-is sales, inherited houses, repairs, downsizing, tenant properties, and flexible closings.",
    body:
      "Liberty homeowners may be balancing family timing, older home repairs, estate paperwork, or a move that needs certainty. We explain a direct as-is option and compare it against the listing path when that is useful.",
    neighborhoodFocus: ["Historic downtown Liberty", "William Jewell area", "South Liberty neighborhoods"],
    sellerSituations: [
      "Historic or older homes needing careful repair estimates",
      "Inherited properties where heirs need aligned updates",
      "Downsizing situations with belongings still in the house",
      "Rental houses where a quiet sale is easier than repeated showings",
    ],
    titleNotes:
      "Clay County title work may include estate paperwork, tax prorations, payoff statements, HOA items, or lease details. We organize the checklist early.",
    nearbyLinks: [
      { label: "Gladstone", href: "/areas/gladstone-mo/" },
      { label: "North Kansas City", href: "/areas/north-kansas-city-mo/" },
      { label: "Inherited house checklist", href: "/resources/kansas-city-inherited-house-checklist/" },
    ],
  },
  {
    slug: "parkville-mo",
    city: "Parkville",
    state: "MO",
    county: "Platte County",
    description:
      "Sell your Parkville house as-is. Compare cash and flexible options for inherited homes, repairs, hillside properties, downsizing, and relocation.",
    body:
      "Parkville homes can have unique layouts, terrain, older systems, and strong resale potential. We help sellers compare the direct-sale certainty against listing prep, repair scope, and timeline risk.",
    neighborhoodFocus: ["Downtown Parkville", "Riss Lake area", "Highway 9 corridor"],
    sellerSituations: [
      "Homes with hillside, drainage, roof, or foundation concerns",
      "Inherited properties where family wants a clear comparison",
      "High-equity homes where privacy and timing matter",
      "Relocation or downsizing moves that need flexible possession",
    ],
    titleNotes:
      "Parkville transactions can involve Platte County title review, HOA documents, tax prorations, trust paperwork, or repair disclosures. We keep the offer terms and net sheet clear.",
    nearbyLinks: [
      { label: "Platte City", href: "/areas/platte-city-mo/" },
      { label: "Kansas City, MO", href: "/areas/kansas-city-mo/" },
      { label: "Investor offer vs MLS net sheet", href: "/resources/investor-offer-vs-mls-net-sheet-kansas-city/" },
    ],
  },
  {
    slug: "riverside-mo",
    city: "Riverside",
    state: "MO",
    county: "Platte County",
    description:
      "Riverside, Missouri as-is home buyers for repairs, inherited property, rental houses, relocation, and fast sale timelines.",
    body:
      "Riverside sellers may be dealing with older homes, rental properties, floodplain or drainage questions, or a timeline tied to relocation. We review the property and explain whether a direct as-is sale fits.",
    neighborhoodFocus: ["Vivion Road corridor", "Argosy area", "Riverside neighborhoods near I-635"],
    sellerSituations: [
      "Rental properties where access and tenants need coordination",
      "Older homes needing mechanical or cosmetic updates",
      "Vacant properties with carrying costs",
      "Inherited homes where title and belongings both need attention",
    ],
    titleNotes:
      "Riverside sales can require Platte County tax review, payoff statements, lease information, and property condition notes. We document these items before closing.",
    nearbyLinks: [
      { label: "Parkville", href: "/areas/parkville-mo/" },
      { label: "North Kansas City", href: "/areas/north-kansas-city-mo/" },
      { label: "Tenant sale guide", href: "/resources/sell-house-with-tenants-kansas-city/" },
    ],
  },
  {
    slug: "merriam-ks",
    city: "Merriam",
    state: "KS",
    county: "Johnson County",
    description:
      "Merriam, Kansas home buyers for as-is sales, inherited homes, older properties, tenants, repairs, and flexible closing timelines.",
    body:
      "Merriam properties often sit close to strong retail demand, but older systems, rental use, or family coordination can make listing harder. We compare a direct offer with realistic listing costs and timing.",
    neighborhoodFocus: ["Downtown Merriam", "Antioch Road corridor", "I-35 corridor neighborhoods"],
    sellerSituations: [
      "Older homes needing cosmetic or mechanical updates",
      "Inherited homes where heirs want net numbers in writing",
      "Small rentals or tenant-occupied properties",
      "Sellers comparing convenience against the MLS",
    ],
    titleNotes:
      "Johnson County title may need tax prorations, payoff statements, trust documents, HOA details, or leases. We help organize those before closing.",
    nearbyLinks: [
      { label: "Mission", href: "/areas/mission-ks/" },
      { label: "Shawnee", href: "/areas/shawnee-ks/" },
      { label: "Cash buyer vs agent", href: "/resources/cash-buyer-vs-real-estate-agent-kansas-city/" },
    ],
  },
  {
    slug: "roeland-park-ks",
    city: "Roeland Park",
    state: "KS",
    county: "Johnson County",
    description:
      "Sell a Roeland Park house as-is. Cash and flexible options for older homes, inherited property, repairs, tenants, and fast timelines.",
    body:
      "Roeland Park sellers often need a practical plan for older homes, inherited property, or rentals close to the urban core. We explain the as-is number and compare it with listing preparation when needed.",
    neighborhoodFocus: ["Roe Boulevard area", "Nall Avenue area", "North Johnson County neighborhoods"],
    sellerSituations: [
      "Older homes needing updates before listing",
      "Inherited houses with belongings or repairs still pending",
      "Rental properties where showings would disrupt tenants",
      "Sellers wanting a predictable closing date",
    ],
    titleNotes:
      "Roeland Park sales may involve Johnson County title review, payoff statements, taxes, trust documents, or lease details. We keep the closing requirements plain.",
    nearbyLinks: [
      { label: "Mission", href: "/areas/mission-ks/" },
      { label: "Fairway", href: "/areas/fairway-ks/" },
      { label: "Sell as-is guide", href: "/resources/sell-house-as-is-kansas-city/" },
    ],
  },
  {
    slug: "fairway-ks",
    city: "Fairway",
    state: "KS",
    county: "Johnson County",
    description:
      "Fairway, Kansas as-is home sale options for inherited homes, older properties, repairs, downsizing, and MLS net sheet comparisons.",
    body:
      "Fairway homes may have strong retail appeal, so sellers should compare carefully. We help evaluate repairs, timing, carrying costs, privacy, and whether a direct offer makes sense next to the MLS path.",
    neighborhoodFocus: ["Fairway Shops area", "Mission Road corridor", "North Fairway neighborhoods"],
    sellerSituations: [
      "Inherited or trust-owned homes needing family alignment",
      "Older homes with updates needed before premium buyers compete",
      "Downsizing moves where possession timing matters",
      "Sellers who want privacy and fewer showings",
    ],
    titleNotes:
      "Fairway files can involve Johnson County title, trust documents, HOA or municipal items, payoff statements, and tax prorations. We keep the comparison clean.",
    nearbyLinks: [
      { label: "Prairie Village", href: "/areas/prairie-village-ks/" },
      { label: "Roeland Park", href: "/areas/roeland-park-ks/" },
      { label: "Investor offer vs MLS net sheet", href: "/resources/investor-offer-vs-mls-net-sheet-kansas-city/" },
    ],
  },
  {
    slug: "bonner-springs-ks",
    city: "Bonner Springs",
    state: "KS",
    county: "Wyandotte County",
    description:
      "Bonner Springs home buyers for as-is sales, inherited property, repairs, vacant houses, acreage, tenants, and title concerns.",
    body:
      "Bonner Springs sellers may be working through repairs, inherited property, rural-edge homes, acreage, or a vacant house that is costing money each month. We review condition and title early so the path is clear.",
    neighborhoodFocus: ["Downtown Bonner Springs", "K-7 corridor", "Western Wyandotte County"],
    sellerSituations: [
      "Homes or acreage needing repairs before listing",
      "Inherited properties where family members need written options",
      "Vacant houses with utilities, lawn care, and security concerns",
      "Title items such as taxes, liens, or payoff questions",
    ],
    titleNotes:
      "Bonner Springs properties may involve Wyandotte County tax review, title payoffs, estate documents, utility balances, or acreage-specific questions. We identify those early.",
    nearbyLinks: [
      { label: "Kansas City, KS", href: "/areas/kansas-city-ks/" },
      { label: "Wyandotte County distressed guide", href: "/resources/wyandotte-county-distressed-property-sale/" },
      { label: "Vacant house calculator", href: "/resources/vacant-house-carrying-cost-calculator/" },
    ],
  },
  {
    slug: "platte-city-mo",
    city: "Platte City",
    state: "MO",
    county: "Platte County",
    description:
      "Platte City home buyers for as-is sales, inherited homes, repairs, acreage, relocation, vacant property, and flexible closing timelines.",
    body:
      "Platte City sellers may need help comparing a direct sale against listing when the home has acreage, repairs, estate coordination, or a move tied to the northland. We explain the net and timeline before you decide.",
    neighborhoodFocus: ["Downtown Platte City", "I-29 corridor", "Platte County acreage"],
    sellerSituations: [
      "Inherited homes or acreage where family needs a simple option",
      "Repair-heavy properties where contractors are hard to coordinate",
      "Relocation timelines tied to airport or northland employment",
      "Vacant homes with ongoing holding costs",
    ],
    titleNotes:
      "Platte City closings may involve Platte County taxes, acreage details, estate documents, payoff statements, or utility balances. We keep the title checklist visible.",
    nearbyLinks: [
      { label: "Parkville", href: "/areas/parkville-mo/" },
      { label: "Riverside", href: "/areas/riverside-mo/" },
      { label: "Inherited house checklist", href: "/resources/kansas-city-inherited-house-checklist/" },
    ],
  },
  {
    slug: "gardner-ks",
    city: "Gardner",
    state: "KS",
    county: "Johnson County",
    description:
      "Gardner, Kansas home buyers for as-is sales, inherited property, repairs, relocation, vacant homes, and flexible closing timelines.",
    body:
      "Gardner sellers may need a direct option when a move, estate, vacancy, or repair list makes a traditional sale harder to manage. We compare the as-is offer against realistic listing costs and timing.",
    neighborhoodFocus: ["Downtown Gardner", "Moonlight Road corridor", "Southwest Johnson County neighborhoods"],
    sellerSituations: [
      "Relocation timelines tied to work or schools",
      "Inherited homes where family needs a clear net number",
      "Houses needing repairs before retail buyers compete",
      "Vacant homes with ongoing holding costs",
    ],
    titleNotes:
      "Gardner closings may involve Johnson County tax prorations, payoff statements, HOA information, trust documents, or estate paperwork. We keep title requirements organized.",
    nearbyLinks: [
      { label: "Olathe", href: "/areas/olathe-ks/" },
      { label: "Spring Hill", href: "/areas/spring-hill-ks/" },
      { label: "Johnson County inherited guide", href: "/resources/johnson-county-inherited-house-sale/" },
    ],
  },
  {
    slug: "spring-hill-ks",
    city: "Spring Hill",
    state: "KS",
    county: "Johnson County",
    description:
      "Sell a Spring Hill house as-is. Compare cash and flexible options for repairs, inherited homes, acreage, relocation, and vacant property.",
    body:
      "Spring Hill sellers often need flexibility around acreage, newer subdivisions, older homes, or relocation timing. We review the property and explain whether a direct as-is sale fits better than listing.",
    neighborhoodFocus: ["Downtown Spring Hill", "Webster Street corridor", "South Johnson County acreage"],
    sellerSituations: [
      "Homes or acreage needing repairs before listing",
      "Relocation timelines tied to another purchase",
      "Inherited homes with out-of-town family members",
      "Vacant properties where maintenance keeps adding up",
    ],
    titleNotes:
      "Spring Hill sales can involve Johnson County or nearby county title details, payoff statements, acreage questions, tax prorations, and estate paperwork.",
    nearbyLinks: [
      { label: "Gardner", href: "/areas/gardner-ks/" },
      { label: "Olathe", href: "/areas/olathe-ks/" },
      { label: "Investor offer vs MLS net sheet", href: "/resources/investor-offer-vs-mls-net-sheet-kansas-city/" },
    ],
  },
  {
    slug: "de-soto-ks",
    city: "De Soto",
    state: "KS",
    county: "Johnson County",
    description:
      "De Soto, Kansas home buyers for as-is sales, inherited homes, acreage, repairs, relocation, vacant houses, and title concerns.",
    body:
      "De Soto sellers may be balancing acreage, older property condition, fast growth nearby, or family timing. We help compare direct-sale certainty against listing prep and buyer repair expectations.",
    neighborhoodFocus: ["Downtown De Soto", "K-10 corridor", "Western Johnson County acreage"],
    sellerSituations: [
      "Acreage or older homes needing repair estimates",
      "Inherited properties with family coordination",
      "Vacant homes with utilities and insurance still running",
      "Sellers comparing development-area demand against a direct sale",
    ],
    titleNotes:
      "De Soto closings may involve Johnson County title, acreage details, tax prorations, payoff statements, estate documents, or trust paperwork.",
    nearbyLinks: [
      { label: "Lenexa", href: "/areas/lenexa-ks/" },
      { label: "Gardner", href: "/areas/gardner-ks/" },
      { label: "As-is net sheet template", href: "/resources/as-is-sale-net-sheet-template/" },
    ],
  },
  {
    slug: "grain-valley-mo",
    city: "Grain Valley",
    state: "MO",
    county: "Jackson County",
    description:
      "Grain Valley home buyers for as-is sales, repairs, inherited property, relocation, vacant houses, and flexible closing dates.",
    body:
      "Grain Valley sellers may need a simple path when repairs, relocation, inherited property, or vacancy make listing uncertain. We review the property as-is and explain the title and closing path.",
    neighborhoodFocus: ["Downtown Grain Valley", "Eagles Parkway area", "I-70 corridor neighborhoods"],
    sellerSituations: [
      "Relocation or job changes needing a dependable closing date",
      "Inherited homes where heirs need one written option",
      "Repairs that may slow down traditional buyers",
      "Vacant homes with carrying costs",
    ],
    titleNotes:
      "Grain Valley sales usually involve Jackson County title and tax review, payoff statements, estate documents, and any HOA or utility balances.",
    nearbyLinks: [
      { label: "Blue Springs", href: "/areas/blue-springs-mo/" },
      { label: "Oak Grove", href: "/areas/oak-grove-mo/" },
      { label: "Jackson County probate guide", href: "/resources/jackson-county-probate-property-sale/" },
    ],
  },
  {
    slug: "oak-grove-mo",
    city: "Oak Grove",
    state: "MO",
    county: "Jackson County",
    description:
      "Oak Grove, Missouri as-is home buyers for repairs, inherited homes, acreage, vacant property, relocation, and fast sale needs.",
    body:
      "Oak Grove sellers may be working through acreage, repairs, estate timing, or a vacant house that needs a clean next step. We compare a direct offer against the practical cost of listing.",
    neighborhoodFocus: ["Downtown Oak Grove", "I-70 corridor", "Eastern Jackson County acreage"],
    sellerSituations: [
      "Homes or acreage needing updates before listing",
      "Inherited houses with belongings or repairs pending",
      "Vacant properties with ongoing maintenance needs",
      "Sellers needing a reliable close before moving",
    ],
    titleNotes:
      "Oak Grove closings can include Jackson County tax review, acreage questions, payoff statements, estate paperwork, liens, or utility balances.",
    nearbyLinks: [
      { label: "Grain Valley", href: "/areas/grain-valley-mo/" },
      { label: "Blue Springs", href: "/areas/blue-springs-mo/" },
      { label: "Major repairs guide", href: "/resources/major-repairs-vs-selling-as-is-kansas-city/" },
    ],
  },
  {
    slug: "pleasant-hill-mo",
    city: "Pleasant Hill",
    state: "MO",
    county: "Cass County",
    description:
      "Pleasant Hill home buyers for as-is sales, repairs, inherited property, acreage, vacant homes, and flexible closing timelines.",
    body:
      "Pleasant Hill sellers often want direct answers when a property has repairs, acreage, estate questions, or carrying costs. We outline the as-is option and compare it with a realistic listing path.",
    neighborhoodFocus: ["Downtown Pleasant Hill", "Highway 7 corridor", "Cass County acreage"],
    sellerSituations: [
      "Inherited properties where family needs clear documentation",
      "Homes or acreage needing contractor work",
      "Vacant properties with utilities, lawn care, and insurance costs",
      "Sellers wanting fewer showings and a predictable close",
    ],
    titleNotes:
      "Pleasant Hill closings may involve Cass County tax review, acreage details, payoff statements, estate documents, and lien checks.",
    nearbyLinks: [
      { label: "Belton", href: "/areas/belton-mo/" },
      { label: "Lee's Summit", href: "/areas/lees-summit-mo/" },
      { label: "Vacant house calculator", href: "/resources/vacant-house-carrying-cost-calculator/" },
    ],
  },
  {
    slug: "smithville-mo",
    city: "Smithville",
    state: "MO",
    county: "Clay County",
    description:
      "Smithville, Missouri home buyers for as-is sales, lake-area homes, repairs, inherited property, relocation, and vacant houses.",
    body:
      "Smithville sellers may be dealing with lake-area property, repairs, family timing, or a move that needs certainty. We explain the direct sale option and how it compares with listing preparation.",
    neighborhoodFocus: ["Downtown Smithville", "Smithville Lake area", "Northland acreage"],
    sellerSituations: [
      "Lake-area or acreage homes needing repair review",
      "Inherited properties where family members need written options",
      "Relocation timelines tied to the northland",
      "Vacant homes with maintenance or insurance concerns",
    ],
    titleNotes:
      "Smithville closings may require Clay County title review, tax prorations, payoff statements, estate documents, HOA details, or acreage notes.",
    nearbyLinks: [
      { label: "Kearney", href: "/areas/kearney-mo/" },
      { label: "Liberty", href: "/areas/liberty-mo/" },
      { label: "Inherited house checklist", href: "/resources/kansas-city-inherited-house-checklist/" },
    ],
  },
  {
    slug: "kearney-mo",
    city: "Kearney",
    state: "MO",
    county: "Clay County",
    description:
      "Kearney, Missouri as-is home buyers for inherited homes, repairs, acreage, vacant properties, relocation, and flexible closings.",
    body:
      "Kearney sellers may need a direct option for acreage, estate coordination, repairs, or relocation timing. We review the property and compare a clean as-is sale against listing costs.",
    neighborhoodFocus: ["Downtown Kearney", "I-35 corridor", "Clay County acreage"],
    sellerSituations: [
      "Inherited homes or acreage needing family alignment",
      "Repair-heavy properties where listing prep is uncertain",
      "Vacant homes with utilities and upkeep continuing",
      "Relocation timelines where a dependable buyer matters",
    ],
    titleNotes:
      "Kearney sales can include Clay County taxes, acreage details, payoff statements, estate paperwork, and title requirements that need early review.",
    nearbyLinks: [
      { label: "Liberty", href: "/areas/liberty-mo/" },
      { label: "Smithville", href: "/areas/smithville-mo/" },
      { label: "As-is sale net sheet", href: "/resources/as-is-sale-net-sheet-template/" },
    ],
  },
  {
    slug: "leavenworth-ks",
    city: "Leavenworth",
    state: "KS",
    county: "Leavenworth County",
    description:
      "Leavenworth, Kansas home buyers for as-is sales, inherited homes, military relocation, repairs, rentals, and vacant properties.",
    body:
      "Leavenworth sellers may be navigating military relocation, inherited property, older homes, rentals, or repairs that make listing complicated. We explain a direct option and document the timeline clearly.",
    neighborhoodFocus: ["Downtown Leavenworth", "Fort Leavenworth area", "South Leavenworth neighborhoods"],
    sellerSituations: [
      "Military relocation or job transfer timelines",
      "Older homes needing repairs before listing",
      "Inherited houses with title or clean-out questions",
      "Rental properties where tenant access needs coordination",
    ],
    titleNotes:
      "Leavenworth closings may involve county tax review, payoff statements, leases, military relocation timing, estate documents, or title requirements.",
    nearbyLinks: [
      { label: "Bonner Springs", href: "/areas/bonner-springs-ks/" },
      { label: "Platte City", href: "/areas/platte-city-mo/" },
      { label: "Relocation solutions", href: "/solutions/relocating/" },
    ],
  },
];
