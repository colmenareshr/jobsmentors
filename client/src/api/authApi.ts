import api from 'api'

interface userData {
  email: string
  password: string
  role: string
}

export const registerUser = async (userData: userData) => {
  try {
    const response = await api.post('/register', userData)
    return response.data
  } catch (error: any) {
    throw error.response.data
  }
}
