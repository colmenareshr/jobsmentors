const AboutSection = () => {
  return (
    <section className="container mx-auto max-w-full items-center bg-sky py-20 text-center md:flex md:justify-between md:gap-4 md:px-10">
      <div className="">
        <img
          className="mx-auto h-auto w-[300px] md:w-[500px]"
          src="../src/assets/images/about-section-img.svg"
          alt="About us"
        />
      </div>
      <div className="flex flex-col items-center gap-4 md:w-[50%] md:items-start md:justify-self-end md:text-left ">
        <h2>Nossa Jornada</h2>
        <p>
          Somos uma equipe de freelancers especializados em diversas áreas de
          desenvolvimento de software e TI. Nossa missão é capacitar indivíduos,
          incluindo homens, mulheres, pessoas com deficiência e jovens
          profissionais, conectando-os com suas primeiras oportunidades de
          trabalho no campo da tecnologia. Junte-se a nós em nossa jornada!
        </p>
        <a href="#" className="button uppercase">
          Saiba mais sobre nós
        </a>
      </div>
    </section>
  )
}

export default AboutSection
