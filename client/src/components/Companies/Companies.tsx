import { useContext, useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { AuthContextProps } from '../../interfaces/autContextInterface'
import api from 'api'

export interface Job {
  id: number
  title: string
  description: string
  hardSkill: string
  amount: number
  onDelete: () => void
}

function Companies() {
  const params = useParams<{ id: string }>()
  const { currentUser } = useContext(AuthContext) as AuthContextProps
  const [jobs, setJobs] = useState<Job[]>([])

  const fetchProjects = async () => {
    try {
      const res = await api.get(`/company/${params.id}/jobs`, {
        headers: {
          Authorization: `Bearer ${currentUser?.token}`
        }
      })
      setJobs(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [params.id])

  const handleDeleteProject = async (jobId: number) => {
    try {
      await api.delete(`/company/${params.id}/` + jobId, {
        headers: {
          Authorization: `Bearer ${currentUser?.token}`
        }
      })
      const updatedJobs = jobs.filter((job) => job.id !== jobId)
      setJobs(updatedJobs)
      fetchProjects()
    } catch (error) {
      console.error('Error al eliminar el proyecto', error)
    }
  }

  return (
    <main className="z-40 flex w-full flex-col flex-wrap justify-center bg-teal/30 p-4">
      <div className="flex justify-center p-4 sm:p-10 md:justify-end md:pb-0">
        <Link to={`/company/${currentUser?.id}/jobs`}>
          <button className="button hover:bg-orange hover:shadow-lg">
            Adicionar projeto
          </button>
        </Link>
      </div>
      <div className="flex justify-center md:pb-4 md:pt-10"></div>
      <section className="flex flex-wrap justify-center gap-4 p-4 md:pb-20 md:pt-10">
        {jobs.map((job) => (
          <ProjectCard
            key={job.id}
            id={job.id}
            title={job.title}
            description={job.description}
            hardSkill={job.hardSkill}
            amount={job.amount}
            onDelete={() => handleDeleteProject(job.id)}
          />
        ))}
      </section>
    </main>
  )
}

export default Companies
