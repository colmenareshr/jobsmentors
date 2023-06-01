import CompanyImages from 'components/CompanyImages/CompanyImages'
import { useTranslation } from 'react-i18next'

const BigProjectSection = () => {
  const { t } = useTranslation()
  return (
    <section className="container mx-auto max-w-full bg-[#fff] py-14 text-center">
      <h2>{t('app.bigprojectsection.title')}</h2>
      <div className="flex flex-col-reverse gap-4 py-5 md:flex-row md:items-center md:justify-center md:px-5">
        <div className="md:w-[50%] md:text-left">
          <h3>{t('app.bigprojectsection.subtitle')}</h3>
          <p className="pb-4">{t('app.bigprojectsection.comment')}</p>
          <a href="#" className="button">
            {t('app.bigprojectsection.button')}
          </a>
        </div>
        <div>
          <img
            className="h-auto w-[500px] "
            src="../src/assets/images/build-team-img.png"
            alt="Buil a big team"
          />
        </div>
      </div>
      <CompanyImages />
    </section>
  )
}

export default BigProjectSection
