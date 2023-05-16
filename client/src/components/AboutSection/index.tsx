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
        <h2>Our Journey</h2>
        <p>
          We are a team of skilled freelancers specializing in various areas of
          software development and IT. Our mission is to empower individuals,
          including men, women, people with disabilities, and young
          professionals, by connecting them with their first job opportunities
          in the technology field. Join us on our journey!
        </p>
        <a href="#" className="button uppercase">
          Learn more about us
        </a>
      </div>
    </section>
  )
}

export default AboutSection
