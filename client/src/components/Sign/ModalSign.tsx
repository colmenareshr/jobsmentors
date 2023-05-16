import { useState, useContext, Fragment } from 'react'
import { AppContext, AppContextProps } from '../../context/appContext'
import './modalSign.css'

interface TabData {
  idx: number
  label: string
  email: string
  password1: string
  password2: string
  name: string
  project: string
  skills: string
}

function ModalSign() {
  const { isOpenModalSign, setIsOpenModalSign } = useContext(
    AppContext
  ) as AppContextProps
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const handleClose = () => {
    setIsOpenModalSign(false)
  }

  const handleSubmit = () => {
    alert('Se ha enviado el formulario')
    setIsOpenModalSign(false)
  }
  const tabsData: TabData[] = [
    {
      idx: 0,
      label: 'Freelancer',
      email: 'Email',
      password1: 'Clave',
      password2: 'Confirmar Clave',
      name: 'Nombre',
      project: '',
      skills: 'Tecnologías'
    },
    {
      idx: 1,
      label: 'Empresa',
      email: 'Email',
      password1: 'Clave',
      password2: 'Confirmar Clave',
      name: 'Nombre de la Empresa',
      project: 'Proyecto',
      skills: 'Tecnologías requeridas'
    }
  ]

  return (
    <div
      className="border-yellow-300 fixed inset-0 flex
                items-center justify-center bg-black
                bg-opacity-25 backdrop-blur-md"
    >
      <div
        className="absolute
                  h-auto w-full rounded-b-3xl rounded-tl-lg
                  rounded-tr-none bg-white/50 pb-3 pl-1
                  pr-1
                  shadow-xl
                  sm:w-[640px] 
                  sm:p-2 sm:pb-3
                  md:w-[760px] md:pb-3
                  lg:min-w-[1024px]"
      >
        <header className="flex w-full flex-row justify-center">
          <div
            className="hover:drop-shadow-red-500 pb-2 pt-4
                      text-lg text-purple
                      md:text-3xl"
          >
            Registrar {tabsData[activeTabIndex].label}
          </div>
          <button
            className="duration-400
                      absolute -right-2 
                      -top-10 my-auto mr-2 mt-2 
                      place-self-end rounded-md 
                      rounded-b-none
                      bg-white/30
                      pl-3 pr-3 pt-0.5 text-lg transition-colors 
                      hover:bg-purple hover:text-white hover:shadow-none"
            onClick={handleClose}
          >
            X
          </button>
        </header>

        {/* Loop through tabData to render them as tabs. */}

        <main>
          <section className="flex">
            {tabsData.map((t) => (
              <button
                key={t.idx}
                className={`border-b-4 p-2 transition-colors duration-500 
              ${
                t.idx === activeTabIndex
                  ? 'rounded-t border-b-4 hover:border-b-purple hover:bg-purple/30'
                  : 'rounded-t border-none hover:bg-purple/30'
              }`}
                onClick={() => setActiveTabIndex(t.idx)}
              >
                {t.label}
              </button>
            ))}
          </section>

          {/* Tab content: Showing fields to be filled */}

          <section
            className="flex flex-wrap items-center justify-center
                    gap-4 rounded bg-purpleLight/80 p-4"
          >
            <div>
              <label className="label-ModalSign flex">
                {tabsData[activeTabIndex].name}
              </label>
              <input
                className="placeholder-ModalSign padding-ModalSing rounded"
                id={tabsData[activeTabIndex].name}
                type="text"
                {...(activeTabIndex === 1
                  ? { placeholder: 'Nombre de la empresa' }
                  : { placeholder: 'Nombre y Apellido' })}
              />
            </div>
            <div>
              <label className="label-ModalSign flex">
                {tabsData[activeTabIndex].email}
              </label>
              <input
                className="placeholder-ModalSign padding-ModalSing rounded"
                id={tabsData[activeTabIndex].email}
                type="email"
                placeholder="ejemplo@ejemplo.com"
              />
            </div>
            <div>
              <label className="label-ModalSign flex">
                {tabsData[activeTabIndex].password1}
              </label>
              <input
                className="placeholder-ModalSign padding-ModalSing rounded"
                id={tabsData[activeTabIndex].password1}
                placeholder="Mínimo 8 caracteres"
                type="password"
              />
            </div>
            <div>
              <label className="label-ModalSign flex">
                {tabsData[activeTabIndex].password2}
              </label>
              <input
                className="placeholder-ModalSign padding-ModalSing rounded "
                id={tabsData[activeTabIndex].password2}
                placeholder="Mínimo 8 caracteres"
                type="password"
              />
            </div>

            {/* If the tab is for Company, don't show the requirement field. */}

            {activeTabIndex === 1 ? (
              <div>
                <label className="label-ModalSign flex">
                  {tabsData[activeTabIndex].project}
                </label>
                <input
                  className="placeholder-ModalSign padding-ModalSing rounded"
                  id={tabsData[activeTabIndex].project}
                  placeholder="Nombre del proyecto"
                  type="text"
                />
              </div>
            ) : null}
            <div>
              <label className="label-ModalSign flex">
                {tabsData[activeTabIndex].skills}
              </label>
              <input
                className="placeholder-ModalSign padding-ModalSing rounded"
                id={tabsData[activeTabIndex].skills}
                placeholder="JS, React, Node, etc."
                type="text"
              />
            </div>
          </section>
        </main>

        <footer className="flex justify-evenly pb-0 pt-3">
          <button
            className="
                      rounded-full
                      bg-purple p-2
                      px-5 text-white transition-colors duration-500
                      hover:bg-purpleHover hover:text-white hover:shadow-lg
                      "
            onClick={handleClose}
          >
            Cancelar
          </button>
          <button
            className="
                      rounded-full
                      bg-purple
                      px-5 text-white transition-colors duration-500
                      hover:bg-purpleHover hover:text-white hover:shadow-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Registrar
          </button>
        </footer>
      </div>
    </div>
  )
}
export default ModalSign
