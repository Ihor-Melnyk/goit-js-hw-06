const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElem = document.querySelector('#ingredients');

const itemElemList = ingredients.map(option => {
  
  const itemElem = document.createElement('li');
  itemElem.classList.add('item');
  itemElem.textContent = option;
  listElem.appendChild(itemElem);
})
console.log(listElem);

