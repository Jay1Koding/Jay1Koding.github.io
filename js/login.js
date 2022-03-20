const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const $todoForm = document.querySelector('#todo-form');

const $clock = document.querySelector('#clock');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerHTML = `Hello <span>${username}!</span>`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  $clock.classList.remove('invisible');
  $todoForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
  $todoForm.classList.add(HIDDEN_CLASSNAME);
  $clock.classList.add('invisible');
} else {
  paintGreetings(savedUsername);
}
