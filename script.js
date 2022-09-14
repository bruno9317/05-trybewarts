const email = document.getElementById('email');
const password = document.getElementById('password');
const entrar = document.getElementById('entrar');
const textarea = document.getElementsByClassName('textarea')[0];
const agreement = document.getElementById('agreement');
const enviarButton = document.getElementById('submit-btn');

function validar() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function limpar() {
  textarea.innerText = '';
}

function disable() {
  enviarButton.disabled = !this.checked;
}

enviarButton.disabled = !agreement.checked;
agreement.onchange = disable;
textarea.addEventListener('click', limpar);
entrar.addEventListener('click', validar);
