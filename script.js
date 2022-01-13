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
textArea.addEventListener('keyup', () => {
  const caracteres = 500;
  const add = caracteres - textArea.value.length;
  counter.innerText = add;
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

// criterio 21
function selecionaMateria() {
  const fMaterias = document.getElementsByClassName('selected');
  let aux = 'Matérias: ';
  for (let i = 0; i < fMaterias.length; i += 1) {
    if (i === 0) {
      aux += fMaterias[i].value;
    } else {
      aux = `${aux}, ${fMaterias[i].value}`;
    }
  }
  return aux;
}

function selecionaAvaliacao() {
  const fAvaliacao = document.getElementsByName('rate'); // para resgatar o que foi escolhido, percorrer o array e resgatar com o .value aquele que estiver com .checket == true
  let aux = 'Avaliação: ';
  for (let i = 0; i < fAvaliacao.length; i += 1) {
    if (fAvaliacao[i].checked === true) {
      aux += `${fAvaliacao[i].value}`;
    }
  }
  return aux;
}

function selecionaFamilia() {
  const fFamilia = document.getElementsByName('family'); // para resgatar o que foi escolhido, percorrer o array e resgatar com o .value aquele que estiver com .checked == true
  let aux = 'Família: ';
  for (let i = 0; i < fFamilia.length; i += 1) {
    if (fFamilia[i].checked === true) {
      aux += `${fFamilia[i].value}`;
    }
  }
  return aux;
}

function coletaDados() {
  const campo2 = [];
  const fName = document.getElementById('input-name'); // .value para resgatar o input
  const fLastName = document.getElementById('input-lastname'); // .value para resgatar o input
  campo2[0] = `Nome: ${fName.value} ${fLastName.value}`;
  const fEmail = document.getElementById('input-email'); // .value para resgatar o input
  campo2[1] = `Email: ${fEmail.value}`;
  const fCasa = document.getElementById('house'); // .value para resgatar o que foi escolhido
  campo2[2] = `Casa: ${fCasa.value}`;
  campo2[3] = selecionaFamilia();
  campo2[4] = selecionaMateria();
  campo2[5] = selecionaAvaliacao();
  const fObservacoes = document.getElementById('textarea');
  campo2[6] = `Observações: ${fObservacoes.value}`;
  return campo2;
}

function mostraFormulario(event) {
  event.preventDefault();
  const evaluationForm = document.getElementById('evaluation-form');
  const campo2 = coletaDados();
  evaluationForm.innerHTML = '';
  for (let i = 0; i < campo2.length; i += 1) {
    const campo = document.createElement('div');
    campo.innerText = `${campo2[i]}`;
    evaluationForm.appendChild(campo);
  }
}
submit.addEventListener('click', mostraFormulario);

function verificaCheck() {
  const materias = document.getElementsByName('learn');
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked === true) {
      materias[i].classList.add('selected');
    } else {
      materias[i].classList.remove('selected');
    }
  }
}
verificaCheck();

