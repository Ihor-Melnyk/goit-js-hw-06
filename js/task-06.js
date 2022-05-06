const inputBorder = document.querySelector('#validation-input');
console.log("inputEl", inputBorder)
inputBorder.addEventListener("blur", (event) => {
    inputBorder.value.trim().length == inputBorder.dataset.length
        ? inputBorder.classList.remove('invalid') || inputBorder.classList.add('valid') 
        : inputBorder.classList.add('invalid');
})