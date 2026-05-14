// Progress.jsx
// Shows momentum score, streak, week bars, and past wins
// Right now uses DUMMY DATA — in Month 2/3 you'll replace with real Supabase data

// Dummy data to build and test UI with
const DUMMY_WEEK = [
  { day: "M", score: 72, logged: true },
  { day: "T", score: 85, logged: true },
  { day: "W", score: 60, logged: true },
  { day: "T", score: 91, logged: true },
  { day: "F", score: 78, logged: true },
  { day: "S", score: 0,  logged: false },
  { day: "S", score: 0,  logged: false },
]

const DUMMY_WINS = [
  { text: "Shipped first landing page draft", date: "4 days ago" },
  { text: "Had 3 real conversations with potential users", date: "1 week ago" },
  { text: "Defined the core problem clearly for the first time", date: "2 weeks ago" },
  { text: "Committed to working on this every single day", date: "3 weeks ago" },
]

// Average momentum score for the week (ignore unlogged days)
const weekScore = Math.round(
  DUMMY_WEEK.filter(d => d.logged).reduce((sum, d) => sum + d.score, 0) /
  DUMMY_WEEK.filter(d => d.logged).length
)

export default function Progress() {
  return (
    <div className="px-6 pt-14">

      {/* Header */}
      <p className="text-xs tracking-widest uppercase text-[#f0c040] mb-1">Groundwork</p>
      <h1 className="text-2xl font-bold text-white mb-1">Your proof of work</h1>
      <p className="text-xs text-[#5a5650] mb-8">5-day streak · based on effort, not outcome</p>

      {/* Momentum card */}
      <div className="bg-[#111115] border border-[#1e1e24] rounded-2xl p-6 mb-4 relative overflow-hidden">
        {/* Top shine line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0c04066] to-transparent" />

        <p className="text-xs tracking-widest uppercase text-[#4a4a52] mb-2">This week's momentum</p>
        <p className="text-7xl font-black text-[#f0c040] leading-none mb-1">{weekScore}</p>
        <p className="text-xs text-[#5a5650] mb-6">based on consistency, not outcome</p>

        {/* Week bar chart */}
        <div className="flex gap-2">
          {DUMMY_WEEK.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              {/* Bar */}
              <div className="w-full h-12 bg-[#1a1a1e] rounded relative overflow-hidden">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#d4960a] to-[#f0c040] rounded transition-all duration-500"
                  style={{ height: d.logged ? `${d.score}%` : "0%" }}
                />
              </div>
              {/* Day label */}
              <span className={`text-[9px] tracking-wide ${d.logged ? "text-[#f0c040]" : "text-[#2a2a30]"}`}>
                {d.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="flex gap-3 mb-6">
        {[
          { num: "5🔥", label: "Day streak" },
          { num: "23",  label: "Days logged" },
          { num: "91",  label: "Peak score" },
        ].map((s, i) => (
          <div key={i} className="flex-1 bg-[#111115] border border-[#1e1e24] rounded-xl p-4 text-center">
            <p className="text-2xl font-black text-white leading-none mb-1">{s.num}</p>
            <p className="text-[9px] tracking-widest uppercase text-[#3a3a42]">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Wins feed */}
      <p className="text-[10px] tracking-widest uppercase text-[#3a3a42] mb-3">
        Wins you might've forgotten
      </p>

      {DUMMY_WINS.map((w, i) => (
        <div key={i} className="flex gap-3 items-start py-4 border-b border-[#141418]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#f0c040] opacity-60 mt-1.5 shrink-0" />
          <div>
            <p className="text-sm text-[#ccc8c0] leading-relaxed">{w.text}</p>
            <p className="text-[9px] text-[#3a3a42] mt-1">{w.date}</p>
          </div>
        </div>
      ))}

      <div className="h-4" />
    </div>
  )
}