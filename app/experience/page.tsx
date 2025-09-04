'use client';

import Link from "next/link";
import Image from "next/image";
import { projects } from "./project-data";
import { InView } from "../components/in-view";

export default function Projects() {
  // Separate work experience, personal projects and education
  const workExperience = projects.filter(project => project.type === 'work');
  const personalProjects = projects.filter(project => project.type === 'personal');
  const education = projects.filter(project => project.type === 'education');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-4xl mx-auto">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        viewOptions={{ amount: 0.3 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <h1 className="mb-8 text-3xl font-bold text-center text-black dark:text-white">Portfolio & Experience</h1>
      </InView>
      
      {/* Navigation Buttons */}
      <InView
        variants={{
          hidden: { opacity: 0, y: 50, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        viewOptions={{ amount: 0.3 }}
        transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 }}
      >
        <div className="flex justify-center flex-wrap gap-2 mb-12">
        <button
          onClick={() => scrollToSection('work-experience')}
          className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg text-xs"
        >
          <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
          </svg>
          Work Experience
        </button>
        <button
          onClick={() => scrollToSection('personal-projects')}
          className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg text-xs"
        >
          <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Personal Projects
        </button>
        <button
          onClick={() => scrollToSection('education')}
          className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg text-xs"
        >
          <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          Education
        </button>
        </div>
      </InView>
      
      {/* Work Experience Section */}
      <div id="work-experience" className="mb-12">
        <InView
          variants={{
            hidden: { opacity: 0, x: -100, filter: 'blur(4px)' },
            visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h2 className="text-xl font-semibold mb-6 text-black dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
            Work Experience
          </h2>
        </InView>
        <div className="space-y-6">
          {workExperience.map((project, index) => (
            <InView
              key={index}
              variants={{
                hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              viewOptions={{ amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.1 }}
            >
              <article className="group bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-neutral-200 dark:border-neutral-700">
              {/* Contenido de la tarjeta */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
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
                            | {project.location}
                          </span>
                        )}
                      </p>
                    </div>
                  )}
                  
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {project.description.split('\n\n').map((section, sectionIndex) => {
                      const lines = section.split('\n');
                      const isRoleHeader = lines[0].includes('(') && lines[0].includes(')');
                      
                      if (isRoleHeader) {
                        const roleInfo = lines[0];
                        const bulletPoints = lines.slice(1);
                        
                        return (
                          <div key={sectionIndex} className="mb-4 last:mb-0">
                            {/* Role Header with Timeline */}
                            <div className="flex items-center mb-2">
                              {/* <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div> */}
                              <div className="flex-1">
                                <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                                  {roleInfo.split(' (')[0]}
                                </h3>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                  {roleInfo.match(/\((.*?)\)/)?.[1]}
                                </p>
                              </div>
                            </div>
                            
                            {/* Bullet Points */}
                            <div className="bulletPoints">
                              {bulletPoints.map((point, pointIndex) => (
                                <p key={pointIndex} className="mb-1 pl-2 border-neutral-200 dark:border-neutral-700">
                                  {point}
                                </p>
                              ))}
                            </div>
                          </div>
                        );
                      } else {
                        // Regular paragraph (fallback)
                        return (
                          <p key={sectionIndex} className="mb-1">
                            {section}
                          </p>
                        );
                      }
                    })}
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
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>Visit Company</span>
                  <svg
                    className="w-4 h-4 ml-1 hover:translate-x-1 transition-transform"
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
                </Link>
              </div>
            </article>
            </InView>
          ))}
        </div>
      </div>

      {/* Personal Projects Section */}
      <div id="personal-projects" className="mb-12">
        <InView
          variants={{
            hidden: { opacity: 0, x: -100, filter: 'blur(4px)' },
            visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h2 className="text-xl font-semibold mb-6 text-black dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
            Personal Projects
          </h2>
        </InView>
        <div className="space-y-6">
          {personalProjects.map((project, index) => (
            <InView
              key={index}
              variants={{
                hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              viewOptions={{ amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.1 }}
            >
              <article className="group bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-neutral-200 dark:border-neutral-700 flex flex-col md:flex-row">
              {/* Imagen de portada */}
              <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden flex-shrink-0">
                                 {project.image ? (
                   <Image
                     src={project.image}
                     alt={project.title}
                     fill
                     className="object-cover transition-transform duration-300 group-hover:scale-110"
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
                  <h2 className="text-xl font-semibold text-black dark:text-white mb-3 line-clamp-2">
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
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 ml-1 hover:translate-x-1 transition-transform"
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
                </Link>
              </div>
            </article>
            </InView>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div id="education">
        <InView
          variants={{
            hidden: { opacity: 0, x: -100, filter: 'blur(4px)' },
            visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h2 className="text-xl font-semibold mb-6 text-black dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
            Education
          </h2>
        </InView>
        <div className="space-y-6">
          {education.map((project, index) => (
            <InView
              key={index}
              variants={{
                hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              viewOptions={{ amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.1 }}
            >
              <article className="group bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-neutral-200 dark:border-neutral-700">
              {/* Contenido de la tarjeta */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                      {project.title}
                    </h2>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  
                  {/* University and Location */}
                  {project.university && (
                    <div className="mb-3">
                      <p className="text-lg font-medium text-green-600 dark:text-green-400">
                        {project.university}
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
                      <p key={lineIndex} className="mb-1 pl-2 border-l-2 border-neutral-200 dark:border-neutral-700">
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
                
                {/* Enlace a la universidad */}
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  <span>Visit University</span>
                  <svg
                    className="w-4 h-4 ml-1 hover:translate-x-1 transition-transform"
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
                </Link>
              </div>
            </article>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}