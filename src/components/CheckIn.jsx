import { useState } from "react"
// import { supabase } from "../lib/supabase"  ← uncomment this in Month 2

// The 3 questions users answer every day
const QUESTIONS = [
  "What's one real thing you moved forward today?",
  "What's one thing that felt hard but you did anyway?",
  "How do you feel about your effort today?",
]

export default function CheckIn() {
  const [step, setStep] = useState(0)           // which question we're on
  const [answers, setAnswers] = useState(["", "", null])  // user's answers
  const [done, setDone] = useState(false)        // finished check-in?

  // Update the answer for the current step
  const handleAnswer = (value) => {
    const updated = [...answers]
    updated[step] = value
    setAnswers(updated)
  }

  // Move to next question or finish
  const handleNext = async () => {
    if (step < 2) {
      setStep(step + 1)
    } else {
      // TODO Month 2: save to Supabase here
      // const { error } = await supabase.from("checkins").insert({
      //   what_moved: answers[0],
      //   what_was_hard: answers[1],
      //   effort_score: answers[2],
      // })
      setDone(true)
    }
  }

  // Can they move forward? Text must not be empty, score must be selected
  const canProceed = step === 2
    ? answers[2] !== null
    : answers[step].trim().length > 0

  // ── DONE STATE ──
  if (done) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="text-5xl mb-4">🔥</div>
        <h2 className="text-2xl font-bold text-white mb-2">Day logged.</h2>
        <p className="text-sm text-[#5a5650] leading-relaxed">
          You showed up again.<br />
          That's the whole point.<br /><br />
          Come back tomorrow.
        </p>
        {/* Dev helper: reset so you can test again */}
        <button
          onClick={() => { setDone(false); setStep(0); setAnswers(["", "", null]) }}
          className="mt-8 text-xs text-[#3a3a42] underline"
        >
          reset (dev only)
        </button>
      </div>
    )
  }

  // ── CHECK-IN FORM ──
  return (
    <div className="px-6 pt-14">

      {/* Header */}
      <p className="text-xs tracking-widest uppercase text-[#f0c040] mb-1">Groundwork</p>
      <h1 className="text-2xl font-bold text-white mb-1">Daily check-in</h1>
      <p className="text-xs text-[#5a5650] mb-8">2 min · private · just for you</p>

      {/* Progress dots */}
      <div className="flex gap-2 mb-8">
        {QUESTIONS.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              i <= step ? "bg-[#f0c040]" : "bg-[#1e1e24]"
            }`}
          />
        ))}
      </div>

      {/* Question card */}
      <div className="bg-[#111115] border border-[#1e1e24] rounded-2xl p-6 mb-4">

        <p className="text-xs tracking-widest uppercase text-[#f0c040] mb-3">
          Question {step + 1} of 3
        </p>

        <h2 className="text-lg font-semibold text-white leading-snug mb-5">
          {QUESTIONS[step]}
        </h2>

        {/* Text input for Q1 and Q2 */}
        {step < 2 && (
          <textarea
            className="w-full bg-[#0c0c0f] border border-[#2a2a30] rounded-lg p-3 text-sm text-[#e8e4dc] placeholder-[#2e2e34] resize-none outline-none focus:border-[#f0c040] transition-colors min-h-[90px]"
            placeholder="Type anything, no one else sees this…"
            value={answers[step]}
            onChange={(e) => handleAnswer(e.target.value)}
          />
        )}

        {/* Number picker for Q3 (effort score 1-10) */}
        {step === 2 && (
          <div className="grid grid-cols-5 gap-2">
            {[1,2,3,4,5,6,7,8,9,10].map((n) => (
              <button
                key={n}
                onClick={() => handleAnswer(n)}
                className={`py-3 rounded-lg text-sm font-medium transition-all ${
                  answers[2] === n
                    ? "bg-[#f0c040] text-[#0c0c0f]"
                    : "bg-[#0c0c0f] border border-[#1e1e24] text-[#3a3a42] hover:border-[#f0c040]"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        )}

      </div>

      {/* Next button */}
      <button
        onClick={canProceed ? handleNext : undefined}
        className={`w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-opacity ${
          canProceed
            ? "bg-[#f0c040] text-[#0c0c0f] opacity-100"
            : "bg-[#f0c040] text-[#0c0c0f] opacity-25 cursor-not-allowed"
        }`}
      >
        {step < 2 ? "Next →" : "Lock it in"}
      </button>

    </div>
  )
}