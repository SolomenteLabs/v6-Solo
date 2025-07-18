import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { GasPrice } from "@cosmjs/stargate";

const chainId = "coreum-mainnet-1";
const rpc = "https://full-node.mainnet-1.coreum.dev:26657";

function App() {
  const handleMint = async () => {
    try {
      if (!window.keplr) {
        alert("Keplr not installed.");
        return;
      }

      await window.keplr.enable(chainId);
      const signer = await window.getOfflineSignerAuto(chainId);
      const gasPrice = GasPrice.fromString("0.075ucore");
      const client = await SigningCosmWasmClient.connectWithSigner(rpc, signer, { gasPrice });

      const accounts = await signer.getAccounts();
      const sender = accounts[0].address;

      const msg = {
        sender,
        contract: "core1xyz...your_contract_here", // replace with your contract
        msg: {}, // replace with real payload
        funds: [],
      };

      const result = await client.execute(sender, msg.contract, msg.msg, "auto");
      console.log("✅ Mint successful:", result);
      alert("Mint successful!");
    } catch (err) {
      console.error("❌ Execute error:", err);
      alert("Minting failed.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>SoloPass Mint Demo (Mainnet)</h1>
      <button onClick={handleMint} style={{ padding: "10px 20px" }}>
        Mint Token
      </button>
    </div>
  );
}

export default App;

