import FeaturesCards from 'components/FeaturesCards/FeaturesCards'

const FeaturesSection = () => {
  return (
    <section className="min-h-fill container mx-auto py-20">
      <h2 className="p-3 md:p-10">
        Harness the Power of Junior Freelancers and Expert Mentors
      </h2>
      <div className="flex flex-col gap-4 p-5 md:flex-row">
        <FeaturesCards
          image="1"
          title="Technological Development Services"
          text="Customized technological development solutions tailored to meet your
          business needs."
          cta={{ text: 'Explore our tech services', link: '#' }}
        />
        <FeaturesCards
          image="2"
          title="Connection with Highly Skilled Junior Freelancers"
          text="Connect with highly skilled junior freelancers ready to tackle your projects."
          cta={{ text: 'Find your perfect match', link: '#' }}
        />
        <FeaturesCards
          image="3"
          title="Guidance and Support from Expert Mentors"
          text="Get guidance and support from expert mentors to drive your project to success."
          cta={{ text: 'Get expert guidance now', link: '#' }}
        />
      </div>
    </section>
  )
}

export default FeaturesSection
