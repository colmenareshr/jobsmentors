import { ReactNode, createContext, useEffect, useState } from 'react'
import api from 'api'
import { AuthContextProps } from 'interfaces/autContextInterface'

export const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user') as string) || null
  )

  const login = async (inputs: { email: string; password: string }) => {
    try {
      const res = await api.post('auth/login', inputs)
      setCurrentUser(res.data)
      localStorage.setItem('user', JSON.stringify(res.data))
    } catch (error) {
      // Error management in case of failure to fail
      console.error('Failed to login:', error)
    }
  }
  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('user')
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
