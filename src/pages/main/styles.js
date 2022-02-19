import styled, { keyframes } from "styled-components"

const scroll = keyframes`
 from { background-position: 0 0; }
 to { background-position: -100% 0; }
`

export const PokeOuterContainer = styled.div`
  display: flex;
  height: calc(100vh - 3.5rem);
  flex-direction: column;
  background-color: #222224;
  align-items: center;
`
export const PokeInnerContainer = styled.div`
  background-image: linear-gradient(#222224 3px, transparent 3px),
    linear-gradient(to right, #222224 3px, #ee1515 1px);
  background-size: 20px 20px;
  animation: ${scroll} 50s linear infinite;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
`
