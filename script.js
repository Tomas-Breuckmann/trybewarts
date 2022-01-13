const enviar = document.getElementById('submit');
function testarEmailSenha(event) {
  event.preventDefault();
  const valorEmail = document.getElementById('email').value;
  const valorSenha = document.getElementById('password').value;
  if (valorEmail === 'tryber@teste.com' && valorSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
enviar.addEventListener('click', testarEmailSenha);

// requisito 20
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
textArea.addEventListener('keydown', () => {
  const caracteres = 500;
  const add = caracteres - textArea.value.length;
  counter.innerHTML = add;
});

// criterio 18
const mark = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
function testaConfirmacao() {
  mark.addEventListener('click', () => {
    if (mark.checked === true) {
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  });
}
testaConfirmacao();
