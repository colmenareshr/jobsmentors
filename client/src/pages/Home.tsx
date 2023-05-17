import AboutSection from 'components/AboutSection'
import BigProjectSection from 'components/BigProjectSection'
import CtaSection from 'components/CtaSection'
import HeroSection from 'components/HeroSection'
import JuniorMentor from 'components/JuniorMentorSection'
import Main from 'components/Main'
import OurFreelancers from 'components/OurFreelancers'
import TestimonialSection from 'components/TestimonialSection'

function Home() {
  return (
    <>
      <HeroSection />
      <Main />
      <AboutSection />
      <JuniorMentor />
      <OurFreelancers />
      <BigProjectSection />
      <TestimonialSection />
      <CtaSection />
    </>
  )
}

export default Home
