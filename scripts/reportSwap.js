// scripts/reportSwap.js

/**
 * 🔧 .env file (required)
 *
 * Make sure your .env file includes the following:
 *
 * WATCHDOG_CONTRACT=0xYourDeployedContractAddress
 * PRIVATE_KEY=your_wallet_private_key
 * DROSERA_RPC=https://eth-drosera.g.alchemy.com/v2/YOUR_KEY
 */

const { ethers } = require("ethers");
require("dotenv").config();

const ABI = [
  "function reportSwap(address token, address wallet, uint256 amountIn, uint256 amountOut, string reason)"
];

const CONTRACT_ADDRESS = process.env.WATCHDOG_CONTRACT;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const DROSERA_RPC = process.env.DROSERA_RPC;

async function reportSuspiciousSwap({
  token,
  wallet,
  amountIn,
  amountOut,
  reason
}) {
  if (!CONTRACT_ADDRESS || !PRIVATE_KEY || !DROSERA_RPC) {
    console.error("❌ Missing environment variables in .env file");
    process.exit(1);
  }

  const provider = new ethers.JsonRpcProvider(DROSERA_RPC);
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

  try {
    console.log("📡 Calling reportSwap on Drosera...");
    const tx = await contract.reportSwap(token, wallet, amountIn, amountOut, reason);
    await tx.wait();
    console.log("✅ Swap reported! Tx hash:", tx.hash);
  } catch (err) {
    console.error("❌ Error reporting swap:", err);
  }
}

// 👇 Example usage:
reportSuspiciousSwap({
  token: "0x1234567890abcdef1234567890abcdef12345678",  // Replace with real token
  wallet: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd", // Replace with real wallet
  amountIn: ethers.parseEther("1.0"),
  amountOut: ethers.parseEther("0.1"),
  reason: "Price dropped 90% suddenly"
});
