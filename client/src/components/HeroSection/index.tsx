const HeroSection = () => {
  return (
    <section className="mx-auto flex h-screen flex-col items-center justify-center gap-4 text-center md:mx-auto md:w-[600px] md:pt-40">
      <h1 className="md:text-6xl">
        Find the perfect freelance talent for your technological projects.
      </h1>
      <a href="#" className="button uppercase">
        Get a solution now
      </a>
      <img
        className="z-100"
        src="../src/assets/images/hero-image-jobsmentors.svg"
        alt="JobsMentors"
      />
    </section>
  )
}

export default HeroSection
