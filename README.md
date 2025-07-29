# 🛡️ drosera-dex-watchdog

An on-chain DEX monitoring system built on the Drosera Network, This project detects and logs suspicious token activity — including rug pulls, honeypots, price manipulation, and flash loan attacks — using Drosera's Trap contract system and a connected off-chain bot that pushes alerts to Telegram.

---

## 🔍 What It Does

The **Drosera DEX Watchdog** consists of:

### 🔗 Smart Contract (Trap)

- Deploys a Trap contract (`DEXTrap.sol`) on the Drosera network.
- Logs suspicious swap activity using `reportSwap(...)`.
- Collects metadata like token addresses, amounts, and trader wallets.

### 📡 Off-Chain Watchdog Script

- A Node.js script (`scripts/reportSwap.js`) that listens to token swaps or receives flagged data.
- Calls the `reportSwap()` function on-chain to log that event.
- Can be extended to send alerts (Telegram, Discord, webhook, etc).

---

## 🧱 Folder Structure

