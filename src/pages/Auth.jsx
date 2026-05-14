// pages/Auth.jsx
// Handles both Signup and Login in one screen
// Toggle between them with the tab at the top
//
// Month 2: uncomment the supabase lines to make this actually work
// For now it simulates the flow so you can see the UI

import { useState } from "react"
// import { supabase } from "../lib/supabase"  ← uncomment in Month 2

export default function Auth({ onAuth }) {
  const [mode, setMode] = useState("signup")   // "signup" or "login"
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }
    if (mode === "signup" && !name) {
      setError("Please enter your name")
      return
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    setLoading(true)
    setError("")

    // ── MONTH 2: Replace this block with real Supabase auth ──
    // if (mode === "signup") {
    //   const { error } = await supabase.auth.signUp({
    //     email,
    //     password,
    //     options: { data: { name } }
    //   })
    //   if (error) { setError(error.message); setLoading(false); return }
    // } else {
    //   const { error } = await supabase.auth.signInWithPassword({ email, password })
    //   if (error) { setError(error.message); setLoading(false); return }
    // }
    // ─────────────────────────────────────────────────────────

    // Simulate loading for now
    setTimeout(() => {
      setLoading(false)
      onAuth(name || "Founder")  // pass name up to App.jsx
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#0c0c0f] flex flex-col justify-center px-6">

      {/* Logo */}
      <div className="mb-10">
        <p className="text-xs tracking-widest uppercase text-[#f0c040] mb-2">
          Groundwork
        </p>
        <h1 className="text-3xl font-black text-white leading-tight">
          {mode === "signup"
            ? "Start tracking\nwhat matters."
            : "Welcome\nback."}
        </h1>
      </div>

      {/* Toggle signup / login */}
      <div className="flex bg-[#111115] border border-[#1e1e24] rounded-xl p-1 mb-8">
        {["signup", "login"].map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); setError("") }}
            className={`flex-1 py-2.5 rounded-lg text-xs font-medium tracking-widest uppercase transition-all ${
              mode === m
                ? "bg-[#f0c040] text-[#0c0c0f]"
                : "text-[#3a3a42]"
            }`}
          >
            {m === "signup" ? "Sign Up" : "Log In"}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="flex flex-col gap-3 mb-4">

        {/* Name — signup only */}
        {mode === "signup" && (
          <div>
            <p className="text-[10px] tracking-widest uppercase text-[#3a3a42] mb-1.5">
              Your name
            </p>
            <input
              type="text"
              placeholder="What do people call you?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#111115] border border-[#1e1e24] rounded-xl px-4 py-3.5 text-sm text-[#e8e4dc] placeholder-[#2a2a30] outline-none focus:border-[#f0c040] transition-colors"
            />
          </div>
        )}

        {/* Email */}
        <div>
          <p className="text-[10px] tracking-widest uppercase text-[#3a3a42] mb-1.5">
            Email
          </p>
          <input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#111115] border border-[#1e1e24] rounded-xl px-4 py-3.5 text-sm text-[#e8e4dc] placeholder-[#2a2a30] outline-none focus:border-[#f0c040] transition-colors"
          />
        </div>

        {/* Password */}
        <div>
          <p className="text-[10px] tracking-widest uppercase text-[#3a3a42] mb-1.5">
            Password
          </p>
          <input
            type="password"
            placeholder="Min 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#111115] border border-[#1e1e24] rounded-xl px-4 py-3.5 text-sm text-[#e8e4dc] placeholder-[#2a2a30] outline-none focus:border-[#f0c040] transition-colors"
          />
        </div>

      </div>

      {/* Error message */}
      {error && (
        <p className="text-xs text-red-400 mb-4 px-1">{error}</p>
      )}

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-4 bg-[#f0c040] text-[#0c0c0f] rounded-xl font-black text-sm tracking-wider uppercase transition-opacity disabled:opacity-50"
      >
        {loading
          ? "One sec..."
          : mode === "signup"
          ? "Let's go →"
          : "Log in →"}
      </button>

      {/* Fine print */}
      <p className="text-[10px] text-[#2a2a30] text-center mt-6 leading-relaxed">
        Your data is private and never shared.{"\n"}
        No social feeds. No comparison. Just you.
      </p>

    </div>
  )
}