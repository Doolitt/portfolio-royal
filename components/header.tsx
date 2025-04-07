"use client"

import Link from "next/link"
import { useTheme } from "@/app/theme-provider"
import { Moon, Sun } from "lucide-react"

// Header component with navigation and theme toggle
export const Header = () => {
  // Get theme context
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-zinc-700 dark:text-zinc-300">Portfolio</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/projects"
              className="transition-colors hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 text-zinc-700" />
            ) : (
              <Sun className="h-5 w-5 text-zinc-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
} 