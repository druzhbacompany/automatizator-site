import fs from "node:fs";
import path from "node:path";

const basePath = path.join("data", "services.long.json");
const updatesPath = path.join("data", "services.flagships.json");

// Какие поля разрешено обновлять из нового файла
const FIELDS_TO_UPDATE = [
  "title",
  "shortTitle",
  "lead",
  "who",
  "benefits",
  "deliverables",
  "process",
  "integrations",
  "pricing",
  "cases",
  "faq",
  "segments",
];

function loadJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

const base = loadJson(basePath);
const updates = loadJson(updatesPath);

// Карта обновлений по slug
const updatesBySlug = new Map(
  updates.map((svc) => [svc.slug, svc])
);

const merged = base.map((svc) => {
  const upd = updatesBySlug.get(svc.slug);
  if (!upd) return svc;

  const next = { ...svc };

  for (const field of FIELDS_TO_UPDATE) {
    if (field in upd && upd[field] !== undefined) {
      next[field] = upd[field];
    }
  }

  return next;
});

// Красиво перезаписываем основной файл
fs.writeFileSync(basePath, JSON.stringify(merged, null, 2), "utf8");

console.log("✅ services.long.json обновлён на основе services.flagships.json");
