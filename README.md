# bastachebastino.it

Sito statico (Astro) di **Basta che bastino**.

- Domini: https://bastachebastino.it
- Deploy: GitHub Pages (Actions)

## Sviluppo

Node >= 22.

```bash
npm install
npm run dev
npm run build
```

Preview locale: di solito `http://localhost:4321/site/` (`base: "/site/"`).

### Temi grafici (esplorazione)

Token in `src/styles/themes/`. Switch **solo** con `npm run dev` (locale).  
Preprod/prod (`astro build`) usano solo il tema prescelto (`cream`).  
Dettagli: `src/styles/themes/README.md`.
