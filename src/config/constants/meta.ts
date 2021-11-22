import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
	title: 'Ariza Yield',
	description:
		"The ariza AMM on BSC by user count! Earn Ariza's through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by ArizaSwap), NFTs, and more, on a platform you can trust.",
	//  image: 'https://pancakeswap.finance/images/hero.png',
	image: 'https://static.arizapp.com.br/images/banner-bitcoin.jpg',
}
export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ArizaSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('ArizaSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('ArizaSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('ArizaSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('ArizaSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('ArizaSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('ArizaSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('ArizaSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('ArizaSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('ArizaSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('ArizaSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('ArizaSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('ArizaSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('ArizaSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('ArizaSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('ArizaSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('ArizaSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('ArizaSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('ArizaSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('ArizaSwap Info & Analytics')}`,
        description: 'View statistics for ArizaSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('ArizaSwap Info & Analytics')}`,
        description: 'View statistics for ArizaSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('ArizaSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('ArizaSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('ArizaSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Arizacoin Squad')} | ${t('ArizaSwap')}`,
      }
    default:
      return null
  }
}
