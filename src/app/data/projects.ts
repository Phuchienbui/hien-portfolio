import { Project } from "../models/project";

export const PROJECTS: Project[] = [
  {
    id: "el-pollo-loco",
    name: "El Pollo Loco",
    image: "images/projects/el-pollo-loco.webp",
    tags: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Phuchienbui/El-Pollo-Loco",
    liveUrl: "https://phuchienbui.developerakademie.net/El%20pollo%20loco/html/index.html",
    comingSoon: false,
  },
  {
    id: "join",
    name: "Join",
    image: "images/projects/join.webp",
    tags: ["Angular", "TypeScript", "HTML", "CSS", "Firebase"],
    githubUrl: "",
    liveUrl: "",
    comingSoon: true,
  },
  {
    id: "dabubble",
    name: "DABubble",
    image: "images/projects/dabubble.webp",
    tags: ["Angular", "TypeScript", "Firebase"],
    githubUrl: "",
    liveUrl: "",
    comingSoon: false,
  },
  {
    id: "pokedex",
    name: "Pokédex",
    image: "images/projects/pokedex.webp",
    tags: ["HTML", "CSS", "JavaScript", "REST-API"],
    githubUrl: "https://github.com/Phuchienbui/pokedex",
    liveUrl: "",
    comingSoon: false,
  },
];
