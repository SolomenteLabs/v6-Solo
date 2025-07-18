import { Chain } from "@cosmos-kit/core";

export const coreumMainnetChain: Chain = {
  chain_name: "coreum",
  chain_id: "coreum-mainnet-1",
  rpc: "https://rpc.mainnet-1.coreum.dev",
  rest: "https://rest.mainnet-1.coreum.dev",
  bech32_prefix: "core",
  slip44: 990,
  features: ["stargate", "cosmwasm"],
  currencies: [
    {
      coinDenom: "CORE",
      coinMinimalDenom: "ucore",
      coinDecimals: 6,
      coinGeckoId: "coreum"
    }
  ],
  feeCurrencies: [
    {
      coinDenom: "CORE",
      coinMinimalDenom: "ucore",
      coinDecimals: 6,
      coinGeckoId: "coreum"
    }
  ],
  stakeCurrency: {
    coinDenom: "CORE",
    coinMinimalDenom: "ucore",
    coinDecimals: 6,
    coinGeckoId: "coreum"
  },
  bip44: {
    coinType: 990,
  },
};
