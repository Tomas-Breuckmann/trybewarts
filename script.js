const enviar = document.getElementById('submit');
// console.log(enviar)
function testarEmailSenha(event) {
  event.preventDefault();
  const valorEmail = document.getElementById('email').value;
  // console.log(valorEmail)
  const valorSenha = document.getElementById('password').value;
  if (valorEmail === 'tryber@teste.com' && valorSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
enviar.addEventListener('click', testarEmailSenha);


// requisito 20
const counter = document.querySelector('#counter')
const textArea = document.querySelector('#textarea');
textArea.addEventListener('keydown', function() {
  const caracteres=500;
  let add =caracteres-textArea.value.length;
    counter.innerHTML=add
});
