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

function ColorGrid({ colors }: { colors: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-1.5 w-14 h-14 shrink-0">
      {colors.map((c, i) => (
        <div key={i} className="rounded-sm" style={{ backgroundColor: c }} />
      ))}
    </div>
  );
}

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
    <main className="min-h-screen px-6 py-16 sm:py-24 max-w-2xl mx-auto">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
          Formstone Labs
        </h1>
        <p className="text-lg text-[#555] leading-relaxed max-w-xl">
          A small software studio based in Connecticut. We build focused, useful
          products in healthcare data and consumer health.
        </p>
      </section>

      {/* Projects */}
      <section className="mb-20">
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
              <ColorGrid colors={p.colors} />
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

      {/* Contact */}
      <section className="mb-20">
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
      <footer className="text-sm text-[#999]">
        © 2026 Formstone Labs LLC
      </footer>
    </main>
  );
}
