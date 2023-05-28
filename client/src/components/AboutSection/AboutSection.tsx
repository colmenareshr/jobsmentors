import { useTranslation } from 'react-i18next'

const AboutSection = () => {
  const { t } = useTranslation()

  return (
    <section
      className="w-full items-center bg-sky 
                py-20 text-center md:justify-center md:gap-4 md:px-10"
    >
      <div
        className="container-lg mx-auto grid items-center 
                    justify-items-start md:grid-cols-2"
      >
        <div className="mx-auto flex">
          <img
            className="mx-auto h-auto w-[300px] md:w-[500px]"
            src="../src/assets/images/about-section-img.png"
            alt="About us"
          />
        </div>
        <div
          className="flex flex-col items-center gap-4 md:w-[80%] 
                    md:items-start md:justify-self-end md:text-left "
        >
          <h2>{t('app.aboutsection.title')}</h2>
          <p>{t('app.aboutsection.comment')}</p>
          <a href="#" className="button uppercase">
            {t('app.aboutsection.button')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
