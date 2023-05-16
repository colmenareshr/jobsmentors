const CtaJuniors = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap items-center gap-3 md:flex md:w-[50%] md:items-start md:px-20">
        <h2 className="pt-10 text-white">
          Discover a skilled team to provide the solution your business needs.
        </h2>
        <p className="text-white">
          Connect with talented junior freelancers ready to tackle your
          technological projects. Find the perfect match for your business needs
          and drive innovation forward.
        </p>
        <a href="#" className="button uppercase">
          Get Started Today
        </a>
      </div>
      <img
        className="h-auto w-[500px] pb-16"
        src="../src/assets/images/contact-freelancers-jobsmentors.svg"
        alt="Contact Freelancers"
      />
    </>
  )
}

export default CtaJuniors
