"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface TextLoopProps {
  className?: string;
  children: React.ReactNode[];
  interval?: number;
}

export function TextLoop({ className = "", children, interval = 2500 }: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, interval);

    return () => clearInterval(timer);
  }, [children.length, interval]);

  return (
    <div className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

interface TextLoopBasicProps {
  className?: string;
}

export function TextLoopBasic({ className = "" }: TextLoopBasicProps) {
  return (
    <TextLoop className={`font-mono text-sm ${className}`}>
      <span>Ingeniero de Software</span>
      <span>AI/ML Entusista</span>
    </TextLoop>
  );
}
