"use client"

import Link from 'next/link';
import { ThemeToggle } from './components/theme-toggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E2E2E2] dark:bg-[#2D2D2D] flex items-center justify-center">
      <ThemeToggle />
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Name with rich green text */}
          <h1 className="text-6xl font-bold mb-6 text-[#1B4D3E] dark:text-[#2E8B57]">
            Royal Doolittle
          </h1>
          
          {/* About section */}
          <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-8 leading-relaxed">
            I&apos;m a passionate developer who loves creating beautiful and functional web applications. 
            With a keen eye for design and a strong foundation in modern web technologies, 
            I strive to build experiences that are both engaging and user-friendly.
          </p>

          {/* Projects button */}
          <Link 
            href="/projects"
            className="inline-block px-6 py-3 rounded-lg bg-[#1B4D3E] dark:bg-[#2E8B57] text-white font-medium hover:bg-[#153C30] dark:hover:bg-[#1F6B3E] transition-all duration-300"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
