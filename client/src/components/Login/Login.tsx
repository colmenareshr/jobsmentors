import { Fragment, useContext } from 'react'
import { AppContext, AppContextProps } from '../../context/appContext'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { AuthContextProps } from '../../interfaces/autContextInterface'
import ModalLogin from './ModalLogin'

function Login() {
  const { currentUser } = useContext(AuthContext) as AuthContextProps
  const navigate = useNavigate()
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
