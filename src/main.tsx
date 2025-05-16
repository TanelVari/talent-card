import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { ThemeProvider } from "./context/ThemeContext"
import ThemeSwitcher from "./components/ThemeSwitcher"
import Card from "./components/Card"
import creatorsData from "./assets/creators.json"
import type { Persona, SocialLink } from "./components/Card/Card"

// Define interfaces for the raw data structure from creators.json
interface RawSocialLink {
  platform: string
  handle: string
  followers: number
}

interface RawCreatorData {
  name: string
  avatar: string
  age: number
  gender: string
  pronouns: string
  location: string
  socials: RawSocialLink[]
  bio: string
  tags?: string[]
}

// Helper function to create Persona objects
const createPersonaObject = (rawData: RawCreatorData, id: string): Persona => {
  return {
    ...rawData,
    id: id,
    avatarUrl: new URL(`./assets/avatars/${rawData.avatar}`, import.meta.url)
      .href,
    socialLinks: rawData.socials.map(
      (social: RawSocialLink): SocialLink => ({
        platform: social.platform.toLowerCase() as SocialLink["platform"],
        url: `https://www.${social.platform.toLowerCase()}.com/${
          social.handle.startsWith("@")
            ? social.handle.substring(1)
            : social.handle
        }`,
        followers: social.followers,
      })
    ),
    tags: rawData.tags || [],
  }
}

const normalPersona: Persona = createPersonaObject(
  creatorsData[0],
  "alex-altman"
)
const largePersona: Persona = createPersonaObject(
  creatorsData[1],
  "brianna-lee"
)
const compactPersona: Persona = createPersonaObject(
  creatorsData[2],
  "carlos-rivera"
)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-page text-primary p-4 md:p-8">
        <div className="absolute top-4 right-4">
          <ThemeSwitcher />
        </div>
        <div className="w-full flex flex-col items-center space-y-8">
          <Card persona={normalPersona} layoutFlavor="normal" />
          <Card persona={largePersona} layoutFlavor="large" />
          <Card persona={compactPersona} layoutFlavor="compact" />
        </div>
      </div>
    </ThemeProvider>
  </StrictMode>
)
