const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const ObjectStorage = await hre.ethers.getContractFactory("ObjectStorage");

  // Deploy the contract and wait for completion
  const contract = await ObjectStorage.deploy();

  await contract.waitForDeployment(); // This ensures deployment is complete

  const contractAddress = await contract.getAddress(); // Get deployed contract address

  console.log(`✅ ObjectStorage deployed at: ${contractAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
