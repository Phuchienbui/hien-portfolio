/** Identifiers of the projects shown in the portfolio. */
export type ProjectId = "el-pollo-loco" | "join" | "dabubble" | "pokedex";

/** A portfolio project; its description comes from the content dictionaries. */
export interface Project {
  id: ProjectId;
  name: string;
  /** Preview image path in `public/`; empty until the image is delivered. */
  image: string;
  /** Technologies as shown on the card; empty if not confirmed yet. */
  tags: string[];
  /** Repository URL; empty for private repositories (no button is rendered). */
  githubUrl: string;
  /** URL of the running app; empty until it is deployed (no button is rendered). */
  liveUrl: string;
}
