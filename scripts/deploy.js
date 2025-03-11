const hre = require("hardhat");

async function main() {
 
  const ObjectStorage = await hre.ethers.getContractFactory("ObjectStorage");

  const contract = await ObjectStorage.deploy();

  await contract.waitForDeployment(); 

  const contractAddress = await contract.getAddress(); 

  console.log(`✅ ObjectStorage deployed at: ${contractAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
