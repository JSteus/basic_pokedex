import React from "react"
import { formatName } from "../../utils/index.js"

import { CustomOption, CustomSelect } from "./styles.js"

export function Select({ elementId, items, current, handleChange }) {
  return (
    <>
      <CustomSelect
        onChange={(e) => handleChange(e.target.value)}
        value={current}
        id={elementId}
      >
        {items?.map((item) => (
          <CustomOption key={item.name} value={item.url}>
            {formatName(item.name)}
          </CustomOption>
        ))}
      </CustomSelect>
    </>
  )
}
