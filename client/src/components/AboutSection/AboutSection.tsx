import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AboutSection = () => {
const navigate = useNavigate()
const handleClick = () => {
  navigate('/about')
}
  return (
    <section
      className="w-full items-center bg-sky 
                 py-20 text-center md:justify-center md:gap-4 md:px-10"
    >
      <div
        className="container-lg mx-auto grid items-center 
                    justify-items-start md:grid-cols-2"
      >
        <div className="mx-auto flex">
          <img
            className="mx-auto h-auto w-[300px] md:w-[500px]"
            src="../src/assets/images/about-section-img.png"
            alt="About us"
          />
        </div>
        <div
          className="flex flex-col items-center gap-4 md:w-[80%] 
                    md:items-start md:justify-self-end md:text-left "
        >
          <h2>Nossa Jornada</h2>
          <p>
            Somos uma equipe de freelancers especializados em diversas áreas de
            desenvolvimento de software e TI. Nossa missão é capacitar
            indivíduos, incluindo homens, mulheres, pessoas com deficiência e
            jovens profissionais, conectando-os com suas primeiras oportunidades
            de trabalho no campo da tecnologia. Junte-se a nós em nossa jornada!
          </p>
          <Link className="button uppercase" to="/about" onClick={handleClick}>Saiba mais sobre nos</Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
