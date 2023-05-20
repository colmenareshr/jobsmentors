import { BsLinkedin, BsTwitter } from 'react-icons/bs'
function Footer() {
  return (
    <footer className="bg-teal px-5 pt-14">
      <div className="container mx-auto flex flex-col items-center gap-3 md:flex-row md:items-start md:justify-center">
        <div className="row border-b border-sky pb-4 md:w-[33.33%] md:border-b-0">
          <div className="items-start text-center md:flex md:flex-col md:text-left">
            <span className="text-xl font-bold text-white">JobsMentors</span>
            <p className="py-2 text-white">
              Conectando empresas com talentos juniores, impulsionando o
              crescimento na área de tecnologia.
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
          <div className=" text-center text-white md:text-left">
            <h3 className=" text-white">Serviços</h3>
            <ul>
              <li>
                <a href="">Desenvolvimento de aplicativos móveis</a>
              </li>
              <li>
                <a href="">Desenvolvimento web e design de sites</a>
              </li>
              <li>
                <a href="">Desenvolvimento de software personalizado</a>
              </li>
              <li>
                <a href="">
                  Design de interface do usuário (UI) e experiência do usuário
                  (UX)
                </a>
              </li>
              <li>
                <a href="">
                  Consultoria em tecnologia e assessoria de projetos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className=" text-center text-white md:text-left">
            <h3 className="text-white">Páginas</h3>
            <ul>
              <li>
                <a href="">Sobre nós</a>
              </li>
              <li>
                <a href="">Contato</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Rede</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 border-t border-sky/60 pb-4">
        <div className="text-center text-white md:text-left">
          <p className="pt-4 text-sm text-white/70">
            © Copyrigth 2023 <strong>JobsMentors</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
