const email = document.getElementById('email');
const password = document.getElementById('password');
const entrar = document.getElementById('entrar');

function validar() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

entrar.addEventListener('click', validar);
