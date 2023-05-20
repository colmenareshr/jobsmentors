import { use } from 'chai'
import { get } from 'http'
import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'

export type CandidateProps = {
  id: number
  name: string
  email: string
  password: string
  skills: string[]
  img: string
}

export interface Root {
  candidate: Candidate[]
  company: Company[]
}

export interface Candidate {
  id: number
  name: string
  email: string
  password: string
  skills: string
  img: string
}

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
  candidate: Candidate2[]
}

export interface Candidate2 {
  id: number
  name: string
  email: string
  skills: string
  img: string
}

export const useStore = () => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false)
  const [isOpenModalSign, setIsOpenModalSign] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [candidates, setCandidates] = useState<CandidateProps[]>([])
  const [company, setCompany] = useState<Company>()
  const location = window.location.pathname

  const getCompanies = async () => {
    const response = await fetch('http://localhost:4000/company')
    const data = await response.json()

    setCompany(data[0] as Company)
  }

  const getCandidates = async () => {
    const response = await fetch('http://localhost:4000/candidate')
    const data = await response.json()

    setCandidates(data as CandidateProps[])
  }

  useEffect(() => {
    getCompanies()
    getCandidates()
  }, [])

  return {
    isOpenModalLogin,
    setIsOpenModalLogin,
    isOpenModalSign,
    setIsOpenModalSign,
    searchTerm,
    setSearchTerm,
    location,
    candidates,
    company
  }
}
