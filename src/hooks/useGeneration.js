import useSWR from "swr"
import api from "../services/api"

const fetcher = (url) => api.get(url).then((res) => res.data.results)

export function useGeneration() {
  const { data, error } = useSWR("/pokedex", fetcher)

  return {
    generations: data,
    generationLoading: !error && !data,
    generationError: error
  }
}
