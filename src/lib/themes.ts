export const THEMES = [
  { id: "cream", label: "Cream — carta calda (attuale)" },
  { id: "folio", label: "Folio — rivista scura" },
  { id: "chalk", label: "Chalk — nordico freddo" },
  { id: "signal", label: "Signal — alto contrasto" },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

export const DEFAULT_THEME: ThemeId = "cream";
export const THEME_STORAGE_KEY = "bcb-theme";
