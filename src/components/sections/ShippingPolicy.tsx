const policies = [
  { title: "Shipping Timeline", body: "Sea shipping from China to Nigeria takes approximately 2–3 months." },
  { title: "Shipping Fees Excluded", body: "Shipping fees are not included in product prices — they are quoted separately." },
  { title: "Pay on Arrival", body: "Shipping fees are payable upon arrival of your goods in Nigeria." },
  { title: "Possible Delays", body: "Delays may occur due to logistics or port circumstances beyond our control." },
  { title: "No Payment, No Release", body: "Goods are only released after full shipping fee payment has been confirmed." },
  { title: "Installment Deadline", body: "All installment payments must be completed before the pre-order closes." },
  { title: "Nationwide Delivery", body: "We deliver to all 36 states across Nigeria, including Abuja." },
];

export default function ShippingPolicy() {
  return (
    <section id="policy" style={{ padding: "80px 5%", background: "#fff" }}>
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#002E9B", marginBottom: 12 }}>
          Important
        </div>
        <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, lineHeight: 1.15, color: "#0a0f2e", marginBottom: 16 }}>
          Sea Shipping Policy
        </h2>
        <p style={{ fontSize: 17, color: "#4a5068", maxWidth: 540, lineHeight: 1.7 }}>
          Please read and understand our shipping terms before placing a pre-order.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        {policies.map((p, i) => (
          <div
            key={i}
            style={{
              padding: 24, border: "1px solid rgba(0,46,155,0.12)",
              borderRadius: 12, display: "flex", gap: 16, alignItems: "flex-start",
              background: "#fff", transition: "border-color .2s, box-shadow .2s",
            }}
          >
            <div style={{
              width: 36, height: 36, minWidth: 36, background: "#002E9B",
              color: "#fff", borderRadius: 8, display: "flex", alignItems: "center",
              justifyContent: "center", fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 14,
            }}>
              {i + 1}
            </div>
            <div>
              <strong style={{ display: "block", fontFamily: "Syne, sans-serif", fontSize: 15, marginBottom: 4, color: "#0a0f2e" }}>
                {p.title}
              </strong>
              <span style={{ fontSize: 14, color: "#4a5068", lineHeight: 1.6 }}>{p.body}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
