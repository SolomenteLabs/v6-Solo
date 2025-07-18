// CosmJS mint logic (instantiate smart token)
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { assertIsBroadcastTxSuccess } from "@cosmjs/stargate";

const RPC = "https://rpc.mainnet.coreum.dev:443";
const CODE_ID = 100; // 🔁 Replace with your actual uploaded wasm code ID

export async function executeSmartTokenMint(address: string) {
  const offlineSigner = window.getOfflineSigner("coreum-mainnet-1");
  const client = await SigningCosmWasmClient.connectWithSigner(RPC, offlineSigner);

  const msg = {
    symbol: "SPASS",
    subunit: "spass",
    precision: 0,
    initial_amount: "0",
    max_amount_to_mint: "1000000"
  };

  const fee = {
    amount: [{ amount: "10000000", denom: "ucore" }],
    gas: "800000"
  };

  const result = await client.instantiate(
    address,
    CODE_ID,
    msg,
    "solopass-mainnet",
    fee,
    {
      admin: "core1ycuy4cw49qcdjfnk58k0pvc4w0t9j3fchta6aj"
    }
  );

  assertIsBroadcastTxSuccess(result);
  return {
    transactionHash: result.transactionHash,
    contractAddress: result.contractAddress
  };
}

