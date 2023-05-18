import { MdCheckCircle } from 'react-icons/md'
import juniorFeaturesImage from '../../assets/images/junior-features-img.svg'
import mentorshipImage from '../../assets/images/mentorship-img.svg'
const JuniorMentor = () => {
  const featuresJuniors = [
    'Cost-effective solutions for your projects',
    'Fresh perspectives and innovative ideas',
    'Passionate learners, eager to grow',
    'Flexible and adaptable to your needs',
    'Quick to adapt to new technologies',
    'Dedicated and committed to delivering quality results'
  ]
  return (
    <section className="w-full py-14">
      <div className="container-lg mx-auto grid text-center md:grid-cols-2 md:items-center md:justify-items-center md:px-5">
        <div className="left-colu md:text-left">
          <h2>Why Choose Junior Freelancers?</h2>
          <ul className="py-4">
            {featuresJuniors.map((feature) => (
              <li
                key={feature.length}
                className="flex items-start gap-2 py-1 text-left"
              >
                <MdCheckCircle className="text-lg text-lilac" size={27} />
                {feature}
              </li>
            ))}
          </ul>
          <a href="#" className="button">
            Get started today
          </a>
        </div>
        <div className="rigth-colu">
          <img
            className="md: m-0 my-3 h-auto w-[500px] p-3"
            src={juniorFeaturesImage}
            alt="Why Choose Junior Freelancers"
          />
        </div>
      </div>
      <section className=" w-full py-6">
        <div className="container-lg mx-auto flex flex-col-reverse md:grid md:grid-cols-2 md:items-center md:justify-items-center ">
          <div className="row-auto">
            <img
              className="md: m-0 my-5 h-auto w-[500px] p-3"
              src={mentorshipImage}
              alt="Mentorship"
            />
          </div>
          <div className="text-center md:w-[80%] md:text-left">
            <h2>Unlock the Power of Expert Mentorship</h2>
            <p className="py-5">
              When you need a technological solution for your business, leverage
              the expertise of our mentors. They are here to guide you through
              the process, provide valuable insights, and ensure the success of
              your projects.
            </p>
            <a href="#" className="button">
              Get started today
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}

export default JuniorMentor
