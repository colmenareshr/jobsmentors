import { use } from 'chai'
import { get } from 'http'
import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'

export type ProjectsProps = {
  id: number
  title: string
  description: string
  skills: string[]
  availability: number
}

export type CandidateProps = {
  id: number
  name: string
  email: string
  password: string
  skills: string[]
  img: string
}

export const useStore = () => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false)
  const [isOpenModalSign, setIsOpenModalSign] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState<CandidateProps[]>([])
  const location = window.location.pathname

  const isCantidate = location.includes('/candidate')
  const isCompany = location.includes('/company')
  let pathRoute = ''

  const getItems = async () => {
    if (isCantidate) {
      let pathRoute = 'candidate'
    } else {
      let pathRoute = 'company'
    }

    const response = await fetch('http://localhost:4000/' + `${pathRoute}`)
    const data = await response.json()

    setItems(data)
    // setFilteredItems(data)
  }

  useEffect(() => {
    getItems()
  }, [])

  return {
    isOpenModalLogin,
    setIsOpenModalLogin,
    isOpenModalSign,
    setIsOpenModalSign,
    searchTerm,
    setSearchTerm,
    location,
    items
  }
}
