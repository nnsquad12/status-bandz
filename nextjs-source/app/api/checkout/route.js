import { NextResponse } from "next/server";
import { createCheckout, shopifyConfigured } from "../../../lib/shopify";

export async function POST(request) {
  if (!shopifyConfigured) {
    return NextResponse.json(
      { error: "Store not configured yet." },
      { status: 503 }
    );
  }
  const { variantId } = await request.json();
  if (!variantId) {
    return NextResponse.json({ error: "Missing variantId." }, { status: 400 });
  }
  const url = await createCheckout(variantId);
  if (!url) {
    return NextResponse.json(
      { error: "Could not start checkout. Try again." },
      { status: 502 }
    );
  }
  return NextResponse.json({ url });
}
