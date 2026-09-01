import BandCard from "../../components/BandCard";
import { bands, verifiedTiers } from "../../lib/bands";
import { getProductsByHandle } from "../../lib/shopify";

export const metadata = { title: "Shop — STATUS BANDZ" };

export default async function Shop() {
  const products = await getProductsByHandle(); // null until Shopify is configured

  return (
    <div className="container">
      <section className="section" style={{ borderTop: "none" }}>
        <p className="eyebrow">Drop 001 — Limited quantities</p>
        <h2>The first set</h2>
        <div className="grid">
          {bands.map((b) => (
            <BandCard band={b} product={products?.[b.id]} key={b.id} />
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Verified tiers</p>
        <h2>Proven, then issued.</h2>
        <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
          {verifiedTiers.map((b) => (
            <BandCard band={b} key={b.id} />
          ))}
        </div>
        <p className="note" style={{ marginTop: 24 }}>
          Verified tiers require third-party proof before issue. Once issued,
          the band is registered to you and publicly verifiable.
        </p>
      </section>
    </div>
  );
}
