require("@nomiclabs/hardhat-waffle");
const { infuraKey, mnemonic } = require('./secrets.json');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraKey}`,
      accounts: {mnemonic: mnemonic}
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraKey}`,
      accounts: {mnemonic: mnemonic}
    },
    ganache: {
      // docker network inspect dapp_dev_01
      url: "http://172.23.0.3:8545",
    }
  },
  // This is a sample solc configuration that specifies which version of solc to use
  solidity: {
    version: "0.7.3",
  },
};