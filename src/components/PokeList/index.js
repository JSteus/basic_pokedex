import React from "react"
import { usePokedex } from "../../hooks/usePokedex.js"
import { formatOrder } from "../../utils/index.js"
import { Select } from "../Select/index.js"

import {
  Container,
  Item,
  List,
  Text,
  PokeBall,
  TextContainer,
  ListControls
} from "./styles.js"

export function PokeList({ icon }) {
  const {
    pokedex,
    pokemons = [],
    selectGeneration,
    selectPokemon,
    currentGeneration
  } = usePokedex()

  return (
    <Container>
      <ListControls>
        <Select
          items={pokedex}
          current={currentGeneration}
          handleChange={selectGeneration}
        />
      </ListControls>
      <List>
        {pokemons?.map((item) => (
          <Item key={item.index} onClick={() => selectPokemon(item)}>
            <Text>{formatOrder(item.index)}</Text>
            <TextContainer>
              <Text>{item.name.toUpperCase()}</Text>
            </TextContainer>
            <PokeBall
              alt={item.name}
              src={icon}
            />
          </Item>
        ))}
      </List>
    </Container>
  )
}
