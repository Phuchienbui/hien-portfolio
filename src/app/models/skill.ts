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

export interface Skill {
  id: SkillId;
  icon: string;
}
