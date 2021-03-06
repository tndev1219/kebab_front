import { MenuEntry } from 'kebabfinance-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
    color: '#E46149',
    backgroundColor: '#FADFDB',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://swap.kebabfinance.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://swap.kebabfinance.com/#/pool',
      },
    ],
    color: '#197BBD',
    backgroundColor: '#D1E5F2',
  },
  {
    label: 'Farming',
    icon: 'FarmIcon',
    href: '/farms',
    color: '#11A373',
    backgroundColor: '#CFEDE3',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: '/pools',
    color: '#F7931A',
    backgroundColor: '#FDE9D1',
  },
  {
    label: 'Metals',
    icon: 'KSLVIcon',
    href: '/metals',
    color: '#E8AC7D',
    backgroundColor: 'rgba(232, 172, 125, 0.2)',
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
    color: '#404040',
    backgroundColor: '#D9D9D9',
  },
  {
    label: 'Dashboard',
    icon: 'DashboardIcon',
    href: '/dashboard',
    color: '#7A23BE',
    backgroundColor: '#E4D3F2',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.kebabfinance.com',
      },
      {
        label: 'Tokens',
        href: 'https://info.kebabfinance.com/#/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.kebabfinance.com/#/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.kebabfinance.com/#/accounts',
      },
    ],
    color: '#BC1FAA',
    backgroundColor: '#F2D2EE',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Documentation',
        href: 'https://docs.kebabfinance.com',
      },
      {
        label: 'Github',
        href: 'https://github.com/chefkebab',
      },
      {
        label: 'Blog',
        href: 'https://kebabfinance.medium.com',
      },
    ],
    color: '#DCAB2F',
    backgroundColor: '#F8EED5',
  },
]

export default config
