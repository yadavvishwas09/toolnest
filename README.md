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
10. Image to 50KB — iteratively lower JPEG quality to approach a target size; dimensions are not reduced automatically.

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

## Cloudflare Pages deployment (static export)

This project is configured for a static export because all tools run in the browser and there are no server actions, API routes or database dependencies.

1. Create a GitHub repository and push this project.
2. In Cloudflare Dashboard, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository.
4. Set build command to `npm run build`.
5. Set build output directory to `out`.
6. Use Node.js 20 or newer in the build environment.
7. Deploy. Cloudflare will provide a `*.pages.dev` address.
8. Add a custom domain later if desired, then update the canonical URL in `app/layout.tsx` and `app/sitemap.ts`.

Cloudflare's Next.js support and adapter guidance can change. If you later add server-side features, move from static Pages export to Cloudflare's current Next.js/OpenNext Workers guide: https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/ .

## Before public launch

- Replace `toolnest.pages.dev` in `app/layout.tsx` and `app/sitemap.ts` with your actual canonical domain.
- Replace `hello@toolnest.example` in `app/contact/page.tsx` with an email address you control.
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
- Image-to-50KB tries quality changes only. Some images cannot reach the requested target without resizing.
- Very large files can exceed browser memory limits. Browser support and output fidelity should be tested before production use.
- The current site has ad placeholders only. No advertising code is installed.
