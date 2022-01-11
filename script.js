const enviar = document.getElementById('submit');
// console.log(enviar)
function testarEmailSenha(event) {
  event.preventDefault();
  const valorEmail = document.getElementById('email').value;
  // console.log(valorEmail)
  const valorSenha = document.getElementById('password').value;
  if (valorEmail == "tryber@teste.com" && valorSenha == "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
  // if (valorEmail == 'tryber@teste.com'){
  //     alert('Email ok')
  // }
}
enviar.addEventListener("click", testarEmailSenha);
