import Countdown from "../components/Countdown";
import WaitlistForm from "../components/WaitlistForm";
import BandCard from "../components/BandCard";
import { bands } from "../lib/bands";
import { getProductsByHandle } from "../lib/shopify";
import Link from "next/link";

export default async function Home() {
  const products = await getProductsByHandle(); // null until Shopify is configured

  return (
    <>
      <section className="hero">
        <h1 className="hero-mark">Status Bandz</h1>
        <p className="hero-line">Wear what you are.</p>
        <div className="hero-band" aria-hidden="true" />
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow">Drop 001</p>
          <Countdown />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">The first set</p>
          <div className="grid">
            {bands.map((b) => (
              <BandCard band={b} product={products?.[b.id]} key={b.id} />
            ))}
          </div>
          <p className="note" style={{ marginTop: 24 }}>
            Every piece is numbered and registered.{" "}
            <Link href="/verify" style={{ textDecoration: "underline" }}>
              Verify a band
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Founding list</p>
          <h2>Get in before the drop.</h2>
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
