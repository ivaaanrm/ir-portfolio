'use client';

import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./lib/config";
import { TextScramble } from "../components/motion-primitives/text-scramble";
import { InView } from "./components/in-view";
import { projects } from "./experience/project-data";

export default function Page() {
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
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
        {/* Profile Image */}
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <Image
              src="/perfil.jpg"
              alt="Ivan Romero profile photo"
              className="rounded-full bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
              unoptimized
              width={200}
              height={200}
              priority
            />
          </a>
        </div>

        {/* Hero Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hola,<br />
            Soy Ivan Romero
          </h1>
          <div className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
            <TextScramble
              className='font-mono text-xl'
              duration={2}
              // characterSet='. '
            >
              Software Engineer & Machine Learning Enthusiast
            </TextScramble>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
            <a
              href="/cv-ivan-romero.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg text-sm"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Descargar CV
            </a>
            <button
              onClick={() => scrollToSection('experiencia')}
              className="inline-flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 text-sm"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Ver mi trabajo
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={socialLinks.email}
              className="text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <InView
        variants={{
          hidden: { opacity: 0, y: 50, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        viewOptions={{ amount: 0.3 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => scrollToSection('sobre-mi')}
            className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-neutral-700 dark:text-neutral-300 rounded-lg hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 transition-all duration-200 shadow-sm hover:shadow-md text-xs border border-neutral-200 dark:border-neutral-700"
          >
            Sobre mí
          </button>
          <button
            onClick={() => scrollToSection('experiencia')}
            className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-neutral-700 dark:text-neutral-300 rounded-lg hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 transition-all duration-200 shadow-sm hover:shadow-md text-xs border border-neutral-200 dark:border-neutral-700"
          >
            Experiencia
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-neutral-700 dark:text-neutral-300 rounded-lg hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 transition-all duration-200 shadow-sm hover:shadow-md text-xs border border-neutral-200 dark:border-neutral-700"
          >
            Contacto
          </button>
        </div>
      </InView>

      {/* About Section */}
      <div id="sobre-mi" className="prose prose-neutral dark:prose-invert max-w-none mb-12">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ amount: 0.3 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <h2 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider mb-6 text-neutral-600 dark:text-neutral-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Sobre mí
          </h2>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
        >
          <div>
            <p className="text-lg leading-relaxed mb-4">
              I'm a Software Engineer with over 3 years of experience in backend
              development, machine learning, and distributed systems. I'm passionate
              about building end-to-end applications and enjoy working on projects in
              tech environments.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I have a strong foundation in Python, Django, relational databases, and
              production deployments. I am currently completing a Master's degree in
              Advanced Telecommunications Technologies, specializing in Deep
              Learning for Multimedia Processing.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I'm always eager to tackle the next challenge and learn new technologies.
              My experience spans from developing scalable backend systems to implementing
              cutting-edge machine learning solutions.
            </p>
            <p className="text-lg leading-relaxed">
              Outside of technology, my hobbies include photography, traveling, and
              mountaineering. These experiences help me bring a unique perspective
              to problem-solving and creativity in my work.
            </p>
          </div>
        </InView>
      </div>


      {/* Work Experience Section */}
      <div id="experiencia" className="mb-12">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ amount: 0.3 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <h2 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider mb-6 text-neutral-600 dark:text-neutral-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0h-8m8 0a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2" />
            </svg>
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
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ amount: 0.3 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <h2 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider mb-6 text-neutral-600 dark:text-neutral-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            Featured Projects
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
      <div id="education" className="mb-12">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ amount: 0.3 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <h2 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider mb-6 text-neutral-600 dark:text-neutral-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
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

      {/* Contact Section */}
      <div id="contacto" className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-8">
        <h2 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider mb-6 text-neutral-600 dark:text-neutral-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contáctame
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
          I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={socialLinks.email}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Enviar Email
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Conectar en LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}