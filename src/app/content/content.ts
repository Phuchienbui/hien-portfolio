import { Language } from "../models/language";
import { CONTENT_DE } from "./content.de";
import { CONTENT_EN } from "./content.en";
import { SiteContent } from "./content.model";

export const CONTENT: Record<Language, SiteContent> = {
  de: CONTENT_DE,
  en: CONTENT_EN,
};
