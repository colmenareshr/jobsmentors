import { useEffect, useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Companies from './Companies'
import api from 'api'
import { AuthContext } from '../../context'
import { AuthContextProps } from '../../interfaces/autContextInterface'
import { CompanyInfo } from 'interfaces/CompanyInterface'

function CompanyLandingPage() {
  const params = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext) as AuthContextProps
  const [company, setCompany] = useState<CompanyInfo>({
    name: '',
    img: '',
    site: '',
    bio: ''
  })
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
    <main className="w-full text-center">
      <section className="container-lg mx-auto text-center md:mt-28 md:flex md:items-center md:justify-between md:px-6 md:py-16 md:text-left">
        <div className="flex h-full w-full flex-col items-center justify-center md:col-span-1">
          <img
            src={company.img}
            alt={company.img ? company.name : ''}
            className="h-[220px] w-[220px] rounded-full"
          />
          <h1 className="px-10 text-center lg:text-3xl">{company.name}</h1>
          <p className="pb-5"> {company.site} </p>
          <button
            className="button"
            onClick={() => navigate('/company/register/' + params.id)}
          >
            Editar Empresa
          </button>
        </div>
        <div className="flex h-full w-full flex-col p-2">
          {!company.bio ? (
            <div className="container mx-auto text-center md:text-left">
              <h2 className="text-blue-500 text-xl font-bold lg:text-3xl">
                Complete el perfil de su empresa
              </h2>
              <span>
                Pruebe haciendo click en el botón &quot;Editar empresa&quot;
              </span>
            </div>
          ) : (
            <h2 className="text-blue-500 px-10 text-left text-xl font-bold lg:text-3xl">
              Biografía de la empresa
            </h2>
          )}
          <p className="px-10 text-center md:text-left">{company.bio}</p>
        </div>
        <div className="flex-column col-span-2 flex h-auto flex-wrap md:col-span-2">
          <div className="md: flex h-full w-full items-center justify-center gap-4 p-5 md:justify-end"></div>
        </div>
      </section>
      <div className="col-span-3 items-center justify-center">
        <Companies />
      </div>
    </main>
  )
}

export default CompanyLandingPage
