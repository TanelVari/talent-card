import React, { createContext, useContext } from "react"
import themeStore, { ThemeStore } from "../store/ThemeStore"

const ThemeContext = createContext<ThemeStore | undefined>(undefined)

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <ThemeContext.Provider value={themeStore}>{children}</ThemeContext.Provider>
  )
}

export const useThemeStore = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useThemeStore must be used within a ThemeProvider")
  }
  return context
}
