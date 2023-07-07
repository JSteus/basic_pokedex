import React, { useState, useEffect } from "react"

import Icon from "../../assets/pokeicon.png"

import useWindowSize from "../../hooks/useWindowSize"
import { PokeInnerContainer, PokeOuterContainer } from "./styles"
import { PokeList } from "../../components/PokeList"
import { PokeView } from "../../components/PokeView"
import { PokeBurguerMenu } from "../../components/PokeBurguerMenu"
import { PokeHeader } from "../../components/PokeHeader"
import { PokeLoading } from "../../components/PokeLoading"
import { usePokedex } from "../../hooks/usePokedex"

export function Main() {
  const { generationLoading, pokemonsLoading } = usePokedex()
  const { width } = useWindowSize()
  const [mobile, setMobile] = useState(false)
  const [sidebar, setSidebar] = useState(false)
  const loading = generationLoading || pokemonsLoading

  useEffect(() => {
    setMobile(width <= 960)
  }, [width])

  return (
    <>
      <PokeLoading isLoading={loading} />
      <PokeHeader mobile={mobile} sidebar={sidebar} setSidebar={setSidebar} />
      <PokeOuterContainer>
        <PokeInnerContainer>
          <PokeView mobile={mobile} />
          {!mobile && <PokeList icon={Icon} />}
          {mobile && (
            <PokeBurguerMenu visible={sidebar} setVisibility={setSidebar} />
          )}
        </PokeInnerContainer>
      </PokeOuterContainer>
    </>
  )
}
