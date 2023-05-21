import React, { useContext, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import './modalLogin.css'
import { AppContext, AppContextProps } from 'context/appContext'
import { useNavigate } from 'react-router-dom'
import api from 'api'

function ModalLogin() {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const [err, setError] = useState<string>('')
  const { setIsOpenModalLogin } = useContext(AppContext) as AppContextProps
  const navigate = useNavigate()

  const handleClose = () => {
    setIsOpenModalLogin(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/login', inputs)
      setIsOpenModalLogin(false)
      navigate('/')
    } catch (err: any) {
      setError(err.response.data.message)
    }
  }

  return (
    <form className="form-modalLogin z-50">
      <div className="containerBackground-modalLogin sm:w-full sm:p-2 md:w-[760px] md:pb-3">
        <header className="flex w-full flex-row justify-center">
          <div className="title-ModalLogin">Acceso a tu cuenta</div>
          <button className="header-button-x-ModalLogin" onClick={handleClose}>
            <IoMdClose size={30} />
          </button>
        </header>
        <main className="main-modalLogin">
          <label className="main-label-email-ModalLogin">Email</label>
          <input
            className="main-input-email-ModalLogin"
            type="email"
            name="email"
            placeholder="example@email.com"
            onChange={handleChange}
          />

          <div className="w-full pb-5">
            <label className="label-ModalLogin ml-2 flex pb-1 pr-2 pt-5 font-semibold text-white">
              Contraseña
            </label>
            <input
              className="main-input-password-ModalLogin"
              type="password"
              name="password"
              placeholder="**********"
              onChange={handleChange}
            />
          </div>
        </main>
        <div className="text-center">
          {err && <p className="text-red">{err}</p>}
        </div>
        <div className="footer-buttonGroup-ModalLogin">
          <button
            className="footer-button-Cancelar-ModalLogin md:pr-19 md:pl-19"
            onClick={handleClose}
          >
            Cancelar
          </button>
          <button
            className="footer-button-Entrar-ModalLogin md:px-19 md:pr-19 md:pl-19 rounded-full bg-purple"
            type="submit"
            onClick={handleSubmit}
          >
            Entrar
          </button>
        </div>
        <div className="py-6 text-center">
          <span>
            Ainda não sou usuário{' '}
            <button className="font-bold uppercase">Criar Conta</button>
          </span>
        </div>
      </div>
    </form>
  )
}
export default ModalLogin
