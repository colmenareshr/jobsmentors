import AboutSection from 'components/AboutSection'
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
    </>
  )
}
export default Home
