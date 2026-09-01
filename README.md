# Status Bandz — Shopify site

Store: **ay41nf-0t.myshopify.com**

The Shopify theme lives at the root of this repo (`layout/`, `sections/`, `templates/`, …) so it can be connected to Shopify via GitHub.

## Edit the site (easiest — no code)
Open your theme editor: **Shopify admin → Online Store → Themes → Customize**

Change text, images, sections, and colors by clicking on them. Hit **Save** when done.
If the theme is connected to GitHub, your saves sync back to this repo automatically.

## Edit the code from this computer
Edit the files in this folder, then either:

**A) Push to GitHub** (if the theme is connected to GitHub in Shopify, it updates automatically):

```bash
git add -A && git commit -m "update site" && git push
```

**B) Push straight to Shopify with the CLI:**

```bash
npx shopify theme push --store ay41nf-0t.myshopify.com
```

Live-preview while editing (auto-reloads on save):

```bash
npx shopify theme dev --store ay41nf-0t.myshopify.com
```

## Old Next.js version
The original Next.js site is kept on the `archive/original-files` branch (and in the untracked `nextjs-source/` folder on this computer).
