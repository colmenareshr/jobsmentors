import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { AuthContextProps } from 'interfaces/autContextInterface'
import { useParams, useNavigate } from 'react-router-dom'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { FreelancerUpdateData } from 'api/freelancersApi'
import api from 'api'

const SingleFreelancerPage = () => {
  const params = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [freela, setFreela] = useState<FreelancerUpdateData | null>(null)
  const { currentUser } = useContext(AuthContext) as AuthContextProps

  useEffect(() => {
    const fetchFreelancer = async () => {
      if (params.id) {
        const res = await api.get('/freelancer/' + params.id, {
          headers: {
            Authorization: `Bearer ${currentUser?.token}`
          }
        })
        setFreela(res.data)
      }
    }
    fetchFreelancer()
  }, [currentUser, params.id])

  const handleEditProfile = () => {
    navigate('/freelancer/register/' + params.id)
  }

  return (
    <section className="mt-12 w-full pt-16">
      <div className="mx-auto -mb-36 max-w-full bg-teal400 py-16"></div>
      <div className="mx-auto max-w-full pt-16">
        <div className="container mx-auto bg-white px-3 py-8 text-center">
          <div className="flex flex-col items-center justify-center">
            <img
              className=" h-auto w-[180px] rounded-full"
              src={freela?.img}
              alt={freela?.name}
            />
            <h1>{freela?.name}</h1>
          </div>
          <div className="border-b-1 flex items-center justify-center gap-2 border-b-black/50 py-4">
            <button className="button-secondary" onClick={handleEditProfile}>
              Editar perfil
            </button>
            <button className="text-black">Portfolio</button>
          </div>
        </div>
        <div className="container mx-auto border-t border-t-emerald/30 bg-white p-12">
          <h3>About me</h3>
          {freela?.about && (
            <div dangerouslySetInnerHTML={{ __html: freela?.about }}></div>
          )}
          <div className="flex items-center gap-3 pt-2">
            <IoLogoGithub size={25} />
            <IoLogoLinkedin size={25} />
          </div>
        </div>
        <div className="container mx-auto border-t border-t-emerald/30 bg-white p-12">
          <h3>Expertise</h3>
          <div className="flex items-center gap-2">
            <span>{freela?.hard_skills} </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-12">
        <button className="button">Delete profile</button>
      </div>
    </section>
  )
}
export default SingleFreelancerPage
