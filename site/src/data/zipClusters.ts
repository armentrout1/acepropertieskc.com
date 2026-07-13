import type { ExpansionArea } from "./areaExpansion";

type ZipClusterAreaInput = Omit<ExpansionArea, "city">;

function zipArea(area: ZipClusterAreaInput): ExpansionArea {
  return {
    ...area,
    city: `ZIP ${area.slug}`,
  };
}

export const distressedSellerZipAreas: ExpansionArea[] = [
  zipArea({
    slug: "64124",
    state: "MO",
    county: "Jackson County",
    description:
      "Sell a house as-is in Kansas City ZIP 64124. Historic Northeast help for repairs, inherited homes, tenants, code items, back taxes, and vacant property.",
    body:
      "ZIP 64124 covers part of Kansas City's Historic Northeast, where older houses, long-held rentals, estate properties, and repair-heavy homes can make a normal listing harder. We review the property as-is and compare a direct sale against repairs, showings, clean-out, and title timing.",
    neighborhoodFocus: ["Historic Northeast", "Independence Avenue corridor", "Scarritt Renaissance area"],
    sellerSituations: [
      "Older homes with roof, foundation, plumbing, electrical, or clean-out needs",
      "Inherited houses where family members need one written option",
      "Rental or tenant-occupied homes where showings are difficult",
      "Back taxes, code notices, liens, or vacancy concerns that need a closing plan",
    ],
    titleNotes:
      "64124 closings often need Jackson County tax review, payoff statements, code or lien checks, lease details, and estate documents if heirs are involved.",
    nearbyLinks: [
      { label: "As-is seller ZIP guide", href: "/resources/kansas-city-as-is-seller-zip-codes/" },
      { label: "64127", href: "/areas/64127/" },
      { label: "64128", href: "/areas/64128/" },
      { label: "Sell with code violations", href: "/resources/sell-house-with-code-violations-kansas-city/" },
    ],
  }),
  zipArea({
    slug: "64128",
    state: "MO",
    county: "Jackson County",
    description:
      "Kansas City ZIP 64128 cash home buyers for vacant, inherited, repair-heavy, tenant-occupied, late-payment, or back-tax property situations.",
    body:
      "ZIP 64128 can be a fit when the property needs more than a polished MLS listing. Sellers may be dealing with repairs, vacancy, title pressure, taxes, tenants, or a house that has been in the family for years.",
    neighborhoodFocus: ["East Kansas City", "Swope Parkway connections", "Urban core rental and single-family blocks"],
    sellerSituations: [
      "Vacant houses with security, utilities, or grass notices",
      "Major repair issues that retail buyers may not want to inherit",
      "Payment pressure, back taxes, or payoff problems",
      "Inherited houses that need clean-out, title review, and a direct plan",
    ],
    titleNotes:
      "Jackson County title may need taxes, liens, code items, payoffs, estate authority, or tenant documents reviewed before a reliable closing date can be set.",
    nearbyLinks: [
      { label: "As-is seller ZIP guide", href: "/resources/kansas-city-as-is-seller-zip-codes/" },
      { label: "64130", href: "/areas/64130/" },
      { label: "64127", href: "/areas/64127/" },
      { label: "Back taxes guide", href: "/resources/sell-house-with-back-taxes-kansas-city/" },
    ],
  }),
  zipArea({
    slug: "64127",
    state: "MO",
    county: "Jackson County",
    description:
      "Sell a house fast in ZIP 64127 with repairs, code notices, tenants, inherited title questions, vacancy, tax pressure, or mortgage deadlines.",
    body:
      "ZIP 64127 is one of the Kansas City areas where condition, vacancy, title, and timing often matter more than curb appeal. We help sellers compare a direct as-is offer with the true cost of waiting, repairing, or listing.",
    neighborhoodFocus: ["East of downtown", "Lykins-adjacent blocks", "Industrial-edge and older residential pockets"],
    sellerSituations: [
      "Code notices, deferred maintenance, or boarded-window concerns",
      "Back taxes, liens, or late-payment pressure",
      "Tenant-occupied properties where a quiet sale matters",
      "Inherited homes that need title and clean-out coordination",
    ],
    titleNotes:
      "64127 files can involve Jackson County taxes, municipal or code items, lease details, mortgage payoffs, and probate or heir documents.",
    nearbyLinks: [
      { label: "64124", href: "/areas/64124/" },
      { label: "64128", href: "/areas/64128/" },
      { label: "Sell vacant house guide", href: "/resources/sell-vacant-house-kansas-city/" },
      { label: "As-is seller ZIP guide", href: "/resources/kansas-city-as-is-seller-zip-codes/" },
    ],
  }),
  zipArea({
    slug: "64130",
    state: "MO",
    county: "Jackson County",
    description:
      "Sell a 64130 Kansas City house as-is. Local help for Blue Hills and east-side homes with repairs, vacancy, inherited property, taxes, or payment pressure.",
    body:
      "ZIP 64130 has many older Kansas City houses where sellers may need certainty more than a long listing plan. We can review the property as-is, including repairs, clean-out, liens, taxes, and fast closing needs.",
    neighborhoodFocus: ["Blue Hills", "Swope Parkway area", "East Meyer and Prospect corridor"],
    sellerSituations: [
      "High-repair houses that need a direct buyer",
      "Vacant properties with carrying costs or security concerns",
      "Inherited homes where family wants one clear number",
      "Payment pressure, tax liens, or tight deadlines before the situation worsens",
    ],
    titleNotes:
      "Most 64130 sales run through Jackson County title and tax review. If liens, payoffs, probate, tenants, or code items are involved, we identify them early.",
    nearbyLinks: [
      { label: "64132", href: "/areas/64132/" },
      { label: "64128", href: "/areas/64128/" },
      { label: "Sell house before auction", href: "/resources/sell-house-before-foreclosure-auction-kansas-city/" },
      { label: "As-is seller ZIP guide", href: "/resources/kansas-city-as-is-seller-zip-codes/" },
    ],
  }),
  zipArea({
    slug: "64132",
    state: "MO",
    county: "Jackson County",
    description:
      "Kansas City ZIP 64132 as-is home buyers for vacant houses, inherited homes, major repairs, tenants, taxes, and fast-sale timelines.",
    body:
      "ZIP 64132 can be a fit when sellers need practical help with an older house, repairs, vacancy, family timing, or a sale that needs to happen without months of prep. We compare the as-is path with realistic listing costs.",
    neighborhoodFocus: ["South Kansas City", "Marlborough area", "Blue River and Hickman Mills connections"],
    sellerSituations: [
      "Vacant homes where utilities, mowing, and security keep adding up",
      "Inherited houses where clean-out and title are both issues",
      "Major repairs that reduce retail buyer interest",
      "Sellers who need a direct closing plan instead of repeated showings",
    ],
    titleNotes:
      "64132 closings may include Jackson County taxes, lien checks, estate documents, payoff statements, lease details, and utility or code items.",
    nearbyLinks: [
      { label: "64130", href: "/areas/64130/" },
      { label: "64131", href: "/areas/64131/" },
      { label: "Vacant house calculator", href: "/resources/vacant-house-carrying-cost-calculator/" },
      { label: "As-is seller ZIP guide", href: "/resources/kansas-city-as-is-seller-zip-codes/" },
    ],
  }),
  zipArea({
    slug: "66102",
    state: "KS",
    county: "Wyandotte County",
    description:
      "Sell a Kansas City, KS house in 66102 as-is with repairs, code items, taxes, tenants, inherited title questions, or urgent timelines.",
    body:
      "ZIP 66102 gives ACE a stronger KCK acquisition page beyond the 66109 home-base area. Sellers here may need help with older houses, back taxes, code items, tenants, vacancy, or inherited property that needs a direct answer.",
    neighborhoodFocus: ["Central Kansas City, KS", "State Avenue corridor", "Older KCK residential blocks"],
    sellerSituations: [
      "Code, repair, or clean-out problems that slow a listing",
      "Back taxes, liens, or utility balances",
      "Tenant-occupied homes where repeated showings are not realistic",
      "Inherited properties needing Wyandotte County title review",
    ],
    titleNotes:
      "66102 files may involve Wyandotte County taxes, code items, liens, payoff statements, leases, and probate or heir documentation.",
    nearbyLinks: [
      { label: "Kansas City, KS", href: "/areas/kansas-city-ks/" },
      { label: "66104", href: "/areas/66104/" },
      { label: "Wyandotte County distressed guide", href: "/resources/wyandotte-county-distressed-property-sale/" },
      { label: "As-is seller ZIP guide", href: "/resources/kansas-city-as-is-seller-zip-codes/" },
    ],
  }),
  zipArea({
    slug: "66104",
    state: "KS",
    county: "Wyandotte County",
    description:
      "Kansas City, KS ZIP 66104 cash home buyers for repairs, taxes, inherited homes, code issues, tenants, and as-is sale timelines.",
    body:
      "ZIP 66104 can produce motivated seller situations where the house needs repairs, the title has questions, or the owner wants to avoid a long listing process. We review the property as-is and outline a direct-sale path.",
    neighborhoodFocus: ["North KCK", "Quindaro area", "Wyandotte County residential pockets"],
    sellerSituations: [
      "Long-held houses with deferred maintenance",
      "Back taxes, liens, or payment pressure",
      "Inherited homes with clean-out or title questions",
      "Vacant or tenant-occupied homes where access needs coordination",
    ],
    titleNotes:
      "66104 closings can include Wyandotte County tax review, lien checks, payoff letters, estate documents, leases, and municipal or utility items.",
    nearbyLinks: [
      { label: "66102", href: "/areas/66102/" },
      { label: "66106", href: "/areas/66106/" },
      { label: "Wyandotte County foreclosure options", href: "/resources/wyandotte-county-foreclosure-options/" },
      { label: "As-is seller ZIP guide", href: "/resources/kansas-city-as-is-seller-zip-codes/" },
    ],
  }),
  zipArea({
    slug: "66106",
    state: "KS",
    county: "Wyandotte County",
    description:
      "Sell a 66106 Kansas City, KS house as-is with repairs, inherited property, tenants, title concerns, back taxes, or a fast-sale deadline.",
    body:
      "ZIP 66106 gives ACE another Wyandotte County page for sellers who may have equity but still need certainty. We can review repair-heavy homes, older rentals, inherited houses, and vacant property without requiring cleanup first.",
    neighborhoodFocus: ["Turner area", "Southwest Boulevard connections", "Older KCK residential neighborhoods"],
    sellerSituations: [
      "Older homes needing updates before retail buyers compete",
      "Rental or tenant-occupied properties",
      "Inherited homes where family wants a clear written option",
      "Taxes, liens, repairs, or vacancy issues that need early title review",
    ],
    titleNotes:
      "66106 sales may involve Wyandotte County taxes, payoff statements, code or lien checks, lease details, estate paperwork, and utility balances.",
    nearbyLinks: [
      { label: "Kansas City, KS", href: "/areas/kansas-city-ks/" },
      { label: "66109", href: "/areas/66109/" },
      { label: "Sell as-is guide", href: "/resources/sell-house-as-is-kansas-city/" },
      { label: "As-is seller ZIP guide", href: "/resources/kansas-city-as-is-seller-zip-codes/" },
    ],
  }),
];

export const qualityEquityZipAreas: ExpansionArea[] = [
  zipArea({
    slug: "64114",
    state: "MO",
    county: "Jackson County",
    description:
      "Sell a high-equity 64114 Kansas City house as-is. Helpful for Waldo, Ward Parkway, inherited homes, dated houses, repairs, and quiet sale timelines.",
    body:
      "ZIP 64114 is more of a higher-equity area than a pure distress area. Sellers may have strong location value, but still need help with dated condition, inherited property, downsizing, repairs, or a quiet sale without listing prep.",
    neighborhoodFocus: ["Waldo", "Ward Parkway corridor", "South Kansas City established neighborhoods"],
    sellerSituations: [
      "High-equity homes that are dated or need major updates",
      "Inherited or trust-owned houses where family wants a clean comparison",
      "Downsizing moves where timing and privacy matter",
      "Homes where sellers want to compare net proceeds before listing",
    ],
    titleNotes:
      "64114 closings may involve Jackson County title, trust or estate documents, payoff statements, taxes, and municipal or HOA details.",
    nearbyLinks: [
      { label: "Higher-equity home sale guide", href: "/resources/kansas-city-higher-equity-home-sale-options/" },
      { label: "64131", href: "/areas/64131/" },
      { label: "Investor offer vs MLS net sheet", href: "/resources/investor-offer-vs-mls-net-sheet-kansas-city/" },
    ],
  }),
  zipArea({
    slug: "64113",
    state: "MO",
    county: "Jackson County",
    description:
      "Kansas City ZIP 64113 as-is home sale options for Brookside-area inherited houses, dated homes, repairs, downsizing, and private offer comparisons.",
    body:
      "ZIP 64113 can produce fewer but stronger opportunities: older homes in desirable pockets where condition, estate timing, or privacy makes a direct sale worth comparing against the MLS.",
    neighborhoodFocus: ["Brookside", "Crestwood", "Ward Parkway and Meyer Boulevard area"],
    sellerSituations: [
      "Inherited homes with strong location value but dated condition",
      "Estate or trust sales where family wants a written net comparison",
      "Older homes needing updates before premium buyers compete",
      "Private-sale conversations where fewer showings matter",
    ],
    titleNotes:
      "64113 files may involve Jackson County title, estate or trust authority, payoff statements, tax prorations, and seller possession timing.",
    nearbyLinks: [
      { label: "64114", href: "/areas/64114/" },
      { label: "Higher-equity home sale guide", href: "/resources/kansas-city-higher-equity-home-sale-options/" },
      { label: "Dated house as-is guide", href: "/resources/sell-dated-house-as-is-kansas-city/" },
    ],
  }),
  zipArea({
    slug: "64145",
    state: "MO",
    county: "Jackson County",
    description:
      "Sell a 64145 South Kansas City house as-is when equity, downsizing, inherited property, repairs, or privacy matters more than a public listing.",
    body:
      "ZIP 64145 is a higher-equity page for South Kansas City sellers. A normal listing may work well, but a direct offer is still worth comparing when repairs, estate timing, possession, or privacy matter.",
    neighborhoodFocus: ["South Kansas City", "Verona Hills area", "State Line and Red Bridge connections"],
    sellerSituations: [
      "High-equity homes where the seller wants a clean net comparison",
      "Inherited or estate-owned houses needing family coordination",
      "Downsizing or relocation timelines with flexible possession needs",
      "Homes needing updates before retail buyers pay the strongest price",
    ],
    titleNotes:
      "64145 closings may include Jackson County title review, payoff statements, trust documents, HOA items, tax prorations, and possession details.",
    nearbyLinks: [
      { label: "64131", href: "/areas/64131/" },
      { label: "Leawood", href: "/areas/leawood-ks/" },
      { label: "Higher-equity home sale guide", href: "/resources/kansas-city-higher-equity-home-sale-options/" },
    ],
  }),
  zipArea({
    slug: "66205",
    state: "KS",
    county: "Johnson County",
    description:
      "Sell a 66205 Johnson County house as-is. Mission, Fairway, Westwood, and Prairie Village options for inherited, dated, high-equity, or private sales.",
    body:
      "ZIP 66205 is a higher-equity target area because location demand can be strong even when the house needs updates. We help sellers compare the MLS path against a direct offer when privacy, estate timing, or repair scope matters.",
    neighborhoodFocus: ["Mission", "Fairway", "Westwood", "Prairie Village edge"],
    sellerSituations: [
      "Older Johnson County homes needing updates before listing",
      "Inherited or trust-owned property with multiple decision-makers",
      "Sellers who want a quiet comparison before going public",
      "High-equity homes where timing is more important than squeezing every dollar",
    ],
    titleNotes:
      "66205 sales may involve Johnson County title, trust or estate paperwork, payoff statements, municipal items, HOA details, and tax prorations.",
    nearbyLinks: [
      { label: "Mission", href: "/areas/mission-ks/" },
      { label: "Fairway", href: "/areas/fairway-ks/" },
      { label: "Higher-equity home sale guide", href: "/resources/kansas-city-higher-equity-home-sale-options/" },
    ],
  }),
  zipArea({
    slug: "66206",
    state: "KS",
    county: "Johnson County",
    description:
      "Sell a 66206 Prairie Village or Leawood house as-is when inherited property, dated condition, repairs, downsizing, or privacy creates friction.",
    body:
      "ZIP 66206 has strong quality potential because homes can have equity and desirable location value, but many sellers still need a simple option for original condition, estate timing, clean-out, or private sale decisions.",
    neighborhoodFocus: ["Prairie Village", "Old Leawood", "Mission Road and Nall Avenue corridors"],
    sellerSituations: [
      "Original-condition houses needing updates",
      "Inherited homes where heirs want one written comparison",
      "Downsizing moves with possession timing or belongings still inside",
      "Sellers who want to compare certainty against MLS prep",
    ],
    titleNotes:
      "66206 closings can include Johnson County title, estate documents, trust authority, payoff statements, HOA items, and tax prorations.",
    nearbyLinks: [
      { label: "Prairie Village", href: "/areas/prairie-village-ks/" },
      { label: "Leawood", href: "/areas/leawood-ks/" },
      { label: "Higher-equity home sale guide", href: "/resources/kansas-city-higher-equity-home-sale-options/" },
    ],
  }),
  zipArea({
    slug: "66212",
    state: "KS",
    county: "Johnson County",
    description:
      "Sell a 66212 Overland Park house as-is. Compare direct offers for dated homes, inherited property, repairs, downsizing, and equity-rich sale decisions.",
    body:
      "ZIP 66212 is a good higher-equity page because many homes have strong Johnson County demand but may still need updates, clean-out, estate coordination, or a faster/private path than a normal listing.",
    neighborhoodFocus: ["Central Overland Park", "Metcalf corridor", "Established Johnson County neighborhoods"],
    sellerSituations: [
      "Dated homes needing kitchen, bath, flooring, or system updates",
      "Inherited homes where family wants a clean written option",
      "High-equity owners comparing certainty against listing prep",
      "Sellers who need flexible closing or post-closing possession",
    ],
    titleNotes:
      "66212 files may involve Johnson County title, payoff statements, trust documents, HOA or municipal items, estate authority, and tax prorations.",
    nearbyLinks: [
      { label: "Overland Park", href: "/areas/overland-park-ks/" },
      { label: "66205", href: "/areas/66205/" },
      { label: "Higher-equity home sale guide", href: "/resources/kansas-city-higher-equity-home-sale-options/" },
    ],
  }),
  zipArea({
    slug: "66204",
    state: "KS",
    county: "Johnson County",
    description:
      "Sell a 66204 Overland Park house as-is with older-home repairs, inherited property, downsizing, rental timing, or a private offer comparison.",
    body:
      "ZIP 66204 gives ACE a practical quality page for older Overland Park homes that may carry equity but still need updates or a simpler sale. We compare the as-is offer with listing prep, repairs, commissions, and seller timing.",
    neighborhoodFocus: ["Downtown Overland Park", "Antioch and Metcalf corridors", "Older central OP neighborhoods"],
    sellerSituations: [
      "Older homes needing updates before retail buyers compete",
      "Inherited or family-owned property needing a clear net comparison",
      "Small rentals or tenant-occupied homes close to central OP",
      "Sellers who want privacy or speed without giving up clear numbers",
    ],
    titleNotes:
      "66204 closings may involve Johnson County title review, payoff statements, estate or trust documents, lease details, HOA items, and tax prorations.",
    nearbyLinks: [
      { label: "Overland Park", href: "/areas/overland-park-ks/" },
      { label: "Mission", href: "/areas/mission-ks/" },
      { label: "Higher-equity home sale guide", href: "/resources/kansas-city-higher-equity-home-sale-options/" },
    ],
  }),
];
