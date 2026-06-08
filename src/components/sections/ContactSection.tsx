export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px 5%",
        background: "linear-gradient(135deg,#001460 0%,#002E9B 100%)",
        color: "#fff",
      }}
    >
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A8F5D0", marginBottom: 12 }}>
          Get in Touch
        </div>
        <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#fff" }}>
          Contact Us
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 40, alignItems: "start" }}>
        {/* Contact info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            { icon: "📞", label: "Phone / Call", value: "+234 906 614 8229", href: "tel:+2349066148229" },
            { icon: "💬", label: "WhatsApp", value: "09074550805", href: "https://wa.me/2349074550805" },
            { icon: "📧", label: "Email", value: "Bambcoglobal@gmail.com", href: "mailto:Bambcoglobal@gmail.com" },
          ].map((c) => (
            <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 44, height: 44, minWidth: 44,
                background: "rgba(168,245,208,0.15)", borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
              }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
                  {c.label}
                </div>
                <a href={c.href} style={{ fontSize: 15, color: "#fff", textDecoration: "none" }}>{c.value}</a>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 8 }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
              Follow Us
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { label: "📸 @Bam_b.co", href: "https://instagram.com/Bam_b.co" },
                { label: "📘 Bambco", href: "#" },
                { label: "🎵 @Bam_b.co", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.7)",
                    padding: "8px 16px", borderRadius: 6, fontSize: 13,
                    textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6,
                    transition: "all .2s",
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* WhatsApp CTA card */}
        <div style={{
          background: "rgba(168,245,208,0.1)",
          border: "1.5px solid rgba(168,245,208,0.25)",
          borderRadius: 16, padding: 32, textAlign: "center",
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>💬</div>
          <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
            Chat with Us Now
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
            Have questions? Ready to start a pre-order? Our team is on WhatsApp to help you right away.
          </p>
          <a
            href="https://wa.me/2349074550805"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#25D366", color: "#fff", padding: "14px 28px",
              borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none",
              fontFamily: "Syne, sans-serif", transition: "all .2s",
            }}
          >
            💬 Open WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
