import api from 'api'
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { createFreelancer, getFreelancerById } from 'api/freelancersApi'
import { User } from 'interfaces/AuthInterfaces'

interface FreelancerInfo {
  imageUrl: string
  name: string
  email: string
  phone: string
  birth: string
  gender: string
  address: string
  bio: string
  about: string
  career: string
  hardSkills: string
  contract: string
}

const RegisterFreelancer: React.FC = () => {
  const [about, setAbout] = useState('')
  const params = useParams<{ id: string }>()
  const [freelancerInfo, setFreelancerInfo] = useState<FreelancerInfo>({
    imageUrl: '',
    name: '',
    email: '',
    phone: '',
    birth: '',
    gender: '',
    address: '',
    bio: '',
    about: '',
    career: '',
    hardSkills: '',
    contract: ''
  })

  useEffect(() => {
    if (params.id) {
      ;(async () => {
        try {
          const res = await getFreelancerById(params.id)
          console.log(res)
          setFreelancerInfo({
            ...freelancerInfo
          })
        } catch (error) {
          console.log('Error:', error)
        }
      })()
    }
  }, [params.id])

  const handleEditorChange = (content: string) => {
    setAbout(content)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFreelancerInfo({
      ...freelancerInfo,
      [name]: value
    })
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    // Crear un objeto con los datos del formulario
    const formData = {
      ...freelancerInfo,
      imageUrl,
      name,
      email,
      phone,
      birth,
      gender,
      address,
      bio,
      about,
      career,
      hardSkills,
      contract
    }

    // Enviar formData al backend
    try {
      const response = await createFreelancer(formData)

      if (response.ok) {
        // La información se ha enviado correctamente
        console.log('La información se ha enviado correctamente')
        // Realizar cualquier acción adicional después de enviar la información
      } else {
        // Hubo un error al enviar la información
        console.log('Hubo un error al enviar la información')
      }
    } catch (error) {
      console.log('Error:', error)
    }
  }

  return (
    <section className="mt-28 w-full py-16">
      <div className="container mx-auto max-w-[1024px] bg-sky p-16 text-center md:px-0">
        <form className="flex flex-col gap-5 px-5" action="">
          <div className="grid grid-cols-1 gap-2 text-left">
            <label htmlFor="imageUrl">URL de la imagen</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={freelancerInfo.imageUrl}
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
                value={freelancerInfo.birth}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="gender">Género</label>
              <select
                id="gender"
                name="gender"
                value={freelancerInfo.gender}
                onChange={handleInputChange}
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
              <label htmlFor="hardSkills">Habilidades</label>
              <input
                type="text"
                id="hardSkills"
                name="hardSkills"
                placeholder="Javascript, MongoDB..."
                value={freelancerInfo.hardSkills}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="career">Carrera</label>
              <select
                name="career"
                id="career"
                value={freelancerInfo.career}
                onChange={handleInputChange}
              >
                <option value="frontend">Front-end</option>
                <option value="backend">Back-end</option>
                <option value="fullstack">Full-stack</option>
                <option value="qa">QA</option>
                <option value="dba">DBA</option>
                <option value="devops">DevOps</option>
                <option value="pm">PM</option>
                <option value="tech-lead">Tech Lead</option>
                <option value="ux-design">UX Design</option>
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
                onChange={handleInputChange}
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
