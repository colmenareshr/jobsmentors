import { useTranslation } from 'react-i18next'

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <section
      className="mt-28 flex min-h-[60vh] w-full flex-col items-center 
                        justify-center gap-6 px-4 py-16 text-center"
    >
      <div className="container mx-auto max-w-4xl">
        <h1 className="pb-6 text-5xl font-bold tracking-tight text-charcoal md:text-7xl leading-tight">
          {t('app.herosection.comment')}
        </h1>
      </div>
      <a href="#" className="button">
        {t('app.herosection.button')}
      </a>
    </section>
  )
}

export default HeroSection
