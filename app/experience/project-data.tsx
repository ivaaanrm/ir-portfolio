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
    title: "Freelance Full-Stack Engineer",
    year: "Sept 2025 - Jan 2026",
    description: "\n• Built a Business Intelligence platform for White Rabbit Museum (client: Rivex) with FastAPI, PostgreSQL, Redis, React/TypeScript and a LangChain-based RAG chatbot to enable natural-language exploration of visitor analytics.\n\n• Delivered an industrial maintenance platform for Engi-On, eliminating 100% of paper-based maintenance workflows by designing and deploying a Django REST backend with a React/TypeScript frontend.\n\n• Containerized and deployed both applications on AWS, improving reliability with CI/CD pipelines using GitHub Actions, Nginx reverse proxy, and Prometheus/Grafana.",
    url: "https://whiterabbit-theoffmuseum.com/",
    tags: ["FastAPI", "Django", "React", "AWS", "LangChain", "PostgreSQL"],
    type: "work",
    company: "Self-employed",
    location: "Remote",
  },
  {
    title: "Software Engineer",
    year: "Jan 2023 - Aug 2025",
    description: "Software Engineer (Feb 2024 – Aug 2025)\n• Mentored and led a team of 3 engineers on Django/FastAPI/REST API development, delivering 5+ production microservices for a major Spanish banking client.\n• Evolved Python orchestration platform using event-driven architecture to coordinate business logic across 10+ microservices (including data-intensive ML pipelines), reliably processing 100,000+ documents daily.\n• Designed and deployed a High Availability MySQL cluster with automatic failover for a critical authentication service, reducing recovery time from hours to under one minute.\n• Owned the end-to-end deployment lifecycle with weekly microservice releases on Linux using Docker, Nginx, CI/CD pipelines and automated testing with PyTest.\n\nAI Engineer Intern (Jan 2023 – Feb 2024)\n• Led the development of real-time CNN-based document classification models processing 30,000+ documents daily for a major Spanish bank, reducing manual document handling by 80%.\n• Engineered NLP and NER pipelines that increased automated invoice information extraction from 60% to 70% at 99% accuracy, saving 35 manual hours per week across workflows processing 5,000+ documents daily.\n• Audited and improved production ML models in banking workflows, maintaining misclassification rates below 1% through model evaluation, dataset refinement, and performance monitoring.",
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
    year: "Sept 2024 - Jun 2026 (expected)",
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