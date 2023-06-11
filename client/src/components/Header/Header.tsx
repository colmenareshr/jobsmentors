import Navbar from 'components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import JobMentorLogo from '../../public/JobMentors-logo.png'

function Header() {
  return (
    <header className="container fixed top-0 z-50 mx-auto flex h-28 max-w-full items-center justify-around border-b-2 border-b-sky/50 bg-white">
      <div className="flex  cursor-pointer items-center justify-center">
        <Link to="/">
          <img
            src={JobMentorLogo}
            alt="JobMentor Logo image"
            className="h-auto w-[230px]"
          />
        </Link>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
