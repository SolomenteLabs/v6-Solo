import React from "react";
import { ChainProvider } from "@cosmos-kit/react";
import { keplrWallets } from "@cosmos-kit/keplr";
import { chainInfo } from "./coreum-chain";
import { KeplrConnectButton } from "./KeplrConnectButton";

export default function App() {
  return (
    <ChainProvider
      chains={[chainInfo]}
      assetLists={[chainInfo]}
      wallets={keplrWallets}
      walletConnectOptions={{
        signClient: {
          projectId: "demo",
          relayUrl: "wss://relay.walletconnect.org",
          metadata: {
            name: "SoloPass Demo",
            description: "SoloPass Minting App",
            url: "https://your-app-url.com",
            icons: ["https://your-app-url.com/favicon.ico"]
          }
        }
      }}
      signerOptions={{
        signingStargate: () => ({
          preferNoSetFee: true,
          disableBalanceCheck: true
        })
      }}
    >
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          paddingTop: "5rem"
        }}
      >
        <h1>SoloPass</h1>
        <KeplrConnectButton />
      </main>
    </ChainProvider>
  );
}
