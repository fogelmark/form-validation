const form = document.querySelector("#validationForm");
const errorMsg = document.querySelector("#errorMessage");
//const text = document.querySelector('.input-group')

const validateFirstName = (id) => {
  const name = document.querySelector(id);
  const regEx = /^[a-z]+$/i

  if (
    name.value.trim() === "" ||
    name.value.length < 2 ||
    !name.value.match(regEx)
  ) {
    console.error("Invalid first name");
    name.classList.add('error')
    //text.style.color = 'red';
    return false;
  } else {
    name.classList.remove('error')
    return true;
  }
};

const validateLastName = (id) => {
  const name = document.querySelector(id);
  const regEx = /^[a-z]+$/i

  if (
    name.value.trim() === "" ||
    name.value.length < 2 ||
    !name.value.match(regEx)
  ) {
    console.error("Invalid last name");
    name.classList.add('error')
    return false;
  } else {
    name.classList.remove('error')
    return true;
  }
};

const validateEmail = (id) => {
  const email = document.querySelector(id);

  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;

  if (!regEx.test(email.value)) {
    console.error("Invalid email");
    email.classList.add('error')
    return false;
  } else {
    email.classList.remove('error')
    return true;
  }
};

const validatePassword = (id) => {
  const password = document.querySelector(id);

  if (password.value.length < 6) {
    console.error("Password must contain at least 6 characters");
    password.classList.add('error')
    return false;
  } else {
    password.classList.remove('error')
    return true;
  }
};

const validateRepeatPassword = (id) => {
  const password = document.querySelector("#password");
  const repeatPassword = document.querySelector(id);

  if (repeatPassword.value != password.value || repeatPassword.value === '') {
    console.error("Passwords does not match");
    repeatPassword.classList.add('error')
    return false;
  } else {
    repeatPassword.classList.remove('error')
    return true;
  }
};

const validateTerms = (id) => {
  const terms = document.querySelector(id);

  if (!terms.checked) {
    console.error("Terms not accepted");
    return false;
  } else {
    return true;
  }
};

const valSuccess = () => {
  errorMsg.classList.add("d-none");
  console.log("Validation complete");
  return true;
};

const valError = (id) => {
  errorMsg.classList.remove("d-none");
  console.error("Alla fält måste vara korrekt ifyllda!");
  return false;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.clear(); // Clearar console så det blir visuellt lättare vid error testing
  const errors = [];

  for (let i = 0; i < form.length; i++) {

    const validateId = "#" + form[i].id;

    switch (validateId) {
      case "#firstName":
        errors[i] = validateFirstName(validateId);
        break;
      case "#lastName":
        errors[i] = validateLastName(validateId);
        break;
      case "#email":
        errors[i] = validateEmail(validateId);
        break;
      case "#password":
        errors[i] = validatePassword(validateId);
        break;
      case "#repeatPassword":
        errors[i] = validateRepeatPassword(validateId);
        break;
      case "#terms":
        errors[i] = validateTerms(validateId);
        break;
      default:
        break;
    }
  }

  if (errors.includes(false)) {
    valError();
  } else {
    const user = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };
    valSuccess();
    //form.reset()
    console.log(user);
  }
});
