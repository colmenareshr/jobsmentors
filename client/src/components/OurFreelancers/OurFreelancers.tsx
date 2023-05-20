import FreelancerCard from 'components/FreelancerCard/FreelancerCard'

const OurFreelancers = () => {
  return (
    <section className="continer mx-auto max-w-full bg-emerald py-14 text-center">
      <h2 className="text-white">Conheça nossos talentosos freelancers</h2>
      <div className="flex items-center justify-center gap-4 py-12">
        <FreelancerCard />
      </div>
      <div>
        <h3 className="pb-4 text-white">
          Capacite seus projetos com freelancers excepcionais
        </h3>
        <a href="" className="button">
          Contrate um freelancer agora
        </a>
      </div>
    </section>
  )
}

export default OurFreelancers
