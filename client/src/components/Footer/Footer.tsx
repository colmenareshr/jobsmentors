import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-teal px-5 pt-14">
      <div className="container mx-auto flex flex-col items-center gap-3 md:flex-row md:items-start md:justify-center">
        <div className="row border-b border-sky pb-4 md:w-[33.33%] md:border-b-0">
          <div className="items-start text-center md:flex md:flex-col md:text-left">
            <span className="text-xl font-bold text-white">
              {t('app.footer.title1')}
            </span>
            <p className="py-2 text-white">{t('app.footer.comment1')}</p>
            <div className="flex items-center justify-center gap-3 text-white">
              <a href="#">
                <BsLinkedin size={30} />
              </a>
              <a href="#">
                <BsTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="row border-b border-sky pb-4 md:w-[33.33%] md:border-b-0">
          <div className=" text-center text-white md:text-left">
            <h3 className=" text-white">{t('app.footer.title2')}</h3>
            <ul>
              <li>
                <a href="">{t('app.footer.servicesOp1')}</a>
              </li>
              <li>
                <a href="">{t('app.footer.servicesOp2')}</a>
              </li>
              <li>
                <a href="">{t('app.footer.servicesOp3')}</a>
              </li>
              <li>
                <a href="">{t('app.footer.servicesOp4')}</a>
              </li>
              <li>
                <a href="">{t('app.footer.servicesOp5')}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className=" text-center text-white md:text-left">
            <h3 className="text-white">{t('app.footer.title3')}</h3>
            <ul>
              <li>
                <a href="">{t('app.footer.pageaboutUs')}</a>
              </li>
              <li>
                <a href="">{t('app.footer.pagecontact')}</a>
              </li>
              <li>
                <a href="">{t('app.footer.pageblog')}</a>
              </li>
              <li>
                <a href="">{t('app.footer.pagesocial')}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 border-t border-sky/60 pb-4">
        <div className="text-center text-white md:text-left">
          <p className="pt-4 text-sm text-white/70">
            © {t('app.footer.copyright')} 2023 <strong>JobsMentors</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
