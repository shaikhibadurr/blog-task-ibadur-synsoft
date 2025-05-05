import { API_BASE } from "../utils/constants/envVar.constants"
import axiosInstance from "../utils/axiosInstance"


export const blogApi = () => axiosInstance.get(`${API_BASE}/blogs`)

