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
    <section className="w-full py-14">
      <div className="container-lg mx-auto grid text-center md:grid-cols-2 md:items-center md:justify-items-center md:px-5">
        <div className="left-colu md:text-left">
          <h2>{t('app.juniormentorsection.title')}</h2>
          <ul className="py-4">
            {featuresJuniors.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 py-1 text-left">
                <MdCheckCircle className="text-lg text-lilac" size={27} />
                {feature}
              </li>
            ))}
          </ul>
          <a href="#" className="button">
            {t('app.juniormentorsection.button')}
          </a>
        </div>
        <div className="rigth-colu">
          <img
            className="md: m-0 my-3 h-auto w-[500px] p-3"
            src={juniorFeaturesImage}
            alt="Why Choose Junior Freelancers"
          />
        </div>
      </div>
      <section className=" w-full py-6">
        <div className="container-lg mx-auto flex flex-col-reverse md:grid md:grid-cols-2 md:items-center md:justify-items-center ">
          <div className="row-auto">
            <img
              className="md: m-0 my-5 h-auto w-[500px] p-3"
              src={mentorshipImage}
              alt="Mentorship"
            />
          </div>
          <div className="text-center md:w-[80%] md:text-left">
            <h2>{t('app.juniormentorsection.title2')}</h2>
            <p className="py-5">{t('app.juniormentorsection.comment')}</p>
            <a href="#" className="button">
              {t('app.juniormentorsection.button')}
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}

export default JuniorMentor
