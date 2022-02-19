import React, { useState } from "react"
import { usePokedex } from "../../hooks/usePokedex.js"
import { usePokemonDetails } from "../../hooks/usePokemonDetails.js"
import { usePokemonSpecies } from "../../hooks/usePokemonSpecies.js"
import {
  formatFlavorText,
  formatName,
  formatOrder,
  formatSize,
  formatType
} from "../../utils/index.js"
import { TypeTag } from "../typeTag/styles.js"

import {
  Container,
  DescriptionContainer,
  FlavorText,
  FlavorTextContainer,
  FlavorTextValue,
  RowContainer,
  SizeContainer,
  SpeciesContainer,
  Sprite,
  SpriteContainer,
  Text,
  TitleContainer,
  TypeContainer
} from "./styles.js"

function PokeView() {
  const { currentPokemon } = usePokedex()
  const { details, detailsLoading, detailsError } = usePokemonDetails(
    currentPokemon?.name
  )
  const { species, speciesLoading, speciesError } = usePokemonSpecies(
    currentPokemon?.name
  )

  const mounted = !detailsLoading && !speciesLoading

  const [isFront, setIsFront] = useState(true)

  if (!currentPokemon) return <Container>vrau</Container>

  return (
    <Container>
      <RowContainer>
        <SpriteContainer>
          {mounted && (
            <Sprite
              alt=""
              key={details?.name}
              onClick={() => setIsFront(!isFront)}
              src={isFront ? details?.front : details?.back}
            />
          )}
        </SpriteContainer>
        <DescriptionContainer>
          <TitleContainer>
            <Text>{formatOrder(currentPokemon?.index)}</Text>
            <Text>{formatName(details?.name)}</Text>
          </TitleContainer>
          <SpeciesContainer>
            <Text>{species?.specie}</Text>
          </SpeciesContainer>
          <TypeContainer>
            {details?.types.map((type) => (
              <TypeTag key={type} type={type}>
                {formatType(type)}
              </TypeTag>
            ))}
          </TypeContainer>
          <SizeContainer>
            <Text>HT</Text>
            <Text>{formatSize(details?.ht)} m.</Text>
          </SizeContainer>
          <SizeContainer>
            <Text>WT</Text>
            <Text>{formatSize(details?.wt)} kg.</Text>
          </SizeContainer>
        </DescriptionContainer>
      </RowContainer>
      <FlavorTextContainer>
        <FlavorText>
          <FlavorTextValue>{formatFlavorText(species?.quote)}</FlavorTextValue>
        </FlavorText>
      </FlavorTextContainer>
    </Container>
  )
}

export default PokeView
