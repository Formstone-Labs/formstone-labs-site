function StatusBadge({ status }: { status: "LIVE" | "BUILDING" }) {
  const isLive = status === "LIVE";
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
        isLive
          ? "bg-green-100 text-green-700"
          : "bg-orange-100 text-orange-600"
      }`}
    >
      {status}
    </span>
  );
}

function ColorGrid({ colors, size = 2 }: { colors: string[]; size?: number }) {
  return (
    <div
      className="shrink-0 gap-1"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        width: size === 3 ? "28px" : "56px",
        height: size === 3 ? "28px" : "56px",
      }}
    >
      {colors.map((c, i) => (
        <div key={i} className="rounded-sm" style={{ backgroundColor: c }} />
      ))}
    </div>
  );
}

const logoColors = [
  "#C4A67D", "#8B8178", "#A69882",
  "#9B9B82", "#B8A98E", "#8B8178",
  "#A69882", "#C4A67D", "#9B9B82",
];

const projects = [
  {
    name: "Indicator Health",
    status: "BUILDING" as const,
    description:
      "A platform for exploring and understanding healthcare data — bringing transparency to an opaque industry.",
    colors: ["#C4A67D", "#8B8178", "#A69882", "#B8A98E"],
  },
  {
    name: "Lunchbox League",
    status: "BUILDING" as const,
    description:
      "An app helping families navigate childhood food allergies. Your child's allergy passport for schools, caregivers, and everyday life.",
    colors: ["#9B9B82", "#A69882", "#8B8178", "#C4A67D"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen" style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>
      {/* Nav */}
      <nav className="px-6 py-6 max-w-3xl mx-auto flex items-center gap-2.5">
        <ColorGrid colors={logoColors} size={3} />
        <span className="text-base font-semibold text-[#1A1A1A]">Formstone Labs</span>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-5 leading-tight">
          Software <span className="text-[#8B3A3A]">built</span> to last.
        </h1>
        <p className="text-lg sm:text-xl text-[#555] leading-relaxed max-w-xl mb-8">
          We make tools that stand the test of time. No shortcuts, no compromises
          — just solid software, carefully made.
        </p>
        <a
          href="#projects"
          className="inline-block rounded-full bg-[#7A3030] text-white px-7 py-3 text-sm font-semibold hover:bg-[#692828] transition-colors"
        >
          View our work →
        </a>
      </section>

      {/* Formstone divider */}
      <div className="h-2 w-full" style={{
        background: "linear-gradient(90deg, #C4A67D 0%, #A69882 25%, #8B8178 50%, #9B9B82 75%, #B8A98E 100%)",
      }} />

      {/* Projects */}
      <section id="projects" className="px-6 py-20 max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999] mb-2">
          What We&apos;re Building
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-8">
          Projects
        </h2>
        <div className="space-y-5">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl shadow-sm p-6 flex items-start gap-5"
            >
              <ColorGrid colors={p.colors} size={2} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-[#1A1A1A]">{p.name}</h3>
                  <StatusBadge status={p.status} />
                </div>
                <p className="text-sm text-[#666] leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-6 pb-12 max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999] mb-2">
          About
        </p>
        <p className="text-base text-[#555] leading-relaxed max-w-xl">
          A small software studio based in Connecticut. We build focused, useful
          products in healthcare data and consumer health.
        </p>
      </section>

      {/* Contact */}
      <section className="px-6 pb-12 max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999] mb-2">
          Contact
        </p>
        <a
          href="mailto:nate@formstonelabs.com"
          className="text-lg text-[#1A1A1A] underline underline-offset-4 decoration-[#ccc] hover:decoration-[#999]"
        >
          nate@formstonelabs.com
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 max-w-3xl mx-auto text-sm text-[#999]">
        © 2026 Formstone Labs LLC
      </footer>
    </main>
  );
}
