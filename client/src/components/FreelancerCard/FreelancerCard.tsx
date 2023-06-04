import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { AuthContextProps } from '../../interfaces/autContextInterface'
import api from 'api'
import { Link } from 'react-router-dom'
import FreelancerInfoCard from 'components/FreelancerInfoCard/FreelancerInfoCard'

interface Freelancer {
  id: number
  img: string
  name: string
  hard_skills: string
  user_id: number
}

function FreelancerCard() {
  const { currentUser } = useContext(AuthContext) as AuthContextProps
  const [freelancers, setFreelancers] = useState<Freelancer[]>([])

  const fetchFreelancers = async () => {
    const res = await api.get('/freelancers', {
      headers: {
        Authorization: `Bearer ${currentUser?.token}`
      }
    })
    setFreelancers(res.data)
  }

  useEffect(() => {
    fetchFreelancers()
  }, [])

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4">
      {freelancers.map((freelancer: Freelancer) => (
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
