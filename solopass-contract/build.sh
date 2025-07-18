#!/bin/bash

echo "🔁 Cleaning previous build artifacts..."
cargo clean

echo "🧽 Reinstalling wasm target..."
rustup target remove wasm32-unknown-unknown >/dev/null 2>&1
rustup target add wasm32-unknown-unknown

echo "🛠 Building with bulk-memory disabled via .cargo/config.toml..."
cargo build --release || {
  echo "❌ Build failed."
  exit 1
}

echo "📦 Copying compiled wasm..."
cp target/wasm32-unknown-unknown/release/solopass_contract.wasm solopass_contract.wasm || {
  echo "❌ wasm not found."
  exit 1
}

echo "🔍 Checking for bulk-memory..."
if wasm-objdump -x solopass_contract.wasm | grep -q bulk; then
  echo "❌ Bulk memory IS PRESENT. Rejecting."
  exit 1
else
  echo "✅ Bulk memory NOT present. Safe to deploy."
fi
