import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { AuthContextProps } from '../../interfaces/autContextInterface'
import api from 'api'
import FreelancerCard2 from 'components/FreelancerCard2/FreelamcerCard2'
import { Link } from 'react-router-dom'

interface freelancerTeam {
  title: string
  color: string
}

export const freelancerInfo = [
  {
    image:
      '1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    name: 'Sarah Thompson',
    skill: 'iOS, Android, Kotlin'
  },

  {
    image:
      '1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9zdG8lMjAlN0N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Jonh Parker',
    skill: 'HTML, CSS, JavaScript, React'
  },

  {
    image:
      '1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zdHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'David Lee',
    skill: 'Python, Django, Node.js, MongoDB'
  },

  {
    image:
      '1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    name: 'Maria Hernandez',
    skill: 'Java, Spring, Framework, MySQL, AWS'
  },

  {
    image:
      '1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9zdHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Jasmin Rodriguez',
    skill: 'HTML, CSS, JavaScript, Angular'
  },

  {
    image:
      '1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80',
    name: 'Emily Garcia',
    skill: 'Python, Django, Node.js, MongoDB'
  }
]

function FreelancerCard() {
  const { currentUser } = useContext(AuthContext) as AuthContextProps
  const [freelancers, setFreelancers] = useState()

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
      {freelancers?.map((freelancer) => (
        <Link
          className="flex w-[350px] flex-wrap items-center justify-center gap-4"
          key={freelancer.id}
          to={`/freelancer/${freelancer?.user_id}`}
        >
          <FreelancerCard2
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
