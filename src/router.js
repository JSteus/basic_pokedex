import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { PokedexProvider } from "./hooks/usePokedex"
import { About } from "./pages/about"
import { Main } from "./pages/main"

export function Router() {
  return (
    <PokedexProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </PokedexProvider>
  )
}
