export type ProjectId = "el-pollo-loco" | "join" | "dabubble" | "pokedex";

export interface Project {
  id: ProjectId;
  name: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}
