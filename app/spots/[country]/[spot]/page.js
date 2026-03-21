import { notFound } from "next/navigation";
import Link from "next/link";
import { getSpotBySlug, getAllStaticParams } from "@/app/data/spots";

// ─── Static params for SSG ──────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllStaticParams();
}

// ─── SEO metadata ───────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const spot = getSpotBySlug(params.country, params.spot);
  if (!spot) return { title: "Spot not found" };

  return {
    title: spot.seo.title,
    description: spot.seo.description,
    openGraph: {
      title: spot.seo.title,
      description: spot.seo.description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: spot.seo.title,
      description: spot.seo.description,
    },
  };
}

// ─── Helper: difficulty badge ────────────────────────────────────────────────
function DifficultyBadge({ level }) {
  const colours = {
    "Beginner friendly": "bg-green-100 text-green-700",
    "All levels": "bg-blue-100 text-blue-700",
    "Intermediate+": "bg-orange-100 text-orange-700",
    Advanced: "bg-red-100 text-red-700",
  };
  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full ${
        colours[level] || "bg-gray-100 text-gray-600"
      }`}
    >
      {level}
    </span>
  );
}

// ─── Stat chip ───────────────────────────────────────────────────────────────
function StatChip({ label, value, icon }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 flex items-start gap-3">
      <span className="text-xl mt-0.5">{icon}</span>
      <div>
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</p>
        <p className="text-sm font-semibold text-gray-900 mt-0.5">{value}</p>
      </div>
    </div>
  );
}

// ─── Section block ───────────────────────────────────────────────────────────
function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">
        {title}
      </h2>
      {children}
    </section>
  );
}

// ─── JSON-LD structured data ─────────────────────────────────────────────────
function SpotJsonLd({ spot }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: `${spot.name} Kitesurfing`,
    description: spot.seo.description,
    url: `https://kite-search.vercel.app/spots/${spot.countrySlug}/${spot.spotSlug}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: spot.coordinates.lat,
      longitude: spot.coordinates.lng,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: spot.country,
    },
    touristType: "Kitesurfers",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function SpotPage({ params }) {
  const spot = getSpotBySlug(params.country, params.spot);
  if (!spot) notFound();

  return (
    <>
      <SpotJsonLd spot={spot} />

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
              <Link href={`/spots/${spot.countrySlug}`} className="hover:text-ocean-600 transition-colors">
                {spot.flag} {spot.country}
              </Link>
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
            <Link href={`/spots/${spot.countrySlug}`} className="hover:text-ocean-600 transition-colors">
              {spot.country}
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{spot.name}</span>
          </nav>
        </div>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <header className="bg-gradient-to-br from-ocean-700 to-ocean-900 text-white mt-6 mx-4 sm:mx-6 lg:mx-8 rounded-3xl max-w-7xl lg:mx-auto overflow-hidden">
          <div className="px-8 py-12 sm:px-12 sm:py-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{spot.image}</span>
              <span className="text-4xl">{spot.flag}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 leading-tight">
              Kitesurfing in {spot.name}
            </h1>
            <p className="text-ocean-200 text-lg mb-5">
              {spot.country} · {spot.continent}
            </p>
            <p className="text-ocean-100 text-base max-w-2xl leading-relaxed mb-6">
              {spot.shortDescription}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <DifficultyBadge level={spot.difficulty} />
              <span className="text-sm bg-white/20 text-white px-3 py-1 rounded-full font-medium">
                🌬️ Best: {spot.windSeason}
              </span>
              {spot.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-white/10 text-ocean-200 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* ── Main content ─────────────────────────────────────────────────── */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left column — rich content */}
          <div className="lg:col-span-2">

            <Section title="Overview">
              <p className="text-gray-700 leading-relaxed text-base">{spot.overview}</p>
            </Section>

            <Section title="Wind & Water Conditions">
              <p className="text-gray-700 leading-relaxed text-base">{spot.conditions}</p>
            </Section>

            <Section title="Best For">
              <p className="text-gray-700 leading-relaxed text-base">{spot.bestFor}</p>
            </Section>

            <Section title="Getting There">
              <p className="text-gray-700 leading-relaxed text-base">{spot.gettingThere}</p>
            </Section>

            <Section title="Where to Stay">
              <p className="text-gray-700 leading-relaxed text-base">{spot.whereToStay}</p>
            </Section>

            <Section title="Local Tips">
              <ul className="space-y-3">
                {spot.localTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-ocean-500 mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Right column — stats sidebar */}
          <aside className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-base font-bold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <StatChip icon="🌬️" label="Wind Season" value={spot.windSeason} />
                <StatChip icon="💨" label="Avg Wind Speed" value={spot.avgWindSpeed} />
                <StatChip icon="🌊" label="Water Temp" value={spot.waterTemp} />
                <StatChip icon="☀️" label="Air Temp" value={spot.airTemp} />
                <StatChip icon="✈️" label="Nearest Airport" value={spot.nearestAirport} />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">Wind Directions</h3>
              <div className="flex flex-wrap gap-2">
                {spot.windDirections.map((w) => (
                  <span key={w} className="text-sm bg-ocean-50 text-ocean-700 px-3 py-1 rounded-full font-medium">
                    {w}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">Water Types</h3>
              <div className="flex flex-wrap gap-2">
                {spot.waterTypes.map((t) => (
                  <span key={t} className="text-sm bg-beige-100 text-beige-800 px-3 py-1 rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">Best Months</h3>
              <div className="flex flex-wrap gap-2">
                {spot.bestMonths.map((m) => (
                  <span key={m} className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-medium">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-ocean-600 rounded-2xl p-6 text-white text-center">
              <p className="text-sm text-ocean-200 mb-2">Know this spot?</p>
              <p className="font-bold text-base mb-4">Help us improve this page</p>
              <Link
                href="/"
                className="block bg-white text-ocean-700 text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-ocean-50 transition-colors"
              >
                Submit a Tip
              </Link>
            </div>
          </aside>
        </main>

        {/* ── Footer ───────────────────────────────────────────────────────── */}
        <footer className="bg-gray-900 text-gray-400 py-10 px-4 mt-8">
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
    </>
  );
}
