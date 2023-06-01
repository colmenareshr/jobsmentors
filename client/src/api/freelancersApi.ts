import { AxiosResponse } from 'axios'
import api from 'api'
import { User } from 'interfaces/AuthInterfaces'
interface FreelancerData {
  id: number
  email: string
  password: string
  role: 'freelancer' | 'company' | 'mentor'
}

export interface FreelancerUpdateData {
  name: string
  email: string
  phone: string
  bio: string
  img: string
  birth: string
  gender: string
  address: string
  about: string
  career: string
  hard_skills: string
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
  id: string,
  token: User | string
): Promise<AxiosResponse<FreelancerUpdateData>> => {
  try {
    const res = await api.get<FreelancerUpdateData>(`/freelancer/${id}` + token)
    return res
  } catch (error) {
    console.error(`Error getting freelancer with ID ${id}:`, error)
    throw error
  }
}

export const updateFreelancer = async (
  id: string,
  freelancerData: FreelancerUpdateData
): Promise<AxiosResponse<FreelancerData>> => {
  try {
    const res = await api.put<FreelancerData>(
      `/freelancer/${id}`,
      freelancerData
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
