import React from "react"

import "./styles.css"

import { Dialog } from "primereact/dialog"
import TypeTag from "../typeTag"

// import { Container } from './styles';

export default function Modal({ pokeData, pokeOrder, visible, invisible }) {
  // const renderFooter = () => {
  //   return (
  //     <div>
  //       <Button
  //         label="Fechar"
  //         onClick={() => invisible(false)}
  //         className="p-button-text"
  //       />
  //     </div>
  //   )
  // }

  // console.log(pokeData)

  return (
    <Dialog
      header="DEX INFO"
      visible={visible}
      draggable={false}
      resizable={false}
      style={{ width: "60vw" }}
      // footer={renderFooter()}
      onHide={() => invisible(false)}
    >
      {pokeData && (
        <div className="pokeBox">
          <div className="pokeHeader">
            <img src={pokeData.sprites.front_default} />
          </div>
          <div className="pokeBody">
            <div className="pokeTitle">
              <h4>{pokeOrder}</h4> <h4>{pokeData.name.toUpperCase()}</h4>{" "}
              <h4></h4>
            </div>
            <div className="pokeTags">
              {pokeData.types.length === 1
                ? (
                <TypeTag type={pokeData.types[0].type.name} />
                  )
                : (
                <>
                  <TypeTag type={pokeData.types[0].type.name} />
                  <TypeTag type={pokeData.types[1].type.name} />
                </>
                  )}
            </div>
            <div className="pokeStats">
              <div className="statsrow">
                <p>HT: </p> <p>{pokeData.height}</p>
              </div>
              <div className="statsrow">
                <p>WT: </p> <p>{pokeData.weight}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Dialog>
  )
}
