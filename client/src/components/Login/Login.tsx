import React, { Fragment, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import ModalLogin from './ModalLogin'
import { AppContextProps } from '../../context/appContext'

function Login() {
  const { isOpen, setIsOpen } = useContext(AppContext) as AppContextProps

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <Fragment>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 px-4 rounded"
          onClick={() => handleOpen()}
        >
          Login
        </button>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <ModalLogin />
            </div>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Login
