import { Project } from "../models/project";

/** Projects chosen by the site owner, in display order (2 x 2 grid of the design). */
export const PROJECTS: Project[] = [
  {
    id: "el-pollo-loco",
    name: "El Pollo Loco",
    image: "images/projects/el-pollo-loco.png",
    tags: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Phuchienbui/El-Pollo-Loco",
    liveUrl: "",
  },
  {
    id: "join",
    name: "Join",
    image: "images/projects/join.png",
    tags: ["Angular", "TypeScript", "HTML", "CSS", "Firebase"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "dabubble",
    name: "DABubble",
    image: "images/projects/dabubble.png",
    tags: ["Angular", "TypeScript", "Firebase"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "pokedex",
    name: "Pokédex",
    image: "images/projects/pokedex.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Phuchienbui/pokedex",
    liveUrl: "",
  },
];
