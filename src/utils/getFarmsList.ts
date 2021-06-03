import farmsConfig, { GET_FARMS_LIST_URL } from 'config/constants/farms'

const getFarmsList = async () => {
  let data = farmsConfig
  try {
    const response = await fetch(GET_FARMS_LIST_URL)
    data = await response.json()

    return data
  } catch (error) {
    console.error('Unable to fetch farms list:', error)
    return data
  }
}

export default getFarmsList
