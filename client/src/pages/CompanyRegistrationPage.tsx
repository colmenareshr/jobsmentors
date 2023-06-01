import api from 'api'
import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { AuthContextProps } from '../interfaces/autContextInterface'
import { CompanyInfo } from 'interfaces/CompanyInterface'

function CompanyRegistrationPage() {
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()
  const { currentUser } = useContext(AuthContext) as AuthContextProps
  const [company, setCompany] = useState<CompanyInfo>({
    name: '',
    bio: '',
    site: '',
    img: ''
  })

  const fetchCompany = async () => {
    if (params.id) {
      const res = await api.get(`/company/${params.id}`, {
        headers: {
          Authorization: `Bearer ${currentUser?.token}`
        }
      })
      setCompany({
        name: res.data.name,
        bio: res.data.bio,
        img: res.data.img,
        site: res.data.site
      })(res.data)
    }
  }

  useEffect(() => {
    fetchCompany()
  }, [params.id, currentUser?.id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCompany((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = {
      ...company
    }
    try {
      await api.put('/company/' + params.id, formData, {
        headers: {
          Authorization: `Bearer ${currentUser?.token}`
        }
      })
      navigate('/company/' + params.id)
    } catch (error) {
      'Error:', error
    }
  }
  company

  return (
    <div className="container mx-auto mt-24 p-16">
      <h1 className="mb-5 text-3xl font-bold">Registro de Compañía</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-gray-700 mb-2 block font-bold" htmlFor="img">
            Imagen de la Compañía (Url)
          </label>
          <input
            type="text"
            id="img"
            name="img"
            className="border-gray-300 focus:border-blue-500 w-full rounded-md border px-3 py-2 focus:outline-none"
            value={company.img}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 mb-2 block font-bold" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-gray-300 focus:border-blue-500 w-full rounded-md border px-3 py-2 focus:outline-none"
            value={company.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 mb-2 block font-bold" htmlFor="bio">
            Biografía
          </label>
          <textarea
            id="bio"
            name="bio"
            className="border-gray-300 focus:border-blue-500 w-full rounded-md border px-3 py-2 focus:outline-none"
            value={company.bio}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 mb-2 block font-bold" htmlFor="site">
            Sitio Web
          </label>
          <input
            type="text"
            id="site"
            name="site"
            className="border-gray-300 focus:border-blue-500 w-full rounded-md border px-3 py-2 focus:outline-none"
            value={company.site}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="button">
          Editar Compañía
        </button>
      </form>
    </div>
  )
}

export default CompanyRegistrationPage
