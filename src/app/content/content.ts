import { Language } from "../models/language";
import { CONTENT_DE } from "./content.de";
import { CONTENT_EN } from "./content.en";
import { SiteContent } from "./content.model";

/** Dictionary of all site texts, keyed by language. */
export const CONTENT: Record<Language, SiteContent> = {
  de: CONTENT_DE,
  en: CONTENT_EN,
};
