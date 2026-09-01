// Shopify Storefront API client.
// Works in two modes:
//  - Not configured (no env vars): site runs exactly as before, buttons show "Notify me".
//  - Configured: products, prices, and stock come from Shopify; Buy redirects to Shopify checkout.
//
// Setup (see README):
//  SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
//  SHOPIFY_STOREFRONT_ACCESS_TOKEN=xxxx

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export const shopifyConfigured = Boolean(domain && token);

export async function shopifyFetch(query, variables = {}) {
  if (!shopifyConfigured) return null;
  try {
    const res = await fetch(`https://${domain}/api/2024-07/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({ query, variables }),
      // Products change on drops; don't cache stale stock for long.
      next: { revalidate: 60 },
    });
    const json = await res.json();
    if (json.errors) {
      console.error("Shopify errors:", json.errors);
      return null;
    }
    return json.data;
  } catch (err) {
    console.error("Shopify fetch failed:", err);
    return null;
  }
}

// Fetches products and returns a map keyed by product handle.
// In Shopify admin, give each product a handle matching lib/bands.js ids:
// "single", "taken", "complicated", "millionaire".
export async function getProductsByHandle() {
  const data = await shopifyFetch(`
    query Products {
      products(first: 50) {
        edges {
          node {
            handle
            title
            availableForSale
            variants(first: 1) {
              edges {
                node {
                  id
                  availableForSale
                  price { amount currencyCode }
                }
              }
            }
          }
        }
      }
    }
  `);
  if (!data) return null;

  const map = {};
  for (const { node } of data.products.edges) {
    const variant = node.variants.edges[0]?.node;
    if (!variant) continue;
    map[node.handle] = {
      variantId: variant.id,
      available: node.availableForSale && variant.availableForSale,
      price: Math.round(parseFloat(variant.price.amount)),
      currency: variant.price.currencyCode,
    };
  }
  return map;
}

// Creates a cart with a single line and returns the hosted checkout URL.
export async function createCheckout(variantId, quantity = 1) {
  const data = await shopifyFetch(
    `
    mutation CartCreate($lines: [CartLineInput!]!) {
      cartCreate(input: { lines: $lines }) {
        cart { checkoutUrl }
        userErrors { message }
      }
    }
  `,
    { lines: [{ merchandiseId: variantId, quantity }] }
  );
  const err = data?.cartCreate?.userErrors?.[0]?.message;
  if (err) {
    console.error("Shopify cart error:", err);
    return null;
  }
  return data?.cartCreate?.cart?.checkoutUrl ?? null;
}
