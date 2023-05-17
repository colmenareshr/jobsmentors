import AboutSection from 'components/AboutSection'
import BigProjectSection from 'components/BigProjectSection'
import HeroSection from 'components/HeroSection'
import JuniorMentor from 'components/JuniorMentorSection'
import Main from 'components/Main'
import OurFreelancers from 'components/OurFreelancers'

function Home() {
  return (
    <>
      <HeroSection />
      <Main />
      <AboutSection />
      <JuniorMentor />
      <OurFreelancers />
      <BigProjectSection />
    </>
  )
}

export default Home
