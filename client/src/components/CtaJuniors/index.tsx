import Freelancer from '../../assets/images/hero-Image-jobsmentors.svg'
import contactFreelancer from '../../assets/images/contact-freelancers-jobsmentors.svg'
const CtaJuniors = () => {
  return (
    <section className="relative h-full w-full bg-emerald py-16 text-center">
      <div className="absolute top-[-20%]  md:absolute md:-top-1/3  md:left-1/2 md:-translate-x-1/2 ">
        <img src={Freelancer} alt="/" />
      </div>
      <div className="container-lg mx-auto mt-24 grid md:mt-0 md:grid md:grid-cols-2 md:items-center md:justify-items-center md:px-9">
        <div className="flex flex-col items-center gap-3 text-center text-white md:items-start md:text-left">
          <h2>
            Discover a skilled team to provide the solution your business needs.
          </h2>
          <p className="mb-4">
            Connect with talented junior freelancers ready to tackle your
            technological projects. Find the perfect match for your business
            needs and drive innovation forward.
          </p>
          <a href="#" className="button text-black">
            Get Started Today
          </a>
        </div>
        <div>
          <img className="h-auto w-[500px]" src={contactFreelancer} alt="/" />
        </div>
      </div>
    </section>
  )
}

export default CtaJuniors
