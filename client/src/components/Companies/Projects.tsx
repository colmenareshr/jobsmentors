import React from 'react'

function Projects() {
  return (
    <div className="container mx-auto bg-emerald">
      <section className="bg-teal400/40">
        <form className=" bg-black/20 p-4">
          <main
            className="bg-gray-300 grid h-[900px] grid-flow-col-dense grid-cols-12 grid-rows-6
                      gap-4 border-2 border-white p-4 text-center
                      "
          >
            <header className="col-span-12 row-span-1 flex flex-wrap  content-center justify-center">
              <p className="p-title-Projects text-center text-5xl font-black">
                INGRESE LOS DATOS DE SU PROYECTO Y BUSQUE FREELANCERS
              </p>
            </header>

            <div className="col-span-4 row-span-1 self-center">
              <label htmlFor="" className="text-lg">
                Nombre del Proyecto
              </label>
              <input
                className="w-full rounded-lg p-3"
                placeholder="nombre del proyecto"
                type="text"
              />
            </div>
            <div className="col-span-4 row-span-1 self-center rounded-lg">
              <label htmlFor="" className="text-lg">
                Habilidades requeridas
              </label>
              <input
                className="rouded-lg w-full rounded-lg p-3"
                placeholder="Javascript, React, Node, etc."
                type="text"
              />
            </div>
            <div className="col-span-4 row-span-1 self-center">
              <label htmlFor="" className="text-lg">
                Número de frelancer para el proyecto
              </label>
              <input
                className="rouded-lg w-full rounded-lg p-3"
                placeholder="min ( 1 ) . . . max ( 20 )"
                type="text"
              />
            </div>
            <div className="col-span-4 row-span-3 rounded-lg p-4">
              <label
                htmlFor=""
                className="flex content-center justify-center pb-4 text-center text-lg"
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
                <button className="w-80 rounded-full bg-yellow p-5 text-lg font-semibold shadow-lg">
                  GUARDAR
                </button>
              </div>
              <div className="">
                <button className="rounded-full bg-yellow p-5 pl-20 pr-20 text-lg font-semibold shadow-lg">
                  ELIMINAR PROYECTO
                </button>
              </div>
            </div>
            <div className="col-span-12 row-span-2 flex w-full items-center justify-center bg-teal400/40">
              TABLA
            </div>
          </main>
        </form>
      </section>
      <section>
        <div className="flex w-full flex-wrap justify-center p-4">
          <button className="flex rounded-full bg-yellow p-5 pl-20 pr-20 font-semibold shadow-lg">
            BUSCAR FREELANCERS
          </button>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 p-4">
          <div className="h-44 w-96 bg-white">CARD</div>
          <div className="h-44 w-96 bg-white">CARD</div>
          <div className="h-44 w-96 bg-white">CARD</div>
          <div className="h-44 w-96 bg-white">CARD</div>
          <div className="h-44 w-96 bg-white">CARD</div>
          <div className="h-44 w-96 bg-white">CARD</div>
          <div className="h-44 w-96 bg-white">CARD</div>
          <div className="h-44 w-96 bg-white">CARD</div>
          <div className="h-44 w-96 bg-white">CARD</div>
        </div>
      </section>
    </div>
  )
}

export default Projects
