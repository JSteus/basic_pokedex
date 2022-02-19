import styled, { keyframes } from "styled-components"

const fadeInOut = keyframes`
 50% { opacity: 0.5; }
 100% { opacity: 1; }
`

export const Container = styled.div`
  position: absolute;
  display: ${(props) => (props.isLoading ? "flex" : "none")};
  height: 100%;
  width: 100%;
  background-color: rgba(34, 34, 36, 0.8);
  align-items: center;
  justify-content: center;
  z-index: 100;
  border-radius: 10px;
`

export const Sprite = styled.img`
  display: flex;
  height: 40%;
  animation: ${fadeInOut} 2s linear infinite;
`
