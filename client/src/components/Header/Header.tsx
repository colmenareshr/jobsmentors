import Navbar from 'components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import JobMentorLogo from '../../assets/images/JobMentors-Logo.svg'
import { useNavigate } from 'react-router-dom'

function Header() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <header
      className="container fixed top-0 z-50 mx-auto flex h-28 
                max-w-full items-center justify-around 
                border-b-2 border-b-sky/50 bg-white 
                "
    >
      <div
        className="flex w-24 cursor-pointer items-center justify-center"
        onClick={handleClick}
      >
        <img
          src={JobMentorLogo}
          alt="JobMentor Logo image"
          className="w-10 
                    sm:w-10 
                    md:w-20"
        />
        <span className="px-3 text-lg font-bold md:text-2xl">
          <Link to="/">{t('app.title')}</Link>
        </span>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
