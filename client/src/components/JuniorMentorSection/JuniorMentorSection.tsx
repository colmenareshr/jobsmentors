import { MdCheckCircle } from 'react-icons/md'
import juniorFeaturesImage from '../../assets/images/junior-features-img.png'
import mentorshipImage from '../../assets/images/mentorship-img.png'
import { useTranslation } from 'react-i18next'

const JuniorMentor = () => {
  const { t } = useTranslation()
  const featuresJuniors = [
    t('app.juniormentorsection.line1'),
    t('app.juniormentorsection.line2'),
    t('app.juniormentorsection.line3'),
    t('app.juniormentorsection.line4'),
    t('app.juniormentorsection.line5'),
    t('app.juniormentorsection.line6')
  ]
  return (
    <section className="w-full py-10 md:py-14 px-4 md:px-5">
      <div className="container-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
        <div className="left-colu w-full max-w-lg md:max-w-none text-left flex flex-col items-start">
          <h2 className="text-2xl md:text-4xl">{t('app.juniormentorsection.title')}</h2>
          <ul className="py-4 w-full">
            {featuresJuniors.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 py-1 text-sm md:text-base">
                <MdCheckCircle className="text-lg text-bulletLilac flex-shrink-0 mt-1" size={20} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="button mt-2">
            {t('app.juniormentorsection.button')}
          </a>
        </div>
        <div className="rigth-colu w-full flex justify-center">
          <img
            className="h-auto w-full max-w-[360px] md:max-w-[500px]"
            src={juniorFeaturesImage}
            alt="Why Choose Junior Freelancers"
          />
        </div>
      </div>
      <section className="w-full py-10 md:py-12 mt-8">
        <div className="container-lg mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center justify-items-center">
          <div className="row-auto w-full flex justify-center">
            <img
              className="h-auto w-full max-w-[360px] md:max-w-[500px]"
              src={mentorshipImage}
              alt="Mentorship"
            />
          </div>
          <div className="w-full max-w-lg md:max-w-[80%] text-left flex flex-col items-start">
            <h2 className="text-2xl md:text-4xl">{t('app.juniormentorsection.title2')}</h2>
            <p className="py-4 text-sm md:text-base">{t('app.juniormentorsection.comment')}</p>
            <a href="#" className="button mt-2">
              {t('app.juniormentorsection.button')}
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}

export default JuniorMentor
