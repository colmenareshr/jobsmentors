import { useTranslation } from 'react-i18next'

const CtaSection = () => {
  const { t } = useTranslation()
  return (
    <section className="cta-section bg-sky py-14">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-9 mx-auto text-center">
            <h2 className="cta-section__title">{t('app.ctasection.title')}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 mx-auto flex items-center justify-center gap-4 py-4 text-center">
            <a className="button">{t('app.ctasection.button1')}</a>
            <a className="button-secondary">{t('app.ctasection.button2')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
