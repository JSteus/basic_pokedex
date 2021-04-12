import React, { useState, useEffect } from "react"
import api from "../../services/api"

import { ListBox } from "primereact/listbox"

import Modal from "../../components/modal"

import "./styles.css"
import Logo from "../../assets/pokelogo.png"
import Icon from "../../assets/pokeicon.png"
import SimpleLoading from "../../components/Loading"
import { formatOrder } from "../../utils"

export default function Main() {
  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState(null)
  const [pokeOrder, setPokeOrder] = useState(null)

  const [loading, setLoading] = useState(false)
  const [modalState, setModalState] = useState(false)

  // console.log(pokeOrder)
  // console.log(pokemons)

  async function getPokeData(e) {
    try {
      const response = await api.get(e.url)

      setPokemon(response.data)
      setLoading(false)
      setModalState(true)
    } catch (e) {
      console.log(e)
    }
  }

  function pokeSelect(e) {
    setLoading(true)
    getPokeData(e.value)
    setPokeOrder(formatOrder(e.value.index + 1))
    // console.log("funciona filho duma putaaaaaa")
  }

  const template = (e) => {
    return (
      <div className="templateContainer">
        <div>{`N° ${e.index + 1}`}</div>
        <div>{`${e.name.toUpperCase()}`}</div>
        <img
          alt={e.name}
          src={Icon}
          onError={(e) => console.log(e)}
          width="20px"
        />
      </div>
    )
  }

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await api.get("pokemon?limit=151")

        const pokeRaw = response.data.results

        setPokemons(pokeRaw.map((item, index) => ({ ...item, index })))
      } catch (e) {
        console.log(e)
      }
    }

    getPokemons()
  }, [])
  return (
    <>
      <SimpleLoading visible={loading} invisible={setLoading} />
      <Modal
        pokeData={pokemon}
        pokeOrder={pokeOrder}
        visible={modalState}
        invisible={setModalState}
      />
      <div className="outerContainer">
        <img className="pokeLogo" src={Logo} />
        <div className="pokeList">
          <div className="pokeInner">
            <ListBox
              value={pokemon}
              options={pokemons}
              filter
              filterBy="name"
              filterPlaceholder="Search by name..."
              itemTemplate={template}
              onChange={(e) => pokeSelect(e)}
            />
          </div>
        </div>
      </div>
    </>
  )
}
