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
    description: "Software Engineer (Feb 2024 – Aug 2025)\n• Mentored and led a team of 3 engineers on Django/REST API development, delivering 5+ production microservices for a major Spanish banking client.\n• Resolved critical OAuth2.0 outages by implementing MySQL InnoDB Cluster and load balancing across dual environments; reduced recovery time from hours to <1 minute.\n• Owned the end-to-end deployment lifecycle with weekly microservice releases on Linux using Docker, Nginx, CI/CD pipelines, automated testing with PyTest, and production monitoring.\n• Maintained core Python orchestration platform coordinating business logic across 10 microservices, optimizing architecture from document-passing to DB reference IDs, reducing API latency for 100,000+ daily documents.\n\nAI Developer Intern (Jan 2023 – Feb 2024)\n• Led end-to-end development of real-time TensorFlow classification model (CNNs) for ING; managed Linux deployment handling 30,000+ daily documents across 50+ categories, reducing manual labor by 80%.\n• Engineered NLP/NER pipelines that increased invoice information extraction automation from 60% to 70% at 99% accuracy, saving 35 manual hours weekly across 5,000+ daily documents.",
    url: "https://serimag.com",
    tags: ["Backend Development", "Machine Learning", "Python", "Team Leadership"],
    type: "work",
    company: "Serimag",
    location: "Barcelona",
  },
  {
    title: "Full Stack Developer",
    year: "Jun 2021 - Sept 2021",
    description: "• Implemented backend features using .NET and enhanced user interfaces through JavaScript, HTML and CSS for internal web applications, improving usability and performance.",
    url: "https://bandalux.com",
    tags: ["JavaScript", "HTML/CSS", ".NET"],
    type: "work",
    company: "Bandalux",
    location: "Barcelona",
  },
  {
    title: "AI for Earth Observation",
    year: "2025",
    description: "MSc project on applying AI to satellite imagery.",
    url: "https://github.com/ivaaanrm",
    image: "/photos/projects/ai4eo-hero.png",
    tags: ["AI", "Machine Learning", "Satellite Imagery", "Python"],
    type: "personal",
  },
  {
    title: "BCNeMotorsport Autonomous Vehicle",
    year: "2021-2022",
    description:
      "Developed computer vision systems for a Formula Student race car.",
    url: "https://bcnemotorsport.upc.edu/",
    image: "/photos/projects/formula-hero.JPG",
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