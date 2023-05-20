import { MdCheckCircle } from 'react-icons/md'
import juniorFeaturesImage from '../../assets/images/junior-features-img.svg'
import mentorshipImage from '../../assets/images/mentorship-img.svg'
const JuniorMentor = () => {
  const featuresJuniors = [
    'Soluções de custo-benefício para seus projetos',
    'Perspectivas frescas e ideias inovadoras',
    'Aprendizes apaixonados, ansiosos para crescer',
    'Flexíveis e adaptáveis às suas necessidades',
    'Rápidos em se adaptar a novas tecnologias',
    'Dedicados e comprometidos em fornecer resultados de qualidade'
  ]
  return (
    <section className="w-full py-14">
      <div className="container-lg mx-auto grid text-center md:grid-cols-2 md:items-center md:justify-items-center md:px-5">
        <div className="left-colu md:text-left">
          <h2>Por que escolher freelancers Juniors?</h2>
          <ul className="py-4">
            {featuresJuniors.map((feature) => (
              <li
                key={feature.length}
                className="flex items-start gap-2 py-1 text-left"
              >
                <MdCheckCircle className="text-lg text-lilac" size={27} />
                {feature}
              </li>
            ))}
          </ul>
          <a href="#" className="button">
            Comece hoje mesmo
          </a>
        </div>
        <div className="rigth-colu">
          <img
            className="md: m-0 my-3 h-auto w-[500px] p-3"
            src={juniorFeaturesImage}
            alt="Why Choose Junior Freelancers"
          />
        </div>
      </div>
      <section className=" w-full py-6">
        <div className="container-lg mx-auto flex flex-col-reverse md:grid md:grid-cols-2 md:items-center md:justify-items-center ">
          <div className="row-auto">
            <img
              className="md: m-0 my-5 h-auto w-[500px] p-3"
              src={mentorshipImage}
              alt="Mentorship"
            />
          </div>
          <div className="text-center md:w-[80%] md:text-left">
            <h2>Desbloqueie o Poder da Mentoria Especializada</h2>
            <p className="py-5">
              Quando você precisa de uma solução tecnológica para o seu negócio,
              aproveite a experiência dos nossos mentores. Eles estão aqui para
              orientá-lo no processo, fornecer insights valiosos e garantir o
              sucesso dos seus projetos.
            </p>
            <a href="#" className="button">
              Comece hoje mesmo
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}

export default JuniorMentor
