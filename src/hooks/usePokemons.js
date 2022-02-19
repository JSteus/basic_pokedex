import useSWR from "swr"
import api from "../services/api"

const fetcher = (url) =>
  api.get(url).then(({ data }) =>
    data.pokemon_entries.map((item) => ({
      index: item.entry_number,
      name: item.pokemon_species.name
    }))
  )

export function usePokemons(currentPokedex) {
  const { data, error } = useSWR(currentPokedex, fetcher)

  return {
    pokemons: data,
    pokemonsLoading: !error && !data,
    pokemonsError: error
  }
}
