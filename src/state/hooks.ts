import BigNumber from 'bignumber.js'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRefresh from 'hooks/useRefresh'
import { FarmConfig, PoolConfig } from 'config/constants/types'
import { GET_FARMS_LIST_URL } from 'config/constants/farms'
import { GET_POOLS_LIST_URL } from 'config/constants/pools'
import {
  fetchFarmsPublicDataAsync,
  fetchFarmUserDataAsync,
  fetchPoolsPublicDataAsync,
  fetchPoolsUserDataAsync,
} from './actions'
import { setFarmsPublicData } from './farms'
import { setPoolsPublicData } from './pools'
import { State, Farm, Pool, PriceState } from './types'
import { fetchPrices } from './prices'

const ZERO = new BigNumber(0)

export const useFetchPublicData = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync())
    dispatch(fetchPoolsPublicDataAsync())
  }, [dispatch, slowRefresh])
}

// Farms

export const useFarms = (): Farm[] => {
  const farms = useSelector((state: State) => state.farms.data)
  return farms
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid, account) => {
  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  const farm = useFarmFromPid(pid)

  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(pid, account))
    }
  }, [account, dispatch, pid, fastRefresh])

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0),
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
  }
}

export const useGetFarmsList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GET_FARMS_LIST_URL)
        const data: FarmConfig[] = await response.json()

        dispatch(setFarmsPublicData(data))
      } catch (error) {
        console.error('Unable to fetch farms list:', error)
      }
    }

    fetchData()
  }, [dispatch])
}

// Pools
export const usePools = (): Pool[] => {
  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolsUser = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolFromPid = (sousId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
  return pool
}

export const useGetPoolsList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GET_POOLS_LIST_URL)
        const data: PoolConfig[] = await response.json()

        dispatch(setPoolsPublicData(data))
      } catch (error) {
        console.error('Unable to fetch pools list:', error)
      }
    }

    fetchData()
  }, [dispatch])
}

// Prices
export const useFetchPriceList = () => {
  const { slowRefresh } = useRefresh()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPrices())
  }, [dispatch, slowRefresh])
}

export const useGetApiPrices = () => {
  const prices: PriceState['data'] = useSelector((state: State) => state.prices.data)
  return prices
}

export const usePriceBnbBusd = (): BigNumber => {
  const pid = 2 // BUSD-BNB LP
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(1).div(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceCakeBusd = (): BigNumber => {
  const pid = 1 // KEBAB-BUSD LP
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceBtcbBusd = (): BigNumber => {
  const pid = 4 // BTCB-BUSD LP
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceSilver = (): BigNumber => {
  const pid = 17 // KSLV-KEBAB LP
  const farm = useFarmFromPid(pid)
  const kebabPrice = usePriceCakeBusd()
  if (!farm || !farm.tokenPriceVsQuote)
    return ZERO
  const price = new BigNumber(farm.tokenPriceVsQuote).times(kebabPrice)
  return price
}

export const usePriceBusd = (symbol: string): BigNumber => {
  const farm = useFarmFromSymbol(symbol)
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

export const useDashboard = () => {
  const farmsTotal = useSelector((state: State) => state.dashboard.farms)
  const poolsTotal = useSelector((state: State) => state.dashboard.pools)
  const total = farmsTotal.reduce((t, obj) => obj.value + t, 0) + poolsTotal.reduce((t, obj) => obj.value + t, 0)

  return total
}
