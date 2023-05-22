import { use } from 'chai'
import { get } from 'http'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// export type CandidateProps = {
//   id: number
//   name: string
//   email: string
//   password: string
//   skills: string[]
//   img: string
// }

// export interface Root {
//   candidate: Freelancer[]
//   company: Company[]
// }

// export interface Freelancer {
//   id: number
//   name: string
//   email: string
//   password: string
//   skills: string
//   img: string
// }

// export interface Company {
//   id: number
//   name: string
//   email: string
//   password: string
//   projects: Project[]
// }

// export interface Project {
//   id: number
//   name: string
//   description: string
//   skills: string
//   frelancer: Freelancer2[]
// }

// export interface Freelancer2 {
//   id: number
//   name: string
//   email: string
//   skills: string
//   img: string
// }

export const useStore = () => {
  const { t } = useTranslation()
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false)
  const [isOpenModalSign, setIsOpenModalSign] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  // const [candidates, setCandidates] = useState<CandidateProps[]>([])
  // const [company, setCompany] = useState<Company>()
  // const location = window.location.pathname

  // const getCompanies = async () => {
  //   const response = await fetch('http://localhost:3000/companies')
  //   const data = await response.json()

  //   setCompany(data[0] as Company)
  // }

  // const getFreelancers = async () => {
  //   const response = await fetch('http://localhost:3000/freelancers')
  //   const data = await response.json()

  //   setCandidates(data as CandidateProps[])
  // }

  return {
    isOpenModalLogin,
    setIsOpenModalLogin,
    isOpenModalSign,
    setIsOpenModalSign,
    searchTerm,
    setSearchTerm,
    location
    // candidates,
    // company
  }
}
