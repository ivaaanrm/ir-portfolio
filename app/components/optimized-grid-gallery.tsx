"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

interface OptimizedGridGalleryProps {
  images: GalleryImage[];
  columns?: number;
  gap?: number;
}

export const OptimizedGridGallery: React.FC<OptimizedGridGalleryProps> = ({
  images,
  columns = 4,
  gap = 4,
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Setup Intersection Observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setLoadedImages((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        rootMargin: "100px",
        threshold: 0.01,
      }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  // Observe image elements
  useEffect(() => {
    const observer = observerRef.current;
    if (!observer) return;

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [images]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (e.key) {
        case "Escape":
          setSelectedImage(null);
          break;
        case "ArrowRight":
          setSelectedImage((prev) =>
            prev !== null ? (prev + 1) % images.length : null
          );
          break;
        case "ArrowLeft":
          setSelectedImage((prev) =>
            prev !== null ? (prev - 1 + images.length) % images.length : null
          );
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, images.length]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // Navigation handlers
  const handlePrevious = useCallback(() => {
    setSelectedImage((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedImage((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
  }, [images.length]);

  // Handle swipe gestures
  const handleDragEnd = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const swipeThreshold = 50;
      const swipeVelocityThreshold = 300;

      if (
        info.offset.x > swipeThreshold ||
        info.velocity.x > swipeVelocityThreshold
      ) {
        handlePrevious();
      } else if (
        info.offset.x < -swipeThreshold ||
        info.velocity.x < -swipeVelocityThreshold
      ) {
        handleNext();
      }
    },
    [handlePrevious, handleNext]
  );

  return (
    <>
      {/* Grid */}
      <div
        className="grid auto-rows-fr"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${100 / columns}%, 1fr))`,
          gap: `${gap * 0.25}rem`,
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            data-index={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.03,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="relative aspect-square overflow-hidden rounded-lg bg-neutral-200 dark:bg-neutral-800 cursor-pointer group active:scale-[0.98] transition-transform duration-200"
            onClick={() => setSelectedImage(index)}
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            {/* Placeholder with shimmer */}
            {!loadedImages.has(index) && (
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800">
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin text-neutral-400 dark:text-neutral-600" />
                </div>
              </div>
            )}

            {/* Image */}
            {loadedImages.has(index) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={`(max-width: 768px) 50vw, ${100 / columns}vw`}
                  className="object-cover transition-all duration-300 ease-out md:group-hover:scale-105 select-none"
                  placeholder={image.blurDataURL ? "blur" : "empty"}
                  blurDataURL={image.blurDataURL}
                  loading="lazy"
                  draggable={false}
                />

                {/* Subtle gradient overlay on hover - Desktop only */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredImage === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent hidden md:block"
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 bg-white dark:bg-[#111010] touch-none"
            style={{ 
              minHeight: '100dvh',
              height: '100%'
            }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1 }}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 active:bg-neutral-300 dark:active:bg-neutral-700 md:hover:bg-neutral-300 md:dark:hover:bg-neutral-700 transition-colors touch-manipulation"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-neutral-900 dark:text-neutral-100" />
            </motion.button>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.1 }}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 active:bg-neutral-300 dark:active:bg-neutral-700 md:hover:bg-neutral-300 md:dark:hover:bg-neutral-700 transition-colors touch-manipulation"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-neutral-900 dark:text-neutral-100" />
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: 0.1 }}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 active:bg-neutral-300 dark:active:bg-neutral-700 md:hover:bg-neutral-300 md:dark:hover:bg-neutral-700 transition-colors touch-manipulation"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-neutral-900 dark:text-neutral-100" />
                </motion.button>
              </>
            )}

            {/* Image info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.15 }}
              className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 max-w-[90vw]"
            >
              <div className="flex items-center gap-2 md:gap-4 text-neutral-900 dark:text-neutral-100">
                <p className="text-xs md:text-sm font-medium tabular-nums">
                  {selectedImage + 1} / {images.length}
                </p>
                <span className="w-px h-3 md:h-4 bg-neutral-400 dark:bg-neutral-600 hidden md:block" />
                <p className="text-xs md:text-sm max-w-[200px] md:max-w-md truncate hidden md:block">
                  {images[selectedImage].alt}
                </p>
              </div>
            </motion.div>

            {/* Main image with swipe support */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="fixed inset-0 cursor-grab active:cursor-grabbing"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                sizes="100vw"
                className="object-contain select-none pointer-events-none"
                priority
                draggable={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

