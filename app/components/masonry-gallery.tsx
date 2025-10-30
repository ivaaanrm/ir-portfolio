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

interface MasonryGalleryProps {
  images: GalleryImage[];
  columns?: {
    default: number;
    mobile: number;
    tablet: number;
  };
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  images,
  columns = { default: 4, mobile: 1, tablet: 2 },
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize Intersection Observer for lazy loading
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
        rootMargin: "50px",
        threshold: 0.01,
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Observe image elements
  useEffect(() => {
    const observer = observerRef.current;
    if (!observer) return;

    imageRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [images]);

  // Handle initial loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowRight") {
        setSelectedImage((prev) =>
          prev !== null ? (prev + 1) % images.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedImage((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : null
        );
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
      {/* Loading Overlay */}
      <AnimatePresence>
        {isInitialLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#111010] pointer-events-none"
          >
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-8 h-8 animate-spin text-neutral-600 dark:text-neutral-400" />
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Loading gallery...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 lg:gap-6 space-y-3 md:space-y-4 lg:space-y-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            data-index={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative break-inside-avoid mb-4 md:mb-6"
          >
            <div
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md md:hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
              onClick={() => setSelectedImage(index)}
            >
              {/* Aspect Ratio Container */}
              <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                {/* Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900">
                  {!loadedImages.has(index) && (
                    <div className="absolute inset-0 animate-pulse" />
                  )}
                </div>

                {/* Image */}
                {loadedImages.has(index) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-all duration-300 ease-out md:group-hover:scale-105 active:scale-95"
                      placeholder={image.blurDataURL ? "blur" : "empty"}
                      blurDataURL={image.blurDataURL}
                    />

                    {/* Subtle Hover Overlay - Desktop only */}
                    <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/10 transition-all duration-300" />
                  </motion.div>
                )}

                {/* Loading shimmer effect */}
                {!loadedImages.has(index) && (
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent" />
                  </div>
                )}
              </div>
            </div>
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
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1 }}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 active:bg-neutral-300 dark:active:bg-neutral-700 md:hover:bg-neutral-300 md:dark:hover:bg-neutral-700 transition-colors touch-manipulation"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-neutral-900 dark:text-neutral-100" />
            </motion.button>

            {/* Navigation Buttons */}
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
                  aria-label="Previous"
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
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-neutral-900 dark:text-neutral-100" />
                </motion.button>
              </>
            )}

            {/* Image Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.15 }}
              className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"
            >
              <p className="text-xs md:text-sm text-neutral-900 dark:text-neutral-100 font-medium tabular-nums">
                {selectedImage + 1} / {images.length}
              </p>
            </motion.div>

            {/* Main Image with Swipe Support */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
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

      {/* Shimmer Animation */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </>
  );
};

