import { AxiosResponse } from 'axios'
import api from 'api'

export interface JobData {
  title: string
  description: string
  hard_skills: string
  amount: number
}

export const addJob = async (job: JobData) => {
  return await api.post('http://localhost:3000/company/:user_id/job', job, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      bearer: localStorage.getItem('token')
    }
  })
}
