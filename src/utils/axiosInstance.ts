import axios from 'axios'
import { API_BASE } from './constants/envVar.constants'
import { getToken } from './storage'

const axiosInstance = axios.create({
  baseURL: API_BASE,
})

axiosInstance.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default axiosInstance
