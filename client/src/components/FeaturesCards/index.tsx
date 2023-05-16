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
  return (
    <div className="container">
      <div className="flex flex-col items-center gap-4">
        <img
          src={`../src/assets/images/feature-img-${image}.svg`}
          alt="Explore our tech services"
        />
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={cta.link} className="button uppercase">
          {cta.text}
        </a>
      </div>
    </div>
  )
}

export default FeaturesCards
