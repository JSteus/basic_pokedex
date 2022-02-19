import React from "react"

import Logo from "../../assets/pokelogo.png"

import { useNavigate } from "react-router-dom"
import { Container, Header, Image, ImageContainer } from "./styles"

export function PokeHeader() {
  const navigate = useNavigate()
  return (
    <Container>
      <Header>
        <ImageContainer onClick={() => navigate("/")}>
          <Image alt="pokedex" src={Logo} />
        </ImageContainer>
      </Header>
    </Container>
  )
}
