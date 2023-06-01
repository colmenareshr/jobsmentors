import axios from 'axios'

const baseURL = 'https://jobsmentors-fzdv.onrender.com'

const api = axios.create({
  baseURL
})

export default api
