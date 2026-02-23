# SDAC Magazine (starter)

Sito statico (Astro) + pannello editoriale (Decap CMS) pensato per Netlify.

## Requisiti
- Node.js 18+ (consigliato 20)

## Avvio in locale
```bash
npm install
npm run dev
```

## Deploy su Netlify (passi rapidi)
1. Metti questo progetto su GitHub (repo nuovo).
2. Su Netlify: **New site from Git** → scegli il repo.
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Netlify → **Site settings → Identity** → Enable Identity
4. Identity → **Registration**: invite-only (consigliato)
5. Identity → **Services** → Enable **Git Gateway**
6. Deploy: apri `https://tuodominio.com/admin` e fai login.
7. Invita gli editor (Identity → Invite users).

## Dove stanno i contenuti
- News: `src/content/news`
- Anniversari: `src/content/anniversari`
- Compleanni: `src/content/compleanni`
- Immagini: `public/images/uploads`

## Ricerca
Pagina `/search` con filtro client-side su titoli e tag (dati da `/search.json`).

## Banner
Inserisci gli script/slot nel layout `src/layouts/BaseLayout.astro` o nel template articolo `src/pages/[collection]/[...slug].astro`.
