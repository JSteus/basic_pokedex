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
import { PokeLoading } from "../PokeLoading/index.js"
import { TypeTag } from "../../styles/TypeTag.js"

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
import { Placeholder } from "../../styles/Placeholder.js"

function PokeView() {
  const { currentPokemon } = usePokedex()
  const { details, detailsLoading } = usePokemonDetails(
    currentPokemon?.name
  )
  const { species, speciesLoading } = usePokemonSpecies(
    currentPokemon?.name
  )

  const loading = detailsLoading || speciesLoading

  const [isFront, setIsFront] = useState(true)

  if (!currentPokemon) return <Container><Placeholder>SELECT A POKÉMON</Placeholder></Container>

  return (
    <Container>
      <PokeLoading isLoading={loading} />
      <RowContainer>
        <SpriteContainer>
            <Sprite
              alt=""
              key={details?.name}
              onClick={() => setIsFront(!isFront)}
              src={isFront ? details?.front : details?.back}
            />
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
