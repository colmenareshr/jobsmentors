import React, { useState } from 'react'
import Search from '../Search/Search'
import ProjectCard from './ProjectCard'
// import Projects from '../Projects/Projects'
import { Link } from 'react-router-dom'
import { useStore } from '../../context/useStore'

export interface FakeCard {
  id: number
  project: string
  description: string
  skills: string
}

export const FakeDataCard: FakeCard[] = [
  {
    id: 1,
    project: 'Projeto 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    skills: 'React, Node, Typescript'
  },
  {
    id: 2,
    project: 'Projeto 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    skills: 'React, Node, Typescript'
  },
  {
    id: 3,
    project: 'Projeto 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    skills: 'React, Node, Typescript'
  }
]

function Companies() {
  const { company } = useStore()

  return (
    <main className="z-40 flex w-full flex-col flex-wrap justify-center bg-teal/30 p-4">
      <div className="flex justify-center p-4 sm:p-10 md:justify-end md:pb-0">
        <Link to="/company/projects">
          <button className="button hover:bg-orange hover:shadow-lg">
            Adicionar projeto
          </button>
        </Link>
      </div>
      <div
        className="flex justify-center
                      md:pb-4 md:pt-10"
      >
        <Search />
      </div>
      <section
        className="flex flex-wrap justify-center gap-4 
                  p-4
                  md:pb-20 md:pt-10"
      >
        {FakeDataCard.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  )
}

export default Companies

// THIS PART WE GOING TO USED AFTER BACKEND BE DONE
//  {
//    company?.projects.map((project) => (
//      <ProjectCard key={project.id} project={project} />
//    ))
//  }
