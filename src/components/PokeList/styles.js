import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
export const ListControls = styled.div`
  display: flex;
  width: 100%;
  background: #f0f0f0;
  border: 3px solid #222224;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

  scrollbar-color: #222224 transparent;

      &::-webkit-scrollbar {
        height: 12px;
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: #222224;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: black;
      }
`

export const TextContainer = styled.div`
  width: 50%;
  text-align: left;
`

export const Text = styled.h3`
  font-size: 1rem;
  white-space: nowrap;
  text-align: left;
`

export const PokeBall = styled.img`
  width: 30px;
  transform: skew(30deg);
  -ms-transform: skew(30deg);
  -webkit-transform: skew(30deg);
`

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin: 5px 0;
  border-radius: 10px;
  height: 40px;
  width: 295px;
  background-color: #222224;
  color: #f0f0f0;
  border: 1px solid #222224;
  -ms-transform: skew(-30deg);
  -webkit-transform: skew(-30deg);
  transform: skew(-30deg);
  transform-origin: bottom left;

  &:hover {
    position: relative;
    margin: 0;
    width: 350px;
    height: 50px;
    background: #f90000;
    transition: width 100ms ease-in-out;

    h3 {
      font-weight: bold;
      font-size: 1.2rem;
    }

    img {
      width: 40px;
    }
  }
`
