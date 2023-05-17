import CompanyImages from 'components/CompanyImages'

const BigProjectSection = () => {
  return (
    <section className="container mx-auto max-w-full bg-[#fff] py-14 text-center">
      <h2>Looking for a Development Team for Large-Scale Projects?</h2>
      <div className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-center md:px-5">
        <div className="w-[50%] text-left">
          <h3>Unlock the Potential of Your Projects</h3>
          <p className="pb-4">
            Build your dream team of skilled developers and elevate your
            large-scale projects to new heights. Our platform connects you with
            expert mentors to ensure success every step of the way.
          </p>
          <a href="#" className="button">
            Create your powerhouse team now
          </a>
        </div>
        <div>
          <img
            className="h-auto w-[500px] "
            src="../src/assets/images/build-team-img.svg"
            alt="Buil a big team"
          />
        </div>
      </div>
      <CompanyImages />
    </section>
  )
}

export default BigProjectSection
