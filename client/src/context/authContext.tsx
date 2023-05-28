import React, { createContext, useEffect, useState } from 'react'
import api from 'api'
import { AuthContextProps } from 'interfaces/autContextInterface.ts'
import { User } from 'interfaces/AuthInterfaces'
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  const [currentUser, setCurrentUser] = useState<User>(
    JSON.parse(localStorage.getItem('user') || null)
  )

  const login = async (inputs: { email: string; password: string }) => {
    const res = await api.post('/login', inputs)
    const data = jwt_decode(res.data.token)
    setCurrentUser(data as User)
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
