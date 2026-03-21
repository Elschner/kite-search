"use client";

import { useState } from "react";
import Link from "next/link";
import { SPOTS } from "@/app/data/spots";

// ─── Difficulty badge ────────────────────────────────────────────────────────
function DifficultyBadge({ level }) {
  const colours = {
    "Beginner friendly": "bg-green-100 text-green-700",
    "All levels": "bg-blue-100 text-blue-700",
    "Intermediate+": "bg-orange-100 text-orange-700",
    Advanced: "bg-red-100 text-red-700",
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colours[level] || "bg-gray-100 text-gray-600"}`}>
      {level}
    </span>
  );
}

// ─── Spot card ───────────────────────────────────────────────────────────────
function SpotCard({ spot }) {
  return (
    <Link
      href={`/spots/${spot.countrySlug}/${spot.spotSlug}`}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group"
    >
      <div className="bg-gradient-to-br from-ocean-500 to-ocean-700 p-6 flex items-center justify-between">
        <span className="text-5xl">{spot.image}</span>
        <span className="text-3xl">{spot.flag}</span>
      </div>
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
          {spot.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {spot.tags.map((tag) => (
            <span key={tag} className="text-xs bg-ocean-50 text-ocean-700 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function AllSpotsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [continent, setContinent] = useState("All");

  const difficulties = ["All", "Beginner friendly", "All levels", "Intermediate+", "Advanced"];
  const continents = ["All", ...Array.from(new Set(SPOTS.map((s) => s.continent))).sort()];

  const filtered = SPOTS.filter((spot) => {
    const q = search.toLowerCase();
    const matchSearch =
      spot.name.toLowerCase().includes(q) ||
      spot.country.toLowerCase().includes(q) ||
      spot.tags.some((t) => t.toLowerCase().includes(q));
    const matchDiff = filter === "All" || spot.difficulty === filter;
    const matchContinent = continent === "All" || spot.continent === continent;
    return matchSearch && matchDiff && matchContinent;
  });

  return (
    <div className="min-h-screen bg-beige-50">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🪁</span>
            <span className="text-xl font-bold text-gray-900">
              Kite<span className="text-ocean-600">Search</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-ocean-600 transition-colors">Home</Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header className="bg-gradient-to-b from-beige-300 via-beige-200 to-beige-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            All Kite Spots
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Browse {SPOTS.length} world-class kitesurfing destinations across{" "}
            {new Set(SPOTS.map((s) => s.country)).size} countries.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by spot, country, or style..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-base shadow-xl outline-none focus:ring-2 focus:ring-ocean-400"
            />
          </div>
        </div>
      </header>

      {/* ── Filters ──────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-3 items-center">
          <span className="text-sm font-medium text-gray-500 mr-1">Difficulty:</span>
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
          <span className="text-gray-200 mx-2 hidden sm:block">|</span>
          <span className="text-sm font-medium text-gray-500 mr-1">Region:</span>
          {continents.map((c) => (
            <button
              key={c}
              onClick={() => setContinent(c)}
              className={`text-sm px-3 py-1.5 rounded-full font-medium border transition-colors ${
                continent === c
                  ? "bg-ocean-600 text-white border-ocean-600"
                  : "bg-white text-gray-600 border-gray-200 hover:border-ocean-400"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* ── Spots grid ───────────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-gray-500 text-sm mb-6">
          {filtered.length} spot{filtered.length !== 1 ? "s" : ""} found
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((spot) => (
              <SpotCard key={spot.id} spot={spot} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg font-medium">No spots found for "{search}"</p>
            <p className="text-sm mt-1">Try a different country, spot name, or style</p>
          </div>
        )}
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
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
