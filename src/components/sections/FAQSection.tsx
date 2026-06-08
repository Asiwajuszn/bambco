"use client";
import { useState } from "react";

const faqs = [
  { q: "How long does sea shipping take?", a: "Sea shipping from China to Nigeria typically takes 2–3 months. This is a standard timeline for sea freight and allows us to offer the most affordable rates. We'll keep you updated throughout the journey." },
  { q: "Can I pay in installments?", a: "Yes! We offer flexible installment payment plans. You can pay in parts, but all installments must be completed before the pre-order closes. A progress tracker shows your payment history and remaining balance." },
  { q: "When do I pay shipping fees?", a: "Shipping fees are paid separately upon arrival of your goods in Nigeria. They are not included in the product price. We will notify you when your goods arrive with the exact shipping cost before release." },
  { q: "Can you deliver outside Lagos?", a: "Absolutely! We offer nationwide delivery across all 36 states in Nigeria. Delivery fees may vary by location — our team will include this in your quotation." },
  { q: "Do you source from 1688, Alibaba and Taobao?", a: "Yes! We source products from all major Chinese platforms including 1688, Alibaba, Taobao, DHgate, and more. Simply send us the product link and we'll handle the rest." },
  { q: "What happens if shipping is delayed?", a: "While we aim to deliver within 2–3 months, delays can occasionally occur due to port congestion, customs clearance, or other logistics factors outside our control. We communicate all delays transparently and promptly." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: "80px 5%", background: "#fff" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#002E9B", marginBottom: 12 }}>
          FAQ
        </div>
        <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#0a0f2e" }}>
          Frequently Asked Questions
        </h2>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderBottom: "1px solid rgba(0,46,155,0.12)", overflow: "hidden" }}>
            <div
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "22px 0", cursor: "pointer", fontSize: 16, fontWeight: 500,
                color: open === i ? "#002E9B" : "#0a0f2e", gap: 16, transition: "color .2s",
              }}
            >
              {f.q}
              <div style={{
                fontSize: 18,
                transition: "all .2s",
                fontWeight: 300,
                background: open === i ? "#002E9B" : "transparent",
                color: open === i ? "#A8F5D0" : "#002E9B",
                transform: open === i ? "rotate(45deg)" : "none",
              }} />
              +
            </div>
            <div
              className={`faq-answer ${open === i ? "open" : ""}`}
              style={{ fontSize: 15, color: "#4a5068", lineHeight: 1.7 }}
            >
              {f.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
