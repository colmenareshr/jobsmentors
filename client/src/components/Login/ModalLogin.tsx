import { useContext, useState, useEffect } from 'react'
import { AppContext, AppContextProps } from '../../context/appContext'
import { IoMdClose } from 'react-icons/io'
import './modalLogin.css'
import { useNavigate } from 'react-router-dom'

function ModalLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { isOpenModalLogin, setIsOpenModalLogin } = useContext(
    AppContext
  ) as AppContextProps

  const handleClose = () => {
    setIsOpenModalLogin(false)
  }

  // Login validation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (email.trim() !== '') {
      if (email === 'c@c') {
        setIsLoggedIn(true)
        return navigate('/company')
      } else {
        setIsOpenModalLogin(false)
        return navigate('/candidate')
      }
    }
    console.log('hola')
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <form className="form-modalLogin z-50" onSubmit={(e) => handleSubmit(e)}>
      <div
        className="containerBackground-modalLogin 
                  sm:w-full
                  sm:p-2 md:w-[760px]
                  md:pb-3"
      >
        <header className="flex w-full flex-row justify-center">
          <div className="title-ModalLogin">Acesso à sua conta</div>

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
            value={email}
            placeholder="exemplo@email.com"
            onChange={(e) => handleEmailChange(e)}
          />
          <div className="w-full pb-5">
            <label
              className="label-ModalLogin ml-2
                        flex pb-1 pr-2 pt-5 font-semibold text-white"
            >
              Senha
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
            value={email}
          >
            Entrar
          </button>
        </footer>
      </div>
    </form>
  )
}
export default ModalLogin
