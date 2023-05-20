import React, { useState } from 'react'
import Search from '../Search/Search'
import ProjectCard from './ProjectCard'
import Projects from '../Projects/Projects'
import { Link } from 'react-router-dom'
import { useStore } from '../../context/useStore'

function Companies() {
  const { company } = useStore()

  return (
    <main className="z-40 flex w-full flex-col flex-wrap justify-center bg-teal400 p-4">
      <div className="flex justify-center pb-4 md:justify-start md:pb-0">
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
        {company?.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  )
}

export default Companies
