import { Project } from "../models/project";

/** Projects confirmed by the site owner, in display order. */
export const PROJECTS: Project[] = [
  { id: "bestellapp", name: "BestellApp", image: "", tags: [], githubUrl: "", liveUrl: "" },
  {
    id: "memory-duel",
    name: "Memory Duel",
    image: "",
    tags: ["TypeScript", "SCSS", "Vite"],
    githubUrl: "https://github.com/Phuchienbui/memory-duel",
    liveUrl: "",
  },
  {
    id: "el-pollo-loco",
    name: "El Pollo Loco",
    image: "",
    tags: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Phuchienbui/El-Pollo-Loco",
    liveUrl: "",
  },
  {
    id: "pokedex",
    name: "Pokédex",
    image: "",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Phuchienbui/pokedex",
    liveUrl: "",
  },
];
