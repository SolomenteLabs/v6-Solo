import { useEffect, useState } from "react";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { useWallet } from "@cosmos-kit/react";

const rpcEndpoint = "https://full-node.mainnet-1.coreum.dev:26657";
const chainId = "coreum-mainnet-1";


<img
  src="/solopass-logo.png"
  alt="SoloPass Logo"
  style={{ width: '150px', display: 'block', margin: '0 auto 20px auto' }}
/>



function App() {
  const { connect, disconnect, connected, getOfflineSigner, address } = useWallet();
  const [client, setClient] = useState<SigningCosmWasmClient | null>(null);

  useEffect(() => {
    if (!connected) return;

    const setupClient = async () => {
      try {
        const signer = await getOfflineSigner();
        const client = await SigningCosmWasmClient.connectWithSigner(rpcEndpoint, signer);
        setClient(client);
      } catch (error) {
        console.error("❌ Execute error:", error);
      }
    };

    setupClient();
  }, [connected]);

  return (
    <div>
      <h1>SoloPass Mint Demo (Mainnet)</h1>
      {connected ? (
        <div>
          <p>🔗 Connected as: {address}</p>
          <button onClick={disconnect}>Disconnect</button>
        </div>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { useWallet } from "@cosmos-kit/react";

const rpcEndpoint = "https://full-node.mainnet-1.coreum.dev:26657";
const chainId = "coreum-mainnet-1";

function App() {
  const { connect, disconnect, connected, getOfflineSigner, address } = useWallet();
  const [client, setClient] = useState<SigningCosmWasmClient | null>(null);

  useEffect(() => {
    if (!connected) return;

    const setupClient = async () => {
      try {
        const signer = await getOfflineSigner();
        const client = await SigningCosmWasmClient.connectWithSigner(rpcEndpoint, signer);
        setClient(client);
      } catch (error) {
        console.error("❌ Execute error:", error);
      }
    };

    setupClient();
  }, [connected]);

  return (
    <div>
      <h1>SoloPass Mint Demo (Mainnet)</h1>
      {connected ? (
        <div>
          <p>🔗 Connected as: {address}</p>
          <button onClick={disconnect}>Disconnect</button>
        </div>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
}

export default App;

