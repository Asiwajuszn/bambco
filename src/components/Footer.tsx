export default function Footer() {
  return (
    <footer
      style={{
        background: "#000d30",
        padding: "24px 5%",
        textAlign: "center",
        fontSize: 13,
        color: "rgba(255,255,255,0.3)",
      }}
    >
      <p>
        © {new Date().getFullYear()} <span style={{ color: "#A8F5D0" }}>BAM-B & CO</span> · Beyond Sourcing · Direct Importation from China to Nigeria
      </p>
    </footer>
  );
}
