const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

module.exports = {
    networks: {
        c4ei: {
            host: "192.168.1.185",     // Localhost (default: none)
            port: 21004,            // Standard Ethereum port (default: none)
            network_id: 21004,       // Any network (default: none)
            // from: '0xAd70df6Bd78734721F42CD8cCACe42b25D83Aa65',
            // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
            // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
            // from: <address>,        // Account to send txs from (default: accounts[0])
            websocket: false        // Enable EventEmitter interface for web3 (default: false)
            // host: "localhost",
            // port: 7545,
            // network_id: "*"
        }
        // ,
        // development: {
        //     host: "192.168.1.185",     // Localhost (default: none)
        //     port: 21004,            // Standard Ethereum port (default: none)
        //     network_id: 21004,       // Any network (default: none)
        //     from: '0x66ec272cf68967ff821db6fd5ab8ae2ed35014e4',
        //     gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
        //     gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
        //     // from: <address>,        // Account to send txs from (default: accounts[0])
        //     websocket: true        // Enable EventEmitter interface for web3 (default: false)
        //     // host: "localhost",
        //     // port: 7545,
        //     // network_id: "*"
        // }
        // ,
        // test: {
        //     host: "localhost",
        //     port: 8545,
        //     network_id: "*"
        // },
        // mainnet: {
        //     provider: function() {
        //         return new HDWalletProvider(
        //             process.env.MNEMONIC,
        //             `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`
        //         )
        //     },
        //     network_id: 1
        // },
        // kovan: {
        //     // provider: function() {
        //     //     return new HDWalletProvider(
        //     //         process.env.MNEMONIC,
        //     //         `https://kovan.infura.io/v3/${process.env.INFURA_ID}`
        //     //     )
        //     // },
        //     host: "192.168.1.185",     // Localhost (default: none)
        //     port: 21004,            // Standard Ethereum port (default: none)
        //     network_id: "21004",       // Any network (default: none)
        //     from: '0x66ec272cf68967ff821db6fd5ab8ae2ed35014e4'
        //     // network_id: 42
        // }
    },

    compilers: {
        solc: {
            version: "0.6.12",
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },

    plugins: [
        'truffle-plugin-verify'
    ],

    api_keys: {
        etherscan: process.env.ETHERSCAN_API_KEY
    }
};
