import React from "react"
import ReactDOM from "react-dom"

import GlobalStyle from "./styles/global"
import { Router } from "./router.js"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
)
