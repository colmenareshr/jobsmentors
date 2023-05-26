import api from 'api'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function FreelancerProfile() {
  const { profileName } = useParams() // Obtain the profile name of the URL parameters
  const [freelancer, setFreelancer] = useState(null)

  const fetchDataProfile = async () => {
    const res = await api.get(`/freelancers/${profileName}`)
    try {
      setFreelancer(res.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    // Make a request to the backend to obtain the freelancer information with the corresponding profile name
    fetchDataProfile()
  }, [profileName])

  if (!freelancer) {
    return <div>Cargando...</div>
  }

  return (
    <div>
      <h1>{freelancer.name}</h1>
      {/* Mostrar el resto de la información del freelancer */}
    </div>
  )
}

export default FreelancerProfile
