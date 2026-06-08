"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import { STATUS_LABELS, STATUS_COLORS, type Order, type OrderStatus } from "@/types";

const TIMELINE: OrderStatus[] = [
  "submitted","confirmed","ordered","in_transit","arrived_nigeria","ready_for_delivery","delivered"
];

export default function TrackPage() {
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const track = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setOrder(null);
    try {
      const res = await fetch(`/api/track?q=${encodeURIComponent(query.trim())}`);
      const data = await res.json();
      if (data.error || !data.order) {
        setError("No order found. Please check your order number or phone number.");
      } else {
        setOrder(data.order);
      }
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const currentIdx = order ? TIMELINE.indexOf(order.status) : -1;

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68, minHeight: "100vh", background: "#f4f7ff" }}>
        <section style={{ padding: "60px 5% 80px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#002E9B", marginBottom: 12 }}>
              Track
            </div>
            <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#0a0f2e", marginBottom: 12 }}>
              Track Your Order
            </h1>
            <p style={{ fontSize: 17, color: "#4a5068", maxWidth: 480, margin: "0 auto" }}>
              Enter your order number (e.g. BAM202600001) or phone number.
            </p>
          </div>

          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: 12 }}>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === "Enter" && track()}
                placeholder="BAM202600001 or 08012345678"
                style={{
                  flex: 1, background: "#fff", border: "1.5px solid rgba(0,46,155,0.12)",
                  borderRadius: 8, padding: "13px 16px", fontSize: 15,
                  fontFamily: "DM Sans, sans-serif", color: "#0a0f2e", outline: "none",
                }}
              />
              <button onClick={track} disabled={loading}
                style={{
                  background: "#002E9B", color: "#fff", padding: "13px 28px",
                  border: "none", borderRadius: 8, fontWeight: 600, fontSize: 15,
                  cursor: "pointer", fontFamily: "Syne, sans-serif", whiteSpace: "nowrap",
                  opacity: loading ? 0.7 : 1,
                }}>
                {loading ? "..." : "Track Order"}
              </button>
            </div>

            {error && (
              <div style={{ marginTop: 24, padding: 20, background: "#fff5f5", border: "1px solid #ffcdd2", borderRadius: 10, color: "#c62828", fontSize: 14 }}>
                {error}
              </div>
            )}

            {order && (
              <div style={{ marginTop: 32, background: "#fff", border: "1.5px solid rgba(0,46,155,0.12)", borderRadius: 12, padding: 28 }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid rgba(0,46,155,0.1)" }}>
                  <div>
                    <p style={{ fontSize: 13, color: "#4a5068", marginBottom: 4 }}>Order Number</p>
                    <p style={{ fontFamily: "Syne, sans-serif", fontSize: 18, fontWeight: 700 }}>{order.order_number}</p>
                  </div>
                  <span style={{ padding: "5px 14px", borderRadius: 100, fontSize: 13, fontWeight: 600, ...(() => { const [bg, col] = STATUS_COLORS[order.status].split(" "); return {}; })() }}
                    className={STATUS_COLORS[order.status]}>
                    {STATUS_LABELS[order.status]}
                  </span>
                </div>

                {/* Meta */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
                  {[
                    { label: "Customer", value: order.full_name },
                    { label: "Product", value: order.product_name },
                    { label: "Est. Arrival", value: order.estimated_arrival || "2–3 months" },
                    { label: "Payment", value: order.payment_type === "full" ? "Full Payment" : "Installment" },
                  ].map(m => (
                    <div key={m.label} style={{ background: "#f4f7ff", borderRadius: 8, padding: 14 }}>
                      <p style={{ fontSize: 12, color: "#4a5068", marginBottom: 4 }}>{m.label}</p>
                      <p style={{ fontWeight: 500, fontSize: 14 }}>{m.value}</p>
                    </div>
                  ))}
                </div>

                {/* Payment progress for installment */}
                {order.payment_type === "installment" && order.total_amount > 0 && (
                  <div style={{ marginBottom: 28, padding: 16, background: "#f4f7ff", borderRadius: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14 }}>
                      <span style={{ color: "#4a5068" }}>Payment Progress</span>
                      <span style={{ fontWeight: 600 }}>{Math.round((order.amount_paid / order.total_amount) * 100)}%</span>
                    </div>
                    <div style={{ height: 8, background: "#dde4f0", borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ height: "100%", background: "#002E9B", width: `${(order.amount_paid / order.total_amount) * 100}%`, borderRadius: 4, transition: "width .5s" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 12, color: "#4a5068" }}>
                      <span>Paid: ₦{order.amount_paid.toLocaleString()}</span>
                      <span>Remaining: ₦{(order.total_amount - order.amount_paid).toLocaleString()}</span>
                    </div>
                  </div>
                )}

                {/* Timeline */}
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {TIMELINE.map((status, i) => {
                    const done = i < currentIdx;
                    const current = i === currentIdx;
                    const pending = i > currentIdx;
                    return (
                      <div key={status} style={{ display: "flex", gap: 16, paddingBottom: i < TIMELINE.length - 1 ? 20 : 0 }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <div style={{
                            width: 14, height: 14, borderRadius: "50%", flexShrink: 0,
                            background: done ? "#002E9B" : current ? "#A8F5D0" : "#e0e0e0",
                            boxShadow: current ? "0 0 0 3px rgba(168,245,208,0.3)" : "none",
                          }} />
                          {i < TIMELINE.length - 1 && (
                            <div style={{ width: 2, flex: 1, background: done ? "#002E9B" : "#e0e0e0", minHeight: 20, marginTop: 2 }} />
                          )}
                        </div>
                        <div style={{ paddingBottom: 4 }}>
                          <div style={{ fontSize: 14, fontWeight: current ? 600 : 400, color: pending ? "#aaa" : current ? "#002E9B" : "#0a0f2e" }}>
                            {STATUS_LABELS[status]}
                          </div>
                          {current && <div style={{ fontSize: 12, color: "#4a5068", marginTop: 2 }}>Current status</div>}
                        </div>
                      </div>
                    );
                  })}
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
