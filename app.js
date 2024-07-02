alert ('Sorteie seu número');
let numeroSecreto = 6;
console.log(numeroSecreto)
let chute

while(chute != numeroSecreto ){
    chute = prompt ('Ecolha um número entre 1 e 10');

    if (chute == numeroSecreto){
        alert(`Você descobriu, é ${numeroSecreto}`);
    }
    else{
        if(chute > numeroSecreto){
            alert(`O número é menor que ${chute}`);
        }
        else{
            alert(`O número é maior que ${chute}`);
        }
    }
}


