const navElem = document.querySelectorAll('.item')
console.log("Number of categories: ", navElem.length)

for (let i = 0; i < navElem.length; i += 1) {

    const h2Elem = navElem[i].querySelector('h2');
    console.log("Category:", h2Elem.textContent);
    const liElem = navElem[i].querySelector('ul').childElementCount
    console.log("Elements: ", liElem)

}

