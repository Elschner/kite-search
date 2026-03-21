// ─── Master spot database ────────────────────────────────────────────────────
// URL structure: /spots/[country]/[spot]
// e.g. /spots/spain/tarifa, /spots/morocco/dakhla

export const SPOTS = [
  {
    id: 1,
    countrySlug: "spain",
    spotSlug: "tarifa",
    name: "Tarifa",
    country: "Spain",
    continent: "Europe",
    flag: "🇪🇸",
    difficulty: "All levels",
    windSeason: "Apr – Oct",
    bestMonths: ["April", "May", "June", "July", "August", "September", "October"],
    image: "🌊",
    coordinates: { lat: 36.0143, lng: -5.6044 },
    waterTypes: ["Flat water", "Waves", "Choppy"],
    windDirections: ["Levante (E)", "Poniente (W)"],
    avgWindSpeed: "18–30 knots",
    waterTemp: "16–22°C (61–72°F)",
    airTemp: "15–30°C (59–86°F)",
    nearestAirport: "Gibraltar (GIB) — 30 min, or Malaga (AGP) — 1.5 hrs",
    tags: ["Flat water", "Waves", "Wind reliable"],
    shortDescription:
      "Europe's kite surfing capital. Consistent Levante and Poniente winds make this a year-round destination for riders of every level.",
    overview:
      "Tarifa sits at the southernmost tip of Spain, where the Atlantic Ocean meets the Mediterranean Sea. This unique geography funnels two dominant winds — the easterly Levante and the westerly Poniente — through the Strait of Gibraltar almost year-round, making Tarifa one of the windiest places in Europe and an undisputed world-class kite surfing destination. The town itself has built an entire culture around wind sports, and the beaches along the costa are lined with kite schools, gear shops, and cafes full of kiters swapping stories. Whether you are riding for the first time or pushing your freestyle limits, Tarifa delivers.",
    conditions:
      "The Levante blows from the east and is the stronger of the two winds, often reaching 25–35 knots. It creates choppier conditions on the Atlantic side but excellent flat-water pockets in sheltered areas. The Poniente comes from the west, typically lighter at 15–25 knots, and produces cleaner, more consistent conditions perfect for beginners and freeriders. The main kite beach at Valdevaqueros offers a long sandy stretch with shallow entry, and Punta Paloma nearby provides a lagoon-style environment with pancake-flat water.",
    bestFor:
      "Tarifa works for absolutely everyone. Beginners benefit from the dedicated kite schools on Valdevaqueros, the shallow water, and the consistent thermal winds. Intermediate riders can develop their upwind riding and start jumping in the reliable conditions. Advanced kiters come for the powerful Levante swell sessions and the wave-riding potential. Freestyle riders enjoy the flat water at Punta Paloma.",
    gettingThere:
      "The easiest entry point is Gibraltar Airport (GIB), just 30 minutes from Tarifa. Malaga Airport (AGP) is 1.5 hours away and has more flight connections from across Europe. From Malaga, rent a car or take a bus to Tarifa town. Ferries also connect Tarifa with Tangier, Morocco, making it a great base for a multi-country kite trip.",
    whereToStay:
      "Tarifa town has a charming old medina with hostels, boutique hotels, and apartments. Los Lances and Valdevaqueros beaches have a strip of kite-friendly hostels and surf camps right on the sand. Expect to pay €40–120 per night depending on season and comfort level.",
    localTips: [
      "The Levante can come on suddenly and strongly — always check the daily forecast on Windguru or Windy before heading out.",
      "Valdevaqueros beach has the most kite schools and is the safest spot for beginners.",
      "Punta Paloma lagoon is the go-to spot for flat water freestyle on Poniente days.",
      "July and August are peak tourist season — book accommodation and lessons well in advance.",
      "The old town of Tarifa is worth exploring in the evenings — great tapas bars and a relaxed atmosphere.",
    ],
    seo: {
      title: "Kitesurfing in Tarifa, Spain — Wind, Conditions & Travel Guide",
      description:
        "Complete guide to kitesurfing in Tarifa, Spain. Wind seasons, best spots, difficulty levels, where to stay, and local tips for riders of all levels.",
    },
  },
  {
    id: 2,
    countrySlug: "south-africa",
    spotSlug: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    flag: "🇿🇦",
    difficulty: "Intermediate+",
    windSeason: "Nov – Mar",
    bestMonths: ["November", "December", "January", "February", "March"],
    image: "🏔️",
    coordinates: { lat: -33.8688, lng: 18.4241 },
    waterTypes: ["Waves", "Choppy", "Flat water (lagoon)"],
    windDirections: ["South-Easter (SE)", "Cape Doctor"],
    avgWindSpeed: "25–40 knots",
    waterTemp: "14–18°C (57–64°F)",
    airTemp: "18–30°C (64–86°F)",
    nearestAirport: "Cape Town International (CPT) — 20 min drive",
    tags: ["Waves", "Strong winds", "Scenic"],
    shortDescription:
      "Bloubergstrand offers world-class conditions with the iconic Table Mountain backdrop. Strong Cape Doctor winds guaranteed.",
    overview:
      "Cape Town is one of the most visually spectacular kite surfing destinations on the planet. Riding at Bloubergstrand with Table Mountain dominating the skyline behind you is an experience that stays with you for life. The city sits at the southern tip of Africa where two oceans collide, and the famous South-Easter wind — known locally as the Cape Doctor — blows with remarkable consistency and power from November through March. This is not a beginner destination, but for intermediate and advanced riders, Cape Town delivers world-class conditions that few places can match.",
    conditions:
      "The Cape Doctor is a strong south-easterly wind that funnels through the Cape Peninsula, often blowing at 25–40 knots during peak summer months. Bloubergstrand is the main kite beach, with a long sandy stretch and a view of Robben Island and Table Mountain. The water is cold (14–18°C), fed by the Benguela Current from Antarctica, so a 3mm wetsuit is essential. Kite Beach in Blouberg town has flatter conditions suitable for intermediate riders. Table View, slightly further north, is popular with beginners on lighter wind days.",
    bestFor:
      "Cape Town is best for intermediate to advanced kiters who are comfortable in strong, gusty winds and cold water. The consistent power of the Cape Doctor makes it excellent for big air and boosting jumps. Wave riders will find world-class spots along the peninsula. Beginners should consider other destinations — the Cape Doctor is notorious for catching out inexperienced kiters.",
    gettingThere:
      "Cape Town International Airport (CPT) is well connected with direct flights from Europe, the UAE, and across Africa. From the airport, Bloubergstrand is about 20 minutes by car or taxi. Uber and Bolt are widely available and affordable. A rental car is recommended if you plan to explore multiple kite spots around the peninsula.",
    whereToStay:
      "Bloubergstrand has a range of accommodation from backpacker hostels to luxury guesthouses right on the beach. Cape Town city centre (about 25 minutes away) offers the full range of hotels, Airbnbs, and restaurants. Budget around R500–R2000 per night (€25–€100) depending on your preference.",
    localTips: [
      "The Cape Doctor can gust violently — always rig down a kite size from what you think you need.",
      "Wear a 3mm wetsuit at minimum — the Atlantic water is surprisingly cold even in summer.",
      "Kite Beach at Blouberg has a rescue team on busy days, making it the safest launch spot.",
      "Book accommodation in Cape Town well in advance for December and January — it is peak holiday season.",
      "Combine your kite trip with a visit to the Cape Winelands, Cape Point, or a shark diving trip.",
    ],
    seo: {
      title: "Kitesurfing in Cape Town, South Africa — Wind, Conditions & Guide",
      description:
        "Everything you need to know about kitesurfing in Cape Town. The Cape Doctor wind, Bloubergstrand conditions, when to go, and tips for visiting kiters.",
    },
  },
  {
    id: 3,
    countrySlug: "dominican-republic",
    spotSlug: "cabarete",
    name: "Cabarete",
    country: "Dominican Republic",
    continent: "North America",
    flag: "🇩🇴",
    difficulty: "Beginner friendly",
    windSeason: "Jun – Aug",
    bestMonths: ["June", "July", "August"],
    image: "🏖️",
    coordinates: { lat: 19.758, lng: -70.4088 },
    waterTypes: ["Flat water", "Waves"],
    windDirections: ["Trade winds (NE)", "Thermal afternoon winds"],
    avgWindSpeed: "15–25 knots",
    waterTemp: "26–29°C (79–84°F)",
    airTemp: "27–32°C (81–90°F)",
    nearestAirport: "Puerto Plata (POP) — 45 min drive",
    tags: ["Flat water", "Warm water", "Schools nearby"],
    shortDescription:
      "Warm Caribbean waters, thermal afternoon winds, and a vibrant kite beach community. One of the best learning destinations in the world.",
    overview:
      "Cabarete is a small beach town on the north coast of the Dominican Republic that has evolved over the past two decades into one of the Caribbean's premier kite surfing destinations. The combination of warm turquoise water, reliable afternoon trade winds, and a laid-back beach town atmosphere makes it incredibly welcoming for kiters of all levels. The kite beach sits in a natural bay sheltered by reef, creating consistently flat or light-chop conditions that are ideal for learning and progression. Kite schools line the beach, and the evening scene in Cabarete town is lively and social.",
    conditions:
      "Cabarete benefits from the Northeast trade winds that blow across the Caribbean, strengthening into reliable thermal winds in the afternoon. The wind typically picks up between 11am and 2pm and blows steadily at 15–25 knots until evening. The sheltered bay creates flat to slightly choppy water, and the reef keeps the ocean swell from entering the kite zone. Water temperature stays warm year-round at 26–29°C, making wetsuit-free riding the norm.",
    bestFor:
      "Cabarete is one of the best places in the world to learn to kite surf. The predictable, moderate winds, warm water, and abundance of experienced instructors make it perfect for beginners. Intermediate riders can work on their transitions and start jumping in the reliable conditions. The nearby ocean outside the reef offers wave-riding opportunities for advanced riders.",
    gettingThere:
      "Fly into Puerto Plata International Airport (POP), which is about 45 minutes from Cabarete. Santiago Airport (STI) is also an option, about 1.5 hours away. From the airport, shared taxis and private transfers are available. Many visitors fly into Santo Domingo and take a bus or domestic flight north.",
    whereToStay:
      "Cabarete has a wide range of accommodation right on or near the kite beach, from budget hostels to comfortable boutique hotels. Many kite camps include accommodation, lessons, and gear rental in packages, which is excellent value for beginners. Expect $30–$150 per night depending on the type of accommodation.",
    localTips: [
      "Book a kite camp package if you are learning — the combination of accommodation, lessons, and gear is great value.",
      "The wind is most reliable from June to August — outside these months it can be more unpredictable.",
      "The beach gets crowded on weekends with local visitors — go out early or on weekdays for more space.",
      "Try kiteboarding at Encuentro Beach nearby for a change of scenery and some wave riding.",
      "The nightlife in Cabarete town is fun and social — great for meeting other kiters from around the world.",
    ],
    seo: {
      title: "Kitesurfing in Cabarete, Dominican Republic — Beginner Guide & Conditions",
      description:
        "Cabarete is one of the world's best kitesurfing destinations for beginners. Warm water, reliable trade winds, and great kite schools. Everything you need to know.",
    },
  },
  {
    id: 4,
    countrySlug: "united-states",
    spotSlug: "maui-kanaha",
    name: "Maui — Kanaha",
    country: "United States",
    continent: "North America",
    flag: "🇺🇸",
    difficulty: "All levels",
    windSeason: "May – Sep",
    bestMonths: ["May", "June", "July", "August", "September"],
    image: "🌺",
    coordinates: { lat: 20.8893, lng: -156.4729 },
    waterTypes: ["Waves", "Flat water", "Chop"],
    windDirections: ["Trade winds (NE)", "Northerly"],
    avgWindSpeed: "20–30 knots",
    waterTemp: "24–27°C (75–80°F)",
    airTemp: "25–31°C (77–88°F)",
    nearestAirport: "Kahului Airport (OGG) — 5 min drive",
    tags: ["Waves", "Tropical", "Trade winds"],
    shortDescription:
      "Hawaii's most legendary kite spot. Kanaha Beach Park delivers powerful trade winds, warm water, and jaw-dropping scenery.",
    overview:
      "Kanaha Beach Park on the north shore of Maui is a legendary name in the world of kite surfing. Hawaii's powerful northeast trade winds, warm Pacific water, and stunning volcanic mountain backdrop have attracted kiters from across the globe for decades. Kanaha is a wide, flat beach park with a long grassy lawn for rigging and launching, and the water just offshore ranges from flat inside the reef to powerful open-ocean waves further out. Maui has a deep kite culture and is home to some of the world's top professional kiters.",
    conditions:
      "The northeast trade winds blow consistently from May through September, typically picking up by late morning and blowing at 20–30 knots through the afternoon. Inside the reef at Kanaha, the water is relatively flat and ideal for intermediate riding and learning. Outside the reef, powerful trade wind swell creates world-class wave-riding conditions. The channel between Maui and Kahoolawe funnels the trades and can accelerate the wind considerably on strong days.",
    bestFor:
      "Kanaha works for all levels with the right conditions. The inside reef area is suitable for beginners and intermediates on moderate wind days. Advanced riders and wave enthusiasts head outside the reef for powered riding in the swell. Kanaha is particularly famous as a wave-riding destination — some of the world's best wave kiters train here. Freeride, freestyle, and foil riders all enjoy the varied conditions.",
    gettingThere:
      "Kahului Airport (OGG) on Maui is served by direct flights from the US mainland and via Honolulu. Kanaha Beach Park is literally 5 minutes from the airport — one of the most convenient kite spots in the world to reach. A rental car is recommended for exploring the island.",
    whereToStay:
      "Kahului has affordable hotels and apartment rentals. Paia town, about 15 minutes east, is a charming surf town popular with kite and wind sport visitors. Kihei and Wailea on the south coast offer luxury resort accommodation if budget allows. Expect $80–$300+ per night.",
    localTips: [
      "Launch from the designated kite launch area at the east end of Kanaha beach — respect the right of way zones.",
      "Check the Maui Kite Beach Facebook group for local conditions, forecasts, and tips from locals.",
      "Rental gear is available from several shops near the beach — useful if flying in without your kite bag.",
      "The wind often drops in the morning — plan to be in the water between 11am and 5pm for the best conditions.",
      "Explore the Road to Hana, the volcano, and Paia town during your non-kite time — Maui is an incredible island.",
    ],
    seo: {
      title: "Kitesurfing at Kanaha Beach, Maui, Hawaii — Wind & Conditions Guide",
      description:
        "Kanaha Beach on Maui is one of the world's greatest kitesurfing spots. Trade winds, warm water, and waves. Complete guide for visiting kiters.",
    },
  },
  {
    id: 5,
    countrySlug: "morocco",
    spotSlug: "dakhla",
    name: "Dakhla",
    country: "Morocco",
    continent: "Africa",
    flag: "🇲🇦",
    difficulty: "All levels",
    windSeason: "Mar – Oct",
    bestMonths: ["March", "April", "May", "June", "July", "August", "September", "October"],
    image: "🏜️",
    coordinates: { lat: 23.6848, lng: -15.957 },
    waterTypes: ["Flat water", "Lagoon"],
    windDirections: ["Trade winds (N)", "NNE"],
    avgWindSpeed: "20–35 knots",
    waterTemp: "18–22°C (64–72°F)",
    airTemp: "22–32°C (72–90°F)",
    nearestAirport: "Dakhla Airport (VIL) — 5 min drive",
    tags: ["Flat water", "Lagoon", "Wind reliable"],
    shortDescription:
      "A vast desert lagoon with perfectly flat water and near-constant trade winds. Paradise for freestyle and freeride riders alike.",
    overview:
      "Dakhla is one of the most remarkable kite surfing destinations on earth — a vast lagoon carved into the Western Saharan desert on the Atlantic coast of Morocco. The combination of near-constant trade winds, pancake-flat water, and a raw desert landscape that feels completely unlike anywhere else makes Dakhla an unforgettable experience. The lagoon stretches for over 40 kilometres and offers flat water riding at every level — from gentle shallow sections perfect for beginners to deep channels where advanced riders push their freestyle limits. Dakhla has grown from a remote outpost to a must-visit destination on the global kite circuit.",
    conditions:
      "The Northern trade winds blow down the Atlantic coast with remarkable consistency, typically at 20–35 knots throughout the season. The lagoon acts as a natural wind tunnel, accelerating the breeze across its surface and creating ideal kite conditions. The water in the lagoon is mostly flat with very little swell — perfect for freestyle, freeride, and beginner progression. The lagoon bottom is sandy and mostly shallow, making it safe for water starts and falls. There is also an ocean side for those who want wave riding.",
    bestFor:
      "Dakhla is exceptional for freestyle riders — the flat water and consistent power are perfect for practicing unhooked tricks and big air. Beginners love the shallow, flat lagoon sections and the reliable, predictable wind. Freeride riders can blast across the lagoon for kilometres without obstacles. Foil kiters have taken to Dakhla in large numbers as the flat water and consistent wind are ideal for hydrofoiling.",
    gettingThere:
      "Dakhla Airport (VIL) has direct charter and scheduled flights from several European cities during peak season. Alternatively, fly to Agadir or Marrakech and take a domestic flight or the long overland drive south. Many kite camps organise airport transfers.",
    whereToStay:
      "Dakhla has a range of kite camps set up right on the lagoon, offering accommodation, gear, and lessons as packages. The town of Dakhla itself has hotels and guesthouses. Kite camp packages are highly recommended as they are great value and put you right on the water. Expect €40–€120 per night, often including meals.",
    localTips: [
      "Book a kite camp package — they provide everything you need and are right on the lagoon.",
      "The wind is strongest from June to August, but March–May and September–October offer great conditions with fewer kiters.",
      "Dakhla is a conservative region — dress modestly when in town and be respectful of local customs.",
      "The sunsets over the lagoon and desert are extraordinary — bring a camera.",
      "Combine with a visit to Essaouira or Agadir to the north for a fuller Moroccan experience.",
    ],
    seo: {
      title: "Kitesurfing in Dakhla, Morocco — The Desert Lagoon Guide",
      description:
        "Dakhla is Morocco's legendary kite surfing lagoon — flat water, constant trade winds, and a stunning desert setting. Everything you need to plan your trip.",
    },
  },
  {
    id: 6,
    countrySlug: "brazil",
    spotSlug: "jericoacoara",
    name: "Jericoacoara",
    country: "Brazil",
    continent: "South America",
    flag: "🇧🇷",
    difficulty: "All levels",
    windSeason: "Jul – Jan",
    bestMonths: ["July", "August", "September", "October", "November", "December", "January"],
    image: "🌅",
    coordinates: { lat: -2.7975, lng: -40.5137 },
    waterTypes: ["Flat water", "Waves", "Lagoon"],
    windDirections: ["Trade winds (E)", "ENE"],
    avgWindSpeed: "18–28 knots",
    waterTemp: "27–29°C (81–84°F)",
    airTemp: "28–34°C (82–93°F)",
    nearestAirport: "Fortaleza Airport (FOR) — 3.5 hrs drive",
    tags: ["Flat water", "Dunes", "Warm water"],
    shortDescription:
      "Brazil's most famous kite destination. Reliable winds, stunning dunes, and warm Atlantic waters create an unforgettable experience.",
    overview:
      "Jericoacoara — known locally as Jeri — is a magical, remote beach village on Brazil's northeastern coast that has become one of the most celebrated kite surfing destinations in South America. The combination of steady Atlantic trade winds, warm turquoise water, dramatic sand dunes tumbling down to the sea, and a relaxed, bohemian village atmosphere creates a unique experience unlike any other kite destination. The village has no paved roads — everything is sand — and the pace of life slows down the moment you arrive. Jeri offers everything from flat-water lagoons to ocean waves, making it suitable for riders of every level.",
    conditions:
      "The trade winds blow with excellent consistency from July through January, picking up in the afternoon and providing reliable conditions across the bay. The main kite area offers a mixture of ocean conditions with some chop and occasional swell. The Lagoa do Paraíso, a freshwater lagoon about 20 minutes from Jeri, provides extraordinary flat-water conditions and is one of the most spectacular kite spots in the world — a vast mirror-like lagoon surrounded by dunes. The Tatajuba lagoon to the west is another flat-water gem.",
    bestFor:
      "Jericoacoara caters to all levels. The ocean spot is good for intermediate and advanced riders who enjoy a bit of chop and swell. Beginners and freestyle riders should head to Lagoa do Paraíso or Tatajuba lagoon for perfect flat-water conditions. The warm water means no wetsuit is needed, making it a very comfortable place to learn.",
    gettingThere:
      "The nearest international airport is Fortaleza (FOR), about 3.5 hours away. From Fortaleza, take a transfer or bus to Jijoca de Jericoacoara, then a 4x4 truck across the sand dunes for the final leg into the village — this is part of the adventure. Many kite camps organise transfers from Fortaleza.",
    whereToStay:
      "Jericoacoara has a good range of pousadas (Brazilian guesthouses), kite camps, and boutique hotels. Many are located close to the beach and kite area. Kite camps offer package deals including accommodation, lessons, and gear rental. Expect $40–$120 per night. Book well in advance for July–October.",
    localTips: [
      "Visit Lagoa do Paraíso — it is one of the most beautiful places on earth and the kite conditions are extraordinary.",
      "The village has no ATMs — bring cash from Fortaleza or use a card that works without ATMs (Wise, Revolut).",
      "The 4x4 ride across the dunes to reach Jeri is bumpy but part of the experience — pack your kite bag carefully.",
      "Sunsets from the big dune (Duna do Pôr do Sol) are legendary — every evening the whole village climbs up to watch.",
      "Try the local caipirinha and fresh seafood at the beach restaurants — the food in Jeri is excellent.",
    ],
    seo: {
      title: "Kitesurfing in Jericoacoara, Brazil — Wind, Lagoons & Travel Guide",
      description:
        "Jericoacoara is Brazil's most famous kitesurfing destination — warm water, trade winds, and the legendary Lagoa do Paraíso. Complete guide for visiting kiters.",
    },
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getSpotBySlug(countrySlug, spotSlug) {
  return SPOTS.find((s) => s.countrySlug === countrySlug && s.spotSlug === spotSlug) || null;
}

export function getSpotsByCountry(countrySlug) {
  return SPOTS.filter((s) => s.countrySlug === countrySlug);
}

export function getAllCountries() {
  const seen = new Set();
  return SPOTS.filter((s) => {
    if (seen.has(s.countrySlug)) return false;
    seen.add(s.countrySlug);
    return true;
  }).map((s) => ({ countrySlug: s.countrySlug, country: s.country, flag: s.flag }));
}

export function getAllStaticParams() {
  return SPOTS.map((s) => ({ country: s.countrySlug, spot: s.spotSlug }));
}
