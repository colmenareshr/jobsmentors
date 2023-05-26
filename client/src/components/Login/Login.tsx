import { Fragment, useContext } from 'react'
import { AppContext, AppContextProps } from '../../context/appContext'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { AuthContextProps } from '../../interfaces/autContextInterface'
import ModalLogin from './ModalLogin'
import { useTranslation } from 'react-i18next'

function Login() {
  const { t } = useTranslation()
  const { currentUser } = useContext(AuthContext) as AuthContextProps
  const { isOpenModalLogin, setIsOpenModalLogin } = useContext(
    AppContext
  ) as AppContextProps
  const navigate = useNavigate()

  const handleOpen = () => {
    setIsOpenModalLogin(true)
  }

  const handleLogout = () => {
    setIsOpenModalLogin(false)
    navigate('/')
  }
  return (
    <Fragment>
      <div>
        {currentUser ? (
          <button className="button-secondary" onClick={handleLogout}>
            {t('app.menu.logout')}
          </button>
        ) : (
          <button className="button-secondary" onClick={handleOpen}>
            {t('app.menu.login')}
          </button>
        )}
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
