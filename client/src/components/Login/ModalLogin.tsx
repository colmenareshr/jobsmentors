import React, { Fragment, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import { AppContextProps } from '../../context/appContext'

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
    <form
      className="border-yellow-300 fixed inset-0 flex flex-col
                items-center justify-center border-4 bg-black
                bg-opacity-25 backdrop-blur-md"
      onSubmit={handleSubmit}
    >
      <div
        className="absolute h-auto w-full
                  rounded-b-3xl rounded-tl-lg rounded-tr-none bg-white/50
                  pb-3 pl-1 pr-1
                  shadow-xl sm:w-full
                  sm:p-2 md:w-[760px]
                  md:pb-3"
      >
        <div className="flex w-full flex-row justify-center">
          <div
            className="title-ModalLogin hover:drop-shadow-red-500 p-3
                      text-2xl text-purple
                      md:text-3xl"
          >
            Acceso a su cuenta
          </div>

          <button
            className="button-x-ModalLogin duration-400
                      absolute -right-2 
                      -top-10 my-auto mr-2 mt-2 
                      place-self-end rounded-md 
                      rounded-b-none
                      bg-white bg-opacity-30
                      pl-3 pr-3 pt-0.5 text-lg transition-colors 
                      hover:bg-purple hover:text-white hover:shadow-none"
            onClick={handleClose}
          >
            X
          </button>
        </div>

        <div
          className="align-items-center flex justify-center rounded-md
                          bg-purpleLight p-3 pt-1 text-xl"
        >
          <div className="flex w-full flex-col">
            <label
              className="label-ModalLogin ml-2
                        flex pb-1 pr-2 pt-5 font-semibold
                      text-white"
            >
              Email
            </label>
            <input
              className="
                        w-full rounded 
                        p-2 outline-none hover:shadow-lg
                      hover:ring-purple
                        focus:shadow-lg focus:ring-4 focus:ring-purple focus:ring-opacity-90"
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
                className="
                          w-full rounded 
                          p-2 outline-none hover:shadow-lg
                        hover:ring-purple
                          focus:shadow-lg focus:ring-4 focus:ring-purple focus:ring-opacity-90"
                type="password"
                name="password"
                placeholder="**********"
              />
            </div>
          </div>
        </div>
        <div
          className="buttonGroup-login
                    flex justify-between p-2 pb-0 pt-3"
        >
          <button
            className="
                      md:pr-19 
                      md:pl-19 xs:pr-10 xs:pl-10 rounded-full
                      bg-purple p-2
                      px-12 text-white transition-colors duration-500
                      hover:bg-purpleHover hover:text-white hover:shadow-lg
                       "
            onClick={handleClose}
          >
            Cancelar
          </button>
          <button
            className="hover:text-cyan-200 md:px-19 md:pr-19 md:pl-19 
                      rounded-full
                      bg-purple px-14 text-white
                      transition-colors
                      duration-500 hover:bg-purpleHover"
            type="submit"
          >
            Entrar
          </button>
        </div>
      </div>
    </form>
  )
}
export default ModalLogin
