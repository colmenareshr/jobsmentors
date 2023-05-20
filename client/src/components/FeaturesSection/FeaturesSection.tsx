import FeaturesCards from 'components/FeaturesCards/FeaturesCards'

const FeaturesSection = () => {
  return (
    <section className="min-h-fill container mx-auto py-20">
      <h2 className="p-3 md:p-10">
        Aproveite o poder dos freelancers Juniors e mentores especializados
      </h2>
      <div className="flex flex-col gap-4 p-5 md:flex-row">
        <FeaturesCards
          image="1"
          title="Serviços de Desenvolvimento Tecnológico"
          text="Soluções de desenvolvimento tecnológico personalizadas, adaptadas às suas necessidades empresariais."
          cta={{ text: 'Explore nossos serviços', link: '#' }}
        />
        <FeaturesCards
          image="2"
          title="Conexão com Freelancers Juniores Altamente Qualificados"
          text="Conecte-se com freelancers Juniors altamente qualificados prontos para enfrentar seus projetos com o maior compromisso."
          cta={{ text: 'Encontre o candidato perfeito', link: '#' }}
        />
        <FeaturesCards
          image="3"
          title="Orientação e Suporte de Mentores Especializados"
          text="Obtenha orientação e suporte de mentores especializados para impulsionar o sucesso do seu projeto."
          cta={{ text: 'Orientação especializada agora', link: '#' }}
        />
      </div>
    </section>
  )
}

export default FeaturesSection
