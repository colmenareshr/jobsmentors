import React from 'react'
import { User } from './AuthInterfaces'

export interface AuthContextProps {
  currentUser: User | null
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>
  login: (inputs: { email: string; password: string }) => Promise<void>
  logout: () => void
}
