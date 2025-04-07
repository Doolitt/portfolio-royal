import { ProjectGrid } from "@/app/components/project-grid";

// Projects page component that displays a grid of portfolio projects
export default function ProjectsPage() {
  return (
    <div className="pt-8 space-y-8">
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-zinc-700 dark:text-zinc-300">
          My Projects
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge
          and learning opportunity in my development journey.
        </p>
      </div>
      <ProjectGrid />
    </div>
  );
} 