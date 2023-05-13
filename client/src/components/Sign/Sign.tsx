import React, { Fragment, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import { AppContextProps } from '../../context/appContext'
import ModalSign from './ModalSign'

function Register() {
  const { isOpenModalSign, setIsOpenModalSign } = useContext(
    AppContext
  ) as AppContextProps

  const handleOpen = () => {
    setIsOpenModalSign(true)
  }

  return (
    <Fragment>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 px-4 rounded"
          onClick={() => handleOpen()}
        >
          Sign
        </button>
        {isOpenModalSign && (
          <div className="modal">
            <div className="modal-content">
              <ModalSign />
            </div>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Register
