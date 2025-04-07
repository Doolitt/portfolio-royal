"use client"

import Link from "next/link"
import { useTheme } from "@/app/theme-provider"
import { Moon, Sun, Menu } from "lucide-react"
import { useState } from "react"

// Header component with navigation and theme toggle
export const Header = () => {
  // Get theme context
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-[#E2E2E2] dark:bg-[#2D2D2D]">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-bold text-zinc-700 dark:text-zinc-300">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
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
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-md p-2 hover:bg-[#D8D4D5] dark:hover:bg-[#384D48]"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 text-zinc-700" />
            ) : (
              <Sun className="h-5 w-5 text-zinc-300" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-md p-2 hover:bg-[#D8D4D5] dark:hover:bg-[#384D48]"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 text-zinc-700" />
            ) : (
              <Sun className="h-5 w-5 text-zinc-300" />
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-md p-2 hover:bg-[#D8D4D5] dark:hover:bg-[#384D48]"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6 bg-[#E2E2E2] dark:bg-[#2D2D2D] border-t border-zinc-200 dark:border-zinc-800">
            <Link
              href="/projects"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
} 