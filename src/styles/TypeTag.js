import styled from "styled-components"

const types = {
  normal: "#ada594",
  fighting: "#a55239",
  flying: "#9cadf7",
  poison: "#b55aa5",
  ground: "#bda55a",
  rock: "#bda55a",
  bug: "#adbd21",
  ghost: "#6363b5",
  steel: "#adadc6",
  fire: "#f75231",
  water: "#399cff",
  grass: "#7bce52",
  electric: "#ffc631",
  psychic: "#ff73a5",
  ice: "#5acee7",
  dragon: "#7b63e7",
  dark: "#735a4a",
  fairy: "#ffaaff"
}

export const TypeTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 1.6rem;
  text-align: center;
  border: 2px solid #222224;
  color: #f0f0f0;
  margin-left: 5px;
  background-color: ${(props) => types[props.type]};
`
