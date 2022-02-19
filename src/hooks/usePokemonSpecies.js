import useSWR from "swr"
import api from "../services/api"

const fetcher = (url) =>
  api.get(url).then(({ data }) => {
    return {
      specie: data.genera.filter((e) => e.language.name === "en")[0].genus,
      quote: data.flavor_text_entries.filter((e) => e.language.name === "en")[0].flavor_text
    }
  })

export function usePokemonSpecies(name) {
  const { data, error } = useSWR(
    name ? `pokemon-species/${name}` : null,
    fetcher
  )

  return {
    species: data,
    speciesLoading: !error && !data,
    speciesError: error
  }
}
