import { create } from "apisauce"

// define the api
const api = create({
  baseURL: "https://pokeapi.co/api/v2/"
})

export default api
