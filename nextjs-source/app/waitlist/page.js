import WaitlistForm from "../../components/WaitlistForm";

export const metadata = { title: "Founding List — STATUS BANDZ" };

export default function Waitlist() {
  return (
    <div className="container">
      <section className="section" style={{ borderTop: "none" }}>
        <p className="eyebrow">Founding list</p>
        <h2>Drop 001 opens here first.</h2>
        <WaitlistForm />
      </section>
    </div>
  );
}
