alert ('Sorteie seu número');
let numeroSecreto = 6;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10')

if (chute == 6){
    alert(`Você descobriu' ${numeroSecreto}`);
}
else{
    if(chute > numeroSecreto){
        alert(`O número é menor que ${chute}`);
    }
    else{
        alert(`O número é maior que ${chute}`);
    }
}
