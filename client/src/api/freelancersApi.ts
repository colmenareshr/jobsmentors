import { AxiosResponse } from 'axios'
import api from 'api'

interface FreelancerData {
  id: number
  email: string
  password: string
  role: 'freelancer' | 'company' | 'mentor'
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
  freelancerData: FreelancerData
): Promise<AxiosResponse<any>> => {
  try {
    const res = await api.post('/freelancers', freelancerData)
    return res
  } catch (error) {
    console.error('Error creating freelancer:', error)
    throw error
  }
}

export const getFreelancerById = async (
  id: string
): Promise<AxiosResponse<FreelancerData>> => {
  try {
    const res = await api.get<FreelancerData>(`/freelancer/${id}`)
    return res
  } catch (error) {
    console.error(`Error getting freelancer with ID ${id}:`, error)
    throw error
  }
}

interface FreelancerUpdateData {
  email?: string
  password?: string
  role?: 'freelancer' | 'company' | 'mentor'
}

export const updateFreelancer = async (
  id: string,
  freelancerData: FreelancerUpdateData
): Promise<AxiosResponse<FreelancerData>> => {
  try {
    const res = await api.put<FreelancerData>(
      `/freelancers/${id}`,
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
