import React from "react"

import { Container, Sprite } from "./styles.js"

import image from "../../assets/pokeicon.png"

export function PokeLoading({ isLoading }) {
  return (
    <Container isLoading={isLoading}>
      <Sprite alt="" src={image} />
    </Container>
  )
}
