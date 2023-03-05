import throttle from 'lodash.throttle';
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
const form = document.querySelector('form');
let email;
let message;
const objectLocalStorage = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

if (objectLocalStorage !== undefined && objectLocalStorage !== null) {
  input.value = objectLocalStorage.email;
  textarea.value = objectLocalStorage.message;
  email = objectLocalStorage.email;
  message = objectLocalStorage.message;
}

form.addEventListener('input', throttle((e) => {
  email = input.value;
    message = textarea.value;
    const object = { email, message };
  localStorage.setItem('feedback-form-state', JSON.stringify(object));
}, 500));


const sendClear = e => {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
 form.reset();
  console.log({ email, message });
};
button.addEventListener('click', sendClear);


