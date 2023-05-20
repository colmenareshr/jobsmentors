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
        <button className="button-secondary" onClick={() => handleOpen()}>
          LogIn
        </button>
        {isOpenModalLogin && (
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
