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

  return (
    <main
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md
                flex justify-center items-center flex-col
                border-4 border-yellow-300"
    >
      <div
        className="absolute bg-white bg-opacity-50
                      w-full h-auto rounded-b-3xl rounded-tr-none rounded-tl-lg 
                      pb-3 pl-1 pr-1
                      sm:w-full sm:p-2
                      md:w-[760px] md:pb-3
                      shadow-xl"
      >
        <div className="flex flex-row justify-center w-full">
          <div
            className="title-ModalLogin p-3 mb-3 text-4xl font-bold text-[#39347A]
                          hover:drop-shadow-lg hover:drop-shadow-red-500"
          >
            Acceso a su cuenta
          </div>

          <button
            className="button-x-ModalLogin absolute -right-2 -top-11 
                    bg-white text-black text-xl place-self-end bg-opacity-25 
                    hover:bg-[#39347A] hover:text-orange-200 
                      rounded-md rounded-b-none
                      pt-1 pr-3 pb-1 pl-3 my-auto mr-2 mt-2
                      transition-colors duration-400"
            onClick={handleClose}
          >
            X
          </button>
        </div>

        <div
          className="bg-[#615E88] flex align-items-center justify-center
                          p-3 pt-1 text-xl rounded-md"
        >
          <form className="flex flex-col w-full">
            <label
              className="label-ModalLogin font-semibold
                        pr-2 pb-1  flex ml-2
                      text-purple-200"
            >
              Email
            </label>
            <input
              className="hover:ring-purple-600 hover:shadow-lg 
                          focus:ring-4 focus:ring-purple-600 focus:ring-opacity-40
                          focus:shadow-lg rounded p-2 w-full outline-none"
              type="email"
              placeholder="ejemplo@email.com"
            />
            <div className="w-full">
              <label
                className="label-ModalLogin font-semibold flex
                        text-purple-200 pr-2 pb-1 ml-2 mt-2"
              >
                Clave
              </label>
              <input
                className="hover:ring-purple-600 hover:shadow-lg 
                          focus:ring-4 focus:ring-purple-600 focus:ring-opacity-40
                          focus:shadow-lg rounded p-2 w-full outline-none"
                type="password"
                placeholder="*********"
              />
            </div>
          </form>
        </div>
        <div
          className="buttonGroup-login
                    p-2 pt-3 pb-0 flex justify-between"
        >
          <button
            className="bg-[#39347A] hover:bg-[#642e8d] text-white hover:text-orange-200
                      p-2 px-12
                      md:px-19 md:pr-19 md:pl-19 md:mr-4
                      rounded-full
                      hover:shadow-lg transition-colors duration-500"
            onClick={handleClose}
          >
            Cancelar
          </button>
          <button
            className="bg-[#39347A] hover:bg-[#642e8d] text-white hover:text-cyan-200 
                      px-14
                      md:px-19 md:pr-19 md:pl-19
                      rounded-full
                      transition-colors duration-500"
            onClick={handleClose}
          >
            Entrar
          </button>
        </div>
      </div>
    </main>
  )
}
export default ModalLogin

// <div
//   className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md
//               flex justify-center items-center flex-col
//               sm:flex-cols-1
//             "
// >
//   <div className="w-[600px] flex flex-col bg-white rounded p-4 opacity-60">
//     <button
//       className="text-black text-xl place-self-end hover:bg-[#642e8d] hover:text-white rounded-md
//       pt-0.5 pr-1 pb-1 pl-1.5"
//       onClick={handleClose}
//     >
//       X
//     </button>
//     <div className="title-ModalLogin p-2">
//       Rellene los siguientes datos para ingresar
//     </div>
//     <div className="inputGroup-ModalLogin border-4 border-blue-200 p-2">
//       <div className="">
//         <label className="label-ModalLogin pr-2">Email</label>
//         <input type="text" />
//       </div>
//       <div>
//         <label className="label-ModalLogin pr-2">Clave</label>
//         <input type="text" className="" />
//       </div>
//     </div>
//     <div className="buttonsLogin p-2 flex gap-2 justify-center border-4 border-red-100">
//       <button
//         className="bg-[#171542] hover:bg-[#642e8d] text-white font-bold p-1 px-4 rounded"
//         onClick={handleClose}
//       >
//         Cancelar
//       </button>
//       <button
//         className="bg-[#171542] hover:bg-[#01995c] text-white font-bold p-1 px-4 rounded"
//         onClick={handleClose}
//       >
//         Entrar
//       </button>
//     </div>
//   </div>
// </div>
