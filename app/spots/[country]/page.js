import { notFound } from "next/navigation";
import Link from "next/link";
import { getSpotsByCountry, getAllCountries } from "@/app/data/spots";

// ─── Static params ───────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllCountries().map((c) => ({ country: c.countrySlug }));
}

// ─── SEO metadata ───────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const spots = getSpotsByCountry(params.country);
  if (!spots.length) return { title: "Country not found" };

  const { country, flag } = spots[0];
  return {
    title: `Kitesurfing in ${country} — Best Kite Spots & Wind Guide | KiteSearch`,
    description: `Discover the best kitesurfing spots in ${country}. Compare wind seasons, difficulty, and water conditions across ${spots.length} kite spot${spots.length !== 1 ? "s" : ""}.`,
  };
}

// ─── Difficulty badge ────────────────────────────────────────────────────────
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
          Best winds: {spot.windSeason}
        </p>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {spot.shortDescription}
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
    </Link>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function CountryPage({ params }) {
  const spots = getSpotsByCountry(params.country);
  if (!spots.length) notFound();

  const { country, flag } = spots[0];

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
            <Link href="/spots" className="hover:text-ocean-600 transition-colors">All Spots</Link>
          </div>
        </div>
      </nav>

      {/* ── Breadcrumbs ──────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-ocean-600 transition-colors">Home</Link>
          <span>›</span>
          <Link href="/spots" className="hover:text-ocean-600 transition-colors">Spots</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">{country}</span>
        </nav>
      </div>

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-5xl">{flag}</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Kitesurfing in {country}
          </h1>
        </div>
        <p className="text-gray-500 text-lg mt-2">
          {spots.length} kite spot{spots.length !== 1 ? "s" : ""} — compare wind seasons, conditions, and difficulty
        </p>
      </header>

      {/* ── Spots grid ───────────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spots.map((spot) => (
            <SpotCard key={spot.id} spot={spot} />
          ))}
        </div>
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
