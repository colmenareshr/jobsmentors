import AboutSection from 'components/AboutSection'
import BigProjectSection from 'components/BigProjectSection'
import CtaJuniors from 'components/CtaJuniors'
import CtaSection from 'components/CtaSection'
import FeaturesSection from 'components/FeaturesSection'
import JuniorMentor from 'components/JuniorMentorSection'
import OurFreelancers from 'components/OurFreelancers'
import TestimonialSection from 'components/TestimonialSection'
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
