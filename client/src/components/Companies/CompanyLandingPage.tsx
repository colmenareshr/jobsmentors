import { useEffect, useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Companies from './Companies'
import api from 'api'
import { AuthContext } from '../../context/authContext'
import { AuthContextProps } from '../../interfaces/autContextInterface'
import { CompanyInfo } from 'interfaces/CompanyInterface'

function CompanyLandingPage() {
  const params = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext) as AuthContextProps
  const [company, setCompany] = useState<CompanyInfo>({})
  const fetchCompany = async () => {
    if (params.id) {
      const res = await api.get('/company/' + params.id, {
        headers: {
          Authorization: `Bearer ${currentUser?.token}`
        }
      })
      setCompany(res.data)
    }
  }
  useEffect(() => {
    fetchCompany()
  }, [params.id])

  return (
    <main className="mt-20 grid w-full grid-cols-1 items-center bg-white py-16 sm:grid-cols-1 md:grid-cols-3">
      <div className="col-span-3 flex h-full w-full flex-col items-center justify-center md:col-span-1">
        <img
          src={company.img}
          alt="Your Company Logo"
          className="h-[220px] w-[220px] rounded-full"
        />
        <h1 className="px-10 text-center text-xl font-bold lg:text-3xl">
          {company.name}
        </h1>
        <p> {company.site} </p>
      </div>
      <div className="flex-column col-span-2 flex h-auto flex-wrap md:col-span-2">
        <div className="md: flex h-full w-full items-center justify-center gap-4 p-5 md:justify-end">
          <button
            className="button"
            onClick={() => navigate(`/company/register/${params.id}`)}
          >
            Editar Empresa
          </button>
          <button className="button-secondary">Excluir Empresa</button>
        </div>
        <div className="flex h-full w-full flex-col p-2">
          <h2 className="text-blue-500 px-10 text-left text-xl font-bold lg:text-3xl">
            Biografía de la empresa
          </h2>
          <p className="px-10 text-left text-lg">{company.bio}</p>
        </div>
      </div>
      <div className="col-span-3 items-center justify-center">
        <Companies />
      </div>
    </main>
  )
}

export default CompanyLandingPage
