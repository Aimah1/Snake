import { onSnake, expandSnake } from './orm.js'
import { randomGridPosition } from './bas.js'

let food = fruktPlacering()
const EXPANSION_RATE = 5

export function update() {
  if (onSnake(frukt)) {
    expandSnake(EXPANSION_RATE)
    frukt = fruktPlacering()
  }
}

function fruktPlacering() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
      newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
  }

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = frukt.y
  foodElement.style.gridColumnStart = frukt.x
  foodElement.classList.add('frukt')
  gameBoard.appendChild(foodElement)
}

