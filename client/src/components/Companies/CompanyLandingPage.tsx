import NoCompanyLogo from '../../assets/images/no-companylogo.svg'
import Companies from './Companies'

function CompanyLandingPage() {
  return (
    <div className="main-CompanyLanginPage grid w-full grid-cols-1 items-center bg-black/20 pt-5 sm:grid-cols-1 md:grid-cols-3">
      <div className="col-span-3 flex h-full w-full flex-col items-center justify-center md:col-span-1">
        <img
          src={NoCompanyLogo}
          alt="Your Company Logo"
          className="flex max-w-xs"
        />
        <h6 className="p-10 text-center text-xl font-bold lg:text-3xl">
          Nome da Empresa
        </h6>
      </div>
      <div className="flex-column col-span-2 flex h-auto flex-wrap md:col-span-2">
        <div className="flex-column flex h-full w-full items-center justify-evenly sm:p-10">
          <button className="button rounded-md p-2">Editar Empresa</button>
          <button className="button rounded-md p-2">Excluir Empresa</button>
        </div>
        <div className="flex h-full w-full flex-col p-2">
          <h1 className="text-blue-500 pt-10 text-center text-xl font-bold lg:text-3xl">
            Nesta página
          </h1>
          <p className="p-10 text-left text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            tenetur unde quia maiores. Explicabo atque ut enim quis sunt! Harum
            iste repudiandae neque id, corporis earum debitis laborum ratione
            minima! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br />
            Expedita aperiam tempora, quod repellat eaque, accusantium ipsa
            temporibus quas, facere aliquam eveniet cupiditate quam aut numquam
            explicabo commodi deserunt nihil. Eum?
          </p>
        </div>
      </div>
      <div className="col-span-3 items-center justify-center">
        <Companies />
      </div>
    </div>
  )
}

export default CompanyLandingPage
