import React, { createContext, useEffect, useState } from 'react'
import api from 'api'
import { AuthContextProps } from 'interfaces/autContextInterface.ts'
import { User } from 'interfaces/AuthInterfaces'

export const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const fetchCurrentUser = async () => {
    try {
      const token = localStorage.getItem('token')
      if (token) {
        const response = await api.get('/user')
        const user: User = response.data
        setCurrentUser(user)
      }
    } catch (error) {
      console.error('Error obtaining the current user:', error)
    }
  }

  const login = async (inputs: { email: string; password: string }) => {
    try {
      const response = await api.post('/login', inputs)
      const { token } = response.data
      localStorage.setItem('token', token)
      await fetchCurrentUser()
    } catch (error) {
      console.error('Failed to login:', error)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setCurrentUser(null)
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
