import Login from 'components/Login/Login'
import Sign from 'components/Sign/Sign'
import { useState, useContext, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AuthContext } from 'context/authContext'
import { AuthContextProps } from 'interfaces/autContextInterface'
import { useTranslation } from 'react-i18next'
import flagEs from '../../assets/images/spain-flag-round-icon.svg'
import flagUs from '../../assets/images/usa-flag-round-circle-icon.svg'
import flagBr from '../../assets/images/brazil-flag-round-circle-icon.svg'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const { i18n } = useTranslation()
  const { t } = useTranslation()
  const storedLang = localStorage.getItem('lang')
  const [language, setLanguage] = useState(storedLang || 'pt')
  const { currentUser, logout } = useContext(AuthContext) as AuthContextProps
  const [nav, setNav] = useState(false)
  const navegate = useNavigate()
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    console.log({ currentUser })
    if (currentUser) {
      if (currentUser.role === 'company') navegate('/company/landingpage')
      if (currentUser.role === 'freelancer')
        navegate('/freelancers/landingpage')
      setIsOpenModalLogin(false)
    }
    if (!currentUser) navegate('/')
  }, [currentUser])

  // Function to handle language change
  function handleLanguage(lang: string) {
    i18n.changeLanguage(lang).then(() => {
      setLanguage(lang)
      localStorage.setItem('lang', lang)
    })
  }

  return (
    <nav className="flex items-center justify-between font-semibold">
      <div className="hidden lg:flex">
        <div className="hidden lg:block lg:pr-4">
          <ul className="md:flex md:gap-4">
            <li className="hover:text-teal/90">
              <Link to="/freelancers">{t('app.menu.freelancer')}</Link>
            </li>
            <li className="hover:text-teal/90">
              <Link to="/company/landingpage">{t('app.menu.company')}</Link>
            </li>
            <Link to="/freelancers/landingpage">
              <li className="hover:text-teal/90">{t('app.menu.mentors')}</li>
            </Link>
            <li className="hover:text-teal/90">{t('app.menu.howitworks')}</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="items-center justify-between gap-4 md:flex">
            <li className={!currentUser ? 'hover:text-teal/90' : 'hidden'}>
              <Sign />
            </li>

            <li className="hover:text-teal/90">
              {!currentUser ? (
                <Login />
              ) : (
                <button className="button-secondary" onClick={() => logout()}>
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
              <Link to="/freelancers">{t('app.menu.freelancer')}</Link>
            </li>
            <li className="hover:text-teal/90">
              <Link to="/company/landingpage">{t('app.menu.company')}</Link>
            </li>
            <li>{t('app.menu.mentors')}</li>
            <li>{t('app.menu.howitworks')}</li>
          </ul>
          <ul className="flex flex-col gap-3 pt-3">
            <li>{t('app.menu.becomeamentor')}</li>
            <li className={!currentUser ? 'hover:text-teal/90' : 'hidden'}>
              <Sign />
            </li>
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
