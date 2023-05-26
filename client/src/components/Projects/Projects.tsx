// almacenar token en localstorage
// importarlo
import React, { useState } from 'react'
import './projects.css'
import FreelancerCard, {
  freelancerInfo
} from 'components/FreelancerCard/FreelancerCard'
import { CiTrash } from 'react-icons/ci'
import { IoMailOutline } from 'react-icons/io5'
import axios from 'axios'
import { addJob, JobData } from '../../api/jobsApi'

const initialState: JobData = {
  user_id: 0,
  title: '',
  description: '',
  hard_skills: ''
}

function Projects() {
  const [isSearchFreelancers, setIsSearchFreelancers] = useState(false)
  const [isAddFreelancers, setIsAddFreelancers] = useState(false)
  const [data, setData] = useState<JobData>(initialState as JobData)

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addJob(data)
    console.log('Proyecto guardado')
    setIsSearchFreelancers(true)
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleAddFreelancers = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('Freelancer agregado')
    setIsAddFreelancers(true)
    setIsSearchFreelancers(false)
  }

  return (
    <div className="mt-24 w-full bg-teal400 p-4">
      <div className="container mx-auto rounded-lg border-2 border-white bg-teal400">
        <section className="">
          <form className="pb-4 pl-4 pr-4">
            <main
              className="bg-gray-300 grid h-[900px] grid-flow-col-dense 
                      grid-cols-12 grid-rows-6
                      gap-4 rounded-lg text-center
                      "
            >
              <header className="col-span-12 row-span-1 flex w-full flex-wrap content-center justify-center border-b-2 border-white">
                <p className="p-title-Projects text-center text-5xl font-black text-white drop-shadow-lg">
                  INSIRA OS DETALHES DO SEU PROJETO E PROCURE OS FREELANCERS
                </p>
              </header>

              <div className="col-span-4 row-span-1 self-center pl-10">
                <label htmlFor="" className="label-Projects text-xl">
                  Nome do projeto
                </label>
                <input
                  className="w-full rounded-lg p-3"
                  placeholder="nombre del proyecto"
                  type="text"
                  onChange={handleChange}
                  name="title"
                />
              </div>
              <div className="col-span-4 row-span-1 self-center rounded-lg pl-10">
                <label htmlFor="" className="label-Projects text-xl">
                  Habilidades requeridas
                </label>
                <input
                  className="rouded-lg w-full rounded-lg p-3"
                  placeholder="Javascript, React, Node, etc."
                  type="text"
                />
              </div>
              <div className="col-span-4 row-span-1 self-center pl-10">
                <label htmlFor="" className="label-Projects text-xl">
                  Freelancers
                </label>
                <input
                  className="rouded-lg w-full rounded-lg p-3"
                  placeholder="min ( 1 ) . . . max ( 20 )"
                  type="text"
                />
              </div>
              <div className="col-span-4 row-span-3 rounded-lg pl-20">
                <label
                  htmlFor=""
                  className="label-Projects flex content-center justify-center pt-7 text-center text-xl"
                >
                  Descrição
                </label>
                <textarea
                  className="rouded-lg h-3/4 w-full scroll-smooth rounded-lg p-3"
                  placeholder="descripción del proyecto"
                />
              </div>
              <div className="col-span-4 row-span-3 flex flex-col place-content-center gap-16">
                <div className="">
                  <button
                    className="button disabled w-80 cursor-not-allowed rounded-full p-5 shadow-lg"
                    onClick={handleSubmit}
                  >
                    GUARDAR
                  </button>
                </div>
                <div className="">
                  <button className="button rounded-full p-5 pl-20 pr-20 shadow-lg">
                    ELIMINAR PROJETO
                  </button>
                </div>
              </div>
              <div className="col-span-12 row-span-2 flex w-full justify-center overflow-y-scroll rounded-lg bg-emerald  p-4">
                {isAddFreelancers ? (
                  <table className="w-full table-auto">
                    <thead className="text-lg">
                      <tr>
                        <th>Nome</th>
                        <th>Habilidades</th>
                        <th className="flex justify-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {freelancerInfo.map((info, index) => (
                        <tr key={index}>
                          <td>{info.name}</td>
                          <td>{info.skill}</td>
                          <td className="flex  w-full justify-evenly">
                            <button className="hover:dropshadow-lg rounded-full p-2 text-white hover:bg-teal400/90">
                              <IoMailOutline size={25} />
                            </button>
                            <button className="hover:dropshadow-lg rounded-full p-2 text-white hover:bg-orange/90">
                              <CiTrash size={25} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : null}
              </div>
            </main>
          </form>
        </section>
        {isSearchFreelancers ? (
          <section className="p-4">
            <div className="rounded-lg bg-sky p-4 pb-4">
              <div className="flex w-full flex-wrap justify-center p-4">
                <button className="button mb-4 flex rounded-full p-5 pl-20 pr-20 shadow-lg">
                  PROCURAR FREELANCERS
                </button>
              </div>
              <FreelancerCard title="" color="" />
            </div>
            <div className="flex flex-row items-center justify-evenly gap-16 pb-6 pt-10">
              <div className="">
                <button className="button p-5 pl-24 pr-24 shadow-lg">
                  CANCELAR
                </button>
              </div>
              <div className="">
                <button
                  className="button p-5 pl-10 pr-10 shadow-lg"
                  onClick={handleAddFreelancers}
                >
                  ADICIONAR FREELANCERS
                </button>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  )
}

export default Projects
