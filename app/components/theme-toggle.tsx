"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "../theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 p-2 rounded-lg bg-[#E2E2E2] dark:bg-[#2D2D2D] text-zinc-700 dark:text-zinc-300 hover:bg-[#D8D4D5] dark:hover:bg-[#384D48] transition-colors"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
} 