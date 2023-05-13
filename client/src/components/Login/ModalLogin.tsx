import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import { AppContextProps } from '../../context/appContext'

function ModalLogin() {
  const { isOpenModalLogin, setIsOpenModalLogin } = useContext(
    AppContext
  ) as AppContextProps
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const handleClose = () => {
    setIsOpenModalLogin(false)
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md
                  flex justify-center items-center flex-col
                "
    >
      <div className="w-[600px] flex flex-col bg-white rounded p-2 opacity-60">
        <button
          className="text-black text-xl place-self-end"
          onClick={handleClose}
        >
          X
        </button>
        <div>
          <label>Email</label>
          <input type="text" />
        </div>
        <div>
          <label>Clave</label>
          <input type="text" />
        </div>
        <button
          className="bg-[#171542] hover:bg-[#322e8d] text-white font-bold p-1 px-4 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}
export default ModalLogin
