const form = document.querySelector('#validationForm')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const repeatPassword = document.querySelector('#repeatPassword')
const errorMsg = document.querySelector('#errorMessage')


const validateName = (id) => {
    const input = document.querySelector(id)
    
    if (input.value.trim() === '' ||
        input.value.length < 2 ||
        input.value.match(0-9)) {
        console.error('Invalid name');
        return false
    } else {
        console.log(input.value);
        return true
    }
}

const validateEmail = (id) => {
    const email = document.querySelector(id)
    
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

    if(!regEx.test(email.value)) {
       console.error('Invalid email');
       return false
    } else {
         console.log(email.value);
         return true
    }
}

const validatePassword = (id) => {
    const password = document.querySelector(id)
    
    const regEx = /^[A-Za-z]\w{5,11}$/ // password måste vara minst 6, max 12 tecken

    if (password.value.match(regEx)) {
        console.log(password.value);
        return true
    } else {
        console.error('Password must contain 6-12 signs');
        return false
    }
}

const validateRepeatPassword = (id) => {
    const repeatPassword = document.querySelector(id)

    if (password.value === repeatPassword.value) {
        console.log('password matched');
        return true
    } else if (repeatPassword != password) {
        console.error('password did not match');
        return false
    }
}


const validateTerms = (id) => {
    const terms = document.querySelector(id)

    if (!terms.checked) {
        console.error('Terms not accepted');
        return false
    } else {
        console.log('Terms accepted');
        return true
    }
}

const setSuccess = () => {
    errorMsg.classList.add('d-none')
    console.log('Validation complete');
    return true;
}
const setError = () => {
    errorMsg.classList.remove('d-none')
    console.error('Alla fält måste vara korrekt ifyllda!');
    return false;
}


form.addEventListener('submit', e => {
    e.preventDefault()

    const errors = []
    console.clear();

    
    for(let i = 0; i < form.length; i++) {

        const validateId = '#' + form[i].id

        if (form[i].type === 'text') {
            errors[i] = validateName(validateId)
        } else if (form[i].type === 'email') {
            errors[i] = validateEmail(validateId)
        } else if (form[i].type === 'password') {
            errors[i] = validatePassword(validateId)
        } else if (form[i].type === 'password') {
            errors[i] = validateRepeatPassword(validateId)
        } else if (form[i].type === 'checkbox') {
            errors[i] = validateTerms(validateId)
        }

    }

        if (errors.includes(false)) {
            setError()
        } else {
            const user = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                password: password.value
            }
            setSuccess()
            console.log(user);
        }
        console.log(errors);

    })