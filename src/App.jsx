import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { GasPrice } from "@cosmjs/stargate";

const chainId = "coreum-mainnet-1";
const rpc = "https://full-node.mainnet-1.coreum.dev:26657";

function App() {
  const handleMint = async () => {
    try {
      if (!window.keplr) {
        alert("Please install Keplr wallet first.");
        return;
      }

      await window.keplr.enable(chainId);
      const offlineSigner = await window.getOfflineSignerAuto(chainId);
      const accounts = await offlineSigner.getAccounts();
      const myAddress = accounts[0].address;

      const client = await SigningCosmWasmClient.connectWithSigner(rpc, offlineSigner, {
        gasPrice: GasPrice.fromString("0.075ucore"),
      });

      const contractAddress = "core1xyz...your_contract_here"; // TODO: update with real contract

      const msg = {
        mint_pass: {
          expires_in_days: 30,
          tier: "standard"
        }
      };

      const fee = {
        amount: [{ denom: "ucore", amount: "5000" }],
        gas: "200000",
      };

      const result = await client.execute(myAddress, contractAddress, msg, fee);
      console.log("✅ Pass minted! TX hash:", result.transactionHash);
      alert(`✅ Pass minted! TX hash: ${result.transactionHash}`);
    } catch (err) {
      console.error("❌ Execute error:", err);
      alert("❌ Minting failed. See console for details.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>SoloPass Mint Demo (Mainnet)</h1>
      <button onClick={handleMint} style={{ padding: "10px 20px" }}>
        Mint SoloPass Token
      </button>
    </div>
  );
}

export default App;

