// // require("@matterlabs/hardhat-zksync-solc");

// // require("dotenv").config();

// // /** @type import('hardhat/config').HardhatUserConfig */
// // module.exports = {
// //   zksolc: {
// //     version: "1.3.9",
// //     compilerSource: "binary",
// //     settings: {
// //       optimizer: {
// //         enabled: true,
// //       },
// //     },
// //   },
// //   networks: {
// //     zksync_testnet: {
// //       url: "https://zksync2-testnet.zksync.dev",
// //       ethNetwork: "goerli",
// //       chainId: 280,
// //       zksync: true,
// //     },
// //     zksync_mainnet: {
// //       url: "https://zksync2-mainnet.zksync.io/",
// //       ethNetwork: "mainnet",
// //       chainId: 324,
// //       zksync: true,
// //     },
// //   },
// //   paths: {
// //     artifacts: "./artifacts-zk",
// //     cache: "./cache-zk",
// //     sources: "./contracts",
// //     tests: "./test",
// //   },
// //   solidity: {
// //     version: "0.8.17",
// //     defaultNetwork:'sepolia',
// //     networks:{
// //       hardhat:{} ,
// //       sepolia:{
// //         url:'https://rpc.ankr.com/eth_sepolia',
// //         accounts:[`0x${process.env.SECRET_KEY}`]
// //       }
// //     },
// //     settings: {
// //       optimizer: {
// //         enabled: true,
// //         runs: 200,
// //       },
// //     },
// //   },
// // };
// require("@matterlabs/hardhat-zksync-solc");
// require("dotenv").config();

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   defaultNetwork: "sepolia", // Default network for deployment
//   zksolc: {
//     version: "1.3.9",
//     compilerSource: "binary",
//     settings: {
//       optimizer: {
//         enabled: true,
//       },
//     },
//   },
//   networks: {
//     hardhat: {
//       chainId: 31337, // Local development network
//     },
//     sepolia: {
//       url: "https://rpc.ankr.com/eth_sepolia",
//       accounts: [`0x${process.env.SECRET_KEY}`], // Fetching private key from .env
//     },
//     zksync_testnet: {
//       url: "https://zksync2-testnet.zksync.dev",
//       ethNetwork: "goerli", // L1 network (Ethereum testnet)
//       chainId: 280,
//       zksync: true,
//     },
//     zksync_mainnet: {
//       url: "https://zksync2-mainnet.zksync.io/",
//       ethNetwork: "mainnet", // L1 network (Ethereum mainnet)
//       chainId: 324,
//       zksync: true,
//     },
//   },
//   paths: {
//     artifacts: "./artifacts-zk", // Custom artifacts folder for zkSync
//     cache: "./cache-zk", // Custom cache folder for zkSync
//     sources: "./contracts",
//     tests: "./test",
//   },
//   solidity: {
//     version: "0.8.17",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200, // Optimization runs for Solidity compiler
//       },
//     },
//   },
// };

// /** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
      sepolia: {
        url: 'https://eth-sepolia.g.alchemy.com/v2/demo',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

