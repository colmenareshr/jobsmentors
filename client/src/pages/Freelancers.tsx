import { useState, useContext } from 'react'
import FreelancerCard from 'components/FreelancerCard/FreelancerCard'
import { AppContext, AppContextProps } from '../context/appContext'

const FreelancersPage = () => {
  const { setIsOpenModalSign } = useContext(AppContext) as AppContextProps
  const [skills, setSkills] = useState([
    {
      speciality: 'Frontend',
      primaryColor: 'bg-teal'
    },
    {
      speciality: 'Backend',
      primaryColor: 'bg-purpleLight'
    },
    {
      speciality: 'QA',
      primaryColor: 'bg-sky'
    },
    {
      speciality: 'Full-Stack',
      primaryColor: 'bg-teal400'
    },
    {
      speciality: 'DBA',
      primaryColor: 'bg-yellow'
    },
    {
      speciality: 'DevOps',
      primaryColor: 'bg-emerald'
    },
    {
      speciality: 'PM',
      primaryColor: 'bg-purple'
    },
    {
      speciality: 'Tech Lead',
      primaryColor: 'bg-orange'
    },
    {
      speciality: 'UX Design',
      primaryColor: 'bg-lilac'
    }
  ])
  const handleOpen = () => {
    setIsOpenModalSign(true)
  }
  return (
    <section className="mt-24 w-full py-16">
      <div className="container-lg mx-auto grid place-items-center justify-items-center gap-9 text-center">
        <h1 className="mx-auto mt-16 max-w-[900px]">
          Encontre os melhores freelancers para seus projetos tecnológicos.
          Contrate programadores Juniors qualificados.
        </h1>
        {skills.map((skill, index) => (
          <div key={index} className={`${skill.primaryColor} w-full py-16`}>
            <h3 className="pb-6 text-center text-xl font-bold text-white md:text-2xl">
              {skill.speciality}
            </h3>
            <FreelancerCard
              title={skill.speciality}
              color={skill.primaryColor}
            />
          </div>
        ))}
        <div className="max-w-[900px] pb-9">
          <h3>Transforme o seu negócio com o poder do talento freelancer</h3>
          <p className="pb-6">
            Encontre talentos freelancers capacitados para seus projetos
            tecnológicos em um só lugar! Potencialize o crescimento da sua
            empresa e obtenha resultados excepcionais. <br />
            Cadastre-se agora e descubra como podemos ajudá-lo a alcançar seus
            objetivos. Não espere mais, o futuro está a apenas um clique de
            distância!
          </p>
          <button className="button" onClick={handleOpen}>
            Cadastre-se e descubra o talento!
          </button>
        </div>
      </div>
    </section>
  )
}
export default FreelancersPage
