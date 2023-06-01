import AboutSection from 'components/AboutSection/AboutSection'
import BigProjectSection from 'components/BigProjectSection/BigProjectSection'
import CtaJuniors from 'components/CtaJuniors/CtaJuniors'
import CtaSection from 'components/CtaSection/CtaSection'
import FeaturesSection from 'components/FeaturesSection/FeaturesSection'
import JuniorMentor from 'components/JuniorMentorSection/JuniorMentorSection'
import OurFreelancers from 'components/OurFreelancers/OurFreelancers'
import TestimonialSection from 'components/TestimonialSection/TestimonialSection'
function Main() {
  return (
    <main className="container mx-auto  max-w-full bg-white pt-36 text-center">
      <CtaJuniors />
      <FeaturesSection />
      <AboutSection />
      <JuniorMentor />
      <OurFreelancers />
      <BigProjectSection />
      <TestimonialSection />
      <CtaSection />
    </main>
  )
}

export default Main
