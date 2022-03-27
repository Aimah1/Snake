let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
  switch (e.key) {
   
    case 'Left':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case 'Right':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break
      case 'Up':
        if (lastInputDirection.y !== 0) break
        inputDirection = { x: 0, y: -1 }
        case 'Down':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
  }
})

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}