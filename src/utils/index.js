export function formatOrder(e) {
  if (!e) return "000"

  const newE = e.toString()

  if (newE.length === 1) return `00${newE}`

  if (newE.length === 2) return `0${newE}`

  if (newE.length === 3) return newE
}

export function formatName(e) {
  if (!e) return ""

  const newE = e.replace("-", " ")

  return newE.toUpperCase()
}

export function formatType(e) {
  if (!e) return ""

  if (e === "electric") return "ELECTR"
  if (e === "psychic") return "PSYCHC"
  if (e === "fighting") return "FIGHT"

  return e.toUpperCase()
}

export function formatSize(e) {
  if (!e) return ""

  const newE = parseFloat(e / 10)

  return newE.toFixed(1)
}

export function formatFlavorText(e) {
  if (!e) return ""

  return e.replace("\f", " ")
}
