function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const divBoxes = document.querySelector('#boxes');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');

function createBoxes(amount) {
  console.log("createBoxes ~ amount", amount)
}
const createDiv = document.createElement('div')
divBoxes.appendChild(createDiv);
console.log("divBoxes", divBoxes)


