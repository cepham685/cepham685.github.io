export interface Project {
  slug: string;
  title: string;
  category: string;
  year: number;
  description: string;
  coverImage: string;
  tags: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "explore-differently",
    title: "Explore Differently",
    category: "Campaign",
    year: 2025,
    description: "A multi-channel brand campaign repositioning a modern travel media company for Gen Z and young professionals.",
    coverImage: "/images/explore-differently.jpg",
    tags: ["Campaign", "Brand Strategy", "Art Direction", "Digital"],
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    category: "Brand Identity",
    year: 2024,
    description: "A short description of this project and the design challenge it solved.",
    coverImage: "/images/project-two.jpg",
    tags: ["Branding", "Logo", "Typography"],
    featured: true,
  },
  {
    slug: "project-three",
    title: "Project Three",
    category: "Editorial",
    year: 2024,
    description: "A short description of this project and the design challenge it solved.",
    coverImage: "/images/project-three.jpg",
    tags: ["Editorial", "Layout", "Print"],
    featured: false,
  },
];
