import React, { useState, useContext, createContext } from "react"
import { useSWRConfig } from "swr"
import { useGeneration } from "./useGeneration"
import { usePokemons } from "./usePokemons"

const PokedexContext = createContext([])

export function PokedexProvider({ children }) {
  const { generations, generationLoading, generationError } = useGeneration()
  const [currentGeneration, setCurrentGeneration] = useState("/pokedex/1")
  const [currentPokemon, setCurrentPokemon] = useState(null)

  const { pokemons, pokemonsLoading, pokemonsError } =
    usePokemons(currentGeneration)

  const { mutate } = useSWRConfig()

  function selectGeneration(url) {
    setCurrentGeneration(url)
    mutate(url)
  }

  function selectPokemon(item) {
    setCurrentPokemon(item)
  }

  return (
    <PokedexContext.Provider
      value={{
        pokedex: generations,
        selectGeneration,
        selectPokemon,
        currentGeneration,
        currentPokemon,
        pokemons
      }}
    >
      {children}
    </PokedexContext.Provider>
  )
}

export function usePokedex() {
  const context = useContext(PokedexContext)

  return context
}
