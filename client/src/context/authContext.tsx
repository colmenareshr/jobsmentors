import React, { createContext, useEffect, useState } from 'react'
import api from 'api'
import { AuthContextProps } from 'interfaces/autContextInterface.ts'
import { User } from 'interfaces/AuthInterfaces'
import jwtDecode from 'jwt-decode'

export const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem('user') ?? 'null')
  )

  const login = async (inputs: { email: string; password: string }) => {
    const res = await api.post('/login', inputs)
    const token = res.data.token
    try {
      const decodedToken = jwtDecode(token)
      setCurrentUser({ token, ...decodedToken } as User)
    } catch (error) {
      'Error decoding token:', error
      setCurrentUser(null)
    }
  }

  const logout = () => {
    setCurrentUser(null)
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
