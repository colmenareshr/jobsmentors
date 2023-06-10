import api from 'api'

interface userData {
  email: string
  password: string
  role: string
}

interface loginUserProps {
  email: string
  password: string
}

export const registerUser = async (userData: userData) => {
  try {
    const res = await api.post('/users', userData)
    return res.data
  } catch (error: any) {
    throw error.res.data
  }
}

export const loginUser = async (loginUserProps: loginUserProps) => {
  try {
    const res = await api.post('/login', loginUserProps)
    return res.data
  } catch (error: any) {
    throw error.res.data
  }
}
