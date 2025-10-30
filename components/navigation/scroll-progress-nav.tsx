'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ScrollSection = {
  id: string;
  label: string;
};

type ScrollProgressNavProps = {
  sections: readonly ScrollSection[];
  onNavigate?: (sectionId: string) => void;
};

const ACCENT_CLASSES = {
  text: 'text-sky-600 dark:text-sky-400',
  dot: 'bg-sky-500',
  halo: 'shadow-[0_0_0_4px_rgba(14,165,233,0.12)] dark:shadow-[0_0_0_6px_rgba(56,189,248,0.2)]',
  highlight: 'bg-sky-500/10 dark:bg-sky-500/15',
};

const ScrollProgressNav = ({ sections, onNavigate }: ScrollProgressNavProps) => {
  const [activeSection, setActiveSection] = useState<string>(() => sections[0]?.id ?? '');

  useEffect(() => {
    if (!sections.length) {
      setActiveSection('');
      return;
    }

    if (!sections.some(section => section.id === activeSection)) {
      setActiveSection(sections[0].id);
    }
  }, [sections, activeSection]);

  useEffect(() => {
    if (!sections.length) {
      return;
    }

    let ticking = false;

    const updateActiveSection = () => {
      const viewportMiddle = window.scrollY + window.innerHeight / 2;

      let closestSectionId = sections[0]?.id ?? '';
      let smallestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const elementMiddle = rect.top + window.scrollY + rect.height / 2;
        const distance = Math.abs(viewportMiddle - elementMiddle);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestSectionId = section.id;
        }
      }

      if (closestSectionId) {
        setActiveSection(current => (current === closestSectionId ? current : closestSectionId));
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sections]);

  if (!sections.length) {
    return null;
  }

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    onNavigate?.(sectionId);
  };

  return (
    <nav
      aria-label="Progreso de la página"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:flex"
    >
      <div className="relative flex flex-col items-start">
        <span
          aria-hidden="true"
          className="absolute left-2 top-3 bottom-3 w-px bg-neutral-200/70 dark:bg-neutral-800/60"
        />
        <ul className="flex flex-col gap-5">
          {sections.map(section => {
            const isActive = section.id === activeSection;

            return (
              <li key={section.id} className="relative">
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      key="active-highlight"
                      layoutId="nav-active-highlight"
                      aria-hidden="true"
                      className={`absolute left-4 right-0 top-1/2 z-0 h-8 -translate-y-1/2 rounded-full ${ACCENT_CLASSES.highlight}`}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    />
                  )}
                </AnimatePresence>

                <button
                  type="button"
                  onClick={() => handleNavigation(section.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className="group relative flex items-center gap-4 pl-6 pr-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-neutral-500 transition-colors duration-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500/70 dark:text-neutral-500"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1/2 z-10 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-neutral-300 bg-white transition-colors duration-300 dark:border-neutral-700 dark:bg-neutral-950"
                  />
                  <span
                    className={`relative z-20 transition-colors duration-300 ${
                      isActive
                        ? ACCENT_CLASSES.text
                        : 'group-hover:text-neutral-700 dark:group-hover:text-neutral-300'
                    }`}
                  >
                    {section.label}
                  </span>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      key="active-dot"
                      layoutId="nav-active-dot"
                      aria-hidden="true"
                      className={`absolute left-[3px] top-1/2 z-30 h-2.5 w-2.5 -translate-y-1/2 rounded-full ${ACCENT_CLASSES.dot} ${ACCENT_CLASSES.halo}`}
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                    />
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default ScrollProgressNav;


