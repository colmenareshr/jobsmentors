import Navbar from 'components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t } = useTranslation()
  return (
    <header className="container mx-auto flex h-24 items-center justify-between border-b-2 border-b-sky/50 ">
      <span className="px-3 text-xl font-bold md:text-2xl">
        <Link to="/">{t('app.title')}</Link>
      </span>
      <Navbar />
    </header>
  )
}

export default Header
