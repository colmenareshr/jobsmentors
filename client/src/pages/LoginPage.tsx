import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import JobMentorsLogo from '../public/JobMentors-logo.png'
const LoginPage = () => {
  return (
    <div className="mt-20 h-[100vh] w-full bg-sky/20  py-16">
      <div className="container mx-auto flex min-h-[100px] w-full flex-col items-center justify-center gap-4 rounded-xl bg-white p-12 text-center shadow-2xl md:w-1/2 lg:w-1/3">
        <img
          src={JobMentorsLogo}
          alt="JobMentors Logo"
          className="h-auto w-[250px]"
        />
        <span className="text-base font-bold">Inicia tu sesión</span>
        <div className="container px-5 py-2">
          <form
            action=""
            className="flex flex-col items-center justify-center gap-4"
          >
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="Tu email"
            />
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Tu contraseña"
            />
            <div className="container flex flex-col items-center gap-2">
              <span>¿Olvidaste tu contraseña?</span>
              <button
                type="submit"
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
