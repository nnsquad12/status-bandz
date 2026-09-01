"use client";

import { useEffect, useState } from "react";
import { DROP_DATE } from "../lib/bands";

function diff() {
  const t = new Date(DROP_DATE).getTime() - Date.now();
  if (t <= 0) return null;
  return {
    d: Math.floor(t / 86400000),
    h: Math.floor((t / 3600000) % 24),
    m: Math.floor((t / 60000) % 60),
    s: Math.floor((t / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(diff());
    const id = setInterval(() => setTime(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  if (time === null)
    return (
      <p className="hero-line" role="status">
        Drop 001 — Live now
      </p>
    );

  const units = [
    ["Days", time.d],
    ["Hours", time.h],
    ["Min", time.m],
    ["Sec", time.s],
  ];

  return (
    <div className="countdown" role="timer" aria-label="Time until next drop">
      {units.map(([lbl, num]) => (
        <div className="unit" key={lbl}>
          <div className="num">{String(num).padStart(2, "0")}</div>
          <div className="lbl">{lbl}</div>
        </div>
      ))}
    </div>
  );
}
