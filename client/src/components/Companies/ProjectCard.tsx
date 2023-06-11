import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Job } from './Companies'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { AuthContext } from '../../context'
import { AuthContextProps } from '../../interfaces/autContextInterface'

function ProjectCard({ title, description, hardSkill, amount, onDelete }: Job) {
  const { currentUser } = useContext(AuthContext) as AuthContextProps

  return (
    <div
      className="transition-all/300 scrollbar- relative flex w-80 cursor-pointer
        flex-col items-center justify-center rounded-lg border-2 border-white
        bg-purple/60 hover:shadow-lg hover:ring-2 hover:ring-teal400 hover:ring-offset-2"
    >
      <header className="w-full border-b-2 pb-1 pt-2 text-center text-2xl font-semibold text-white">
        {title}
      </header>

      <main className="flex h-52 flex-col">
        <section className="overflow-hidden px-2 pt-2 text-center text-white">
          <p className="h-24">{description}</p>
        </section>
        <section className="h-20 overflow-hidden pt-2 text-center">
          <p className="font-semibold">Habilidades:</p>
          {hardSkill}
        </section>
      </main>

      <div className="w-full border-t-2 py-2 text-center text-white">
        <p className="text-white">Vagas: {amount}/10</p>
        <div className="flex justify-between px-2">
          <Link to={`/company/${currentUser?.id}/jobs`}>
            <button>
              <FaEdit className="hover:text-teal-400 text-white" />
            </button>
          </Link>
          <button onClick={onDelete}>
            <FaTrash className="hover:text-red-400 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
