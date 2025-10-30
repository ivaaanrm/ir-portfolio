import React from "react";
import type { Metadata } from "next";
import { MasonryGallery } from "app/components/masonry-gallery";
import { prepareGalleryImages } from "app/lib/image-utils";
import { Images } from "lucide-react";

export const metadata: Metadata = {
  title: "Photography",
  description: "Photography collection by Ivan Romero - A curated gallery of travel and landscape photography",
};

const galleryImages = prepareGalleryImages([
  {
    src: "/photos/DSC_0482.png",
    alt: "Oman Desert Landscape",
  },
  {
    src: "/photos/namib1.jpg",
    alt: "Namib Desert Dunes",
  },
  {
    src: "/photos/kyrgyz-hero.jpg",
    alt: "Kyrgyzstan Mountain Landscape",
  },
  {
    src: "/photos/oman-hero.jpg",
    alt: "Oman Rocky Terrain",
  },
  {
    src: "/photos/pamir-highway-hero.jpg",
    alt: "Pamir Highway Adventure",
  },
  {
    src: "/photos/namib-hero.jpg",
    alt: "Namib Desert Vista",
  },
  {
    src: "/photos/photo1.jpg",
    alt: "Ancient Roman Columns",
  },
  {
    src: "/photos/photo2.jpg",
    alt: "Big Ben Clock Tower",
  },
  {
    src: "/photos/photo3.jpg",
    alt: "Sacré-Cœur Basilica",
  },
  {
    src: "/photos/photo4.jpg",
    alt: "Eiffel Tower at Dusk",
  },
  {
    src: "/photos/photo5.jpg",
    alt: "Taj Mahal Monument",
  },
  {
    src: "/photos/photo6.jpg",
    alt: "Ancient Roman Colosseum",
  },
  {
    src: "/photos/formula-hero.JPG",
    alt: "Formula Racing",
  },
  {
    src: "/photos/ai4eo-hero.png",
    alt: "AI for Earth Observation",
  },
]);

export default function Photos() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-2 text-neutral-600 dark:text-neutral-400">
          <Images className="h-4 w-4" />
          Photography Gallery
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          A collection of travel and landscape photography from around the world
        </p>
      </div>

      <MasonryGallery
        images={galleryImages}
        columns={{ default: 4, mobile: 1, tablet: 2 }}
      />
    </section>
  );
}