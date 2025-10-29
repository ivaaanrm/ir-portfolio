import { Metadata } from "next";
import DomeGallery from "../components/dome-gallery";
import NoScroll from "./no-scroll";
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
    <main className="mx-auto max-w-6xl px-0 sm:px-0 py-0 sm:py-0">
      <NoScroll />
      <div
        className="gallery-page w-screen max-w-none relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] -mt-32 -mb-0"
        style={{ height: "100vh", ["--viewer-pad" as any]: "16px", background: "transparent" }}
      >
        <DomeGallery images={images} grayscale={false} overlayBlurColor="transparent" />
      </div>
    </main>
  );
}


