import { useEffect, useState } from 'react'

export const useStore = () => {
  const [isOpen, setIsOpen] = useState(false)

  return {
    isOpen,
    setIsOpen
  }
}
