import axios from 'axios'

const distroApiClient = axios.create({
  baseURL: '',
  timeout: 5000,
    headers: { Authorization: 'Bearer <token>' },
})

export default distroApiClient
