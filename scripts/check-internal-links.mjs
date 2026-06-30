import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pagesDir = path.join(root, "src", "pages");
const scanDirs = [path.join(root, "src")];

const ignoredPrefixes = [
  "#",
  "mailto:",
  "tel:",
  "http://",
  "https://",
  "//"
];

function walk(dir, extensions = null) {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...walk(fullPath, extensions));
      continue;
    }

    if (!extensions || extensions.includes(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

function normalizeRoute(route) {
  if (!route.startsWith("/")) return null;
  if (ignoredPrefixes.some((prefix) => route.startsWith(prefix))) return null;

  const [withoutQuery] = route.split("?");
  const clean = withoutQuery.split("#")[0];

  if (!clean || clean === "/") return "/";
  return clean.endsWith("/") ? clean : `${clean}/`;
}

function pageFileToRoute(filePath) {
  const relative = path.relative(pagesDir, filePath).replaceAll(path.sep, "/");
  const withoutExtension = relative.replace(/\.(astro|md|mdx)$/, "");

  if (withoutExtension === "index") return "/";
  if (withoutExtension.endsWith("/index")) {
    return `/${withoutExtension.replace(/\/index$/, "")}/`;
  }

  return `/${withoutExtension}/`;
}

function routeMatchesAvailableRoute(route, availableRoutes) {
  if (availableRoutes.has(route)) return true;

  // Treat Astro dynamic routes like /desk/issues/[slug]/ as valid for matching
  // concrete routes under the same folder.
  for (const availableRoute of availableRoutes) {
    if (!availableRoute.includes("[")) continue;

    const pattern = `^${availableRoute
      .replaceAll("/", "\\/")
      .replace(/\[[^\]]+\]/g, "[^/]+")}$`;

    if (new RegExp(pattern).test(route)) return true;
  }

  return false;
}

const pageFiles = walk(pagesDir, [".astro", ".md", ".mdx"]);
const availableRoutes = new Set(pageFiles.map(pageFileToRoute));

const sourceFiles = scanDirs.flatMap((dir) =>
  walk(dir, [".astro", ".md", ".mdx", ".ts", ".js"])
);

const hrefPattern = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|{`([^`]+)`}|{['"]([^'"]+)['"]})/g;
const missingLinks = [];

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, "utf8");
  const relativeFile = path.relative(root, file).replaceAll(path.sep, "/");
  let match;

  while ((match = hrefPattern.exec(content)) !== null) {
    const rawHref = match[1] ?? match[2] ?? match[3] ?? match[4];
    if (!rawHref) continue;
    if (rawHref.includes("${")) continue;

    const route = normalizeRoute(rawHref);
    if (!route) continue;

    if (!routeMatchesAvailableRoute(route, availableRoutes)) {
      missingLinks.push({ file: relativeFile, href: rawHref, route });
    }
  }
}

if (missingLinks.length > 0) {
  console.error("\nBroken internal links found:\n");

  for (const link of missingLinks) {
    console.error(`- ${link.file}`);
    console.error(`  href: ${link.href}`);
    console.error(`  expected route: ${link.route}\n`);
  }

  process.exit(1);
}

console.log(`Checked ${sourceFiles.length} source files.`);
console.log(`Found ${availableRoutes.size} routes.`);
console.log("No broken internal links found.");
