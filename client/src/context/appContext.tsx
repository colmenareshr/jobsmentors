import React from 'react'
import { createContext } from 'react'
import { Candidate, Company } from './useStore'

export interface AppContextProps {
  isOpenModalLogin: boolean
  setIsOpenModalLogin: (isOpenModalLogin: boolean) => void
  isOpenModalSign: boolean
  setIsOpenModalSign: (isOpenModalSign: boolean) => void
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  candidate: Candidate[]
  setCandidate: (candidate: Candidate[]) => void
  company: Company[]
  setCompany: (company: Company[]) => void
}

export const AppContext = createContext<AppContextProps | null>(null)
