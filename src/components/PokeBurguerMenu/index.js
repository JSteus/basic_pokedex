import React from "react"

import { Background, Container } from "./styles"
import { PokeList } from "../PokeList"

import Icon from "../../assets/pokeicon.png"

export function PokeBurguerMenu({ visible, setVisibility }) {
  return (
    <Container open={visible} onClick={() => setVisibility(false)}>
      <Background onClick={e => e.stopPropagation()}>
        <PokeList icon={Icon} />
      </Background>
    </Container>
  )
}
