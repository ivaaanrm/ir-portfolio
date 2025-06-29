export interface Project {
  title: string;
  year: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "AI for Earth Observation",
    year: "2025",
    description: "MSc project on applying AI to satellite imagery.",
    url: "https://github.com/ivaaanrm",
  },
  {
    title: "BCNeMotorsport Autonomous Vehicle",
    year: "2021-2022",
    description:
      "Developed computer vision systems for a Formula Student race car.",
    url: "https://www.bcemotorsport.es/",
  },
];