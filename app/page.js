"use client";

import { useState } from "react";

// ─── Sample spot data (we'll expand this in Phase 2) ───────────────────────
const FEATURED_SPOTS = [
  {
    id: 1,
    name: "Tarifa",
    country: "Spain",
    flag: "🇪🇸",
    difficulty: "All levels",
    windSeason: "Apr – Oct",
    description: "Europe's kite surfing capital. Consistent Levante and Poniente winds make this a year-round destination for riders of every level.",
    tags: ["Flat water", "Waves", "Wind reliable"],
    image: "🌊",
  },
  {
    id: 2,
    name: "Cape Town",
    country: "South Africa",
    flag: "🇿🇦",
    difficulty: "Intermediate+",
    windSeason: "Nov – Mar",
    description: "Bloubergstrand offers world-class conditions with the iconic Table Mountain backdrop. Strong Cape Doctor winds guaranteed.",
    tags: ["Waves", "Strong winds", "Scenic"],
    image: "🏔️",
  },
  {
    id: 3,
    name: "Cabarete",
    country: "Dominican Republic",
    flag: "🇩🇴",
    difficulty: "Beginner friendly",
    windSeason: "Jun – Aug",
    description: "Warm Caribbean waters, thermal afternoon winds, and a vibrant kite beach community. One of the best learning destinations in the world.",
    tags: ["Flat water", "Warm water", "Schools nearby"],
    image: "🏖️",
  },
  {
    id: 4,
    name: "Maui — Kanaha",
    country: "United States",
    flag: "🇺🇸",
    difficulty: "All levels",
    windSeason: "May – Sep",
    description: "Hawaii's most legendary kite spot. Kanaha Beach Park delivers powerful trade winds, warm water, and jaw-dropping scenery.",
    tags: ["Waves", "Tropical", "Trade winds"],
    image: "🌺",
  },
  {
    id: 5,
    name: "Dakhla",
    country: "Morocco",
    flag: "🇲🇦",
    difficulty: "All levels",
    windSeason: "Mar – Oct",
    description: "A vast desert lagoon with perfectly flat water and near-constant trade winds. Paradise for freestyle and freeride riders alike.",
    tags: ["Flat water", "Lagoon", "Wind reliable"],
    image: "🏜️",
  },
  {
    id: 6,
    name: "Jericoacoara",
    country: "Brazil",
    flag: "🇧🇷",
    difficulty: "All levels",
    windSeason: "Jul – Jan",
    description: "Brazil's most famous kite destination. Reliable winds, stunning dunes, and warm Atlantic waters create an unforgettable experience.",
    tags: ["Flat water", "Dunes", "Warm water"],
    image: "🌅",
  },
];

const STATS = [
  { value: "500+", label: "Kite spots" },
  { value: "80+", label: "Countries" },
  { value: "12", label: "Wind seasons" },
  { value: "Free", label: "Always" },
];

// ─── Difficulty badge colours ───────────────────────────────────────────────
function DifficultyBadge({ level }) {
  const colours = {
    "Beginner friendly": "bg-green-100 text-green-700",
    "All levels": "bg-blue-100 text-blue-700",
    "Intermediate+": "bg-orange-100 text-orange-700",
    Advanced: "bg-red-100 text-red-700",
  };
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
        colours[level] || "bg-gray-100 text-gray-600"
      }`}
    >
      {level}
    </span>
  );
}

// ─── Spot card ──────────────────────────────────────────────────────────────
function SpotCard({ spot }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group cursor-pointer">
      {/* Card header */}
      <div className="bg-gradient-to-br from-ocean-500 to-ocean-700 p-6 flex items-center justify-between">
        <span className="text-5xl">{spot.image}</span>
        <span className="text-3xl">{spot.flag}</span>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-ocean-600 transition-colors">
            {spot.name}
          </h3>
          <DifficultyBadge level={spot.difficulty} />
        </div>

        <p className="text-sm text-gray-500 mb-3">
          {spot.country} · Best winds: {spot.windSeason}
        </p>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {spot.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {spot.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-ocean-50 text-ocean-700 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main page ──────────────────────────────────────────────────────────────
export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const difficulties = ["All", "Beginner friendly", "All levels", "Intermediate+"];

  const filtered = FEATURED_SPOTS.filter((spot) => {
    const matchSearch =
      spot.name.toLowerCase().includes(search.toLowerCase()) ||
      spot.country.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || spot.difficulty === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🪁</span>
            <span className="text-xl font-bold text-gray-900">
              Kite<span className="text-ocean-600">Search</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#spots" className="hover:text-ocean-600 transition-colors">Spots</a>
            <a href="#map" className="hover:text-ocean-600 transition-colors">Map <span className="text-xs bg-ocean-100 text-ocean-600 px-1.5 py-0.5 rounded-full ml-1">Soon</span></a>
            <a href="#" className="hover:text-ocean-600 transition-colors">Submit a Spot</a>
          </div>
          <button className="bg-ocean-600 hover:bg-ocean-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Get Notified
          </button>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-ocean-900 via-ocean-800 to-ocean-600 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <span>🌍</span>
            <span>The world's most complete kite surfing directory</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            Find Your Perfect
            <br />
            <span className="text-sand-300">Kite Spot</span>
          </h1>

          <p className="text-xl text-ocean-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover 500+ kite surfing spots across 80+ countries. Search by wind season,
            difficulty, and water type — then get out there.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by spot name or country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-base shadow-xl outline-none focus:ring-2 focus:ring-ocean-400"
            />
          </div>
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-ocean-600">{s.value}</div>
              <div className="text-sm text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Map teaser ──────────────────────────────────────────────────── */}
      <section id="map" className="bg-ocean-50 border-b border-ocean-100 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-ocean-900">🗺️ Interactive World Map — Coming in Phase 2</h2>
            <p className="text-sm text-ocean-700 mt-1">
              Every spot pinned on an interactive map. Filter by wind season, explore by region, click to view details.
            </p>
          </div>
          <button className="shrink-0 bg-ocean-600 hover:bg-ocean-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Get Notified When Live
          </button>
        </div>
      </section>

      {/* ── Spots grid ──────────────────────────────────────────────────── */}
      <section id="spots" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Spots</h2>
            <p className="text-gray-500 mt-1">
              {filtered.length} spot{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* Difficulty filter */}
          <div className="flex flex-wrap gap-2">
            {difficulties.map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`text-sm px-3 py-1.5 rounded-full font-medium border transition-colors ${
                  filter === d
                    ? "bg-ocean-600 text-white border-ocean-600"
                    : "bg-white text-gray-600 border-gray-200 hover:border-ocean-400"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((spot) => (
              <SpotCard key={spot.id} spot={spot} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg font-medium">No spots found for "{search}"</p>
            <p className="text-sm mt-1">Try a different country or spot name</p>
          </div>
        )}
      </section>

      {/* ── CTA banner ──────────────────────────────────────────────────── */}
      <section className="bg-ocean-900 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Know a great kite spot?</h2>
          <p className="text-ocean-300 mb-8 text-lg">
            Help us build the world's most complete kite surfing directory. Submit your favourite spots and we'll add them to the map.
          </p>
          <button className="bg-sand-400 hover:bg-sand-500 text-gray-900 font-semibold px-8 py-3 rounded-xl text-lg transition-colors">
            Submit a Spot
          </button>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl">🪁</span>
            <span className="font-semibold text-white">KiteSearch</span>
            <span>— The global kite surfing directory</span>
          </div>
          <p>© {new Date().getFullYear()} KiteSearch. Built with ❤️ for kiters everywhere.</p>
        </div>
      </footer>

    </div>
  );
}
