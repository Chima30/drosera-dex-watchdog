### 🛡️ Drosera DEX Watchdog - Trap

An on-chain and off-chain hybrid monitoring tool built on the Drosera network, designed to detect and log suspicious activity on decentralized exchanges (DEXs) such as:

- Rug pulls

- Spoofing

- Sudden price manipulations

- Abnormal swap behavior

This system combines a Drosera Trap smart contract (which emits on-chain logs) with an off-chain bot that watches DEX activity and triggers alerts.

### 📦 Features
| Feature                   | Description                                     |
| ------------------------- | ----------------------------------------------- |
| 🔍 On-chain Trap          | Logs suspicious token interactions using events |
| 🧠 Off-chain Logic        | Your bot detects what's suspicious and logs it  |
| 📡 Telegram/Discord Ready | Hook into alerting platforms                    |
| 🧪 Built for Drosera      | Integrates Drosera traps, RPC, and tooling      |
| 🛠️ Easy Deployment       | Comes with deployment scripts and configuration |

### 🧠 Project Architecture

```bash
drosera-dex-watchdog/
├── contracts/
│   └── DroseraDEXWatchdog.sol      # Drosera Trap contract for logging
├── scripts/
│   └── reportSwap.js               # Off-chain bot to report suspicious activity
├── .env                            # Private config (not committed)
├── drosera.toml                    # Drosera deployment config
├── .gitignore                      # Git ignored files
└── README.md                       # You're here
```

### 🚀 Getting Started
1. Clone the Repository

```bash
git clone https://github.com/yourusername/drosera-dex-watchdog.git
cd drosera-dex-watchdog
```

2. Install Dependencies
```bash
npm install
```

3. Configure .env
Create a .env file in the root of your project and add the following:

```ini
WATCHDOG_CONTRACT=0xYourDeployedContractAddress
PRIVATE_KEY=your_wallet_private_key
DROSERA_RPC=https://eth-drosera.g.alchemy.com/v2/YOUR_KEY
```

4. Compile Contracts
```bash
npx hardhat compile
```

### ⚙️ Deploy the Contract to Drosera
Make sure your .env file has your private key and RPC URL.

To deploy using Hardhat:

```bash
npx hardhat run scripts/deploy.js --network drosera
```
Or use the Drosera CLI if you’ve configured drosera.toml:

```bash
drosera apply
```

<details> <summary>📄 View deploy.js</summary>

```js
const { ethers } = require("hardhat");

async function main() {
  const DroseraDEXWatchdog = await ethers.getContractFactory("DroseraDEXWatchdog");
  const contract = await DroseraDEXWatchdog.deploy();
  await contract.waitForDeployment();

  console.log("✅ Deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exit(1);
});
```
</details>

### 📡 Run the Watchdog Bot
After deployment, and once .env is ready, run the monitoring script:

```bash
npx hardhat run scripts/reportSwap.js --network drosera
```

### 🔐 .gitignore
These files are already ignored:

```gitignore
node_modules/
.env
artifacts/
cache/
```

✅ What This Contract Does
- This system is not a detector — it's a logger.

- Your off-chain script (like reportSwap.js) watches on-chain events and DEX activity.

- When it spots something suspicious, it sends a report by calling the smart contract.

The smart contract then emits an event, which is:

 - Stored on-chain

 - Picked up by Drosera, The Graph, or other indexers

 - Useful for dashboards, analytics, or alerts


