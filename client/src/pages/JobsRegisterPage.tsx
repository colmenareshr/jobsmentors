import React, { useState, useContext } from 'react'
import api from 'api'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { AuthContextProps } from '../interfaces/autContextInterface'

interface FormData {
  title: string
  description: string
  hard_skills: string
  amount: number
}

interface JobFormProps {
  onSubmit: (formData: FormData) => void
}

const JobsRegisterPage: React.FC<JobFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()
  const { currentUser } = useContext(AuthContext) as AuthContextProps

  const [jobs, setJobs] = useState<FormData>({
    title: '',
    description: '',
    hard_skills: '',
    amount: 0
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setJobs((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await api.post(`/company/${params.id}/job`, jobs, {
        headers: {
          Authorization: `Bearer ${currentUser?.token}`
        }
      })
      console.log(res.data)
      setJobs({
        title: '',
        description: '',
        hard_skills: '',
        amount: 0
      })
    } catch (error) {
      console.error('Error to send new Project', error)
    }
  }

  return (
    <div className="container mx-auto mt-24 p-16">
      <h1 className="mb-5 text-3xl font-bold">Crear Proyecto</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-gray-700 mb-2 block font-bold" htmlFor="title">
            Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border-gray-300 focus:border-blue-500 w-full rounded-md border px-3 py-2 focus:outline-none"
            value={jobs.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="text-gray-700 mb-2 block font-bold"
            htmlFor="description"
          >
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            className="border-gray-300 focus:border-blue-500 w-full rounded-md border px-3 py-2 focus:outline-none"
            value={jobs.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="text-gray-700 mb-2 block font-bold"
            htmlFor="hard_skills"
          >
            Hard Skills
          </label>
          <input
            type="text"
            id="hard_skills"
            name="hard_skills"
            className="border-gray-300 focus:border-blue-500 w-full rounded-md border px-3 py-2 focus:outline-none"
            value={jobs.hard_skills}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="text-gray-700 mb-2 block font-bold"
            htmlFor="amount"
          >
            Cantidad
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="border-gray-300 focus:border-blue-500 w-full rounded-md border px-3 py-2 focus:outline-none"
            value={jobs.amount}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="button">
          Crear Job
        </button>
      </form>
    </div>
  )
}

export default JobsRegisterPage
