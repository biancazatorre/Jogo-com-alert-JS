let numeroSecreto= gerarNumeroAleatorio();

function exibirTextoNaTela(){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    console.log('O botão foi clicado');
}

function gerarNumeroAleatorio (){
    parseInt (Math.random() * 10 + 1)
}