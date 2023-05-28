import Freelancer from '../../assets/images/hero-Image-jobsmentors.png'
import contactFreelancer from '../../assets/images/contact-freelancers-jobsmentors.png'
import { useTranslation } from 'react-i18next'

const CtaJuniors = () => {
  const { t } = useTranslation()

  return (
    <section className="relative h-full w-full bg-emerald py-16 text-center">
      <div className="absolute top-[-20%] md:absolute md:-top-1/3  md:left-1/2 md:-translate-x-1/2 ">
        <img
          className="z-9"
          src={Freelancer}
          alt="Freelancers Junior"
          loading="lazy"
        />
      </div>
      <div className="container-lg mx-auto mt-24 grid md:mt-0 md:grid md:grid-cols-2 md:items-center md:justify-items-center md:px-9">
        <div className="flex flex-col items-center gap-3 text-center text-white md:w-[80%] md:items-start md:text-left">
          <h2>{t('app.ctajuniors.title')}</h2>
          <p className="mb-4">{t('app.ctajuniors.comment')}</p>
          <a href="#" className="button text-black">
            {t('app.ctajuniors.button')}
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
