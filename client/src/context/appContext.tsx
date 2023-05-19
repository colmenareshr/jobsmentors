import React from 'react'
import { createContext } from 'react'

export interface AppContextProps {
  isOpenModalLogin: boolean
  setIsOpenModalLogin: (isOpenModalLogin: boolean) => void
  isOpenModalSign: boolean
  setIsOpenModalSign: (isOpenModalSign: boolean) => void
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
}

export const AppContext = createContext<AppContextProps | null>(null)
