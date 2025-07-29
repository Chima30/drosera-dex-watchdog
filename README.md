# Drosera DEX Watchdog

A smart contract + monitoring bot system deployed on the **Drosera network** to detect and report suspicious token swap activity. 

Built using **Hardhat**, **Ethers.js**, and the **Drosera Trap system**, it flags potential manipulations like:
- Sudden price dumps
- Repetitive buys/sells
- Liquidity rug pulls
- Honeypots (buy-only tokens)

## Project Structure

drosera-dex-watchdog/
│
├── contracts/
│ └── DEXTrap.sol # Smart contract to report suspicious swaps
│
├── scripts/
│ └── reportSwap.js # Sends swap info to Drosera contract
│
├── artifacts/ # Compiled contract outputs (auto-generated)
│
├── .env # Private RPC + Wallet keys
├── hardhat.config.js # Hardhat configuration
├── package.json
└── README.md


---

## 🔧 How It Works

1. `DEXTrap.sol`: A Drosera-compatible Trap contract that logs suspicious token swap activity.
2. `reportSwap.js`: A monitoring script that submits real swap data to the contract (e.g., buy/sell size, wallet address).
3. All actions are recorded **on-chain** for traceability.
4. Optional: Integrate with Telegram bot for real-time alerts.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/YOUR_USERNAME/drosera-dex-watchdog.git
cd drosera-dex-watchdog

## 2. Install Dependencies
npm install

3. Setup Environment Variables
Create a .env file:

PRIVATE_KEY=your_private_key
DROSERA_RPC=https://eth-hoodi.g.alchemy.com/v2/your_key


