import React from "react"

import Icon from "../../assets/pokeicon.png"

import { PokeInnerContainer, PokeOuterContainer } from "./styles"
import { PokeList } from "../../components/PokeList"
import PokeView from "../../components/PokeView"
import { PokeHeader } from "../../components/PokeHeader"
import { PokeLoading } from "../../components/PokeLoading"
import { usePokedex } from "../../hooks/usePokedex"

export function Main() {
  const { generationLoading, pokemonsLoading } = usePokedex()
  const loading = generationLoading || pokemonsLoading

  return (
    <>
      <PokeLoading isLoading={loading} />
      <PokeHeader />
      <PokeOuterContainer>
        <PokeInnerContainer>
          <PokeView />
          <PokeList icon={Icon} />
        </PokeInnerContainer>
      </PokeOuterContainer>
    </>
  )
}
