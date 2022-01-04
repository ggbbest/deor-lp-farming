export const getEthChainInfo = () => {
    let chainId: number = 21004;
    let rpcUrl: string = 'https://rpc.c4ei.net/';
    let ethscanType: string = 'c4ei.';

    // Network Name: Klaytn
    // Klatyn RPC URL: https://public-node-api.klaytnapi.com/v1/cypress
    // Klaytn ChainID: 8217
    // Symbol:  KLAY
    // Block Explorer URL: https://scope.klaytn.com
    // let chainId: number = 8217;
    // let rpcUrl: string = 'https://public-node-api.klaytnapi.com/v1/cypress';
    // let ethscanType: string = 'klay.';


    // const href = window.location.href;
    // if (/\/\/farm.deor.io/.test(href)) {
    //      chainId = 1;
    //      rpcUrl = 'https://mainnet.infura.io/v3/e707b58edfd7437cbb6e9079c259eda7/';
    //      ethscanType = '';
    // }
    return {
        chainId,
        rpcUrl,
        ethscanType
    }    
    // let chainId: number = 42;
    // let rpcUrl: string = 'https://kovan.infura.io/v3/e707b58edfd7437cbb6e9079c259eda7/';
    // let ethscanType: string = 'kovan.';
    // const href = window.location.href;
    // if (/\/\/farm.deor.io/.test(href)) {
    //      chainId = 1;
    //      rpcUrl = 'https://mainnet.infura.io/v3/e707b58edfd7437cbb6e9079c259eda7/';
    //      ethscanType = '';
    // }
    // return {
    //     chainId,
    //     rpcUrl,
    //     ethscanType
    // }
};
