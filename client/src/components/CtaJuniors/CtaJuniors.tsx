import Freelancer from '../../assets/images/hero-Image-jobsmentors.png'
import contactFreelancer from '../../assets/images/contact-freelancers-jobsmentors.svg'
const CtaJuniors = () => {
  return (
    <section className="relative h-full w-full bg-emerald py-16 text-center">
      <div className="absolute top-[-20%] md:absolute md:-top-1/3  md:left-1/2 md:-translate-x-1/2 ">
        <img
          className="z-9"
          src={Freelancer}
          alt="Freelancers Junior"
          loading="lazy"
        />
      </div>
      <div className="container-lg mx-auto mt-24 grid md:mt-0 md:grid md:grid-cols-2 md:items-center md:justify-items-center md:px-9">
        <div className="flex flex-col items-center gap-3 text-center text-white md:w-[80%] md:items-start md:text-left">
          <h2>
            Descubra uma equipe habilidosa para fornecer a solução que sua
            empresa precisa.
          </h2>
          <p className="mb-4">
            Conecte-se com talentosos freelancers juniores prontos para
            enfrentar seus projetos tecnológicos. Encontre a combinação perfeita
            para as necessidades de sua empresa e impulsione a inovação.
          </p>
          <a href="#" className="button text-black">
            Comece hoje mesmo
          </a>
        </div>
        <div>
          <img className="h-auto w-[500px]" src={contactFreelancer} alt="/" />
        </div>
      </div>
    </section>
  )
}

export default CtaJuniors
