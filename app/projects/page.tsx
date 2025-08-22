import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "My Work",
  description: "A selection of work experience and personal projects by Ivan Romero.",
};

export default function Projects() {
  // Separate work experience and personal projects
  const workExperience = projects.filter(project => project.type === 'work');
  const personalProjects = projects.filter(project => project.type === 'personal');

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="mb-8 text-2xl font-medium">My Work</h1>
      
      {/* Work Experience Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-black dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
          Work Experience
        </h2>
        <div className="space-y-6">
          {workExperience.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              className="group block transition-all duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-200 dark:border-neutral-700">
                {/* Contenido de la tarjeta */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-semibold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h2>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                        {project.year}
                      </span>
                    </div>
                    
                    {/* Company and Location */}
                    {project.company && (
                      <div className="mb-3">
                        <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                          {project.company}
                          {project.location && (
                            <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-2">
                              • {project.location}
                            </span>
                          )}
                        </p>
                      </div>
                    )}
                    
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                      {project.description.split('\n').map((line, lineIndex) => (
                        <p key={lineIndex} className="mb-1">
                          {line}
                        </p>
                      ))}
                    </div>
                    
                    {/* Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 px-2 py-1">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Enlace a la empresa */}
                  <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <span>Visit Company</span>
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Personal Projects Section */}
      <div>
        <h2 className="text-xl font-semibold mb-6 text-black dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
          Personal Projects
        </h2>
        <div className="space-y-6">
          {personalProjects.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              className="group block transition-all duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-200 dark:border-neutral-700 flex flex-col md:flex-row">
                {/* Imagen de portada */}
                <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden flex-shrink-0">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-4xl font-bold opacity-50">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  )}
                  {/* Overlay con año */}
                  <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {project.year}
                  </div>
                  {/* GitHub icon overlay */}
                  <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white p-2 rounded">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Contenido de la tarjeta */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-black dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h2>
                    
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 px-2 py-1">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Enlace a GitHub */}
                  <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <span>View Project</span>
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}