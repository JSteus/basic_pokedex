import styled from "styled-components"

export const Container = styled.nav`
  background: black;
  height: 3.5rem;
`
export const Header = styled.div`
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  padding: 16px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  @media (max-width: 640px) {
    justify-content: center;

    svg {
      color: white;
      position: absolute;
      font-size: 1.5rem;
      top: 1rem;
      left: 0.5rem;
    }
  }
`
export const ImageContainer = styled.div`
  cursor: pointer;
`

export const Image = styled.img`
  width: 185px;
  padding-bottom: 15px;

  @media (max-width: 640px) {
    width: 140px;
  }
`
