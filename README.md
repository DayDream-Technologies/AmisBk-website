# Amis BK LLC website

One-page marketing site for Amis BK LLC: flowers, gifts, Afro-centric catering, and an international marketplace serving West Michigan.

The live page is `index.html` at the repository root.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx --yes serve .
```

## GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch `main` and folder `/ (root)`.
5. Save. The site will be available at `https://<your-username>.github.io/AmisBk-website/`.

Use relative paths only so assets load correctly on the project Pages URL.

## After the public URL is known

Add these to `index.html` in the `<head>` (replace with the real URL):

```html
<link rel="canonical" href="https://YOUR-USERNAME.github.io/AmisBk-website/">
<meta property="og:url" content="https://YOUR-USERNAME.github.io/AmisBk-website/">
```

Then add a `Sitemap:` line to `robots.txt` pointing at a sitemap that uses the same absolute URL.

## Images

Public site files live in `images/` with clear names:

- `logo.svg`, `favicon.svg` — logo placeholders
- `flowers.jpg`, `story.jpg` — rose photos
- `catering.png`, `buffet.png`, `samosas.png`, `grilled-fish.png` — branded food photos
- `marketplace.svg`, `culture.svg` — remaining placeholders
- `source/` — original uploads, not used on the live page

Replace `logo.svg` when the rose logo is ready. Update the phone number in `index.html` when it is available.
