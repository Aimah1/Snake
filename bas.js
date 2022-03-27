const BAS_STORLEK = 21

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * BAS_STORLEK) + 1,
    y: Math.floor(Math.random() * BAS_STORLEK) + 1
  }
}

export function outsideGrid(position) {
  return (
    position.x < 1 || position.x > BAS_STORLEK ||
    position.y < 1 || position.y > BAS_STORLEK
  )
}