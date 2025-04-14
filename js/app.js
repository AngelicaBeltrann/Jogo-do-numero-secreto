

// Variáveis
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let tentativas = 1;

function verificarChute() {
    const input = document.getElementById('inputChute');
    const chute = parseInt(input.value || 0); // transformando em número

    if (chute === numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa(s)!`);
        // Reinicia o jogo
        reiniciarJogo();
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }
        tentativas++;
        input.value = ''; // limpa o campo para novo chute
        input.focus(); // coloca o cursor de volta no input
    }
}

function reiniciarJogo() {
    numeroSecreto = parseInt(Math.random() * 100 + 1);
    tentativas = 1;
    document.getElementById('inputChute').value = '';
}

// A palavra tentativas é maior que 1? caso tentativas seja maior que 1 utilize a palavra tentativas, se nao use a palavra tentativa.
//let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);