/** Identifiers of all skills shown on the site. */
export type SkillId =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "angular"
  | "git"
  | "rest-api"
  | "scrum"
  | "continually-learning";

/** A skill with its icon; the visible name comes from the content dictionaries. */
export interface Skill {
  id: SkillId;
  /** File name (without extension) in `public/icons`. */
  icon: string;
}
