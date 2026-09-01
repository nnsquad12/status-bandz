"use client";

import { useState } from "react";
import { registry } from "../../lib/bands";

export default function Verify() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(undefined); // undefined = untouched

  function lookup() {
    const key = code.trim().toUpperCase();
    if (!key) return;
    // TODO: replace with a real API call to your registry
    setResult(registry[key] ?? null);
  }

  return (
    <div className="verify-wrap">
      <h1>Verify a band</h1>
      <div className="verify-form">
        <input
          type="text"
          value={code}
          placeholder="Enter band code — e.g. SB-0001-A"
          aria-label="Band code"
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && lookup()}
        />
        <button className="btn solid" onClick={lookup}>
          Verify
        </button>
      </div>

      {result && (
        <div className="verify-card fade" role="status">
          <div className="tier">{result.tier}</div>
          <dl>
            <dt>Status</dt>
            <dd>{result.status}</dd>
            <dt>Issued</dt>
            <dd>{result.issued}</dd>
            <dt>Registered to</dt>
            <dd>{result.owner}</dd>
          </dl>
        </div>
      )}

      {result === null && (
        <p className="verify-fail" role="status">
          No record found. This code is not in the registry.
        </p>
      )}

      <p className="verify-tag">
        Every Status Bandz piece is registered. If it&apos;s not in the system,
        it&apos;s not real.
      </p>
    </div>
  );
}
