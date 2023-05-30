const EquipHero = () => {
  return (
    <section className="equip-hero bg-sky py-20">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-9 mx-auto text-center">
            <h2 className="equip-hero__title">Sobre Nos</h2>
            <h4 className="equip-hero_parag">Em jobsmentors, nosso objetivo é fornecer uma plataforma onde os profissionais possam encontrar oportunidades de trabalho interessantes e se conectar com mentores que são especialistas em suas áreas. Nós nos esforçamos para criar um ambiente de aprendizado colaborativo e apoio mútuo para alimentar nosso crescimento profissional.</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 mx-auto flex items-center justify-center gap-4 py-4 text-center">
            <a className="button">Você é uma Empresa?</a>
            <a className="button-secondary">Seja um Freelancer</a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default EquipHero
