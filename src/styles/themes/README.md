# Temi grafici (esplorazione)

Ogni file definisce solo **token CSS** sotto `[data-theme="…"]`.  
La struttura HTML è condivisa (`base.css` + layout).

| id | Mood | Dove |
|----|------|------|
| `cream` | Carta calda / terracotta — **prescelto** | locale + preprod + prod |
| `folio` | Rivista scura | solo `astro dev` |
| `chalk` | Nordico freddo | solo `astro dev` |
| `signal` | Alto contrasto | solo `astro dev` |

- **Locale:** `npm run dev` → switch in barra preview; persistenza `localStorage` → `bcb-theme`.
- **Preprod / prod** (`astro build`): solo `cream` nel bundle; niente switch.

Per promuovere un altro tema: aggiornare `DEFAULT_THEME` in `src/lib/themes.ts`, importarlo da `global.css` al posto di `cream.css`, e spostare `cream` in `themes-explore.css` se serve ancora in locale.
