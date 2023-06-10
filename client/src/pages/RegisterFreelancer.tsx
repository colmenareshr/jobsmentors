import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  useContext
} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { AuthContext } from '../context'
import { AuthContextProps } from '../interfaces/autContextInterface'
import api from 'api'

interface FreelancerInfo {
  img: string
  name: string
  email: string
  phone: string
  birth: Date
  gender: string
  address: string
  bio: string
  about: string
  career: string
  hard_skills: string
  contract: string
}

const RegisterFreelancer: React.FC = () => {
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext) as AuthContextProps
  const [about, setAbout] = useState('')
  const params = useParams<{ id: string }>()
  const [freelancerInfo, setFreelancerInfo] = useState<FreelancerInfo>({
    img: '',
    name: '',
    email: '',
    phone: '',
    birth: new Date(),
    gender: '',
    address: '',
    bio: '',
    about: '',
    career: '',
    hard_skills: '',
    contract: ''
  })

  const fetchFreelancer = async () => {
    if (params.id) {
      const res = await api.get('/freelancer/' + params.id, {
        headers: {
          Authorization: `Bearer ${currentUser?.token}`
        }
      })
      setFreelancerInfo({
        name: res.data.name,
        phone: res.data.phone,
        email: res.data.email,
        bio: res.data.bio,
        img: res.data.img,
        birth: new Date(res.data.birth),
        gender: res.data.gender,
        address: res.data.address,
        about: res.data.about,
        career: res.data.career,
        hard_skills: res.data.hard_skills,
        contract: res.data.contract
      })
      setAbout(res.data.about)
    }
  }

  useEffect(() => {
    fetchFreelancer()
  }, [params.id])

  const handleEditorChange = (content: string) => {
    setAbout(content)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFreelancerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }))
  }

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target
    setFreelancerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const formData = {
      ...freelancerInfo,
      about
    }

    try {
      await api.put('/freelancer/' + params.id, formData, {
        headers: {
          Authorization: 'Bearer ' + currentUser?.token
        }
      })
      navigate('/freelancer/' + params.id)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const carrersValues = [
    'Front-end',
    'Back-end',
    'QA',
    'Full-Stack',
    'DBA',
    'DevOps',
    'PM',
    'Tech Lead',
    'UX Desing'
  ]

  return (
    <section className="mt-28 w-full py-16">
      <div className="container mx-auto max-w-[1024px] bg-sky p-16 text-center md:px-0">
        <form className="flex flex-col gap-5 px-5" action="">
          <div className="grid grid-cols-1 gap-2 text-left">
            <label htmlFor="img">URL de la imagen</label>
            <input
              type="text"
              id="img"
              name="img"
              value={freelancerInfo.img}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2 text-left">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={freelancerInfo.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid gap-6 text-left md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={freelancerInfo.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={freelancerInfo.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid gap-6 text-left md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="birth">Fecha de Nacimiento</label>
              <input
                type="date"
                id="birth"
                name="birth"
                value={new Date(freelancerInfo.birth).toLocaleDateString(
                  'en-CA'
                )}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="gender">Género</label>
              <select
                id="gender"
                name="gender"
                value={freelancerInfo.gender}
                onChange={handleSelectChange}
              >
                <option value="male">Hombre</option>
                <option value="female">Mujer</option>
                <option value="personalizate">Personalizado</option>
                <option value="non-info">Prefiero no informar</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 text-left">
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              id="address"
              name="address"
              value={freelancerInfo.address}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid gap-6 text-left md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="hard_skills">Habilidades</label>
              <input
                type="text"
                id="hard_skills"
                name="hard_skills"
                placeholder="Javascript, MongoDB..."
                value={freelancerInfo.hard_skills}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="career">Carrera</label>
              <select
                name="career"
                id="career"
                value={freelancerInfo.career}
                onChange={handleSelectChange}
              >
                {carrersValues.map((values) => {
                  return (
                    <option value={values} key={values}>
                      {values}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="grid gap-6 text-left md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="bio">Biografía</label>
              <input
                type="text"
                name="bio"
                id="bio"
                placeholder="Frontend Developer..."
                value={freelancerInfo.bio}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contract">Tipo de Contrato</label>
              <select
                name="contract"
                id="contract"
                value={freelancerInfo.contract}
                onChange={handleSelectChange}
              >
                <option value="clt">CLT</option>
                <option value="pj">PJ</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 text-left">
            <label>Más sobre ti</label>
            <div>
              <ReactQuill
                className="h-40 bg-white"
                value={about}
                onChange={handleEditorChange}
                theme="snow"
              />
            </div>
          </div>
          <div className="flex items-center justify-between pt-16">
            <button className="button-secondary">Volver</button>
            <button className="button" onClick={handleSubmit}>
              Guardar
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default RegisterFreelancer
