const refs = {
    inputRange: document.querySelector("#font-size-control"),
    outputText: document.querySelector("#text"),
}

refs.outputText.style.fontSize = `${refs.inputRange.value}px`

refs.inputRange.addEventListener("input", (event) => {
    refs.outputText.style.fontSize = `${event.currentTarget.value}px` ;
});