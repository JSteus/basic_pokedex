import React, { useState } from "react"
import { Dialog } from "primereact/dialog"

import "./styles.css"

export default function SimpleLoading({ visible, invisible }) {
  return (
    <Dialog
      visible={visible}
      style={{
        width: window.innerWidth > 450 ? "20%" : "50vw",
        borderRadius: 8
      }}
      onHide={() => invisible(false)}
      closable={false}
      blockScroll
    >
      <div className="loadContainer">
        <i className="pi pi-spin pi-spinner" style={{ fontSize: "2em" }}></i>
        <p>Loading...</p>
      </div>
    </Dialog>
  )
}
