import FreelancerCard from 'components/FreelancerCard/FreelancerCard'

const FreelancersPage = () => {
  return (
    <section className="w-full py-16">
      <div className="container-lg mx-auto text-center">
        <h1 className="mx-auto my-16 max-w-[900px]">
          Find Top Freelancers for Your Tech Projects - Hire Skilled Junior
          Programmers.
        </h1>
        <div className="bg-teal400 py-16">
          <FreelancerCard />
        </div>
      </div>
    </section>
  )
}
export default FreelancersPage
