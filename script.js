
alert("Inicio do game")
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

while (chute != numeroSecreto){ 
    chute = prompt(`Digite um numero de 1 até ${numeroMaximo} `);

    if (chute == numeroSecreto){
        break
    }else {
        if(chute <= 0){
            alert("Infome numeros acima de 1 mula!")
        }
        else if (chute < numeroSecreto){
            alert(`${chute} é menor que o numero secreto.`);
        }
        else {
            alert(`${chute} é maior que o numero secreto.`);
        }
    }
    tentativas++
}

let fraseFinal = tentativas > 1 ? "tentativas" : "tentativa"

alert(`Acertou o numero secreto ${numeroSecreto} em ${tentativas} ${fraseFinal}`)
