const CtaSection = () => {
  return (
    <section className="cta-section bg-sky py-14">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-9 mx-auto text-center">
            <h2 className="cta-section__title">Get started today</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 mx-auto flex items-center justify-center gap-4 py-4 text-center">
            <a className="button">Hire a freelancer</a>
            <a className="button-secondary">Become a Mentor</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
