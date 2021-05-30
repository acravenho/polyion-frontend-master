import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'LION-USDC LP',
    otherExchange: 'QuickSwap',
    decimal: 18,
    lpAddresses: {
      137: '0x51eD72c3B89A042385e53E4EE85feA18D210ff61',
    },
    tokenSymbol: 'LION',
    tokenAddresses: {
      137: '0x63802aF1f00eEA04Ab93b49B19581177bc5CA104',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'LION',
    decimal: 18,
    lpAddresses: {
      137: '0x51eD72c3B89A042385e53E4EE85feA18D210ff61'
    },
    tokenSymbol: 'LION',
    tokenAddresses: {
      137: '0x63802aF1f00eEA04Ab93b49B19581177bc5CA104'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 1,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WMATIC',
    decimal: 18,
    lpAddresses: {
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  // {
  //   pid: 13,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'DAI',
  //   decimal: 18,
  //   lpAddresses: {
  //     137: '0xf04adbf75cdfc5ed26eea4bbbb991db002036bdd'
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     137: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },
  // {
  //   pid: 6,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'QUICK',
  //   decimal: 18,
  //   lpAddresses: {
  //     137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb'
  //   },
  //   tokenSymbol: 'QUICK',
  //   tokenAddresses: {
  //     137: '0x831753dd7087cac61ab5644b308642cc1c33dc13'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },
  // {
  //   pid: 7,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'KRILL',
  //   decimal: 18,
  //   lpAddresses: {
  //     137: '0x6405ebc22cb0899fc21f414085ac4044b4721a0d'
  //   },
  //   tokenSymbol: 'KRILL',
  //   tokenAddresses: {
  //     137: '0x05089c9ebffa4f0aca269e32056b1b36b37ed71b'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },
  {
    pid: 2,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WETH',
    decimal: 18,
    lpAddresses: {
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d'
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 4,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
    decimal: 6,
    lpAddresses: {
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498'
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  }, 
  {
    pid: 5,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    decimal: 6,
    lpAddresses: {
      137: '0x2cf7252e74036d1da831d11089d326296e64a728'
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
]

export default farms
