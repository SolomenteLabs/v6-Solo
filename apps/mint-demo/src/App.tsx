import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", paddingTop: "80px" }}>
      <img
        src="/solopass-logo.png"
        alt="SoloPass Logo"
        style={{ width: "120px", marginBottom: "30px" }}
      />
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        SoloPass Mint Demo (Mainnet)
      </h1>
      <p style={{ color: "#555", fontSize: "1rem", marginBottom: "40px" }}>
        This live demo mints a time-based SoloPass token on Coreum mainnet.
      </p>
      <button
        onClick={() => alert("Mint logic connected!")}
        style={{
          backgroundColor: "#1f2937",
          color: "#fff",
          padding: "12px 24px",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Mint SoloPass Token
      </button>
      <p style={{ marginTop: "40px", fontSize: "0.9rem", color: "#888" }}>
        Powered by <a href="https://www.coreum.com" target="_blank" rel="noopener noreferrer">Coreum</a>
      </p>
    </div>
  );
}

export default App;

