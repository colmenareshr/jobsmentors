import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import { AppContextProps } from '../../context/appContext'

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
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md
                 flex justify-center items-center flex-col"
    >
      <div className="w-[600px] flex flex-col bg-white rounded p-2 opacity-60">
        <button
          className="text-black text-xl place-self-end"
          onClick={handleClose}
        >
          X
        </button>
        <div className="flex space-x-3 border-b">
          {/* Loop through tab data and render button for each. */}
          {tabsData.map((t) => (
            <button
              key={t.idx}
              className={`py-2 border-b-4 transition-colors duration-300 
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
          className="bg-[#171542] hover:bg-[#322e8d] text-white font-bold p-1 px-4 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}
export default ModalSign

// <div
//   className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
//                 flex justify-center items-center flex-col"
// >
//   <div className="w-[600px] flex flex-col">
//     <button
//       className="text-white text-xl place-self-end"
//       onClick={handleClose}
//     >
//       X
//     </button>
//     <div className="bg-slate-400 rounded p-2">ESTAS LOGUEADO</div>
//   </div>
//   <button
//     className="bg-purple-500 hover:bg-purple-700 text-white font-bold p-1 px-4 rounded"
//     onClick={handleClose}
//   >
//     Close
//   </button>
// </div>
