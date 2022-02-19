import axios from "axios"
import { setupCache } from "axios-cache-adapter"

const cache = setupCache({
  maxAge: 30 * 60 * 1000
})

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  adapter: cache.adapter
})

export default api
