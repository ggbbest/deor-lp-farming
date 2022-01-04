export const contractAddresses = {
  erc20: {
    // 42: '0xAdA673d512415c98e04C068A3b50022B2696cCCE',
    // 1: '0x63726dAe7C57d25e90ec829ce9a5C745Ffd984d3',
    // 21004: '0x6335E94a01D21DA57e2AA5EBAdf1935A934A70EC',
    21004: '0x8ffdab5a5749f88ef3a8149fe022222c9b041b7a',
    // 8217: '0x18814b01b5CC76F7043E10fd268cc4364dF47dA0', // CEIK
    // //https://scope.klaytn.com/account/0x18814b01b5CC76F7043E10fd268cc4364dF47dA0?tabId=txList
    // 8217: '0x47C3Edf26F85ceF1053b6485ad401Ebd1dDac72C', // sCEIK
  },
  farm: {
    // 42: '0x8389Fa19f7276B489ed0268bCeebfa24325EaD6D',
    // 1: '0xbfd181cb0c8e23b65805dded3863dce6517402a7',
    21004: '0x65382a57fe81421417EfEcfC8B917803623161D5',
    // 8217: '0xd9145CCE52D386f254917e481eB44e9943F39138', // CEIK farm 추가 생성한 팜
    // 8217: '0x50e746edaa283365136ed86a4e5dfddc6cd3cf9e', // CEIK LP 클레이스왑은 LP 가 팜일까?
    // 8217: '0x58a3f3237ac6dd279702f2ec02c36ab536ff08e1',  // Ceik Farm D:\c4ei문서\ceikSWAP\uni팜역추적\FARM코드1파일짜리
  },
  weth: {
    // 42: '0xa050886815cfc52a24b9c4ad044ca199990b6690',
    // 1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    21004: '0x317b24679FCB2DDF140cBA39Cb9373D42BD6D771',  //    0x231108c9379FD75D23C2F49865fcB99BfE437344
    // 8217: '0x7b0475c1647b5637171ba506b3a6583b934edb20', //0xfd844c2fca5e595004b17615f891620d1cb9bbb2
    // 8217: '0x50e746edaa283365136ed86a4e5dfddc6cd3cf9e', // weth --> ceik LP
    //https://scope.klaytn.com/account/0xc6d547d7d6ed32a69a2e2fbd79de42c457b95792?tabId=txList
  }
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      // 42: '0x2e4c125f3c2baefd71c9100601caa13a198cc008',
      // 1: '0x856e90282961c0e7f6693fd2f62b35d5df9783cf',
      21004: '0xA751e1AF3CFaf5dEd055cEFfB79CAa4Ac0779Ef2',
      // 8217: '0x50e746edaa283365136ed86a4e5dfddc6cd3cf9e', //KlaySwap LP KLAY-CEIK (KSLP)
      // https://scope.klaytn.com/token/0x50e746edaa283365136ed86a4e5dfddc6cd3cf9e?tabId=tokenTransfer
    },
    tokenAddresses: {
      // 42: '0xAdA673d512415c98e04C068A3b50022B2696cCCE',
      // 1: '0x63726dAe7C57d25e90ec829ce9a5C745Ffd984d3',
      // 21004: '0x6335E94a01D21DA57e2AA5EBAdf1935A934A70EC',
      21004: '0x8ffdab5a5749f88ef3a8149fe022222c9b041b7a',
      // 8217: '0x18814b01b5CC76F7043E10fd268cc4364dF47dA0',  // CEIK
      // 8217: '0x47C3Edf26F85ceF1053b6485ad401Ebd1dDac72C', // sCEIK
    },
    name: 'C4EI-sCEIK',
    symbol: 'C4EI-sCEIK',
    tokenSymbol: 'sCEIK',
    icon: '',
    pool: '100%',
  }
]
