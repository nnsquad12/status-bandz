"use client";

import { useState } from "react";

export default function BandCard({ band, product }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  // Live Shopify data wins over local placeholder data when present.
  const price = product?.price ?? band.price;
  const soldout = product ? !product.available : band.stock === "soldout";
  const application = band.stock === "application";
  const buyable = Boolean(product) && !soldout && !application;

  async function buy() {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId: product.variantId }),
      });
      const json = await res.json();
      if (json.url) {
        window.location.href = json.url; // Shopify hosted checkout
      } else {
        setError(json.error || "Could not start checkout.");
        setBusy(false);
      }
    } catch {
      setError("Could not start checkout.");
      setBusy(false);
    }
  }

  return (
    <article className="card fade">
      <div
        className="swatch"
        style={{
          background: band.color,
          border: band.border ? "1px solid rgba(0,0,0,0.25)" : "none",
        }}
        aria-hidden="true"
      />
      <h3 className="name">{band.name}</h3>
      <p className="meaning">{band.meaning}</p>
      <div className="row">
        <span className="price">
          {application ? "By application" : price ? `$${price}` : ""}
        </span>
        {soldout ? (
          <span className="soldout">Sold out</span>
        ) : application ? (
          <button className="btn">Apply</button>
        ) : buyable ? (
          <button className="btn solid" onClick={buy} disabled={busy}>
            {busy ? "Opening…" : "Buy"}
          </button>
        ) : (
          <button className="btn">Notify me</button>
        )}
      </div>
      {error && (
        <p className="note" role="alert">
          {error}
        </p>
      )}
    </article>
  );
}
