import { API_BASE } from "../utils/constants/envVar.constants"
import axiosInstance from "../utils/axiosInstance"
import { SignUpFormValues } from "../types/common";


export const loginApi = (data: { email: string; password: string }) =>
  axiosInstance.post(`${API_BASE}/login`, data)

export const signupApi = (data: SignUpFormValues) =>
  axiosInstance.post(`${API_BASE}/signup`, data)
