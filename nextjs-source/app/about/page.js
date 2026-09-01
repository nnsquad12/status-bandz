export const metadata = { title: "About — STATUS BANDZ" };

export default function About() {
  return (
    <div className="container">
      <section className="section" style={{ borderTop: "none" }}>
        <p className="eyebrow">About</p>
        <h2>Status Bandz</h2>
        <div className="prose">
          <p>
            People have always worn their status. A ring says married. A watch
            says money. We just never had a system for the rest of it — so we
            built one.
          </p>
          <p>
            Status Bandz is a registry you can wear. Each band carries one
            meaning and one code. The color says it at a glance; the code
            proves it to anyone who checks. No knockoff can be registered,
            which means no knockoff can be real.
          </p>
          <p>
            Bands are released in limited drops, a few times a year. Some you
            buy. Some you earn. All of them are numbered, registered, and
            verifiable — for as long as they&apos;re true.
          </p>
        </div>
      </section>
    </div>
  );
}
