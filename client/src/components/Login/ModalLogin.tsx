import React, { useContext, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import './modalLogin.css'
import { AppContext, AppContextProps } from 'context/appContext'
import { AuthContext } from 'context'
import { AuthContextProps } from 'interfaces/autContextInterface.ts'
import { useTranslation } from 'react-i18next'

interface Error {
  error: string
  response?: {
    data: {
      message: string
    }
  }
}

function ModalLogin() {
  const { t } = useTranslation()
  const { login } = useContext(AuthContext) as AuthContextProps
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const [err, setError] = useState<Error | null>({
    error: ''
  })
  const { setIsOpenModalLogin, setIsOpenModalSign } = useContext(
    AppContext
  ) as AppContextProps

  const handleClose = () => {
    setIsOpenModalLogin(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(inputs)
    } catch (error: any) {
      if (typeof error === 'string') {
        setError({ error })
      } else if (
        error &&
        typeof error === 'object' &&
        Object.prototype.hasOwnProperty.call(error, 'response') &&
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError({
          error: error.response.data.message,
          response: error.response
        })
      } else {
        setError({ error: 'An error occurred' })
      }
    }
  }

  const handleSignUp = () => {
    setIsOpenModalLogin(false)
    setIsOpenModalSign(true)
  }

  return (
    <form className="form-modalLogin z-50">
      <div className="containerBackground-modalLogin sm:w-full sm:p-2 md:w-[760px] md:pb-3">
        <header className="flex w-full flex-row justify-center">
          <div className="title-ModalLogin">{t('app.loginmodal.title')}</div>
          <button className="header-button-x-ModalLogin" onClick={handleClose}>
            <IoMdClose size={30} />
          </button>
        </header>
        <main className="main-modalLogin">
          <label className="main-label-email-ModalLogin">
            {t('app.loginmodal.email')}
          </label>
          <input
            className="main-input-email-ModalLogin"
            type="email"
            name="email"
            placeholder={t('app.loginmodal.placeholderemail') ?? ''}
            onChange={handleChange}
          />

          <div className="w-full pb-5">
            <label className="label-ModalLogin ml-2 flex pb-1 pr-2 pt-5 font-semibold text-white">
              {t('app.loginmodal.password')}
            </label>
            <input
              className="main-input-password-ModalLogin"
              type="password"
              name="password"
              placeholder={t('app.loginmodal.placeholderpassword') ?? ''}
              onChange={handleChange}
            />
          </div>
        </main>
        {err && <p className="py-3 text-center text-[red]"> {err.error} </p>}
        <div className="footer-buttonGroup-ModalLogin">
          <button
            className="footer-button-Cancelar-ModalLogin md:pr-19 md:pl-19"
            onClick={handleClose}
          >
            {t('app.loginmodal.btncancel')}
          </button>

          <button
            className="footer-button-Entrar-ModalLogin md:px-19 md:pr-19 md:pl-19 rounded-full bg-purple"
            onClick={handleSubmit}
          >
            {t('app.loginmodal.btnlogin')}
          </button>
        </div>
        <div className="py-6 text-center">
          <span>
            {t('app.loginmodal.spanmsg')} &nbsp; &nbsp;
            <button
              type="button"
              onClick={handleSignUp}
              className="font-bold uppercase"
            >
              {t('app.loginmodal.btnsingup')}
            </button>
          </span>
        </div>
      </div>
    </form>
  )
}

export default ModalLogin
