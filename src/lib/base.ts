/** BASE_URL normalizzato con slash finale (Astro 7 su GH Pages può ometterlo). */
export function siteBase(): string {
  const raw = import.meta.env.BASE_URL || "/";
  return raw.endsWith("/") ? raw : `${raw}/`;
}

export function withBase(path = ""): string {
  const base = siteBase();
  const clean = path.replace(/^\/+/, "");
  return `${base}${clean}`;
}
