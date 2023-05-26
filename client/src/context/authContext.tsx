import React, { createContext, useEffect, useState } from 'react'
import api from 'api'
import { AuthContextProps } from 'interfaces/autContextInterface.ts'
import { User } from 'interfaces/AuthInterfaces'

export const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  const [currentUser, setCurrentUser] = useState<User>(
    JSON.parse(localStorage.getItem('user') || null)
  )

  const login = async (inputs: { email: string; password: string }) => {
    try {
      const res = await api.post('/login', inputs)
      setCurrentUser(res.data as User)
    } catch (error) {
      console.error('Failed to login:', error)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    delete api.defaults.headers.common.Authorization
    setCurrentUser(null)
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
