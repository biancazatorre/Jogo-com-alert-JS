alert ('Bem vindo ao jogo número secreto');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while(chute != numeroSecreto ){

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto){
        break;   
    }

    else{
        if(chute > numeroSecreto){
            alert(`O número é menor que ${chute}`);
        }
        else{
            alert(`O número é maior que ${chute}`);
        }
        tentativas ++;
    }
}

//operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto: ${numeroSecreto}, com ${tentativas} ${palavraTentativa}`);



