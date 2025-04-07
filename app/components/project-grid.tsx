"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

// Define the type for our project data
type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

// Sample project data - replace with your actual projects
const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS",
    imageUrl: "/portfolio.webp?v=" + Date.now(),
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
  },
  // Add more projects here
];

// ProjectCard component to display individual project information
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ 
          scale: 1.02,
          y: -5,
          transition: { duration: 0.2 }
        }}
        className="h-full"
      >
        <Card className="h-full flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 transition-all hover:border-zinc-300 dark:hover:border-zinc-600">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xl text-zinc-700 dark:text-zinc-300">
              {project.title}
            </CardTitle>
            {/* Website Preview Image */}
            <div className="mt-2 rounded-lg overflow-hidden">
              <div className="relative aspect-video w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4 pt-2">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-0.5 text-sm text-zinc-600 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex gap-2">
            {project.githubUrl && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
            )}
            {project.liveUrl && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </motion.div>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
};

// Main ProjectGrid component
export const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}; 