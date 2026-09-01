# STATUS BANDZ — website

Minimal black-on-white Next.js site with Shopify checkout (headless). Pages: Home, Shop, Verify, The System, About, Waitlist.

## Connect Shopify (headless — option 1)

The site runs fine without Shopify (buttons show "Notify me"). To go live:

1. Open a Shopify account (Basic plan is enough).
2. In Shopify admin, create your products. **Set each product's handle to match the ids in `lib/bands.js`**: `single`, `taken`, `complicated`, `millionaire`. Set prices and inventory there — the site reads them live.
3. Get a Storefront API token: Shopify admin → Settings → Apps and sales channels → Develop apps → Create an app → Configure Storefront API scopes (enable `unauthenticated_read_product_listings` and cart scopes) → Install → copy the **Storefront API access token**.
4. Copy `.env.example` to `.env.local` and fill in your store domain + token. On Vercel, add the same two variables under Project → Settings → Environment Variables.
5. Redeploy. Buy buttons now appear with live prices; clicking one opens Shopify's hosted checkout, which handles payment, tax, and shipping. Sold-out state follows your Shopify inventory automatically.


## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → Add New Project → import the repo.
3. Vercel auto-detects Next.js. Click Deploy. Done.

(Or from the terminal: `npm i -g vercel && vercel`.)

## Where to change things

- **Drop date (countdown):** `lib/bands.js` → `DROP_DATE`
- **Products / colors / prices / sold-out states:** `lib/bands.js` → `bands` and `verifiedTiers`
- **Verify codes (placeholder registry):** `lib/bands.js` → `registry`. Replace with a real database + API route when ready.
- **Waitlist:** `components/WaitlistForm.js` — wire the `submit()` TODO to your email provider (Klaviyo, Mailchimp, Resend).
- **Socials / contact email:** `components/Footer.js`

## Still placeholder (by design)

- Checkout is wired to Shopify but inactive until you add credentials (see "Connect Shopify" above).
- Verify lookups run against the hardcoded `registry` object, not a database.
- Waitlist stores nothing yet.
