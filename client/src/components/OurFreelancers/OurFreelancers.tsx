import FreelancerCard from 'components/FreelancerCard/FreelancerCard'
import { useTranslation } from 'react-i18next'

const OurFreelancers = () => {
  const { t } = useTranslation()
  return (
    <section className="continer mx-auto max-w-full bg-emerald py-14 text-center">
      <h2 className="text-white">{t('app.ourfreelancers.title')}</h2>
      <div className="flex items-center justify-center gap-4 py-12">
        <FreelancerCard />
      </div>
      <div>
        <h3 className="pb-4 text-white">{t('app.ourfreelancers.comment')}</h3>
        <a href="" className="button">
          {t('app.ourfreelancers.button')}
        </a>
      </div>
    </section>
  )
}

export default OurFreelancers
