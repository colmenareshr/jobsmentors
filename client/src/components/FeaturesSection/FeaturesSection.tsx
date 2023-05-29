import FeaturesCards from 'components/FeaturesCards/FeaturesCards'
import { useTranslation } from 'react-i18next'

const FeaturesSection = () => {
  const { t } = useTranslation()
  return (
    <section className="min-h-fill container mx-auto py-20">
      <h2 className="p-3 md:p-10">
        {t('app.featuresection.title')}
        {/* Aproveite o poder dos freelancers Juniors e mentores especializados */}
      </h2>
      <div className="flex flex-col gap-4 p-5 md:flex-row">
        <FeaturesCards
          image="1"
          title={t('app.featuresection.cards.card1.title')}
          text={t('app.featuresection.cards.card1.text')}
          cta={{ text: t('app.featuresection.cards.card1.button'), link: '#' }}
        />
        <FeaturesCards
          image="2"
          title={t('app.featuresection.cards.card2.title')}
          text={t('app.featuresection.cards.card2.text')}
          cta={{ text: t('app.featuresection.cards.card2.button'), link: '#' }}
        />
        <FeaturesCards
          image="3"
          title={t('app.featuresection.cards.card3.title')}
          text={t('app.featuresection.cards.card3.text')}
          cta={{ text: t('app.featuresection.cards.card3.button'), link: '#' }}
        />
      </div>
    </section>
  )
}

export default FeaturesSection
