import React, { useState, useContext } from 'react'
import './modalSign.css'
import { IoMdClose } from 'react-icons/io'
import { registerUser } from 'api/authApi'
import { AppContext, AppContextProps } from 'context/appContext'
import { useTranslation } from 'react-i18next'

interface TabData {
  idx: number
  label: string
  email: string
  password1: string
  password2: string
  placeholdername: string
  role: string
}

const inicialState = {
  idx: 0,
  label: '',
  email: '',
  password1: '',
  password2: '',
  role: ''
}

function ModalSign() {
  const { t } = useTranslation()
  const [data, setData] = useState<TabData>(inicialState as TabData)
  const { setIsOpenModalSign, setIsOpenModalLogin } = useContext(
    AppContext
  ) as AppContextProps
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const handleClose = () => {
    setIsOpenModalSign(false)
  }

  const handleSubmit = async () => {
    try {
      await registerUser({
        email: data.email,
        password: data.password1,
        role: tabsData[activeTabIndex].role.toLowerCase()
      })
      handleClose()
      setIsOpenModalLogin(true)
    } catch (error) {
      console.error('Error registering user:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const tabsData: TabData[] = [
    {
      idx: 0,
      label: t('app.signupmodal.labelfreelancer'),
      email: t('app.signupmodal.email'),
      password1: t('app.signupmodal.password1'),
      password2: t('app.signupmodal.password2'),
      placeholdername: t('app.signupmodal.placeholdernamefreelancer'),
      role: 'Freelancer'
    },
    {
      idx: 1,
      label: t('app.signupmodal.labelcompany'),
      email: t('app.signupmodal.email'),
      password1: t('app.signupmodal.password1'),
      password2: t('app.signupmodal.password2'),
      placeholdername: t('app.signupmodal.placeholdernamecompany'),
      role: 'Company'
    }
  ]

  return (
    <div
      className="fixed inset-0
                z-50 flex items-center
                justify-center bg-black/25 backdrop-blur-md"
    >
      <div
        className="h-aut
                  absolute w-full
                  rounded-b-3xl rounded-tl-lg rounded-tr-none bg-white/80
                  px-1
                  pb-3
                  shadow-xl 
                  sm:pb-3
                  md:w-[590px]
                  md:pb-3 lg:w-[840px]"
      >
        <header className="flex w-full flex-row justify-center">
          <div
            className="hover:drop-shadow-red-500 p-9
                      text-lg font-bold
                      text-purple md:text-5xl"
          >
            {t('app.signupmodal.title')} {tabsData[activeTabIndex].label}
          </div>
          <button
            className="duration-400
                      absolute 
                      -right-2 -top-10 my-auto mr-2 
                      mt-2 place-self-end 
                      rounded-md
                      rounded-b-none
                      bg-white/30 px-3 pt-0.5 text-lg transition-colors 
                      hover:bg-purple hover:text-white hover:shadow-none"
            onClick={handleClose}
          >
            <IoMdClose size={30} />
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
                  {tabsData[activeTabIndex].email}
                </label>
                <input
                  value={data.email}
                  className="input-ModalSign placeholder:text-ModalSign g rounded"
                  onChange={handleChange}
                  name="email"
                  // name={t('app.signupmodal.email') ?? ''}
                  // id={tabsData[activeTabIndex].email}
                  type="email"
                  placeholder={t('app.signupmodal.placeholderemail') ?? ''}
                />
              </div>
              <div>
                <div>
                  <label className="label-ModalSign flex">
                    {tabsData[activeTabIndex].password1}
                  </label>
                  <input
                    value={data.password1}
                    className="input-ModalSign placeholder:text-ModalSign g rounded"
                    onChange={handleChange}
                    name="password1"
                    // id={tabsData[activeTabIndex].password1}
                    placeholder={
                      t('app.signupmodal.placeholderpassword1') ?? ''
                    }
                    type="password"
                  />
                </div>
                <div>
                  <label className="label-ModalSign flex">
                    {tabsData[activeTabIndex].password2}
                  </label>
                  <input
                    value={data.password2}
                    className="input-ModalSign placeholder:text-ModalSign g rounded "
                    onChange={handleChange}
                    name="password2"
                    // id={tabsData[activeTabIndex].password2}
                    placeholder={
                      t('app.signupmodal.placeholderpassword2') ?? ''
                    }
                    type="password"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="flex justify-evenly pb-0 pt-3">
          <button className="footer-button-ModalSign" onClick={handleClose}>
            {t('app.signupmodal.btncancel')}
          </button>
          <button className="footer-button-ModalSign" onClick={handleSubmit}>
            {t('app.signupmodal.btnsignup')}
          </button>
          <div>
            <p>{t('app.signupmodal.spanmsg')}</p>
            <button
              className="rounded-xl pl-4 pr-4 transition-colors
                        duration-300 hover:bg-orange/80 hover:text-white hover:shadow-none"
              onClick={() => setIsOpenModalLogin(true)}
            >
              {t('app.signupmodal.btncreateaccount')}
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
export default ModalSign
