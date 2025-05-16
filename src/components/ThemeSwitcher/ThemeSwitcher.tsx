import React from "react"
import { observer } from "mobx-react-lite"
import { useThemeStore } from "../../context/ThemeContext"
import type { Theme } from "../../store/ThemeStore"

const ThemeSwitcher: React.FC = observer(() => {
  const themeStore = useThemeStore()

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    themeStore.setTheme(event.target.value as Theme)
  }

  return (
    <div className="p-4">
      <label
        htmlFor="theme-select"
        className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Select Theme:
      </label>
      <select
        id="theme-select"
        value={themeStore.theme}
        onChange={handleThemeChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="high-contrast">High Contrast</option>
      </select>
    </div>
  )
})

export default ThemeSwitcher
