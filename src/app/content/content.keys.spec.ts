import { CONTENT_DE } from "./content.de";
import { CONTENT_EN } from "./content.en";

/** Lists every path of a nested value, e.g. `hero.greeting` or `legalNotice.sections.0.heading`. */
function collectPaths(value: unknown, prefix = ""): string[] {
  if (typeof value !== "object" || value === null) {
    return [prefix];
  }
  return Object.entries(value).flatMap(([key, child]) =>
    collectPaths(child, prefix ? `${prefix}.${key}` : key),
  );
}

/** Lists the paths of all string values that are empty. */
function emptyStringPaths(value: unknown, prefix = ""): string[] {
  if (typeof value === "string") {
    return value.trim() === "" ? [prefix] : [];
  }
  if (typeof value !== "object" || value === null) {
    return [];
  }
  return Object.entries(value).flatMap(([key, child]) =>
    emptyStringPaths(child, prefix ? `${prefix}.${key}` : key),
  );
}

describe("content dictionaries", () => {
  it("have exactly the same keys in German and English", () => {
    expect(collectPaths(CONTENT_EN)).toEqual(collectPaths(CONTENT_DE));
  });

  it("contain no empty texts except the intentionally empty LinkedIn URL", () => {
    const allowed = ["site.linkedinUrl", "site.aboutPhotoSrc"];
    const empty = [...emptyStringPaths(CONTENT_DE), ...emptyStringPaths(CONTENT_EN)];
    expect(empty.filter((path) => !allowed.includes(path))).toEqual([]);
  });
});
