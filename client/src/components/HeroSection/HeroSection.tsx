import { useTranslation } from 'react-i18next'

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <section className="flex h-[50vh] w-full flex-col items-center justify-center gap-4 text-center ">
      <div className="container-lg mx-auto">
        <h1 className="max-w-4xl md:text-6xl">
          {t('app.herosection.comment')}
        </h1>
      </div>
      <a href="#" className="button uppercase">
        {t('app.herosection.button')}
      </a>
    </section>
  )
}

export default HeroSection
