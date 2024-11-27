const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const text = document.getElementById('text-area');


form.addEventListener('submit', e => {
    e.preventDefault();
    validate();
    if (validate()) {
        alert("Hvala Vam na interesovanju, uskoro ćemo Vas kontaktirati putem podataka koje ste ostavili:\n" + email.value + '\n' + phone.value);
    }
});


function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function isValidEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}



function validate() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const textValue = text.value.trim();

    let valid = true;

    if (usernameValue === '') {
        setError(username, 'Unesite svoje ime');
        valid = false;
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Unesite ispravnu email adresu');
        valid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Unesite ispravnu email adresu');
        valid = false;
    } else {
        setSuccess(email);
    }

    if (isNaN(phoneValue) || phone.value === '') {
        setError(phone, 'Unesite ispravan broj telefona');
        valid = false;
    }
    else {
        setSuccess(phone);
    }

    if (textValue === '') {
        setError(text, 'Unesite detalje rezervacije');
        valid = false;
    } else {
        setSuccess(text);
    }

    return valid;
}








