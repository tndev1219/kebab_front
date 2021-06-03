import { PoolConfig, QuoteToken, PoolCategory } from './types'

export const GET_POOLS_LIST_URL = 'https://run.mocky.io/v3/e54c1ca3-b087-4143-8457-919dc0630cff'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'KEBAB',
    stakingTokenName: QuoteToken.KEBAB,
    stakingTokenAddress: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2',
    contractAddress: {
      97: '0x3642f8ab6ab7113e0fab27f5434577ad4788f899',
      56: '0x76FCeffFcf5325c6156cA89639b17464ea833ECd',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://kebabfinance.com/',
    harvest: true,
    tokenPerBlock: '0.24924924924',
    sortOrder: 1,
    isFinished: false,
    isActive: true,
    tokenDecimals: 18,
  },
  // {
  //   sousId: 1,
  //   tokenName: 'BTCB',
  //   stakingTokenName: QuoteToken.KEBAB,
  //   stakingTokenAddress: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2',
  //   contractAddress: {
  //     97: '',
  //     56: '0xcbeA91d99993ACF38F9Aabff1aF961b85224DC07',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://www.bitcoin.org/',
  //   harvest: true,
  //   tokenPerBlock: '0.00000011',
  //   sortOrder: 2,
  //   isFinished: false,
  //   isActive: false,
  //   tokenDecimals: 18,
  // },
  // {
  //   sousId: 3,
  //   tokenName: 'BTCB',
  //   stakingTokenName: QuoteToken.KEBAB,
  //   stakingTokenAddress: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2',
  //   contractAddress: {
  //     97: '',
  //     56: '0x345e0ca412a8bbf267502146ad4730fbf778d397',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://www.bitcoin.org/',
  //   harvest: true,
  //   tokenPerBlock: '0.00000025',
  //   sortOrder: 2,
  //   isFinished: true,
  //   isActive: false,
  //   tokenDecimals: 18,
  // },
  {
    sousId: 5,
    tokenName: 'BTCB',
    stakingTokenName: QuoteToken.KEBAB,
    stakingTokenAddress: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2',
    contractAddress: {
      97: '',
      56: '0x3cE0B242b365aa2299434525bcbDbd1e49b1675b',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.bitcoin.org/',
    harvest: true,
    tokenPerBlock: '0.00000035',
    sortOrder: 2,
    isFinished: false,
    isActive: true,
    tokenDecimals: 18,
  },
  {
    sousId: 7,
    tokenName: 'BTCB',
    stakingTokenName: QuoteToken.KEBAB,
    stakingTokenAddress: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2',
    contractAddress: {
      97: '',
      56: '0x3979613F4946D86Fca4BCA889eD084f59a56A49d',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.bitcoin.org/',
    harvest: true,
    tokenPerBlock: '0.00000030',
    sortOrder: 2,
    isFinished: false,
    isActive: true,
    tokenDecimals: 18,
  },
  // {
  //   sousId: 2,
  //   tokenName: 'BNB',
  //   stakingTokenName: QuoteToken.KEBAB,
  //   stakingTokenAddress: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2',
  //   contractAddress: {
  //     97: '',
  //     56: '0xea79479fcafa0db00c6f83a456cf086425d05340',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://www.binance.org',
  //   harvest: true,
  //   tokenPerBlock: '0.00004960',
  //   sortOrder: 3,
  //   isFinished: true,
  //   isActive: false,
  //   tokenDecimals: 18,
  // },
  {
    sousId: 4,
    tokenName: 'BNB',
    stakingTokenName: QuoteToken.KEBAB,
    stakingTokenAddress: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2',
    contractAddress: {
      97: '',
      56: '0x931A250b93249F58373dd3D9834Cda3684eE7dAF',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.binance.org',
    harvest: true,
    tokenPerBlock: '0.00003470',
    sortOrder: 3,
    isFinished: true,
    isActive: false,
    tokenDecimals: 18,
  },
  {
    sousId: 6,
    tokenName: 'BNB',
    stakingTokenName: QuoteToken.KEBAB,
    stakingTokenAddress: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2',
    contractAddress: {
      97: '',
      56: '0x1cdeA426b79aE0df4fe454D44eB3B3a968E8dd1c',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.binance.org',
    harvest: true,
    tokenPerBlock: '0.00002480',
    sortOrder: 3,
    isFinished: false,
    isActive: true,
    tokenDecimals: 18,
  },
]

export default pools
