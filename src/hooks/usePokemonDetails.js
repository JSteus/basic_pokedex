import useSWR from "swr"
import api from "../services/api"

const fetcher = (url) =>
  api.get(url).then(({ data }) => {
    return {
      name: data.name,
      ht: data.height,
      wt: data.weight,
      front: data.sprites.front_default,
      back: data.sprites.back_default,
      types: data.types.map((item) => item.type.name)
    }
  })

export function usePokemonDetails(name) {
  const { data, error } = useSWR(name ? `pokemon/${name}` : null, fetcher)

  return {
    details: data,
    detailsLoading: !error && !data,
    detailsError: error
  }
}
