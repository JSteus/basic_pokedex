export function formatOrder(e) {
  const newE = e.toString()

  if (newE.length === 1) {
    return `00${newE}`
  } else if (newE.length === 2) {
    return `0${newE}`
  } else {
    return newE
  }
}
