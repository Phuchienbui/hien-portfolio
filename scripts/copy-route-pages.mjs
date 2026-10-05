import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BUILD_DIR = "dist/hien-portfolio/browser";
const ROUTES = ["legal-notice", "privacy-policy"];

if (!existsSync(join(BUILD_DIR, "index.html"))) {
  console.error(`${BUILD_DIR}/index.html not found. Run the build first.`);
  process.exit(1);
}

for (const route of ROUTES) {
  mkdirSync(join(BUILD_DIR, route), { recursive: true });
  cpSync(join(BUILD_DIR, "index.html"), join(BUILD_DIR, route, "index.html"));
  console.log(`Created ${route}/index.html`);
}
