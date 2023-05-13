import React from 'react'

function Sign() {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 px-4 rounded"
      onClick={() => alert('Sign up')}
    >
      Sign
    </button>
  )
}

export default Sign
