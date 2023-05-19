import React from 'react'

function Projects() {
  return (
    <div className="container mx-auto bg-emerald">
      <section className="bg-teal400/40">
        <form className="bg-black/20">
          <main
            className="bg-gray-300 grid h-[600px] grid-flow-col-dense 
                      grid-cols-12 grid-rows-5 gap-4 text-center
                      "
          >
            <header className="col-span-12 row-span-1">
              <p className="p-title-Projects text-center text-5xl font-black">
                Creación de Formulario
              </p>
            </header>
            <div className="col-span-4 row-span-1 bg-teal400">
              <label htmlFor="" className="text-lg">
                Nombre del Proyecto
              </label>
              <input
                className="rouded-lg w-full p-3"
                placeholder="nombre del proyecto"
                type="text"
              />
            </div>
            <div className="col-span-4 row-span-1 bg-orange/40">
              <label htmlFor="" className="text-lg">
                Habilidades requeridas
              </label>
              <input
                className="rouded-lg w-full p-3"
                placeholder="Javascript, React, Node, etc."
                type="text"
              />
            </div>
            <div className="col-span-4 row-span-1 bg-orange/40">
              <label htmlFor="" className="text-lg">
                Número de frelancer para el proyecto
              </label>
              <input
                className="rouded-lg w-full p-3"
                placeholder="min ( 1 ) . . . max ( 20 )"
                type="text"
              />
            </div>
            <div className="col-span-4 row-span-3 bg-yellow">
              <label htmlFor="" className="text-lg">
                Descripción
              </label>
              <textarea
                className="rouded-lg w-full scroll-smooth p-3"
                placeholder="descripción del proyecto"
              />
            </div>
            <div className="col-span-4 row-span-3 flex flex-col place-content-center gap-4  bg-sky">
              <div className="bg-orange">
                <button className="w-80 rounded-full bg-purple p-5">
                  GUARDAR
                </button>
              </div>
              <div className="bg-orange">
                <button className="rounded-full bg-purple p-5 pl-20 pr-20">
                  ELIMINAR PROYECTO
                </button>
              </div>
            </div>
            <div className="col-span-12 flex w-full items-center justify-center bg-teal400/40">
              TABLA
            </div>
          </main>
        </form>
      </section>
      <section>
        <div className="flex w-full flex-wrap justify-center bg-orange">
          <button className="flex rounded-full bg-purple p-5 pl-20 pr-20">
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
