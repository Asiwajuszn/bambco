"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import { generateOrderNumber } from "@/lib/utils";

const NIGERIAN_STATES = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno",
  "Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT - Abuja","Gombe",
  "Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos",
  "Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto",
  "Taraba","Yobe","Zamfara",
];

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  border: "1.5px solid rgba(255,255,255,0.15)",
  borderRadius: 8, padding: "11px 14px",
  color: "#fff", fontSize: 14, fontFamily: "DM Sans, sans-serif",
  outline: "none", width: "100%",
};
const labelStyle: React.CSSProperties = {
  fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.8)", letterSpacing: "0.02em",
};

export default function PreOrderPage() {
  const [paymentType, setPaymentType] = useState<"full"|"installment">("full");
  const [submitted, setSubmitted] = useState(false);
  const [orderNum, setOrderNum] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "", phone: "", whatsapp: "", email: "",
    state: "", product_name: "", product_link: "",
    quantity: "1", product_description: "", shipping_method: "sea",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    if (!form.full_name || !form.phone || !form.product_name) {
      alert("Please fill in Name, Phone, and Product Name at minimum.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, payment_type: paymentType }),
      });
      const data = await res.json();
      setOrderNum(data.order_number || generateOrderNumber());
      setSubmitted(true);
    } catch {
      // Offline fallback
      setOrderNum(generateOrderNumber());
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <section style={{ padding: "60px 5% 80px", background: "#002E9B", color: "#fff", minHeight: "calc(100vh - 68px)" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A8F5D0", marginBottom: 12 }}>
              Pre-Order
            </div>
            <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#fff", marginBottom: 8 }}>
              Start Your Pre-Order
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
              Fill in your details and we'll send you a quotation within 24 hours.
            </p>

            {submitted ? (
              <div style={{ textAlign: "center", padding: 48, background: "rgba(168,245,208,0.1)", border: "2px solid #A8F5D0", borderRadius: 16 }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>Order submitted successfully! Your order number is:</p>
                <div style={{ fontFamily: "Syne, sans-serif", fontSize: 36, fontWeight: 800, color: "#A8F5D0", margin: "12px 0" }}>{orderNum}</div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 28 }}>Save this number to track your order. We'll contact you within 24 hours.</p>
                <a href={`https://wa.me/2349074550805?text=Hi! I just placed a pre-order. My order number is ${orderNum}`} target="_blank" rel="noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25D366", color: "#fff", padding: "14px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
                  💬 Chat with Us
                </a>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {/* Full Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={labelStyle}>Full Name *</label>
                  <input style={inputStyle} placeholder="e.g. Chioma Okafor" value={form.full_name} onChange={e => update("full_name", e.target.value)} />
                </div>
                {/* Phone */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={labelStyle}>Phone Number *</label>
                  <input style={inputStyle} type="tel" placeholder="08012345678" value={form.phone} onChange={e => update("phone", e.target.value)} />
                </div>
                {/* WhatsApp */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={labelStyle}>WhatsApp Number *</label>
                  <input style={inputStyle} type="tel" placeholder="08012345678" value={form.whatsapp} onChange={e => update("whatsapp", e.target.value)} />
                </div>
                {/* Email */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={labelStyle}>Email Address</label>
                  <input style={inputStyle} type="email" placeholder="you@example.com" value={form.email} onChange={e => update("email", e.target.value)} />
                </div>
                {/* State */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={labelStyle}>State *</label>
                  <select style={{ ...inputStyle, appearance: "none" } as React.CSSProperties} value={form.state} onChange={e => update("state", e.target.value)}>
                    <option value="">Select your state</option>
                    {NIGERIAN_STATES.map(s => <option key={s} value={s} style={{ color: "#0a0f2e" }}>{s}</option>)}
                  </select>
                </div>
                {/* Quantity */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={labelStyle}>Quantity *</label>
                  <input style={inputStyle} type="number" min="1" placeholder="1" value={form.quantity} onChange={e => update("quantity", e.target.value)} />
                </div>
                {/* Product name */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Product Name *</label>
                  <input style={inputStyle} placeholder="e.g. Wireless Bluetooth Headphones" value={form.product_name} onChange={e => update("product_name", e.target.value)} />
                </div>
                {/* Product link */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Product Link</label>
                  <input style={inputStyle} type="url" placeholder="https://detail.1688.com/..." value={form.product_link} onChange={e => update("product_link", e.target.value)} />
                </div>
                {/* Description */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Product Description</label>
                  <textarea style={{ ...inputStyle, minHeight: 100, resize: "vertical" }} placeholder="Describe the product — size, color, specifications, etc." value={form.product_description} onChange={e => update("product_description", e.target.value)} />
                </div>
                {/* Payment toggle */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Payment Preference</label>
                  <div style={{ display: "flex", background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.15)", borderRadius: 8, overflow: "hidden" }}>
                    {(["full","installment"] as const).map((t) => (
                      <div key={t} onClick={() => setPaymentType(t)}
                        style={{
                          flex: 1, padding: 11, textAlign: "center", cursor: "pointer", fontSize: 14,
                          background: paymentType === t ? "#A8F5D0" : "transparent",
                          color: paymentType === t ? "#001d6b" : "rgba(255,255,255,0.6)",
                          fontWeight: paymentType === t ? 600 : 400, transition: "all .2s",
                        }}>
                        {t === "full" ? "💳 Full Payment" : "📅 Installment Payment"}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Shipping method */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Preferred Shipping Method</label>
                  <select style={{ ...inputStyle, appearance: "none" } as React.CSSProperties} value={form.shipping_method} onChange={e => update("shipping_method", e.target.value)}>
                    <option value="sea" style={{ color: "#0a0f2e" }}>🚢 Sea Shipping (2–3 months) — Standard</option>
                    <option value="air" style={{ color: "#0a0f2e" }}>✈️ Express Air Freight (+additional cost)</option>
                  </select>
                </div>
                {/* Buttons */}
                <div style={{ gridColumn: "1 / -1", display: "flex", gap: 12, marginTop: 8 }}>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{
                      background: "#A8F5D0", color: "#001d6b", padding: "13px 32px",
                      border: "none", borderRadius: 8, fontWeight: 700, fontSize: 15,
                      cursor: loading ? "not-allowed" : "pointer", fontFamily: "Syne, sans-serif",
                      opacity: loading ? 0.7 : 1,
                    }}
                  >
                    {loading ? "Submitting..." : "Submit Pre-Order →"}
                  </button>
                  <button style={{ background: "transparent", color: "rgba(255,255,255,0.6)", padding: "13px 24px", border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: 8, fontSize: 14, cursor: "pointer", fontFamily: "DM Sans, sans-serif" }}>
                    Save Draft
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}
