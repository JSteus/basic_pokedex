import React from "react"
import { useNavigate } from "react-router-dom"
import { FaBars } from "react-icons/fa6"

import Logo from "../../assets/pokelogo.png"
import { Container, Header, Image, ImageContainer } from "./styles"

export function PokeHeader({ mobile, sidebar, setSidebar }) {
  const navigate = useNavigate()
  return (
    <Container>
      <Header>
        {mobile && <FaBars onClick={() => setSidebar(!sidebar)}/>}
        <ImageContainer onClick={() => navigate("/")}>
          <Image alt="pokedex" src={Logo} />
        </ImageContainer>
      </Header>
    </Container>
  )
}
