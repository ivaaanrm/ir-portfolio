/**
 * Generates a simple blur placeholder data URL
 * For production, you'd want to generate these at build time
 */
export function getBlurDataURL(color: string = "#e5e5e5"): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
      <filter id="b" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation="1" />
      </filter>
      <rect width="8" height="8" fill="${color}" filter="url(#b)" />
    </svg>
  `;

  const base64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Extracts dominant color from image (simplified version)
 * In production, you'd use a library like sharp or node-vibrant
 */
export function getDominantColor(imagePath: string): string {
  // Map common image paths to their dominant colors
  const colorMap: Record<string, string> = {
    "/photos/DSC_0482.png": "#8b7355",
    "/photos/namib1.jpg": "#d4a574",
    "/photos/photo1.jpg": "#b8956a",
    "/photos/photo2.jpg": "#7a8c9e",
    "/photos/photo3.jpg": "#9ba3b4",
    "/photos/photo4.jpg": "#6b7a8c",
    "/photos/photo5.jpg": "#e8d7c3",
    "/photos/photo6.jpg": "#a89e8e",
    "/photos/kyrgyz-hero.jpg": "#7a9eb5",
    "/photos/namib-hero.jpg": "#d4956a",
    "/photos/oman-hero.jpg": "#c4a57a",
    "/photos/pamir-highway-hero.jpg": "#8a9eb5",
    "/photos/formula-hero.JPG": "#2a3a4a",
    "/photos/ai4eo-hero.png": "#4a5a6a",
  };

  return colorMap[imagePath] || "#e5e5e5";
}

/**
 * Prepares gallery images with blur placeholders
 */
export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export function prepareGalleryImages(
  images: Array<{ src: string; alt: string }>
): GalleryImage[] {
  return images.map((image) => ({
    ...image,
    blurDataURL: getBlurDataURL(getDominantColor(image.src)),
  }));
}

