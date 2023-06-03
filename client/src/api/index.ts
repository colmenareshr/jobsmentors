// 'https://jobsmentors-fzdv.onrender.com'

import axios from 'axios'

const baseURL = 'http://localhost:3000'
const api = axios.create({
  baseURL
})

export default api
