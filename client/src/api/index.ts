import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import jwtDecode from 'jwt-decode'

// Create an instance of axios
const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

// get token Access
const getAccessToken = (): string | null => {
  const jwtToken = localStorage.getItem('jwtToken')
  if (jwtToken) {
    const decodedToken = jwtDecode<{ access_token: string }>(jwtToken)
    return decodedToken.access_token
  }
  return null
}

// Add an application interceptor to include access token in the authorization header

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const accessToken = getAccessToken()
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

export default api
