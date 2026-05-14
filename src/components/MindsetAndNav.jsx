// Mindset.jsx
// The anti-comparison screen — no external feeds, just you vs you

export function Mindset() {
  return (
    <div className="px-6 pt-14">

      {/* Header */}
      <p className="text-xs tracking-widest uppercase text-[#f0c040] mb-1">Groundwork</p>
      <h1 className="text-2xl font-bold text-white mb-1">About comparison</h1>
      <p className="text-xs text-[#5a5650] mb-8">the only race that matters</p>

      {/* Main banner */}
      <div className="bg-[#111115] border border-[#1e1e24] rounded-2xl p-7 mb-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0c04066] to-transparent" />
        <p className="text-4xl mb-4">🪞</p>
        <h2 className="text-xl font-bold text-white leading-snug mb-4">
          You're not behind.<br />You're just early.
        </h2>
        <p className="text-xs text-[#5a5650] leading-relaxed">
          What you see on LinkedIn and Twitter is a{" "}
          <span className="text-[#f0c040]">highlight reel</span> — not
          someone's daily reality.
          <br /><br />
          The only meaningful comparison is{" "}
          <span className="text-[#f0c040]">you vs. who you were last week.</span>
          <br /><br />
          Groundwork doesn't show you anyone else.
          Because{" "}
          <span className="text-[#f0c040]">no one else is building what you are.</span>
        </p>
      </div>

      {/* You vs last week */}
      <p className="text-[10px] tracking-widest uppercase text-[#3a3a42] mb-3">
        This week vs last week
      </p>
      <div className="flex gap-3 mb-6">
        {[
          { num: "↑ 12%", label: "Momentum" },
          { num: "+3",    label: "Days logged" },
        ].map((s, i) => (
          <div key={i} className="flex-1 bg-[#111115] border border-[#1e1e24] rounded-xl p-4 text-center">
            <p className="text-xl font-black text-white leading-none mb-1">{s.num}</p>
            <p className="text-[9px] tracking-widest uppercase text-[#3a3a42]">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quote card */}
      <p className="text-[10px] tracking-widest uppercase text-[#3a3a42] mb-3">
        A note for tough days
      </p>
      <div className="bg-[#111115] border border-[#1e1e24] rounded-2xl p-7 text-center">
        <p className="text-sm font-semibold text-white leading-relaxed mb-3">
          "The work you do today that no one sees
          is what becomes impossible to ignore later."
        </p>
        <p className="text-[9px] tracking-widest uppercase text-[#3a3a42]">
          groundwork philosophy
        </p>
      </div>

      <div className="h-4" />
    </div>
  )
}

// ─────────────────────────────────────────────
// Nav.jsx — Bottom navigation bar
// ─────────────────────────────────────────────

const TABS = [
  { key: "checkin",  label: "Check-in", icon: "✏️" },
  { key: "progress", label: "Progress",  icon: "📈" },
  { key: "mindset",  label: "Mindset",   icon: "🪞" },
]

export function Nav({ activeTab, onTabChange }) {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#0c0c0f] border-t border-[#1a1a1e] flex px-4 pb-6 pt-3 z-50">
      {TABS.map((t) => (
        <button
          key={t.key}
          onClick={() => onTabChange(t.key)}
          className={`flex-1 flex flex-col items-center gap-1 transition-all ${
            activeTab === t.key ? "opacity-100" : "opacity-30"
          }`}
        >
          <span className="text-lg">{t.icon}</span>
          <span className={`text-[9px] tracking-widest uppercase font-medium ${
            activeTab === t.key ? "text-[#f0c040]" : "text-[#5a5650]"
          }`}>
            {t.label}
          </span>
        </button>
      ))}
    </div>
  )
}

export default Mindset