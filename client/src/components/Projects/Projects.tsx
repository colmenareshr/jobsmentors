import React from 'react'
import './projects.css'
import FreelancerCard, {
  freelancerInfo
} from 'components/FreelancerCard/FreelancerCard'

function Projects() {
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('Proyecto guardado')
  }

  return (
    <div className="w-full bg-teal400 p-4">
      <div className="container mx-auto rounded-lg border-2 border-white bg-teal400">
        <section className="">
          <form className="pb-4 pl-4 pr-4">
            <main
              className="bg-gray-300 grid h-[900px] grid-flow-col-dense grid-cols-12 grid-rows-6
                      gap-4 rounded-lg text-center
                      "
            >
              <header className="col-span-12 row-span-1 flex w-full flex-wrap content-center justify-center border-b-2 border-white">
                <p className="p-title-Projects text-center text-5xl font-black text-white drop-shadow-lg">
                  INGRESE LOS DATOS DE SU PROYECTO Y BUSQUE FREELANCERS
                </p>
              </header>

              <div className="col-span-4 row-span-1 self-center">
                <label htmlFor="" className="label-Projects text-xl">
                  Nombre del Proyecto
                </label>
                <input
                  className="w-full rounded-lg p-3"
                  placeholder="nombre del proyecto"
                  type="text"
                />
              </div>
              <div className="col-span-4 row-span-1 self-center rounded-lg">
                <label htmlFor="" className="label-Projects text-xl">
                  Habilidades requeridas
                </label>
                <input
                  className="rouded-lg w-full rounded-lg p-3"
                  placeholder="Javascript, React, Node, etc."
                  type="text"
                />
              </div>
              <div className="col-span-4 row-span-1 self-center">
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
                  Descripción
                </label>
                <textarea
                  className="rouded-lg h-3/4 w-full scroll-smooth rounded-lg p-3"
                  placeholder="descripción del proyecto"
                />
              </div>
              <div className="col-span-4 row-span-3 flex flex-col place-content-center gap-16">
                <div className="">
                  <button
                    className="button w-80 rounded-full p-5 shadow-lg"
                    onClick={handleSubmit}
                  >
                    GUARDAR
                  </button>
                </div>
                <div className="">
                  <button className="button rounded-full p-5 pl-20 pr-20 shadow-lg">
                    ELIMINAR PROYECTO
                  </button>
                </div>
              </div>
              <div className="col-span-12 row-span-2 flex w-full justify-center overflow-y-scroll rounded-lg bg-emerald  p-4">
                <table className="w-full table-auto">
                  <thead className="text-lg">
                    <tr>
                      <th>Name</th>
                      <th>Skills</th>
                      <th className="flex justify-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {freelancerInfo.map((info) => (
                      <tr>
                        <td>{info.name}</td>
                        <td>{info.skill}</td>
                        <td className="flex w-full justify-center">
                          <button className="rounded-lg bg-orange p-2 pl-10 pr-10 text-white">
                            DEL
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </main>
          </form>
        </section>
        {/* TODO: map the cards */}
        <section className="p-4">
          <div className="rounded-lg bg-sky p-4">
            <div className="flex w-full flex-wrap justify-center p-4">
              <button className="button flex rounded-full p-5 pl-20 pr-20 shadow-lg">
                BUSCAR FREELANCERS
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
              <button className="button p-5 pl-10 pr-10 shadow-lg">
                AGREGAR FREELANCERS
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects
