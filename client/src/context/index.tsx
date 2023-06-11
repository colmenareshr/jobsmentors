import React, { createContext, useEffect, useState } from 'react'
import { AuthContextProps } from 'interfaces/autContextInterface.ts'
import { User } from 'interfaces/AuthInterfaces'
import jwtDecode from 'jwt-decode'
import { loginUser } from 'api/usersApi'

export const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem('user') ?? 'null')
  )

  const login = async (inputs: { email: string; password: string }) => {
    try {
      const res = await loginUser(inputs)
      const token = res.token
      const decodedToken = jwtDecode(token)
      const decodedTokenObject =
        typeof decodedToken === 'object' ? decodedToken : {}
      setCurrentUser({ token, ...decodedTokenObject } as User)
    } catch (error: any) {
      console.error('Error during login:', error)
      setCurrentUser(null)
      throw error
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
