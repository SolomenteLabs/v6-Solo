import React from "react";
import { SigningStargateClient } from "@cosmjs/stargate";

const App: React.FC = () => {
  const handleMint = async () => {
    try {
      const chainId = "coreum-mainnet-1";
      const rpcEndpoint = "https://full-node.mainnet-1.coreum.dev:26657";

      await window.keplr.enable(chainId);
      const offlineSigner = window.getOfflineSigner(chainId);
      const accounts = await offlineSigner.getAccounts();
      const sender = accounts[0].address;

      const client = await SigningStargateClient.connectWithSigner(
        rpcEndpoint,
        offlineSigner
      );

      const msg = {
        typeUrl: "/coreum.asset.ft.v1.MsgMint",
        value: {
          sender: sender,
          recipient: sender,
          id: "SOLOPASS", // Replace with your real token ID
          amount: {
            amount: "1",
            denom: "ucore", // Adjust if your smart token uses a different denom
          },
        },
      };

      const fee = {
        amount: [{ denom: "ucore", amount: "50000" }],
        gas: "200000",
      };

      const result = await client.signAndBroadcast(sender, [msg], fee);

      if (result.code === 0) {
        alert(`✅ Mint Success! TxHash: ${result.transactionHash}`);
      } else {
        alert(`❌ Mint Failed: ${result.rawLog}`);
      }
    } catch (err) {
      alert(`❌ Error: ${err.message || err}`);
    }
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <img
        src="/logo.png"
        alt="SoloPass"
        style={{ width: "100px", marginBottom: "20px" }}
      />
      <h1>
        SoloPass Mint Demo <span style={{ color: "gray" }}>(Coreum Mainnet)</span>
      </h1>
      <button
        onClick={handleMint}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        Mint SoloPass Token
      </button>
      <p style={{ marginTop: "40px", color: "#888" }}>
        Powered by Coreum Smart Tokens · Built by Solomente Labs
      </p>
    </div>
  );
};

export default App;

