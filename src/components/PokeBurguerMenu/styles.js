import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  width: 100%;
  height: calc(100% - 3.5rem);
  background: transparent;
  overflow: auto;

  transform-origin: 0% 0%;
  transform: ${(props) =>
    props.open ? "translate(0, 0)" : "translate(-100%, 0)"};

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
`
export const Background = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  width: 75%;

  background: black;
  -webkit-font-smoothing: antialiased;
`
