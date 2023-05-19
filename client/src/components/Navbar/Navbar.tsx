import Login from 'components/Login/Login'
import Sign from 'components/Sign/Sign'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="flex items-center justify-between font-semibold">
      <div className="hidden lg:block lg:pr-4">
        <ul className="md:flex md:gap-4">
          <li className="hover:text-teal/90">
            <Link to="/freelancers">Freelancers</Link>
          </li>
          <li className="hover:text-teal/90">
            <Link to="/companies">Empresas</Link>
          </li>
          <li className="hover:text-teal/90">Mentores</li>
          <li className="hover:text-teal/90">Cómo Funciona</li>
        </ul>
      </div>
      <div className="hidden md:block">
        <ul className="items-center justify-between gap-4 md:flex">
          <li className="hover:text-teal/90">Sé un Mentor</li>
          <li className="hover:text-teal/90">
            <Sign />
          </li>
          <li className="hover:text-teal/90">
            <Login />
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
            <li>Freelancers</li>
            <li className="hover:text-teal/90">
              <Link to="/companies">Empresas</Link>
            </li>
            <li>Mentores</li>
            <li>Cómo Funciona</li>
          </ul>
          <ul className="flex flex-col gap-3 pt-3">
            <li>Sé un Mentor</li>
            <li>
              <Sign />
            </li>
            <li>
              <Login />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end gap-4"></div>
    </nav>
  )
}

export default Navbar
