import Login from 'components/Login/Login'
import Sign from 'components/Sign/Sign'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AuthContext } from 'context/authContext'
import { useContext } from 'react'
import { AuthContextProps } from 'interfaces/autContextInterface'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext, AppContextProps } from 'context/appContext'

function Navbar() {
  const navigate = useNavigate()
  const { setIsOpenModalLogin } = useContext(AppContext) as AppContextProps
  const { currentUser, login, logout } = useContext(
    AuthContext
  ) as AuthContextProps
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  useEffect(() => {
    console.log(currentUser)
    if (currentUser) {
      if (currentUser.role === 'company') navigate('/company')
      if (currentUser.role === 'freelancer') navigate('/freelancers')
      setIsOpenModalLogin(false)
    }
    if (!currentUser) navigate('/')
  }, [currentUser])

  return (
    <nav className="flex items-center justify-between font-semibold">
      <div className="hidden lg:block lg:pr-4">
        <ul className="md:flex md:gap-4">
          <li className="hover:text-teal/90">
            <Link to="/freelancers">Freelancers</Link>
          </li>
          <li className="hover:text-teal/90">
            <Link to="/company">Empresas</Link>
          </li>
          <li className="hover:text-teal/90">Mentores</li>
          <li className="hover:text-teal/90">Como Funciona</li>
        </ul>
      </div>
      <div className="hidden md:block">
        <ul className="items-center justify-between gap-4 md:flex">
          <li className="hover:text-teal/90">Seja um Mentor</li>
          <li className="hover:text-teal/90">
            <Sign />
          </li>
          <li className="hover:text-teal/90">
            {!currentUser?.id ? (
              <Login />
            ) : (
              <button className="button-secondary" onClick={() => logout()}>
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
      <div onClick={handleNav} className="block px-3 md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        <div
          className={
            !nav
              ? 'fixed right-[-100%]'
              : 'fixed right-0 top-24 z-30 h-full w-[50%] border-l border-l-sky bg-white px-3 text-left duration-500 ease-in-out'
          }
        >
          <ul className="flex flex-col gap-3 pt-12">
            <li>
              <Link to="/freelancers">Freelancers</Link>
            </li>
            <li className="hover:text-teal/90">
              <Link to="/company">Empresas</Link>
            </li>
            <li>Mentores</li>
            <li>Como Funciona</li>
          </ul>
          <ul className="flex flex-col gap-3 pt-3">
            <li>Seja um Mentor</li>
            <li>
              <Sign />
            </li>
            <li>
              {!currentUser?.id ? (
                <Login />
              ) : (
                <button className="button-secondary" onClick={() => logout()}>
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end gap-4"></div>
    </nav>
  )
}

export default Navbar
