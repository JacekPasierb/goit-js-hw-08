import throttle from 'lodash.throttle';
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
const form = document.querySelector('form');
let email;
let message;
try {
  const objectLocalStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (objectLocalStorage !== undefined && objectLocalStorage !== null) {
    input.value = objectLocalStorage.email;
    textarea.value = objectLocalStorage.message;
    email = objectLocalStorage.email;
    message = objectLocalStorage.message;
  }
} catch (e) {
  console.error('Error while getting data from Local Storage:', e);
}

form.addEventListener('input', throttle((e) => {
  email = input.value;
    message = textarea.value;
    const object = { email, message };
    try {
      localStorage.setItem('feedback-form-state', JSON.stringify(object));
    } catch (e) {
      console.error('Nie udało się zapisać danych do localStorage', e);
    }
}, 500));


const sendClear = e => {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
 form.reset();
  console.log({ email, message });
};
button.addEventListener('click', sendClear);


