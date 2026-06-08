"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#001460 0%,#002E9B 45%,#003cc2 100%)",
        display: "flex",
        alignItems: "center",
        padding: "0 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div className="hero-grid" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Glows */}
      <div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(168,245,208,0.15) 0%,transparent 70%)",
        top: -100, right: -100, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(0,100,255,0.2) 0%,transparent 70%)",
        bottom: -100, left: "20%", pointerEvents: "none",
      }} />

      {/* Container decorators */}
      <div style={{
        position: "absolute", bottom: 60, left: "5%", right: "5%",
        display: "flex", gap: 6, pointerEvents: "none", opacity: 0.08,
      }}>
        {["#e74c3c","#3498db","#2ecc71","#f39c12","#9b59b6","#e74c3c","#3498db","#2ecc71"].map((c, i) => (
          <div key={i} style={{ height: 28, borderRadius: 3, flex: 1, background: c }} />
        ))}
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 640 }}>
        {/* Badge */}
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(168,245,208,0.15)",
            border: "1px solid rgba(168,245,208,0.3)",
            color: "#A8F5D0", padding: "6px 16px", borderRadius: 100,
            fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase",
            marginBottom: 28, fontFamily: "Syne, sans-serif", fontWeight: 600,
          }}
        >
          <span className="pulse-dot" style={{ width: 6, height: 6, background: "#A8F5D0", borderRadius: "50%", display: "block" }} />
          Direct Importation Specialists
        </div>

        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily: "Syne, sans-serif", fontWeight: 800,
            fontSize: "clamp(40px,6vw,72px)", lineHeight: 1.05, color: "#fff",
            marginBottom: 8,
          }}
        >
          BAM-B <span style={{ color: "#A8F5D0" }}>&</span> CO
        </h1>

        <p
          className="animate-fade-up delay-200"
          style={{
            fontFamily: "Syne, sans-serif", fontSize: "clamp(15px,2vw,18px)",
            color: "rgba(255,255,255,0.85)", marginBottom: 16, fontWeight: 500,
            padding: "12px 0",
            borderTop: "1px solid rgba(168,245,208,0.2)",
            borderBottom: "1px solid rgba(168,245,208,0.2)",
          }}
        >
          Beyond Sourcing
        </p>

        <p
          className="animate-fade-up delay-200"
          style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", marginBottom: 36, fontWeight: 300 }}
        >
          Direct Importation From China To Nigeria — Sea Shipping & Pre-Order Services
        </p>

        <div className="animate-fade-up delay-300" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link
            href="/preorder"
            style={{
              background: "#A8F5D0", color: "#001d6b", padding: "14px 28px",
              borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "DM Sans, sans-serif", transition: "all .2s",
            }}
          >
            🛒 Start a Pre-Order
          </Link>
          <a
            href="https://wa.me/2349074550805"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "transparent", color: "#fff", padding: "14px 28px",
              borderRadius: 8, fontWeight: 500, fontSize: 15, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1.5px solid rgba(255,255,255,0.35)", transition: "all .2s",
            }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up delay-400"
          style={{
            display: "flex", gap: 40, marginTop: 52, paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.1)", flexWrap: "wrap",
          }}
        >
          {[
            { num: "2–3", label: "Months Sea Shipping" },
            { num: "100%", label: "Nationwide Delivery" },
            { num: "1688+", label: "Platforms Sourced" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "Syne, sans-serif", fontSize: 28, fontWeight: 800, color: "#A8F5D0" }}>{s.num}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
