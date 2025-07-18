import React, { useCallback } from "react";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

function App() {
  const mintToken = useCallback(async () => {
    try {
      if (!window.keplr) {
        alert("Please install Keplr extension.");
        return;
      }

      await window.keplr.enable("coreum-testnet");
      const offlineSigner = window.getOfflineSigner("coreum-testnet");
      const accounts = await offlineSigner.getAccounts();
      const sender = accounts[0].address;

      const client = await SigningCosmWasmClient.connectWithSigner(
        "https://full-node.testnet-1.coreum.dev:26657",
        offlineSigner
      );

      const contractAddress = "core1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; // 🔁 INSERT your contract address here

      const msg = {
        mint_pass: {
          expires_in_days: 30,
        },
      };

      const fee = {
        amount: [
          {
            denom: "utestcore", // testnet token denom
            amount: "5000",     // adjust if needed
          },
        ],
        gas: "200000",
      };

      const result = await client.execute(sender, contractAddress, msg, fee, "SoloPass Mint");
      console.log("✅ TX success:", result);
      alert(`✅ Token minted! TX hash: ${result.transactionHash}`);
    } catch (err) {
      console.error("❌ Mint error:", err);
      alert("Minting failed.");
    }
  }, []);

  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <img src="/solopass-logo.png" alt="SoloPass" style={{ width: "160px", marginBottom: "20px" }} />
      <h1 style={{ fontFamily: "sans-serif" }}>SoloPass Mint Demo</h1>
      <button onClick={mintToken} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#1e90ff", color: "#fff", border: "none", borderRadius: "6px" }}>
        Mint Token
      </button>
    </div>
  );
}

export default App;

