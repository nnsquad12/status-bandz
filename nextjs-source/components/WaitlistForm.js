"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit() {
    if (!email.includes("@")) return;
    // TODO: wire to your email list provider (Resend, Mailchimp, Klaviyo…)
    setDone(true);
  }

  if (done)
    return (
      <p className="note" role="status">
        You&apos;re on the Founding List. Drop 001 opens to this list first.
      </p>
    );

  return (
    <div>
      <div className="form-row">
        <input
          type="email"
          value={email}
          placeholder="Email address"
          aria-label="Email address"
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
        />
        <button className="btn solid" onClick={submit}>
          Join the list
        </button>
      </div>
      <p className="note">First drop is invite-first. The list gets it before anyone.</p>
    </div>
  );
}
