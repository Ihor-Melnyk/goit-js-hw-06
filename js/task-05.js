// Напиши скрипт, який під час набору тексту в інпуті input#name-input 
//(подія input), підставляє його поточне значення в span#name - output.
//Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const textInput = document.querySelector("input#name-input");
// console.log("textInput", textInput)
const output = document.querySelector("span#name-output");
// console.log("output", output)

textInput.addEventListener("input", (event) => {
  output.textContent.trim() !== ''? output.textContent = event.currentTarget.value.trim() : 'Anonymous';
});
