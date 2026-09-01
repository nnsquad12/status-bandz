import { bands, verifiedTiers } from "../../lib/bands";

export const metadata = { title: "The System — STATUS BANDZ" };

export default function System() {
  const all = [...bands, ...verifiedTiers];
  return (
    <div className="container">
      <section className="section" style={{ borderTop: "none" }}>
        <p className="eyebrow">The system</p>
        <h2>One color. One meaning.</h2>
        <div className="legend">
          {all.map((b) => (
            <div className="legend-row" key={b.id}>
              <div
                className="swatch"
                style={{
                  background: b.color,
                  border: b.border ? "1px solid rgba(0,0,0,0.25)" : "none",
                }}
                aria-hidden="true"
              />
              <div className="name">{b.name}</div>
              <div className="desc">{b.meaning}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Verified tiers</p>
        <h2>How proof works.</h2>
        <div className="prose">
          <p>
            Anyone can buy a color. Nobody can buy a verified tier. Verified
            bands are issued only after proof — reviewed by an independent
            third party, never self-reported.
          </p>
          <p>
            Every issued band carries a unique code engraved on the piece.
            Enter it on the Verify page and the registry returns the tier, the
            issue date, and the registered owner — or nothing at all.
          </p>
          <p>
            Registration is revocable. A band that no longer meets its tier is
            removed from the registry. The system only works if it never lies.
          </p>
        </div>
      </section>
    </div>
  );
}
