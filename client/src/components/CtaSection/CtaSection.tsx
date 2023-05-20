const CtaSection = () => {
  return (
    <section className="cta-section bg-sky py-14">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-9 mx-auto text-center">
            <h2 className="cta-section__title">Comece hoje mesmo</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 mx-auto flex items-center justify-center gap-4 py-4 text-center">
            <a className="button">Contrate um freelancer</a>
            <a className="button-secondary">Torne-se um mentor</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
