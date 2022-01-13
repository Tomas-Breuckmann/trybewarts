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
// Deve haver um campo com o formato "Nome: Alguem Aqui"
// Deve haver um campo com o formato "Email: email@mail.com"
// Deve haver um campo com o formato "Casa: Casa Escolhida"
// Deve haver um campo com o formato "Família: Família Escolhida"
// Deve haver um campo com o formato "Matérias: Matérias, Marcadas, Aqui"
// Deve haver um campo com o formato "Avaliação: NotaAqui"
// Deve haver um campo com o formato "Observações: Observações aqui"
function mostraFormulario(event) {
  event.preventDefault();
  const evaluationForm = document.getElementById('evaluation-form');
  const campo1 = ['Nome: ', 'Email: ', 'Casa: ', 'Família: ', 'Matérias: ', 'Avaliação: '];
  campo1[6] = 'Observações: ';
  const campo2 = [];
  const fName = document.getElementById('input-name'); // .value para resgatar o input
  const fLastName = document.getElementById('input-lastname'); // .value para resgatar o input
  campo2[0] = `${fName.value} ${fLastName.value}`;
  const fEmail = document.getElementById('input-email'); // .value para resgatar o input
  campo2[1] = fEmail.value;
  const fCasa = document.getElementById('house'); // .value para resgatar o que foi escolhido
  campo2[2] = fCasa.value;
  const fFamilia = document.getElementsByName('family'); // para resgatar o que foi escolhido, percorrer o array e resgatar com o .value aquele que estiver com .checked == true
  for (let i = 0; i < fFamilia.length; i += 1) {
    if (fFamilia[i].checked === true) {
      campo2[3] = fFamilia[i].value;
    }
  }
  const fMaterias = document.getElementsByClassName('selected');// para resgatar o que foi escolhido (.subject), percorrer o array e resgatar com o .value
  campo2[4] = '';
  for (let i = 0; i < fMaterias.length; i += 1) {
    if (i === 0) {
      campo2[4] += fMaterias[i].value;
    } else {
      campo2[4] = `${campo2[4]}, ${fMaterias[i].value}`;
    }
  }
  const fAvaliacao = document.getElementsByName('rate'); // para resgatar o que foi escolhido, percorrer o array e resgatar com o .value aquele que estiver com .checket == true
  for (let i = 0; i < fAvaliacao.length; i += 1) {
    if (fAvaliacao[i].checked === true) {
      campo2[5] = fAvaliacao[i].value;
    }
  }
  const fObservacoes = document.getElementById('textarea');
  campo2[6] = fObservacoes.value;
  evaluationForm.innerHTML = '';
  for (let i = 0; i < campo1.length; i += 1) {
    const campo = document.createElement('div');
    campo.innerText = `${campo1[i]} ${campo2[i]}`;
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
