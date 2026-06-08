const steps = [
  { num: "01", icon: "🔗", title: "Submit Product Link", desc: "Share the link from 1688, Alibaba, Taobao or any Chinese platform." },
  { num: "02", icon: "📋", title: "Receive Quotation", desc: "We provide full pricing including product cost quoted in Naira." },
  { num: "03", icon: "💳", title: "Make Payment", desc: "Pay in full or choose our flexible installment payment plan." },
  { num: "04", icon: "⚙️", title: "Order Processing", desc: "We purchase and confirm your order directly from the supplier." },
  { num: "05", icon: "🚢", title: "Sea Shipping", desc: "Your goods are shipped by sea from China — approximately 2–3 months." },
  { num: "06", icon: "🇳🇬", title: "Arrival in Nigeria", desc: "Goods clear customs and arrive safely at our Nigeria warehouse." },
  { num: "07", icon: "💰", title: "Pay Shipping Fee", desc: "Settle the remaining shipping fee to release your goods to you." },
  { num: "08", icon: "📦", title: "Delivery to You", desc: "We deliver nationwide — right to your address across all 36 states." },
];

export default function HowItWorks() {
  return (
    <section id="how" style={{ padding: "80px 5%", background: "#f4f7ff" }}>
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#002E9B", marginBottom: 12 }}>
          Process
        </div>
        <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, lineHeight: 1.15, color: "#0a0f2e", marginBottom: 16 }}>
          How It Works
        </h2>
        <p style={{ fontSize: 17, color: "#4a5068", maxWidth: 540, lineHeight: 1.7 }}>
          From product link to your doorstep — 8 simple steps, fully guided by our team.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 0,
          border: "1px solid rgba(0,46,155,0.12)",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="step-card"
            style={{
              padding: "28px 24px",
              borderRight: i < steps.length - 1 ? "1px solid rgba(0,46,155,0.12)" : "none",
              borderBottom: "1px solid rgba(0,46,155,0.12)",
              background: "#fff",
              cursor: "default",
            }}
          >
            <div className="step-num" style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(0,46,155,0.25)", marginBottom: 16, textTransform: "uppercase" }}>
              Step {step.num}
            </div>
            <div
              className="step-icon"
              style={{
                width: 44, height: 44, background: "#f4f7ff", borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, marginBottom: 14, color: "#002E9B",
                transition: "all .2s",
              }}
            >
              {step.icon}
            </div>
            <div className="step-title" style={{ fontFamily: "Syne, sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 6, color: "#0a0f2e", transition: "color .2s" }}>
              {step.title}
            </div>
            <div className="step-desc" style={{ fontSize: 13, color: "#4a5068", lineHeight: 1.6, transition: "color .2s" }}>
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
