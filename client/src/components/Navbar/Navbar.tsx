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
import { useTranslation } from 'react-i18next'
import flagEs from '../../assets/images/spain-flag-round-icon.svg'
import flagUs from '../../assets/images/usa-flag-round-circle-icon.svg'
import flagBr from '../../assets/images/brazil-flag-round-circle-icon.svg'

function Navbar() {
  const { i18n } = useTranslation()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const storedLang = localStorage.getItem('lang')
  const [language, setLanguage] = useState(storedLang || 'pt')
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

  // Function to handle language change
  function handleLanguage(lang: string) {
    console.log(lang)
    // const lang = event.target.value
    i18n.changeLanguage(lang).then(() => {
      setLanguage(lang)
      localStorage.setItem('lang', lang)
    })
  }

  return (
    <nav className="flex items-center justify-between font-semibold">
      <div className="hidden lg:block lg:pr-4">
        <ul className="md:flex md:gap-4">
          <li className="hover:text-teal/90">
            <Link to="/freelancers">{t('app.menu.freelancer')}</Link>
          </li>
          <li className="hover:text-teal/90">
            <Link to="/company">{t('app.menu.company')}</Link>
          </li>
          <li className="hover:text-teal/90">{t('app.menu.mentors')}</li>
          <li className="hover:text-teal/90">{t('app.menu.howitworks')}</li>
        </ul>
      </div>
      <div className="hidden md:block">
        <ul className="items-center justify-between gap-4 md:flex">
          <li className="hover:text-teal/90">{t('app.menu.becomeamentor')}</li>
          <li className="hover:text-teal/90">
            <Sign />
          </li>
          <li className="hover:text-teal/90">
            {!currentUser?.id ? (
              <Login />
            ) : (
              <button className="button-secondary" onClick={() => logout()}>
                {t('app.menu.logout')}
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
              <Link to="/freelancers">{t('app.menu.freelancer')}</Link>
            </li>
            <li className="hover:text-teal/90">
              <Link to="/company">{t('app.menu.company')}</Link>
            </li>
            <li>{t('app.menu.mentors')}</li>
            <li>{t('app.menu.howitworks')}</li>
          </ul>
          <ul className="flex flex-col gap-3 pt-3">
            <li>{t('app.menu.becomeamentor')}</li>
            <li>
              <Sign />
            </li>
            <li>
              {!currentUser?.id ? (
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

      <div className="flex justify-end gap-4 pl-4">
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
