import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Tag from "./components/tag"
import { ThemeProvider } from "./context/ThemeContext"
import ThemeSwitcher from "./components/ThemeSwitcher"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <ThemeSwitcher />
        <Tag tag={"Test tag"} />
      </div>
    </ThemeProvider>
  </StrictMode>
)
