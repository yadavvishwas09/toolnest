# ToolNest — PDF & Image Utilities

A Next.js 15 App Router project with 10 client-side PDF and image tools. The interface is responsive and designed in a clean white/blue style. Files are processed locally in the visitor's browser; no ToolNest upload API or database is used.

## Included tools

1. Merge PDF — select multiple PDFs and combine in selection order.
2. Split PDF — extract a page range.
3. PDF to JPG — render each page and download individual JPGs (loads PDF.js worker from cdnjs).
4. JPG to PDF — combine JPG/PNG/WebP images into a PDF.
5. Rotate PDF — rotate every page 90°, 180° or 270° clockwise.
6. Delete PDF Pages — remove comma-separated page numbers.
7. Compress Image — encode a smaller JPG at a selected quality.
8. Resize Image — resize to fit within specified dimensions, optionally preserving aspect ratio.
9. Convert Image — convert to JPG, PNG or WebP.
10. Image to 50KB — lower JPEG quality and, if needed, reduce dimensions to approach a target size.

## Requirements

- Node.js 20.9 or newer recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Cloudflare Workers deployment (static assets)

This project uses Next.js static export (`output: 'export'`) and Wrangler serves the generated `out` directory as static assets. It is deployed as a Cloudflare Worker, not Cloudflare Pages.

1. Push the project to the connected GitHub repository.
2. In Cloudflare, open the `toolnest` Worker project connected to GitHub.
3. Build command: `npm run build`.
4. Deploy command: `npx wrangler deploy`.
5. Root directory: `/` (the folder containing `package.json` and `wrangler.jsonc`).
6. Use Node.js 20.9 or newer for the build environment.

The canonical public address currently configured in metadata, `robots.txt`, and `sitemap.xml` is `https://toolnest.yadavvishwas09.workers.dev`. If the public address changes, update all three places together.

## Before public launch

- The contact page currently uses `yadavvishwas04@gmail.com`. Change it if you later choose a dedicated business email.
- Keep the canonical address consistent in `app/layout.tsx`, `public/robots.txt`, and `public/sitemap.xml`.
- Review and adapt the starter Privacy Policy and Terms for your actual hosting, analytics, ad network, consent setup and target markets.
- Add a real favicon, brand assets and social preview image.
- Verify every tool with representative files and on mobile browsers.
- For PDF-to-JPG, the PDF.js worker is fetched from cdnjs; self-host it if you want to avoid that third-party request.
- Monetag approval and support for your chosen domain/hosting are not guaranteed. Confirm eligibility before placing ads.
- Keep ad placements away from upload, processing and download controls. Do not encourage ad clicks.

## Notes / limitations

- PDF operations use `pdf-lib` in the browser. Password-protected/encrypted PDFs may fail to load.
- PDF-to-JPG uses PDF.js and downloads each rendered page separately; it does not bundle a ZIP.
- Image compression uses canvas JPEG encoding. PNG transparency is flattened to white when exporting JPEG.
- Image-to-50KB lowers JPEG quality and, when needed, reduces dimensions to try to reach the requested target. Very detailed images may still remain above the target.
- Very large files can exceed browser memory limits. Browser support and output fidelity should be tested before production use.
- The current site has ad placeholders only. No advertising code is installed.
