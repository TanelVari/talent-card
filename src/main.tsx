import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { ThemeProvider } from "./context/ThemeContext"
import ThemeSwitcher from "./components/ThemeSwitcher"
import Card from "./components/Card"
import creatorsData from "./assets/creators.json"
import type { Persona } from "./components/Card/Card"

const firstPersona: Persona = {
  ...creatorsData[0],
  id: "alex-altman", // Added id for uniqueness if needed later
  avatarUrl: `/src/assets/avatars/${creatorsData[0].avatar}`,
  socialLinks: creatorsData[0].socials.map((social) => ({
    platform: social.platform.toLowerCase() as
      | "instagram"
      | "snapchat"
      | "youtube"
      | "tiktok",
    url: `https://www.${social.platform.toLowerCase()}.com/${
      social.handle.startsWith("@") ? social.handle.substring(1) : social.handle
    }`, // Construct a plausible URL
    followers: social.followers, // Pass raw number
  })),
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-page text-primary">
        <div className="absolute top-4 right-4">
          <ThemeSwitcher />
        </div>
        <Card persona={firstPersona} />
      </div>
    </ThemeProvider>
  </StrictMode>
)
