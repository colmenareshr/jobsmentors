import { MdCheckCircle } from 'react-icons/md'
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
    <section className="container mx-auto py-14">
      <div className="section-freelancer text-center md:flex md:items-center md:justify-between md:px-5">
        <div className="left-colu md:text-left">
          <h2>Why Choose Junior Freelancers?</h2>
          <ul className="py-4">
            {featuresJuniors.map((feature) => (
              <li
                key={feature.length}
                className="flex items-start gap-2 py-1 text-left"
              >
                <MdCheckCircle className="text-lg text-purple-light" />
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
            className="md: m-0 my-3"
            src="../src/assets/images/junior-features-img.svg"
            alt="Why Choose Junior Freelancers"
          />
        </div>
      </div>
      <div className="section-mentor flex flex-col-reverse md:flex-row md:items-center md:justify-between md:px-5">
        <div className="left-colu ">
          <img
            className="md: m-0 my-5"
            src="../src/assets/images/mentorship-img.svg"
            alt="Mentorship"
          />
        </div>
        <div className="rigth-colu text-center md:w-[50%] md:text-left">
          <h2>Unlock the Power of Expert Mentorship</h2>
          <p className="py-5">
            When you need a technological solution for your business, leverage
            the expertise of our mentors. They are here to guide you through the
            process, provide valuable insights, and ensure the success of your
            projects.
          </p>
          <a href="#" className="button">
            Get started today
          </a>
        </div>
      </div>
    </section>
  )
}

export default JuniorMentor
