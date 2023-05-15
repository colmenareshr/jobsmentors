const HeroSection = () => {
  return (
    <section className="mx-auto flex  h-screen flex-col items-center justify-center gap-4 text-center md:mx-auto md:w-[600px]">
      <h1>Find the perfect freelance talent for your technological projects</h1>
      <button className="button uppercase">Get a solution now</button>
      <img
        src="../src/assets/images/hero-image-jobsmentors.svg"
        alt="JobsMentors"
      />
    </section>
  )
}

export default HeroSection
