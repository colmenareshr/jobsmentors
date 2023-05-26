import { AxiosResponse } from 'axios'
import api from 'api'

interface CompanyData {
  id: number
  user_id: number
  name: string
  bio: string
  site: string
  email: string
}

export const getCompany = async (): Promise<AxiosResponse> => {
  try {
    const res = await api.get<CompanyData>('/company/:id')
    return res
  } catch (error) {
    console.error('Error getting company:', error)
    throw error
  }
}

export const updateCompany = async (data: any): Promise<AxiosResponse> => {
  return await api.put('/company', data)
}

export const deleteCompany = async (): Promise<AxiosResponse> => {
  return await api.delete('/company')
}

// Path: client\src\api\index.ts
