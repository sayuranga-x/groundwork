// App.jsx — updated to include auth flow
// Flow: Auth screen → Main app (checkin/progress/mindset)

import { useState } from "react"
import Auth from "./pages/Auth"
import CheckIn from "./components/CheckIn"
import Progress from "./components/Progress"
import { Mindset, Nav } from "./components/MindsetAndNav"

export default function App() {
  const [user, setUser] = useState(null)   // null = not logged in
  const [tab, setTab] = useState("checkin")

  // Called when signup/login succeeds
  const handleAuth = (name) => {
    setUser({ name })
  }

  // Show auth screen if not logged in
  if (!user) {
    return <Auth onAuth={handleAuth} />
  }

  // Show main app if logged in
  return (
    <div className="min-h-screen bg-[#0c0c0f] text-[#e8e4dc] max-w-md mx-auto relative">

      <div className="pb-24">
        {tab === "checkin"  && <CheckIn userName={user.name} />}
        {tab === "progress" && <Progress />}
        {tab === "mindset"  && <Mindset />}
      </div>

      <Nav activeTab={tab} onTabChange={setTab} />

    </div>
  )
}