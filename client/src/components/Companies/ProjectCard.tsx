// This component shows a project card with its details in two differentes modals
// Frist one, used as crud for the project
// Second one, used to show the project details

import React, { FC, useState, useContext } from 'react'
import { useStore, Project } from '../../context/useStore'
import { randomInt } from 'crypto'
import { FakeCard } from './Companies'

// interface CardProps {
//   project: Project
// }

// function ProjectCard({ project }: CardProps) {

function ProjectCard({ project }: FakeCard) {
  const [isOpenModalProjectCard, setIsOpenModalProjectCard] = useState(true)

  // Showing project details in a modal
  const ModalProjects = () => {
    return (
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
          MODAL
        </div>
      </div>
    )
  }

  // Opening Project Card Modal
  const handleOpenModalProjectCard = () => {
    console.log('ProjectCard')
    setIsOpenModalProjectCard(true)
  }

  // TODO: Change project availability to real data
  const availability = Math.floor(10 * Math.random())

  return (
    <div
      className="transition-all/300 scrollbar- relative flex w-80 cursor-pointer
        flex-col items-center justify-center rounded-lg border-2 border-white
        bg-purple/60 hover:shadow-lg hover:ring-2 hover:ring-teal400 hover:ring-offset-2"
      onClick={handleOpenModalProjectCard}
    >
      <header className="w-full border-b-2 pb-1 pt-2 text-center text-2xl font-semibold text-white">
        {project.project}
      </header>

      <main className="flex h-52 flex-col">
        <section className="px-2 pt-2 text-center text-white">
          <p>{project.description}</p>
        </section>
        <section className="h-20 overflow-y-scroll pt-2 text-center">
          <p className="font-semibold">Habilidades: </p>
          {project.skills}
        </section>
      </main>

      <footer className="absolute bottom-0 w-full border-t-2 pb-2 pt-2 text-center text-white">
        <p className="text-white">Cupos: {availability}/10</p>
      </footer>
    </div>
  )
}

export default ProjectCard

// THIS PART WE GOINT TO USED AFTER BACKEND BE DONE
// <div
//   className="transition-all/300 scrollbar- relative flex w-80 cursor-pointer
//     flex-col items-center justify-center rounded-lg border-2 border-white
//     bg-teal400 hover:shadow-lg hover:ring-2 hover:ring-teal400 hover:ring-offset-2"
//   onClick={handleOpenModalProjectCard}
// >
//   <header className="w-full border-b-2 pb-1 pt-2 text-center text-2xl font-semibold text-white">
//     {project.name}
//   </header>

//   <main className="flex h-52 flex-col">
//     <section className="px-2 pt-2 text-center text-white">
//       <p>{project.description}</p>
//     </section>
//     <section className="h-20 overflow-y-scroll bg-sky pt-2 text-center">
//       <p className="font-semibold">Habilidades: </p>
//       {project.skills}
//     </section>
//   </main>

//   <footer className="absolute bottom-0 w-full border-t-2 pb-2 pt-2 text-center text-white">
//     <p className="text-white">Cupos: {availability}/10</p>
//   </footer>
// </div>
