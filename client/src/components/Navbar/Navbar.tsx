import Login from 'components/Login/Login'
import Sign from 'components/Sign/Sign'
import flagEs from '../../assets/images/spain-flag-round-icon.svg'
import flagUs from '../../assets/images/usa-flag-round-circle-icon.svg'
import flagBr from '../../assets/images/brazil-flag-round-circle-icon.svg'
import { useState, useContext } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from 'context/authContext'
import { AuthContextProps } from 'interfaces/autContextInterface'
import { useTranslation } from 'react-i18next'
import { FaAngleDown, FaUserCircle } from 'react-icons/fa'

function Navbar() {
  const storedLang = localStorage.getItem('lang')
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const { currentUser, logout } = useContext(AuthContext) as AuthContextProps
  const [language, setLanguage] = useState(storedLang || 'pt')
  const [nav, setNav] = useState(false)
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleProfileClick = () => {
    if (currentUser) {
      if (currentUser.role === 'company') navigate(`/company/${currentUser.id}`)
      if (currentUser.role === 'freelancer')
        navigate(`/freelancer/${currentUser?.id}`)
    }

    setIsOpen(false)
  }

  const handleLogout = () => {
    logout()
    setIsOpenModalLogin(!isOpenModalLogin)
    navigate('/')
  }

  // Function to handle language change
  function handleLanguage(lang: string) {
    i18n.changeLanguage(lang).then(() => {
      setLanguage(lang)
      localStorage.setItem('lang', lang)
    })
  }

  const getUsernameFromEmail = (email: string) => {
    const parts = email.split('@')
    return parts[0]
  }

  return (
    <nav className="flex items-center justify-between font-semibold">
      <div className="hidden lg:flex">
        <div className="hidden lg:flex lg:items-center lg:pr-4">
          <ul className="md:flex md:gap-4">
            <li>
              <Link to="/about">Sobre nós</Link>{' '}
            </li>
            <li className="hover:text-teal/90">
              <Link to="/freelancers">{t('app.menu.freelancer')}</Link>
            </li>
            <li className="hover:text-teal/90">{t('app.menu.company')}</li>
            <li className="hover:text-teal/90">{t('app.menu.mentors')}</li>
            <li className="hover:text-teal/90">{t('app.menu.howitworks')}</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="items-center justify-between gap-4 md:flex">
            <li className={!currentUser ? 'hover:text-teal/90' : 'hidden'}>
              <Sign />
            </li>
            {currentUser && (
              <li className="group relative">
                <button
                  className="flex items-center gap-2 focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <FaUserCircle size={24} />
                  <span>{getUsernameFromEmail(currentUser.email)}</span>
                  <FaAngleDown
                    size={20}
                    className={`${
                      isOpen ? 'rotate-180' : ''
                    } transition-transform duration-200`}
                  />
                </button>

                {isOpen && (
                  <ul className="absolute right-0 mt-2 rounded border bg-white py-2 shadow-sm">
                    <li>
                      <button
                        className="text-gray-700 hover:bg-gray-100 block w-[100px] px-4 py-2 text-left text-sm"
                        onClick={handleProfileClick}
                      >
                        Ver perfil
                      </button>
                    </li>
                    {/* Add more menu options here */}
                  </ul>
                )}
              </li>
            )}

            <li className="hover:text-teal/90">
              {!currentUser ? (
                <Login />
              ) : (
                <button className="button-secondary" onClick={handleLogout}>
                  {t('app.menu.logout')}
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* DRAWER */}

      <div onClick={handleNav} className="block px-3 lg:hidden">
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
              <Link to="/about">Sobre nós</Link>{' '}
            </li>
            <li>
              <Link to="/freelancers">{t('app.menu.freelancer')}</Link>
            </li>
            <li className="hover:text-teal/90">{t('app.menu.company')}</li>
            <li>{t('app.menu.mentors')}</li>
            <li>{t('app.menu.howitworks')}</li>
          </ul>
          <ul className="flex flex-col gap-3 pt-3">
            <li className={!currentUser ? 'hover:text-teal/90' : 'hidden'}>
              <Sign />
            </li>
            {currentUser && (
              <li className="group relative">
                <button
                  className="flex items-center gap-2 focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <FaUserCircle size={24} />
                  <span>{getUsernameFromEmail(currentUser.email)}</span>
                  <FaAngleDown
                    size={20}
                    className={`${
                      isOpen ? 'rotate-180' : ''
                    } transition-transform duration-200`}
                  />
                </button>

                {isOpen && (
                  <ul className="absolute right-0 mt-2 rounded border bg-white py-2 shadow-sm">
                    <li>
                      <button
                        className="text-gray-700 hover:bg-gray-100 block w-[100px] px-4 py-2 text-left text-sm"
                        onClick={handleProfileClick}
                      >
                        Ver perfil
                      </button>
                    </li>
                    {/* Add more menu options here */}
                  </ul>
                )}
              </li>
            )}
            <li>
              {currentUser ? (
                <button className="button-secondary" onClick={logout}>
                  {t('app.menu.logout')}
                </button>
              ) : (
                <Login />
              )}
            </li>
          </ul>
          <div className="mt-44 flex justify-center gap-4">
            <button value={language} onClick={() => handleLanguage('br')}>
              <img src={flagBr} alt="flagBr" className="h-8 w-8" />
            </button>
            <button value={language} onClick={() => handleLanguage('es')}>
              <img src={flagEs} alt="flagEs" className="h-8 w-8" />
            </button>
            <button value={language} onClick={() => handleLanguage('en')}>
              <img src={flagUs} alt="flagUs" className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden justify-end gap-4 pl-4 md:flex">
        <button value={language} onClick={() => handleLanguage('br')}>
          <img src={flagBr} alt="flagBr" className="h-8 w-8" />
        </button>
        <button value={language} onClick={() => handleLanguage('es')}>
          <img src={flagEs} alt="flagEs" className="h-8 w-8" />
        </button>
        <button value={language} onClick={() => handleLanguage('en')}>
          <img src={flagUs} alt="flagUs" className="h-8 w-8" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar