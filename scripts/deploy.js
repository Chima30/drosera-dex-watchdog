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
