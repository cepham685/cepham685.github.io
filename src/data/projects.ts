export interface Project {
  slug: string;
  title: string;
  category: string;
  year: number;
  description: string;
  coverImage: string;
  coverBackground?: string;
  coverFit?: "cover" | "contain";
  tags: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "sustainability-report",
    title: "United for Impact — 2024 Sustainability Report",
    category: "Editorial / Annual Report",
    year: 2024,
    description: "A 54-spread annual sustainability report for Crete United, designed to translate ESG performance and partner stories into a confident, human brand narrative.",
    coverImage: "/images/sustainability-report/sr-p1.jpg",
    coverBackground: "#0A1F38",
    coverFit: "contain",
    tags: ["Editorial", "Annual Report", "Print", "Digital"],
    featured: true,
  },
  {
    slug: "partner-summit",
    title: "Partner Summit Event Brand Systems",
    category: "Event Identity",
    year: 2025,
    description: "Annual corporate event identity design across two years and two locations for Crete United's Partner Summit.",
    coverImage: "/images/partner-summit/route-66-shield.png",
    coverBackground: "#0f1a2e",
    coverFit: "contain",
    tags: ["Event Identity", "Logo Design", "Print Production", "Environmental Graphics"],
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
