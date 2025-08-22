import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Experience",
  description: "A selection of work experience, personal projects and education by Ivan Romero.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
