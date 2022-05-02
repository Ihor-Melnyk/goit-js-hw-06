let counterValue = 0;

const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value')

buttonDecr.addEventListener('click', function () {
  counterValue -= 1;
  valueEl.textContent = counterValue;
})
buttonInc.addEventListener('click', function () {
  counterValue += 1;
  valueEl.textContent = counterValue;
})
