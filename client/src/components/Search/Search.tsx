import React from 'react'
import { useContext } from 'react'
import { AppContext, AppContextProps } from '../../context/appContext'
import './search.css'

function Search() {
  const { searchTerm, setSearchTerm } = useContext(
    AppContext
  ) as AppContextProps

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value)
  }

  return (
    <form className="z-100">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="text-yellow-500 dark:text-yellow-400 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          className="inputSearch"
          placeholder="Projeto, habilidad, etc..."
          type="search"
          id="input-search"
          required
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </form>
  )
}

export default Search
