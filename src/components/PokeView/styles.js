import styled, { keyframes } from "styled-components"

const jump = keyframes`
 0% { transform: translateY(0); }
25% { transform: translateY(-20px); }
50% { transform: translateY(0); }
75% { transform: translateY(-20px); }
100% { transform: translateY(0); }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  padding: 20px 0 0 20px;
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
`

export const SpriteContainer = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
`

export const Sprite = styled.img`
  display: flex;
  width: 220px;
  height: 220px;
  animation: ${jump} 0.5s linear;
  cursor: pointer;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  background: #f0f0f0;
  border: 3px solid #222224;
`

export const TitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  text-align: left;
  padding: 5px 0;
  background: #bababa;
  list-style: none;

  h1:nth-child(1) {
   position: absolute;
   left: 5px;
}
  }
  
`

export const SpeciesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  text-align: left;
  padding: 10px 10px;
`

export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 60px;
  height: 35%;
  padding-left: 10%;
  margin-bottom: 10px;

  background-image: linear-gradient(#f0f0f0 3px, transparent 3px),
    linear-gradient(to right, #f0f0f0 3px, #bababa 1px);
  background-size: 10px 10px;
`

export const SizeContainer = styled.div`
  display: flex;
  background-image: linear-gradient(
    to bottom,
    #bababa,
    #bababa 50%,
    #bababa 50%,
    #bababa
  );
  background-repeat: no-repeat;
  background-size: 100% 6px;
  background-position: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  padding: 10px 25px;
`

export const FlavorTextContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  padding: 20px 0;
`

export const FlavorText = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 20px;
  background: #222224;
  align-items: center;
  border: 5px solid #bababa;
`

export const FlavorTextValue = styled.h2`
  font-size: 0.9rem;
  text-align: left;
  line-height: 1.6;
  color: #f0f0f0;
`

export const Text = styled.h1`
  font-size: 1rem;
  text-align: left;
`
