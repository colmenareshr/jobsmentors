import Navbar from 'components/Navbar/Navbar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="container mx-auto flex h-24 items-center justify-between border-b-2 border-b-sky/50 ">
      <Link to="/" className="px-3 text-xl font-bold md:text-2xl">
        JobsMentors
      </Link>
      <Navbar />
    </header>
  )
}

export default Header
