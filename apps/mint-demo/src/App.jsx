import React, { useCallback } from "react";
import { SigningStargateClient, GasPrice } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

const rpc = "https://full-node.testnet-coreum.dev";
const chainId = "coreum-testnet-1";
const contract = "core1xjzzfxcsmqskd3v9r0dd2xg8ngc59u3khw6uyn"; // Pre-deployed contract

function App() {
  const mintToken = useCallback(async () => {
    try {
      if (!window.keplr) {
        alert("Please install Keplr wallet first.");
        return;
      }

      await window.keplr.enable(chainId);
      const offlineSigner = window.getOfflineSigner(chainId);
      const accounts = await offlineSigner.getAccounts();
      const sender = accounts[0].address;

      const client = await SigningCosmWasmClient.connectWithSigner(rpc, offlineSigner, {
        gasPrice: GasPrice.fromString("0.025utestcore"),
      });

      const msg = {
        mint_pass: {
          expires_in_days: 30,
          tier: "standard"
        }
      };

      const fee = {
        amount: [{ denom: "utestcore", amount: "500" }],
        gas: "200000",
      };

      const result = await client.execute(sender, contract, msg, fee);
      alert(`✅ Pass minted! TX hash: ${result.transactionHash}`);
      console.log("Execute result:", result);
    } catch (err) {
      console.error("❌ Execute error:", err);
      alert("Minting failed.");
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "80px" }}>
      <img src="/solopass-logo.png" alt="SoloPass Logo" style={{ width: "160px", marginBottom: "20px" }} />
      <h1 style={{ marginBottom: "20px" }}>SoloPass Mint Demo</h1>
      <button
        onClick={mintToken}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#1e90ff",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Mint Token
      </button>
    </div>
  );
}

export default App;

