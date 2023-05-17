import { useEffect, useState } from 'react'

export type ProjectsProps = {
  id: number
  title: string
  description: string
  skills: string[]
  availability: number
}

export const useStore = () => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false)
  const [isOpenModalSign, setIsOpenModalSign] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  return {
    isOpenModalLogin,
    setIsOpenModalLogin,
    isOpenModalSign,
    setIsOpenModalSign,
    searchTerm,
    setSearchTerm
  }
}
