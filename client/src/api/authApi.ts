import api from 'api'

export const registerUser = async (userData: any) => {
  try {
    const response = await api.post('/register', userData)
    return response.data
  } catch (error: any) {
    throw error.response.data
  }
}
