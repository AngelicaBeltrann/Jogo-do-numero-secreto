// msg inicial vista pelo usuário
alert('Boas vindas ao jogo do número secreto');

//variáveis
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute 
let tentativas = 1;

//enquanto o chute por diferente do numero secreto, irá ter tentativas
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número de 1 a 100');
//se o número secreto por igual ao chute, a contece isso
    if (chute == numeroSecreto) {
        break;
        // se nao, acontece isso
    } else {
        //se o chute for maior q o numero secreto, aparece msg
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor ${chute}`);
            // se nao, aparece essa msg
        } else {
            alert(`O número secreto é maior ${chute}`);
        }
        tentativas++; //tentativas = tentativas + 1 
    }   
    
}
// A palavra tentativas é maior que 1? caso tentativas seja maior que 1 utilize a palavra tentativas, se nao use a palavra tentativa.
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);