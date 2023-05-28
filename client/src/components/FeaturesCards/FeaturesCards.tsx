import { useTranslation } from 'react-i18next'

interface featuresInfo {
  image: string
  title: string
  text: string
  cta: {
    text: string
    link: string
  }
}
const FeaturesCards = ({ image, title, text, cta }: featuresInfo) => {
  const { t } = useTranslation()

  const title2 = t(title)
  const ctaText = t(cta.text)

  return (
    <div className="container">
      <div className="flex flex-col items-center gap-4">
        <img
          src={`../src/assets/images/feature-img-${image}.svg`}
          alt="Explore our tech services"
        />
        <h3>{title2}</h3>
        <p>{text}</p>
        <a href={cta.link} className="button uppercase">
          {ctaText}
        </a>
      </div>
    </div>
  )
}

export default FeaturesCards
