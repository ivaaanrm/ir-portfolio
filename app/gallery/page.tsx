import { Metadata } from "next";
import DomeGallery from "../components/dome-gallery";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A 3D dome-style photo gallery.",
};

function getAllPhotos(): { src: string; alt: string }[] {
  const photosDir = path.join(process.cwd(), "public", "photos");
  const allowed = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".JPG", ".JPEG", ".PNG", ".WEBP", ".GIF"]);

  const results: { src: string; alt: string }[] = [];

  function walk(dir: string, baseUrl: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name === ".DS_Store") continue;
      const abs = path.join(dir, entry.name);
      const url = path.posix.join(baseUrl, entry.name);
      if (entry.isDirectory()) {
        walk(abs, url);
      } else {
        const ext = path.extname(entry.name);
        if (allowed.has(ext)) {
          results.push({ src: url, alt: entry.name.replace(ext, "") });
        }
      }
    }
  }

  if (fs.existsSync(photosDir)) {
    walk(photosDir, "/photos");
  }

  // Stable order: by path
  results.sort((a, b) => a.src.localeCompare(b.src));
  return results;
}

export default function GalleryPage() {
  const images = getAllPhotos();
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="title text-3xl sm:text-4xl font-semibold tracking-tight mb-3 text-[#000000] dark:text-[#FFFFFF]">
        Gallery
      </h1>
      <p className="text-neutral-600 dark:text-neutral-300 mb-8">
        Interactive dome-style gallery inspired by React Bits Dome Gallery.
      </p>
      <div style={{ width: "100%", height: "80vh" }}>
        <DomeGallery images={images} />
      </div>
    </main>
  );
}


