export const contractAddresses = {
  erc20: {
    21004: '0xE449b77f37F9721E0DdE586D5D587213BD34308A',
  },
  farm: {
    21004: '0xa24382EdFbF381145D1678D08e31cd1e257ABA3A', //
  },
  weth: {
    21004: '0x9E63f92c2D1F3826111846bAd89210293C7F4060',  //Wc4ei
    // 21004: '0x317b24679FCB2DDF140cBA39Cb9373D42BD6D771',  //Weth
    // 1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  }
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      21004: '0x668EAB6dF4A9E41C842878660406666B4b443859', // LP CFT (C4ei Farm LP)
    },
    tokenAddresses: {
      21004: '0xE449b77f37F9721E0DdE586D5D587213BD34308A', // CFT 
    },
    name: 'CFT-wC4EI',
    symbol: 'CFT-wC4EI UNI-V2 LP',
    tokenSymbol: 'CFT',
    // name: 'DEOR-ETH',
    // symbol: 'DEOR-ETH UNI-V2 LP',
    // tokenSymbol: 'DEOR',
    icon: '',
    pool: '100%',
  }
]
