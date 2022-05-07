    const form= document.querySelector('.login-form');
    const email= document.querySelector('input[name="email"]');
    const password= document.querySelector('input[name="password"]');  

form.addEventListener('submit', event => { 
    event.preventDefault(); //не перезагружає сторінку

    if (event.currentTarget.elements.password.value === "" || event.currentTarget.elements.email.value === "") {
        return alert('All fields must be filled');
    }

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value
    const formData = {
        mail,
        password,
    }
    console.log(formData);
    event.currentTarget.reset();//очищує значення полів
})
