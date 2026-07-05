import Freelancer from '../../assets/images/hero-Image-jobsmentors.png'
import contactFreelancer from '../../assets/images/contact-freelancers-jobsmentors.png'
import { useTranslation } from 'react-i18next'

const CtaJuniors = () => {
  const { t } = useTranslation()

  return (
    <section className="relative h-full w-full bg-primary py-12 md:py-16 text-center">
      <div className="absolute -top-16 md:-top-1/3 left-1/2 -translate-x-1/2 w-36 md:w-auto">
        <img
          className="z-9 mx-auto"
          src={Freelancer}
          alt="Freelancers Junior"
          loading="lazy"
        />
      </div>
      <div className="container-lg mx-auto mt-16 md:mt-0 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center px-4 md:px-9 gap-8">
        <div className="flex flex-col items-center gap-3 text-center text-white md:w-[80%] md:items-start md:text-left">
          <h2 className="text-2xl md:text-4xl">{t('app.ctajuniors.title')}</h2>
          <p className="mb-4 text-sm md:text-base">{t('app.ctajuniors.comment')}</p>
          <a href="#" className="button">
            {t('app.ctajuniors.button')}
          </a>
        </div>
        <div className="w-full flex justify-center">
          <img className="h-auto w-full max-w-[400px] md:max-w-[500px]" src={contactFreelancer} alt="/" />
        </div>
      </div>
    </section>
  )
}

export default CtaJuniors
