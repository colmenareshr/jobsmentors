import CompanyImages from 'components/CompanyImages/CompanyImages'

const BigProjectSection = () => {
  return (
    <section className="container mx-auto max-w-full bg-[#fff] py-14 text-center">
      <h2>
        Procurando uma equipe de desenvolvimento para projetos de grande escala?
      </h2>
      <div className="flex flex-col-reverse gap-4 py-5 md:flex-row md:items-center md:justify-center md:px-5">
        <div className="md:w-[50%] md:text-left">
          <h3>Desbloqueie o potencial dos seus projetos</h3>
          <p className="pb-4">
            Construa sua equipe dos sonhos de desenvolvedores habilidosos e
            eleve seus projetos de grande escala a novas alturas. Nossa
            plataforma conecta você a mentores especializados para garantir o
            sucesso em cada etapa do caminho.
          </p>
          <a href="#" className="button">
            Crie sua equipe de sucesso agora
          </a>
        </div>
        <div>
          <img
            className="h-auto w-[500px] "
            src="../src/assets/images/build-team-img.png"
            alt="Buil a big team"
          />
        </div>
      </div>
      <CompanyImages />
    </section>
  )
}

export default BigProjectSection
