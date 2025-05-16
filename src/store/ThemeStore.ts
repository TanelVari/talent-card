import { makeAutoObservable } from "mobx"

export type Theme = "light" | "dark" | "high-contrast"

export class ThemeStore {
  theme: Theme = "light"

  constructor() {
    makeAutoObservable(this)
    this.loadTheme()
  }

  setTheme(theme: Theme) {
    this.theme = theme
    this.applyThemeToDocument()
    this.saveTheme()
  }

  private applyThemeToDocument() {
    const root = document.documentElement
    root.classList.remove("dark", "high-contrast") // Remove all theme classes
    if (this.theme === "dark") {
      root.classList.add("dark")
    } else if (this.theme === "high-contrast") {
      root.classList.add("high-contrast")
    }
    // 'light' theme has no specific class, it's the default
  }

  private saveTheme() {
    localStorage.setItem("theme", this.theme)
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme) {
      this.theme = savedTheme
    } else {
      // Check for prefers-color-scheme if no theme is saved
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        this.theme = "dark"
      }
      // You could add a similar check for high-contrast if there's a media query for it
    }
    this.applyThemeToDocument() // Apply loaded or default theme
  }
}

const themeStore = new ThemeStore()
export default themeStore
