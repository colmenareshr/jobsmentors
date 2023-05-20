import { BsLinkedin, BsTwitter } from 'react-icons/bs'
function Footer() {
  return (
    <footer className="bg-teal px-5 pt-14">
      <div className="container mx-auto flex flex-col items-center gap-3 md:flex-row md:items-start md:justify-center">
        <div className="row border-b border-sky pb-4 md:w-[33.33%] md:border-b-0">
          <div className="col-md-12 items-start text-center md:flex md:flex-col md:text-left">
            <span className="text-xl font-bold text-white">JobsMentors</span>
            <p className="py-2 text-white">
              Connecting Businesses with Junior Talents, Empowering Growth in
              Technology.
            </p>
            <div className="flex items-center justify-center gap-3 text-white">
              <a href="#">
                <BsLinkedin size={30} />
              </a>
              <a href="#">
                <BsTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="row border-b border-sky pb-4 md:w-[33.33%] md:border-b-0">
          <div className="col-md-12 text-center text-white md:text-left">
            <h3 className=" text-white">Services</h3>
            <ul>
              <li>
                <a href="">Mobile app development</a>
              </li>
              <li>
                <a href="">Web development and site design</a>
              </li>
              <li>
                <a href="">Custom software development</a>
              </li>
              <li>
                <a href="">
                  User interface (UI) and user experience (UX) design
                </a>
              </li>
              <li>
                <a href="">Technology consulting and project advisory</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center text-white md:text-left">
            <h3 className=" text-white">Pages</h3>
            <ul>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Network</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 border-t border-sky/60 pb-4">
        <div className="col-md-12 text-center text-white md:text-left">
          <p className="pt-4 text-sm text-white/70">
            © Copyrigth 2023 <strong>JobsMentors</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
