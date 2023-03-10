// https://eth-ropsten.alchemyapi.io/v2/zL4rH9DpdMKRMFJAp3kS7rqD33tgpXOq

require("@nomiclabs/hardhat-waffle"); // Plugin to build smart contract tests

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/zL4rH9DpdMKRMFJAp3kS7rqD33tgpXOq",
      accounts: [ "721e8e1cb10f411ac05f027f7cfe5c623c716a31f51ef5cee6407b68760427b8" ] // metamask private key
    }
  }
};
