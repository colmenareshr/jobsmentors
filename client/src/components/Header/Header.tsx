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
    <header className="container mx-auto flex h-24 items-center justify-between border-b-2 border-b-sky/50 ">
      <div className="w-24 cursor-pointer" onClick={handleClick}>
        <img src={JobMentorLogo} alt="JobMentor Logo image" />
      </div>
      <span className="px-3 text-xl font-bold md:text-2xl">
        <Link to="/">{t('app.title')}</Link>
      </span>
      <Navbar />
    </header>
  )
}

export default Header
