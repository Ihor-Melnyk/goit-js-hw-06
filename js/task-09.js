function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const elSpan = document.querySelector('.color')
const elBody = document.querySelector('body');
const elButton = document.querySelector('.change-color');

const buttonClick = elButton.addEventListener('click', event => {
  elBody.style.backgroundColor = `${getRandomHexColor()}`;
  elSpan.textContent = getRandomHexColor();
});

