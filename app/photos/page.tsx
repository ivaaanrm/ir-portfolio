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
    src: "/photos/gallery/DJI_0105.jpg",
    alt: "Aerial Photography",
  },
  {
    src: "/photos/gallery/DJI_0114-Mejorado-1.jpg",
    alt: "Aerial Photography",
  },
  {
    src: "/photos/gallery/DJI_0477-1.jpg",
    alt: "Aerial Photography",
  },
  {
    src: "/photos/gallery/DJI_0539-Editar-1.jpg",
    alt: "Aerial Photography",
  },
  {
    src: "/photos/gallery/DJI_0653-1.jpg",
    alt: "Aerial Photography",
  },
  {
    src: "/photos/gallery/DJI_0870-Editar.jpg",
    alt: "Aerial View",
  },
  {
    src: "/photos/gallery/DSC_0482.png",
    alt: "Landscape Photography",
  },
  {
    src: "/photos/gallery/DSC_1926-Editar-1.jpg",
    alt: "Photography",
  },
  {
    src: "/photos/gallery/DSC_1833.jpg",
    alt: "Photography",
  },
  {
    src: "/photos/gallery/DSC_2919.jpg",
    alt: "Photography",
  },
  {
    src: "/photos/gallery/DSC_4141-Editar-1.jpg",
    alt: "Photography",
  },
  {
    src: "/photos/gallery/DSC_4282-Mejorado-NR-Editar.jpg",
    alt: "Photography",
  },
  {
    src: "/photos/gallery/DSC_5381-1-2.jpg",
    alt: "Photography",
  },
  {
    src: "/photos/gallery/cambre_daze.jpg",
    alt: "Cambre Daze",
  },
  {
    src: "/photos/gallery/kyrgyz-hero.jpg",
    alt: "Kyrgyzstan Mountain Landscape",
  },
  {
    src: "/photos/gallery/namib-contact.jpg",
    alt: "Namib Desert Contact",
  },
  {
    src: "/photos/gallery/namib-hero.jpg",
    alt: "Namib Desert Vista",
  },
  {
    src: "/photos/gallery/namib1.jpg",
    alt: "Namib Desert Dunes",
  },
  {
    src: "/photos/gallery/oman-hero.jpg",
    alt: "Oman Rocky Terrain",
  },
]);

export default function Photos() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-2 text-neutral-600">
          <Images className="h-4 w-4" />
          Photography Gallery
        </h2>
        <p className="text-sm text-neutral-600">
          A collection of travel and landscape photography from around the world
        </p>
      </div>

      <MasonryGallery
        images={galleryImages}
        columns={{ default: 4, mobile: 2, tablet: 3 }}
      />
    </section>
  );
}