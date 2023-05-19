import React, { useState } from 'react'
import Search from '../Search/Search'
import ProjectCard from './ProjectCard'
import Projects from '../Projects/Projects'
import { Link } from 'react-router-dom'

export interface ProjectsProps {
  id: number
  title: string
  description: string
  skills: string[]
  availability: number
}

function Companies() {
  const projects: ProjectsProps[] = [
    {
      id: 0,
      title: 'Proyecto 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      skills: ['React', 'Node', 'MongoDB'],
      availability: 5
    },
    {
      id: 1,
      title: 'Proyecto 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      skills: ['JavaScript', 'React', 'CSS'],
      availability: 10
    },
    {
      id: 2,
      title: 'Proyecto 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      skills: [
        'Angular',
        'React Native',
        'Flutter',
        'PHP',
        'JavaScript',
        'Oracle',
        'MySQL',
        'MongoDB',
        'CSS'
      ],
      availability: 3
    },
    {
      id: 3,
      title: 'Proyecto 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      skills: ['PHP', 'JavaScript', 'Oracle'],
      availability: 8
    }
  ]

  return (
    <main className="z-40 flex w-full flex-col flex-wrap justify-center bg-teal400 p-4">
      <div className="flex justify-center pb-4 md:justify-start md:pb-0">
        <Link to="/companies/projects">
          <button className="button hover:bg-orange hover:shadow-lg">
            Agregar proyecto
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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  )
}

export default Companies
