import { useState, useContext } from 'react'
import { AppContext, AppContextProps } from '../../context/appContext'

interface TabData {
  idx: number
  label: string
  content: string
}

function ModalSign() {
  const { isOpenModalSign, setIsOpenModalSign } = useContext(
    AppContext
  ) as AppContextProps
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const handleClose = () => {
    setIsOpenModalSign(false)
  }

  const tabsData: TabData[] = [
    {
      idx: 0,
      label: 'Freelancers',
      content:
        'Ingrese los datos obligatorios para registrarse como Freelancer.'
    },
    {
      idx: 1,
      label: 'Empresas',
      content: 'Ingrese los datos obligatorios para registrarse como Empresa.'
    }
  ]

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/25 backdrop-blur-md">
      <div className="flex w-[600px] flex-col rounded bg-white p-2 opacity-60">
        <button
          className="place-self-end text-xl text-black"
          onClick={handleClose}
        >
          X
        </button>
        <div className="flex space-x-3 border-b">
          {/* Loop through tab data and render button for each. */}
          {tabsData.map((t) => (
            <button
              key={t.idx}
              className={`border-b-4 py-2 transition-colors duration-300 
              ${
                t.idx === activeTabIndex
                  ? 'border-[#005F73] bg-[#005F73]'
                  : 'border-transparent hover:border-gray-200'
              }`}
              onClick={() => setActiveTabIndex(t.idx)}
            >
              {t.label}
            </button>
          ))}
        </div>
        {/* Show active tab content. */}
        <div className="py-4">
          <p>{tabsData[activeTabIndex].content}</p>
        </div>
        <button
          className="rounded bg-[#171542] p-1 px-4 font-bold text-white hover:bg-[#322e8d]"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}
export default ModalSign
