"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/verify", label: "Verify" },
  { href: "/system", label: "The System" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="wordmark" aria-label="Status Bandz home">
          Status Bandz
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={path === l.href ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
