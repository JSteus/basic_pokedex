import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Press Start 2P", cursive;
  color: #222224;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

h1,
h2,
p,
ul,
li,
a {
  margin: 0;
  padding: 0;
}

code {
  font-family: "Press Start 2P", cursive;
}
`
