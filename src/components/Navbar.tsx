"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/#how" },
  { label: "Pre-Order", href: "/preorder" },
  { label: "Track Order", href: "/track" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 68,
        background: "rgba(0,30,100,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(168,245,208,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5%",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <Image
          src="/logo.png"
          alt="BAM-B & CO"
          width={36}
          height={36}
          style={{ borderRadius: 4, objectFit: "contain" }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <span
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: 17,
            color: "#fff",
            letterSpacing: "0.02em",
          }}
        >
          BAM-B <span style={{ color: "#A8F5D0" }}>&</span> CO
        </span>
      </Link>

      {/* Desktop Links */}
      <ul style={{ display: "flex", gap: 32, listStyle: "none", alignItems: "center" }}
        className="hidden md:flex">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              style={{
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                fontSize: 14,
                letterSpacing: "0.02em",
                transition: "color .2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#A8F5D0")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/preorder"
        style={{
          background: "#A8F5D0",
          color: "#001d6b",
          padding: "8px 20px",
          borderRadius: 6,
          fontWeight: 500,
          fontSize: 14,
          textDecoration: "none",
        }}
        className="hidden md:inline-flex"
      >
        Start Pre-Order →
      </Link>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
        className="md:hidden"
        aria-label="Menu"
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 22,
              height: 2,
              background: "#fff",
              borderRadius: 2,
              margin: "5px 0",
              transition: "all .3s",
            }}
          />
        ))}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: 68,
            left: 0,
            right: 0,
            background: "rgba(0,20,80,0.98)",
            backdropFilter: "blur(12px)",
            padding: "20px 5%",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
          className="md:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontSize: 16,
                padding: "8px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/preorder"
            onClick={() => setOpen(false)}
            style={{
              background: "#A8F5D0",
              color: "#001d6b",
              padding: "12px 20px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Start Pre-Order →
          </Link>
        </div>
      )}
    </nav>
  );
}
