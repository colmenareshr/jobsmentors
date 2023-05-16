import Navbar from 'components/Navbar/Navbar'

function Header() {
  return (
    <header className="container mx-auto flex h-24 items-center justify-between border-b-2 border-b-sky/50 ">
      <span className="px-3 text-xl font-bold md:text-2xl">JobsMentors</span>
      <Navbar />
    </header>
  )
}

export default Header
