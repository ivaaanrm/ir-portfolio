'use client';

import Image from "next/image";
import Link from "next/link";
import { Brain, Database, Monitor, Server, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import ScrollProgressNav from "../components/navigation/scroll-progress-nav";
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
  SiAmazonwebservices,
  SiJavascript,
  SiOllama,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiRedis,
  SiSelenium,
  SiTypescript,
} from "react-icons/si";
import { socialLinks } from "./lib/config";
import { InView } from "./components/in-view";
import { projects } from "./experience/project-data";

const NAV_SECTIONS = [
  { id: 'sobre-mi', label: 'About' },
  { id: 'tech-stack', label: 'Stack' },
  { id: 'experiencia', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contacto', label: 'Contact' },
] as const;

type SectionId = (typeof NAV_SECTIONS)[number]['id'];

const NAV_SECTIONS_LIST: { id: SectionId; label: string }[] = NAV_SECTIONS.map(section => ({
  id: section.id,
  label: section.label,
}));

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  const workExperience = projects.filter(p => p.type === 'work');
  const personalProjects = projects.filter(p => p.type === 'personal');
  const education = projects.filter(p => p.type === 'education');

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
        { name: 'Ollama', icon: SiOllama },
      ],
    },
    {
      title: 'Frontend',
      icon: Monitor,
      technologies: [
        { name: 'JavaScript', icon: SiJavascript },
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
      title: 'DevOps',
      icon: Settings,
      technologies: [
        { name: 'AWS', icon: SiAmazonwebservices },
        { name: 'Nginx', icon: SiNginx },
        { name: 'Docker', icon: SiDocker },
        { name: 'GitHub Actions', icon: SiGithubactions },
        { name: 'Linux', icon: SiLinux },
      ],
    },
  ];

  return (
    <div className="relative">
      <ScrollProgressNav sections={NAV_SECTIONS_LIST} />

      {/* ───── Hero ───── */}
      <motion.section
        className="min-h-[85dvh] flex flex-col items-center justify-center relative -mt-32 pt-32"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <motion.div variants={heroItem}>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Image
                src="/perfil.jpg"
                alt="Ivan Romero"
                className="rounded-full mx-auto transition-all duration-500 hover:shadow-lg"
                unoptimized
                width={110}
                height={110}
                priority
              />
            </a>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="font-serif-display italic text-5xl sm:text-6xl md:text-7xl mt-8 text-neutral-900 leading-none"
          >
            Ivan Romero
          </motion.h1>

          <motion.div variants={heroItem} className="w-12 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto my-6" />

          <motion.p
            variants={heroItem}
            className="text-xs tracking-[0.25em] uppercase text-slate-500 font-medium"
          >
            Software Engineer &middot; Machine Learning
          </motion.p>

          {/* Social Links */}
          <motion.div variants={heroItem} className="mt-8 flex items-center justify-center gap-5">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2]/60 hover:text-[#0A66C2] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-800 transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-.908-.62.069-.608.069-.608 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={socialLinks.email}
              className="text-rose-400/60 hover:text-rose-500 transition-colors duration-300"
              aria-label="Email"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>

          {/* CV Download */}
          <motion.div variants={heroItem} className="mt-6">
            <a
              href="/cv-ivan-romero.pdf"
              download
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors duration-300 border-b border-slate-300 hover:border-slate-400 pb-0.5"
            >
              Download CV
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator — hidden on mobile to avoid overlap */}
        <div className="absolute bottom-8 hidden sm:flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-300 select-none">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-slate-300 origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.section>

      {/* ───── Content ───── */}
      <section className="max-w-4xl mx-auto">

        {/* ── About ── */}
        <div id="sobre-mi" className="mb-24">
          <InView variants={fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-8">
              About
            </h2>
          </InView>
          <InView variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="space-y-4 text-neutral-600 text-[15px] leading-relaxed">
              <p>
                Software Engineer with 3 years of experience in backend systems and
                microservices in Python. I specialize in Django, REST APIs, Docker, and
                distributed system design — leading teams and shipping production solutions
                for major Spanish banking clients. Currently pursuing a Master&apos;s in Deep
                Learning, bridging robust software engineering with AI.
              </p>
              <p>
                Outside of technology, I enjoy photography, traveling, and mountaineering.
              </p>
            </div>
          </InView>
        </div>

        {/* ── Tech Stack ── */}
        <div id="tech-stack" className="mb-24">
          <InView variants={fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-8">
              Tech Stack
            </h2>
          </InView>
          <div className="space-y-8">
            {techStack.map((category, index) => (
              <InView
                key={category.title}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div>
                  <h3 className="text-sm font-medium text-neutral-900 mb-3">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map(tech => {
                      const TechIcon = tech.icon;
                      return (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 text-sm text-neutral-600 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-800 transition-colors duration-200"
                        >
                          <TechIcon className="w-3.5 h-3.5" aria-hidden="true" />
                          {tech.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </InView>
            ))}
          </div>
        </div>

        {/* ── Work Experience ── */}
        <div id="experiencia" className="mb-24">
          <InView variants={fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-10">
              Experience
            </h2>
          </InView>
          <div className="relative">
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-slate-200" aria-hidden="true" />
            <div className="space-y-14">
              {workExperience.map((project, index) => (
                <InView
                  key={index}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <article className="relative pl-10">
                    <div
                      className="absolute left-0 top-[7px] w-[11px] h-[11px] rounded-full border-2 border-slate-300 bg-[#FAFAF8]"
                      aria-hidden="true"
                    />

                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 mb-1">
                      <h3 className="text-lg font-medium text-neutral-900">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-3">
                      {project.company && (
                        <span className="text-sm text-slate-600 font-medium">{project.company}</span>
                      )}
                      {project.location && (
                        <span className="text-sm text-neutral-400">&middot; {project.location}</span>
                      )}
                      <span className="text-xs text-neutral-400 sm:ml-auto">{project.year}</span>
                    </div>

                    <div className="text-sm text-neutral-600 leading-relaxed mb-4">
                      {project.description.split('\n\n').map((section, si) => {
                        const lines = section.split('\n');
                        const isRoleHeader = lines[0].includes('(') && lines[0].includes(')');

                        if (isRoleHeader) {
                          const roleInfo = lines[0];
                          const bulletPoints = lines.slice(1);
                          return (
                            <div key={si} className="mb-5 last:mb-0">
                              <p className="font-medium text-slate-700 mb-1.5">
                                {roleInfo.split(' (')[0]}
                                <span className="font-normal text-neutral-400 ml-2 text-xs">
                                  {roleInfo.match(/\((.*?)\)/)?.[1]}
                                </span>
                              </p>
                              <div className="space-y-1 text-neutral-500">
                                {bulletPoints.map((point, pi) => (
                                  <p key={pi}>{point}</p>
                                ))}
                              </div>
                            </div>
                          );
                        }
                        return (
                          <p key={si} className="mb-1">{section}</p>
                        );
                      })}
                    </div>

                    {project.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag, ti) => (
                          <span
                            key={ti}
                            className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700 transition-colors duration-200"
                    >
                      Visit Company
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M17 7h-6m6 0v6" />
                      </svg>
                    </a>
                  </article>
                </InView>
              ))}
            </div>
          </div>
        </div>

        {/* ── Projects ── */}
        <div id="projects" className="mb-24">
          <InView variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400">
                Projects
              </h2>
              <a
                href="https://romerolabs.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-slate-700 transition-colors duration-200"
              >
                More projects &rarr;
              </a>
            </div>
          </InView>
          {/* Projects divider accent */}
          <div>
            {personalProjects.map((project, index) => (
              <InView
                key={index}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <article className="group flex flex-col sm:flex-row gap-5 py-6 border-t border-neutral-200 last:border-b">
                    <div className="relative w-full sm:w-44 h-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-300 text-3xl font-light">
                          {project.title.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-baseline justify-between mb-1.5">
                        <h3 className="text-base font-medium text-neutral-900 group-hover:text-slate-600 transition-colors duration-200">
                          {project.title}
                        </h3>
                        <span className="text-xs text-neutral-400 ml-4 flex-shrink-0">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-500 leading-relaxed mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      {project.tags && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, ti) => (
                            <span
                              key={ti}
                              className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </a>
              </InView>
            ))}
          </div>
        </div>

        {/* ── Education ── */}
        <div id="education" className="mb-24">
          <InView variants={fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-emerald-600/50 mb-10">
              Education
            </h2>
          </InView>
          <div className="relative">
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-emerald-200/60" aria-hidden="true" />
            <div className="space-y-14">
              {education.map((project, index) => (
                <InView
                  key={index}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <article className="relative pl-10">
                    <div
                      className="absolute left-0 top-[7px] w-[11px] h-[11px] rounded-full border-2 border-emerald-400/50 bg-[#FAFAF8]"
                      aria-hidden="true"
                    />

                    <h3 className="text-lg font-medium text-neutral-900 mb-1">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-3">
                      {project.university && (
                        <span className="text-sm text-emerald-800/70 font-medium">{project.university}</span>
                      )}
                      {project.location && (
                        <span className="text-sm text-neutral-400">&middot; {project.location}</span>
                      )}
                      <span className="text-xs text-neutral-400 sm:ml-auto">{project.year}</span>
                    </div>

                    <div className="text-sm text-neutral-500 leading-relaxed mb-3 space-y-1">
                      {project.description.split('\n').map((line, li) => (
                        <p key={li}>{line}</p>
                      ))}
                    </div>

                    {project.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag, ti) => (
                          <span
                            key={ti}
                            className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-emerald-700/50 hover:text-emerald-700 transition-colors duration-200"
                    >
                      Visit University
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M17 7h-6m6 0v6" />
                      </svg>
                    </a>
                  </article>
                </InView>
              ))}
            </div>
          </div>
        </div>

        {/* ── Contact ── */}
        <div id="contacto" className="mb-8 py-10 border-t border-neutral-200">
          <InView variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-2">
                  Get in touch
                </h2>
                <p className="text-sm text-neutral-500">
                  Interested in working together? Let&apos;s talk.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white text-sm rounded-full hover:bg-slate-700 transition-colors duration-200"
              >
                Contact
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </InView>
        </div>

      </section>
    </div>
  );
}
