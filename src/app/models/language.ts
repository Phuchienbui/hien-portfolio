/** Languages the site is available in. */
export type Language = "de" | "en";

/** All supported languages in display order. */
export const LANGUAGES: readonly Language[] = ["de", "en"];

/** Language shown on the first visit. */
export const DEFAULT_LANGUAGE: Language = "de";
