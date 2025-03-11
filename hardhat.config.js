require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {}, // In-memory blockchain
    localhost: {
      url: "http://127.0.0.1:8545", // Must match your Hardhat node URL
    },
  },
};
