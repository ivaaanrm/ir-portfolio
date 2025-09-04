export interface Project {
  title: string;
  year: string;
  description: string;
  url: string;
  image?: string;
  tags?: string[];
  type: 'work' | 'personal' | 'education';
  company?: string;
  location?: string;
  degree?: string;
  university?: string;
}

export const projects: Project[] = [
  {
    title: "Software Engineer",
    year: "Jan 2023 - Aug 2025",
    description: "Backend Engineer (Jul 2024 - Aug 2025)\n• Led development of scalable backend systems and led a team of developers\n• Implemented production-ready solutions and mentored junior developers\n\nMachine Learning Developer (Jan 2023 - Jul 2024)\n• Developed and implemented machine learning models for satellite imagery processing\n• Collaborated with research teams to optimize AI algorithms",
    url: "https://serimag.com",
    tags: ["Backend Development", "Machine Learning", "Python", "Team Leadership"],
    type: "work",
    company: "Serimag",
    location: "Barcelona",
  },
  {
    title: "Software Developer",
    year: "Jun 2021 - Sept 2021",
    description: "• Maintained and optimized company databases using MySQL and .NET technologies\n• Developed and maintained ORM systems for efficient data management and application performance",
    url: "https://bandalux.com",
    tags: ["JavaScript", "MySQL", ".NET"],
    type: "work",
    company: "Bandalux",
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
    image: "/photos/formula-hero.JPG",
    tags: ["Computer Vision", "C++", "ROS", "Python"],
    type: "personal",
  },
  {
    title: "MSc in Advanced Telecommunications Technologies",
    year: "Sept 2024 - present",
    description: "• Major in Deep Learning for Multimedia Processing\n• Worked on Language Modeling, Speech Recognition and Computer Vision projects",
    url: "https://www.upc.edu/en",
    tags: ["Deep Learning", "Computer Vision", "Speech Recognition"],
    type: "education",
    university: "Polytechnic University of Catalonia",
    location: "Barcelona, Spain",
  },
  {
    title: "BSc in Telecommunications Engineering",
    year: "Sept 2018 - Jan 2024",
    description: "• Specialized in Multimedia Processing\n• Completed comprehensive studies in telecommunications and signal processing",
    url: "https://www.upc.edu/en",
    tags: ["Telecommunications", "Signal Processing", "Multimedia"],
    type: "education",
    university: "Polytechnic University of Catalonia",
    location: "Barcelona, Spain",
  },
];