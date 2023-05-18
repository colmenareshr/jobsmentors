import { useState, useContext, Fragment } from 'react'
import { AppContext, AppContextProps } from '../../context/appContext'
import './modalSign.css'

interface TabData {
  idx: number
  label: string
  name: string
  email: string
  password1: string
  password2: string
}

const inicialState = {
  idx: 0,
  label: '',
  name: '',
  email: '',
  password1: '',
  password2: ''
}

function ModalSign() {
  const [data, setData] = useState<TabData>(inicialState as TabData)
  const { isOpenModalSign, setIsOpenModalSign } = useContext(
    AppContext
  ) as AppContextProps
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const handleClose = () => {
    setIsOpenModalSign(false)
  }

  const handleSubmit = () => {
    alert('Se ha enviado el formulario')
    console.log(data)
    setIsOpenModalSign(false)
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const tabsData: TabData[] = [
    {
      idx: 0,
      label: 'Freelancer',
      name: 'Nombre',
      email: 'Email',
      password1: 'Clave',
      password2: 'Confirmar Clave'
    },
    {
      idx: 1,
      label: 'Empresa',
      email: 'Email',
      password1: 'Clave',
      password2: 'Confirmar Clave',
      name: 'Empresa'
    },
    {
      idx: 2,
      label: 'Mentor',
      email: 'Email',
      password1: 'Clave',
      password2: 'Confirmar Clave',
      name: 'Nombre'
    }
  ]

  return (
    <div
      className="fixed inset-0
                flex items-center justify-center
                bg-black bg-opacity-25 backdrop-blur-md"
    >
      <div
        className="h-aut
                  absolute w-full
                  rounded-b-3xl rounded-tl-lg rounded-tr-none bg-white/80
                  pb-3
                  pl-1
                  pr-1 
                  shadow-xl
                  sm:pb-3
                  md:w-[590px] md:pb-3
                  lg:w-[840px]"
      >
        <header className="flex w-full flex-row justify-center">
          <div
            className="hover:drop-shadow-red-500 p-9
                      text-lg text-purple
                      md:text-5xl"
          >
            Registrar {tabsData[activeTabIndex].label}
          </div>
          <button
            className="duration-400
                      absolute 
                      -right-2 -top-10 my-auto mr-2 
                      mt-2 place-self-end 
                      rounded-md
                      rounded-b-none
                      bg-white/30 pl-3 pr-3 pt-0.5 text-lg 
                      transition-colors hover:bg-purple hover:text-white
                      hover:shadow-none"
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
                className={`p-2 text-lg transition-colors duration-500
                  ${
                    t.idx === activeTabIndex
                      ? 'rounded-t border-t-4 border-purpleLight bg-purpleLight/80 hover:text-purpleLight focus:bg-purpleLight/80 focus:text-purple/80 md:text-2xl'
                      : 'rounded-t hover:border-t-4 hover:border-t-purpleLight hover:transition-none'
                  }
                `}
                onClick={() => setActiveTabIndex(t.idx)}
              >
                {t.label}
              </button>
            ))}
          </section>

          {/* Tab content: Showing fields to be filled */}

          <section className="flex">
            <div
              className="grid w-full justify-items-center gap-4 rounded
              bg-purpleLight/80 p-4 md:grid-cols-2"
            >
              <div>
                <label className="label-ModalSign flex">
                  {tabsData[activeTabIndex].name}
                </label>
                <input
                  className="input-ModalSign placeholder-ModalSign rounded"
                  name="name"
                  onChange={handleChange}
                  // id={tabsData[activeTabIndex].name}
                  type="text"
                  {...(activeTabIndex === 1
                    ? { placeholder: 'Nombre de la empresa' }
                    : { placeholder: 'Nombre y Apellido' })}
                />
              </div>
              <div>
                <label className="label-ModalSign flex">
                  {tabsData[activeTabIndex].password1}
                </label>
                <input
                  className="input-ModalSign placeholder-ModalSign g rounded"
                  onChange={handleChange}
                  name="password1"
                  // id={tabsData[activeTabIndex].password1}
                  placeholder="Mínimo 8 caracteres"
                  type="password"
                />
              </div>
              <div>
                <label className="label-ModalSign flex">
                  {tabsData[activeTabIndex].email}
                </label>
                <input
                  className="input-ModalSign placeholder-ModalSign g rounded"
                  onChange={handleChange}
                  name="email"
                  // id={tabsData[activeTabIndex].email}
                  type="email"
                  placeholder="ejemplo@ejemplo.com"
                />
              </div>
              <div>
                <label className="label-ModalSign flex">
                  {tabsData[activeTabIndex].password2}
                </label>
                <input
                  className="input-ModalSign placeholder-ModalSign g rounded "
                  onChange={handleChange}
                  name="password2"
                  // id={tabsData[activeTabIndex].password2}
                  placeholder="Mínimo 8 caracteres"
                  type="password"
                />
              </div>
            </div>
          </section>
        </main>

        <footer className="flex justify-evenly pb-0 pt-3">
          <button className="footer-button-ModalSign" onClick={handleClose}>
            Cancelar
          </button>
          <button className="footer-button-ModalSign" onClick={handleSubmit}>
            Registrar
          </button>
        </footer>
      </div>
    </div>
  )
}
export default ModalSign
