import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

//  as HTMLFormElement = Afirmando que o elemento existe e é do tipo especificado
const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const hideErrorMessages = (form: HTMLFormElement): void => {
  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGES}`)
    .forEach((element) => element.classList.remove(SHOW_ERROR_MESSAGES));
};

const showErrorMessage = (input: HTMLInputElement, msg: string): void => {
  const formField = input.parentElement as HTMLDivElement;
  const errorMessage = formField.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formField.classList.add(SHOW_ERROR_MESSAGES);
};

const checkForEmptyFields = (...inputs: HTMLInputElement[]): void => {
  inputs.forEach((input) => {
    if (!input.value)
      showErrorMessage(input, 'This field has not been filled in');
  });
};

const checkEmail = (input: HTMLInputElement): void => {
  if (!isEmail(input.value)) showErrorMessage(input, 'Invalid email');
};

const checkEqualPasswords = (
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void => {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Passwords are not the same');
    showErrorMessage(password2, 'Passwords are not the same');
  }
};

const shouldSendForm = (form: HTMLFormElement): boolean => {
  let send = true;

  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGES}`)
    .forEach(() => (send = false));

  return send;
};

// this referência o form pois a função é definida como function e não com arrow function
// Com arrow function o this seria do escopo global
form.addEventListener('submit', function (event) {
  event.preventDefault();

  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(this)) console.log('Form sent');
});
