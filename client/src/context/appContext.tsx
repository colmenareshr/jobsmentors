import { createContext } from 'react'
// import { Candidate, Company } from './useStore'
import { User } from 'interfaces/AuthInterfaces'
// import { currentUser, setCurrenUser } from './authContext'

export interface AppContextProps {
  isOpenModalLogin: boolean
  setIsOpenModalLogin: (isOpenModalLogin: boolean) => void
  isOpenModalSign: boolean
  setIsOpenModalSign: (isOpenModalSign: boolean) => void
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  // candidate: Candidate[]
  // setCandidate: (candidate: Candidate[]) => void
  // company: Company[]
  // setCompany: (company: Company[]) => void
  // currentUser: User[]
  // setCurrentUser: (currentUser: User[]) => void
}

export const AppContext = createContext<AppContextProps | null>(null)
