import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import { AppContextProps } from '../../context/appContext'

function ModalLogin() {
  const { isOpen, setIsOpen } = useContext(AppContext) as AppContextProps

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
                    flex justify-center items-center flex-col"
    >
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={handleClose}
        >
          X
        </button>
        <div className="bg-slate-400 rounded p-2">ESTAS LOGUEADO</div>
      </div>
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold p-1 px-4 rounded"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  )
}

export default ModalLogin
