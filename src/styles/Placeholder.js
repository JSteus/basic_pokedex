import styled, { keyframes } from "styled-components"

const wobble = keyframes`
50% { transform: translateY(20px); },
100% { transform: translateY(-20px); }
`

export const Placeholder = styled.h1`
  display: flex;
  align-items: center;
  font-size: 3rem;
  text-align: center;
  color: #f0f0f0;
  line-height: 1.6;
  animation: ${wobble} 1s linear infinite;
`
