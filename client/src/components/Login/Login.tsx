import { Fragment, useContext } from 'react'
import { AppContext, AppContextProps } from '../../context/appContext'
import ModalLogin from './ModalLogin'

function Login() {
  const { isOpenModalLogin, setIsOpenModalLogin } = useContext(
    AppContext
  ) as AppContextProps

  const handleOpen = () => {
    setIsOpenModalLogin(true)
  }

  return (
    <Fragment>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 rounded p-1 px-4 font-bold"
          onClick={() => handleOpen()}
        >
          Login
        </button>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <ModalLogin />
            </div>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Login
