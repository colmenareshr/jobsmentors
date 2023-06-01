import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export interface Company {
  id: number
  name: string
  email: string
  password: string
  projects: Project[]
}

export interface Project {
  id: number
  name: string
  description: string
  skills: string
  freelancer: Freelancer2[]
}

export interface Freelancer2 {
  id: number
  name: string
  email: string
  skills: string
  img: string
}

export const useStore = () => {
  const { t } = useTranslation()
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false)
  const [isOpenModalSign, setIsOpenModalSign] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [company, setCompany] = useState<Company>()

  return {
    isOpenModalLogin,
    setIsOpenModalLogin,
    isOpenModalSign,
    setIsOpenModalSign,
    searchTerm,
    setSearchTerm,
    company
  }
}
