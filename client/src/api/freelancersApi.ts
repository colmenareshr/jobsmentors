import { AxiosResponse } from 'axios'
import api from 'api'
import { User } from 'interfaces/AuthInterfaces'
interface UserData {
  id: number
  email: string
  password: string
  role: 'freelancer' | 'company' | 'mentor'
}

export interface FreelancerUpdateData {
  id: number
  user_id: number
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
  AxiosResponse<FreelancerUpdateData[]>
> => {
  try {
    const res = await api.get<FreelancerUpdateData[]>('/freelancer')
    return res
  } catch (error) {
    console.error('Error getting freelancers:', error)
    throw error
  }
}

export const createFreelancer = async (
  userData: UserData,
  id: string
): Promise<AxiosResponse<any>> => {
  try {
    const res = await api.post(`/freelancer/${id}/information`, userData)
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
  userData: FreelancerUpdateData
): Promise<AxiosResponse<UserData>> => {
  try {
    const res = await api.put<UserData>(`/freelancer/${id}`, userData)
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
