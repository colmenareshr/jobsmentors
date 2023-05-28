import { AxiosResponse } from 'axios'
import api from 'api'
import jwtDecode from 'jwt-decode'

interface FreelancerData {
  id: number
  email: string
  password: string
  role: 'freelancer' | 'company' | 'mentor'
}

interface FreelancerUpdateData {
  name: string
  email: string
  phone: string
  bio: string
  imageUrl: string
  birth: string
  gender: string
  address: string
  about: string
  career: string
  hardSkills: string
  contract: string
}

export const getFreelancers = async (): Promise<
  AxiosResponse<FreelancerData[]>
> => {
  try {
    const res = await api.get<FreelancerData[]>('/freelancers')
    return res
  } catch (error) {
    console.error('Error getting freelancers:', error)
    throw error
  }
}

export const createFreelancer = async (
  freelancerData: FreelancerData,
  id: string
): Promise<AxiosResponse<any>> => {
  try {
    const res = await api.post(`/freelancer/${id}/information`, freelancerData)
    return res
  } catch (error) {
    console.error('Error creating freelancer:', error)
    throw error
  }
}



export const getFreelancerById = async (
  id: string
): Promise<AxiosResponse<FreelancerUpdateData>> => {
  const user = jwtDecode(localStorage.getItem('token'))
  try {
    const res = await api.get<FreelancerUpdateData>(`/freelancer/${id}`, {
      headers: {
        Authorization: `Bearer ${user}`
      }
    })
    return res
  } catch (error) {
    console.error(`Error getting freelancer with ID ${id}:`, error)
    throw error
  }
}

// interface FreelancerUpdateData {
//   email?: string
//   password?: string
//   role?: 'freelancer' | 'company' | 'mentor'
// }

export const updateFreelancer = async (
  id: string,
  freelancerData: FreelancerUpdateData
): Promise<AxiosResponse<FreelancerData>> => {
  try {
    const token = localStorage.getItem('user')
    const user = jwtDecode(token)
    const res = await api.put<FreelancerData>(
      `/freelancer/${id}`,
      freelancerData,
      {
        headers: {
          Authorization: `Bearer ${user}`
        }
      }
    )
    return res
  } catch (error) {
    console.error(`Error updating freelancer with ID ${id}:`, error)
    throw error
  }
}

export const deleteFreelancer = async (
  id: string
): Promise<AxiosResponse<void>> => {
  try {
    const res = await api.delete<void>(`/freelancers/${id}`)
    return res
  } catch (error) {
    console.error(`Error deleting freelancer with ID ${id}:`, error)
    throw error
  }
}
