import React, { Fragment, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import { AppContextProps } from '../../context/appContext'
import './modalLogin.css'

function ModalLogin() {
  const { isOpenModalLogin, setIsOpenModalLogin } = useContext(
    AppContext
  ) as AppContextProps

  const handleClose = () => {
    setIsOpenModalLogin(false)
  }

  const handleSubmit = () => {
    alert('Se ha enviado el formulario')
    setIsOpenModalLogin(false)
  }

  return (
    <form className="form-modalLogin " onSubmit={handleSubmit}>
      <div
        className="containerBackground-modalLogin 
                  sm:w-full
                  sm:p-2 md:w-[760px]
                  md:pb-3"
      >
        <header className="flex w-full flex-row justify-center">
          <div className="title-ModalLogin">Acceso a su cuenta</div>

          <button className="header-button-x-ModalLogin" onClick={handleClose}>
            X
          </button>
        </header>

        <main className="main-modalLogin">
          <label className="main-label-email-ModalLogin">Email</label>
          <input
            className="main-input-email-ModalLogin"
            type="email"
            name="email"
            placeholder="ejemplo@email.com"
          />
          <div className="w-full pb-5">
            <label
              className="label-ModalLogin ml-2
                        flex pb-1 pr-2 pt-5 font-semibold text-white"
            >
              Clave
            </label>
            <input
              className="main-input-password-ModalLogin"
              type="password"
              name="password"
              placeholder="**********"
            />
          </div>
        </main>

        <footer className="footer-buttonGroup-ModalLogin">
          <button
            className="footer-button-Cancelar-ModalLogin
                      md:pr-19 
                      md:pl-19 
                      "
            onClick={handleClose}
          >
            Cancelar
          </button>
          <button
            className="footer-button-Entrar-ModalLogin
                      md:px-19 md:pr-19 
                      md:pl-19 rounded-full
                      bg-purple 
                      "
            type="submit"
          >
            Entrar
          </button>
        </footer>
      </div>
    </form>
  )
}
export default ModalLogin
