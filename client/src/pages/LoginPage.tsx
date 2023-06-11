import React, { useState, useContext } from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import JobMentorsLogo from '../public/JobMentors-logo.png'
import { AuthContext } from 'context'
import { AuthContextProps } from 'interfaces/autContextInterface.ts'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext) as AuthContextProps
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const [err, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(inputs)
      navigate('/')
    } catch (error: any) {
      setError(error || 'Error de inicio de sesión')
      setTimeout(setError, 4000)
    }
  }
  return (
    <div className="mt-20 h-[100vh] w-full bg-sky/20  py-16">
      <div className="container mx-auto flex h-[100%] w-80 flex-col items-center justify-center gap-4 rounded-xl bg-white p-4 text-center shadow-2xl md:w-96">
        <div className="flex flex-col items-center justify-center pt-8">
          <img
            src={JobMentorsLogo}
            alt="JobMentors Logo"
            className="h-auto w-[200px]"
          />
          <span className="text-base font-bold">Inicia tu sesión</span>
        </div>
        <div className="container px-5 py-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-4"
          >
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="Tu email"
              onChange={handleChange}
            />
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Tu contraseña"
              onChange={handleChange}
            />
            <div className="container flex flex-col items-center gap-2">
              {err && <p className="py-3 text-center text-[red]">{err}</p>}
              <span>¿Olvidaste tu contraseña?</span>
              <button
                onClick={handleSubmit}
                className="button flex items-center justify-center gap-2"
              >
                Continuar <IoMdArrowForward />
              </button>
            </div>
          </form>
          <div className="py-6 text-center">
            <div className="relative before:absolute before:inset-x-0 before:top-[50%]  before:h-[1px] before:bg-teal/40">
              <span className="relative z-50 bg-white px-2">
                O continuar con
              </span>
            </div>
            <div className="item-center flex justify-center gap-3 pt-2">
              <a href="">Linkedin</a>
              <a href="">Github</a>
              <a href="">Google</a>
            </div>
            <div className="py-4">
              <span>¿Aún no eres un JobsMentor?</span>{' '}
              <Link to="/register">
                <span className="font-semibold uppercase text-emerald">
                  Regístrate
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
