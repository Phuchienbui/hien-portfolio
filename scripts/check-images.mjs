import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const IMAGE_ROOT = "public";
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif", ".svg"]);
const MAX_BYTES = 500 * 1024;

/**
 * Lists all image files below a directory.
 * @param {string} directory - folder to scan recursively
 * @returns {string[]} paths of the image files
 */
function listImages(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) {
      return listImages(path);
    }
    return IMAGE_EXTENSIONS.has(extname(name).toLowerCase()) ? [path] : [];
  });
}

/**
 * Finds images larger than the size limit.
 * @param {string[]} images - image paths
 * @returns {string[]} error messages
 */
function findOversized(images) {
  return images
    .filter((path) => statSync(path).size > MAX_BYTES)
    .map((path) => `${path} is larger than ${MAX_BYTES / 1024} KB`);
}

/**
 * Finds images with identical content.
 * @param {string[]} images - image paths
 * @returns {string[]} error messages
 */
function findDuplicates(images) {
  const seen = new Map();
  const errors = [];
  for (const path of images) {
    const hash = createHash("sha256").update(readFileSync(path)).digest("hex");
    if (seen.has(hash)) {
      errors.push(`${path} is a duplicate of ${seen.get(hash)}`);
    }
    seen.set(hash, path);
  }
  return errors;
}

/** Runs all checks and sets a failing exit code on any finding. */
function main() {
  const images = listImages(IMAGE_ROOT);
  const errors = [...findOversized(images), ...findDuplicates(images)];
  errors.forEach((message) => console.error(message));
  console.log(`Checked ${images.length} images, ${errors.length} problem(s).`);
  process.exitCode = errors.length > 0 ? 1 : 0;
}

main();
