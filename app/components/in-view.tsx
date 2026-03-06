"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface InViewProps {
  children: React.ReactNode;
  variants?: Variants;
  transition?: any;
  viewOptions?: {
    margin?: string;
    once?: boolean;
    amount?: number | "some" | "all";
  };
  className?: string;
}

export function InView({
  children,
  variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  transition = { duration: 0.4, ease: 'easeOut' },
  viewOptions = { margin: '0px 0px -100px 0px' },
  className = "",
}: InViewProps) {
  const ref = useRef(null);
  
  const isInView = useInView(ref, {
    once: viewOptions.once ?? true,
    amount: viewOptions.amount || 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
