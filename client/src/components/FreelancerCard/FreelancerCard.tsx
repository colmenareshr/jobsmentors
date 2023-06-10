import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FreelancerInfoCard from 'components/FreelancerInfoCard/FreelancerInfoCard'
import { FreelancerUpdateData, getFreelancers } from 'api/freelancersApi'

function FreelancerCard() {
  const [freelancers, setFreelancers] = useState<FreelancerUpdateData[]>([])

  const fetchFreelancers = async () => {
    const res = await getFreelancers()
    console.log(res.data)
    setFreelancers(res.data)
  }

  useEffect(() => {
    fetchFreelancers()
  }, [])

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4">
      {freelancers.map((freelancer: FreelancerUpdateData) => (
        <Link
          className="flex w-[350px] flex-wrap items-center justify-center gap-4"
          key={freelancer.id}
          to={`/freelancer/${freelancer?.user_id}`}
        >
          <FreelancerInfoCard
            image={freelancer.img}
            name={freelancer.name}
            skill={freelancer.hard_skills}
          />
        </Link>
      ))}
    </div>
  )
}

export default FreelancerCard
