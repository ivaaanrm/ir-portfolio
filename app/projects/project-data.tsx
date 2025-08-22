export interface Project {
  title: string;
  year: string;
  description: string;
  url: string;
  image?: string;
  tags?: string[];
  type: 'work' | 'personal';
  company?: string;
  location?: string;
}

export const projects: Project[] = [
  {
    title: "Software Engineer",
    year: "2022-2025",
    description: "• Led development of scalable backend systems and implemented machine learning solutions for satellite imagery processing\n• Collaborated with cross-functional teams to deliver high-quality software solutions and mentored junior developers",
    url: "https://serimag.com",
    image: "/photos/ai4eo-hero.png",
    tags: ["Backend Development", "Machine Learning", "Python"],
    type: "work",
    company: "Serimag",
    location: "Barcelona",
  },
  {
    title: "AI for Earth Observation",
    year: "2025",
    description: "MSc project on applying AI to satellite imagery.",
    url: "https://github.com/ivaaanrm",
    image: "/photos/ai4eo-hero.png",
    tags: ["AI", "Machine Learning", "Satellite Imagery", "Python"],
    type: "personal",
  },
  {
    title: "BCNeMotorsport Autonomous Vehicle",
    year: "2021-2022",
    description:
      "Developed computer vision systems for a Formula Student race car.",
    url: "https://bcnemotorsport.upc.edu/",
    image: "/photos/ai4eo-hero.png",
    tags: ["Computer Vision", "C++", "ROS", "Python"],
    type: "personal",
  },
];