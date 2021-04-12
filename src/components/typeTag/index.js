import React from "react"

import "./styles.css"

export default function TypeTag({ type }) {
  // console.log(type)
  return <p className={`poketype ${type}`}>{type.toUpperCase()}</p>
}
