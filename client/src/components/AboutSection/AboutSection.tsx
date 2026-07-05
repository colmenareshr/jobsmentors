import { Link, useNavigate } from 'react-router-dom'

const AboutSection = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/about')
  }
  return (
    <section
      className="w-full items-center bg-mint py-12 md:py-20 px-4 md:px-10 text-center md:justify-center"
    >
      <div
        className="container-lg mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 md:gap-4"
      >
        <div className="mx-auto flex justify-center w-full">
          <img
            className="mx-auto h-auto w-full max-w-[280px] md:max-w-[500px]"
            src="../src/assets/images/about-section-img.png"
            alt="About us"
          />
        </div>
        <div
          className="flex flex-col items-center gap-4 md:w-[80%] md:items-start md:justify-self-end md:text-left"
        >
          <h2 className="text-2xl md:text-4xl">Nossa Jornada</h2>
          <p className="text-sm md:text-base">
            Somos uma equipe de freelancers especializados em diversas áreas de
            desenvolvimento de software e TI. Nossa missão é capacitar
            indivíduos, incluindo homens, mulheres, pessoas com deficiência e
            jovens profissionais, conectando-os com suas primeiras oportunidades
            de trabalho no campo da tecnologia. Junte-se a nós em nossa jornada!
          </p>
          <Link className="button uppercase" to="/about" onClick={handleClick}>
            Saiba mais sobre nos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
