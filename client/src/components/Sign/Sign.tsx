import { Fragment, useContext } from 'react'
import { AppContext, AppContextProps } from '../../context/appContext'
import ModalSign from './ModalSign'
import { useTranslation } from 'react-i18next'

function Register() {
  const { t } = useTranslation()
  const { isOpenModalSign, setIsOpenModalSign } = useContext(
    AppContext
  ) as AppContextProps

  const handleOpen = () => {
    setIsOpenModalSign(true)
  }

  return (
    <Fragment>
      <div>
        <button className="button" onClick={() => handleOpen()}>
          {t('app.menu.signin')}
        </button>
        {isOpenModalSign && (
          <div className="modal">
            <div className="modal-content">
              <ModalSign />
            </div>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Register
