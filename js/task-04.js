let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value')

buttonDecrement.addEventListener('click', function () {
  counterValue -= 1;
  valueEl.textContent = counterValue;
})
buttonIncrement.addEventListener('click', function () {
  counterValue += 1;
  valueEl.textContent = counterValue;
})
