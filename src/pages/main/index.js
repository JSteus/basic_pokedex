import React from "react"

import Icon from "../../assets/pokeicon.png"

import { PokeInnerContainer, PokeOuterContainer } from "./styles"
import { PokeList } from "../../components/PokeList"
import PokeView from "../../components/PokeView"
import { PokeHeader } from "../../components/PokeHeader"

export function Main() {
  return (
    <>
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
