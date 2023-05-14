import React, { Fragment, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import ModalLogin from './ModalLogin'
import { AppContextProps } from '../../context/appContext'

function Login() {
  const { isOpenModalLogin, setIsOpenModalLogin } = useContext(
    AppContext
  ) as AppContextProps

  const handleOpen = () => {
    setIsOpenModalLogin(true)
  }

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 px-4 rounded"
        onClick={() => handleOpen()}
      >
        Login
      </button>
      {isOpenModalLogin && (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="modal-content">
            <ModalLogin />
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
