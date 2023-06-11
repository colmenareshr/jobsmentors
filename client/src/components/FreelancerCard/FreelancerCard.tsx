import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InfoCard from 'components/InfoCard'
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
          <InfoCard image={freelancer.img} name={freelancer.name}>
            <h3>{freelancer.name}</h3>
            <span>{freelancer.hard_skills}</span>
          </InfoCard>
        </Link>
      ))}
    </div>
  )
}

export default FreelancerCard
