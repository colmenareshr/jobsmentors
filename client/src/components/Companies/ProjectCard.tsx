import React, { FC, useState } from 'react'
import { ProjectsProps } from './Companies'

interface CardProps {
  project: ProjectsProps
}

function ProjectCard({ project }: CardProps) {
  const [isOpenModalProjectCard, setIsOpenModalProjectCard] = useState(true)

  const ModalProjects = () => {
    return (
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
          MODAL
        </div>
      </div>
    )
  }

  const handleOpenModalProjectCard = () => {
    console.log('ProjectCard')
    setIsOpenModalProjectCard(true)
  }
  return (
    <div
      className="transition-all/300 scrollbar- relative flex w-80 cursor-pointer
        flex-col items-center justify-center rounded-lg border-2 border-white
        bg-teal400 hover:shadow-lg hover:ring-2 hover:ring-teal400 hover:ring-offset-2"
      onClick={handleOpenModalProjectCard}
    >
      <header className="w-full border-b-2 pb-1 pt-2 text-center text-2xl font-semibold text-white">
        {project.title}
      </header>

      <main className="flex h-52 flex-col">
        <section className="pl-2 pr-2 pt-2 text-center text-white">
          <p>{project.description}</p>
        </section>
        <section className="h-20 overflow-y-scroll bg-sky pt-2 text-center">
          <p className="font-semibold">Habilidades: </p>
          {project.skills.join(', ')}
        </section>
      </main>

      <footer className="absolute bottom-0 w-full border-t-2 pb-2 pt-2 text-center text-white">
        <p className="text-white">Cupos: {project.availability}/10</p>
      </footer>
    </div>
  )
}

export default ProjectCard
