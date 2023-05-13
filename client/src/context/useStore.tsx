import { useEffect, useState } from 'react'

export const useStore = () => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false)
  const [isOpenModalSign, setIsOpenModalSign] = useState(false)

  return {
    isOpenModalLogin,
    setIsOpenModalLogin,
    isOpenModalSign,
    setIsOpenModalSign
  }
}
