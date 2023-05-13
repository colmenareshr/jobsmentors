import React from 'react'
import { createContext } from 'react'

export interface AppContextProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const AppContext = React.createContext<AppContextProps | null>(null)
