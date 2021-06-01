import poolConfig, { GET_POOLS_LIST_URL } from 'config/constants/pools'

const getPoolsList = async () => {
  let data = poolConfig
  try {
    const response = await fetch(GET_POOLS_LIST_URL)
    data = await response.json()

    return data
  } catch (error) {
    console.error('Unable to fetch farms list:', error)
    return data
  }
}

export default getPoolsList
