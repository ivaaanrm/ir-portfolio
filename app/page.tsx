'use client';

import Image from "next/image";
import Link from "next/link";
import { Bot, Brain, ChevronDown, Database, Monitor, Server, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import ScrollProgressNav from "../components/navigation/scroll-progress-nav";
import { BorderTrail } from '../components/motion-primitives/border-trail';
import {
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiHuggingface,
  SiLinux,
  SiMysql,
  SiNginx,
  SiOpencv,
  SiOllama,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiReact,
  SiRedis,
  SiSelenium,
  SiTypescript,
  SiOpenai,
} from "react-icons/si";
import { socialLinks } from "./lib/config";
import { TextScramble } from "../components/motion-primitives/text-scramble";
import { InView } from "./components/in-view";
import { projects } from "./experience/project-data";
import { GlowEffect } from "../components/motion-primitives/glow-effect";

const NAV_SECTIONS = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contacto', label: 'Contacto' },
] as const;

type SectionId = (typeof NAV_SECTIONS)[number]['id'];

const NAV_SECTIONS_LIST: { id: SectionId; label: string }[] = NAV_SECTIONS.map(section => ({
  id: section.id,
  label: section.label,
}));

export default function Page() {
  // Separate work experience, personal projects and education
  const workExperience = projects.filter(project => project.type === 'work');
  const personalProjects = projects.filter(project => project.type === 'personal');
  const education = projects.filter(project => project.type === 'education');

  type TechIconComponent = ComponentType<{ className?: string }>;

  type TechCategory = {
    title: string;
    icon: LucideIcon;
    technologies: { name: string; icon: TechIconComponent }[];
  };

  const techStack: TechCategory[] = [
    {
      title: 'Backend',
      icon: Server,
      technologies: [
        { name: 'Python', icon: SiPython },
        { name: 'Django', icon: SiDjango },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'Selenium', icon: SiSelenium },
      ],
    },
    {
      title: 'ML',
      icon: Brain,
      technologies: [
        { name: 'PyTorch', icon: SiPytorch },
        { name: 'OpenCV', icon: SiOpencv },
        { name: 'Hugging Face', icon: SiHuggingface },
        { name: 'OpenAI', icon: SiOpenai },
        { name: 'Ollama', icon: SiOllama },
      ],
    },
    {
      title: 'Frontend',
      icon: Monitor,
      technologies: [
        { name: 'React', icon: SiReact },
        { name: 'TypeScript', icon: SiTypescript },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      technologies: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Redis', icon: SiRedis },
      ],
    },
    {
      title: 'CI / CD & DevOps',
      icon: Settings,
      technologies: [
        { name: 'Nginx', icon: SiNginx },
        { name: 'Docker', icon: SiDocker },
        { name: 'GitHub Actions', icon: SiGithubactions },
        { name: 'Linux', icon: SiLinux },
      ],
    },
  ];

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <ScrollProgressNav sections={NAV_SECTIONS_LIST} onNavigate={scrollToSection} />
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
          <h1 className="mb-6 text-center lg:text-left">
            <span className="inline-flex items-center rounded-full border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-wider text-neutral-600 dark:text-neutral-300 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/40">
              Hi there! 👋
            </span>
            <span className="mt-3 block text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-neutral-900 dark:text-neutral-50">
              I'm Ivan Romero
            </span>
            <span className="mt-3 inline-block h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
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
          
          {/* Download CV Button */}
          <div className="flex justify-center lg:justify-start mb-6">
            <div className='relative'>
              <GlowEffect
                colors={['#2563eb', '#7c3aed', '#db2777', '#f59e0b']}
                mode='colorShift'
                blur='soft'
                duration={3}
                scale={1}
              />
              <a
                href="/cv-ivan-romero.pdf"
                download
                className='relative inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 outline outline-1 outline-neutral-200 dark:outline-neutral-800 hover:outline-neutral-300 dark:hover:outline-neutral-700 transition-all duration-200'
              >
                <svg
                  className="w-4 h-4"
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
                Download CV
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4">
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
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-.908-.62.069-.608.069-.608 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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

          {/* Mobile Scroll Hint */}
          <div className="mt-6 flex justify-center lg:hidden">
            <div className="flex flex-col items-center text-neutral-400 dark:text-neutral-500">
              <span className="sr-only">Desplázate hacia abajo</span>
              <div className="flex flex-col items-center gap-1">
                <ChevronDown className="h-4 w-4 animate-[bounce_1.5s_infinite]" aria-hidden="true" />
                <ChevronDown className="h-4 w-4 animate-[bounce_1.5s_infinite]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>

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
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-6 text-neutral-600 dark:text-neutral-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            About me
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


    {/* Tech Stack Section */}
    <div id="tech-stack" className="mb-12">
      <InView
        variants={{
          hidden: { opacity: 0, y: 80, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        viewOptions={{ amount: 0.3 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-5 text-neutral-600 dark:text-neutral-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h6l2 4h8l-2 8H6l-2-12z" />
          </svg>
          Tech Stack
        </h2>
      </InView>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {techStack.map((category, index) => {
          const Icon = category.icon;
          return (
            <InView
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 60, filter: 'blur(6px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              viewOptions={{ amount: 0.2 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
            >
              <div className="group relative h-full rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/60 p-4 shadow-sm ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-blue-500/10">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 dark:bg-neutral-900/80 dark:text-neutral-200">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {category.technologies.map(tech => {
                    const TechIcon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 rounded-lg border border-neutral-200/70 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/70 px-2.5 py-1.5 transition-colors duration-200 group-hover:border-blue-500/30"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white dark:bg-neutral-950 shadow-sm">
                          <TechIcon className="h-4 w-4 text-neutral-700 dark:text-neutral-200" aria-hidden="true" />
                        </span>
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-100">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </InView>
          );
        })}
      </div>
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
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-6 text-neutral-600 dark:text-neutral-400">
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

      {/* Projects Section */}
      <div id="projects" className="mb-12">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ amount: 0.3 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-6 text-neutral-600 dark:text-neutral-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            Projects
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
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-.908-.62.069-.608.069-.608 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
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
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-6 text-neutral-600 dark:text-neutral-400">
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
      <div id="contacto" className="relative bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-8 overflow-hidden">
        <BorderTrail
          style={{
            boxShadow:
              '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
          }}
          size={100}
        />
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact me
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            title="Go to Contact page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
}