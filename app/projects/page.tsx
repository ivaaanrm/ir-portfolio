import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of projects by Ivan Romero.",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Projects</h1>
      <div>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-2 mb-6 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex justify-between items-center">
              <h2 className="text-black dark:text-white font-medium">
                {project.title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                {project.year}
              </p>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}