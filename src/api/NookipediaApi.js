import axios from 'axios'

const nookipediaClient = axios.create({
  baseURL: 'https://api.nookipedia.com',
  timeout: 5000,
  headers: { 'X-API-KEY': import.meta.env.VITE_NOOKIPEDIA_TOKEN },
})

export default nookipediaClient
