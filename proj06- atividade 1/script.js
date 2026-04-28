// ====================================================================
// 1) Números de 1 até o número digitado
// ====================================================================
function exercicio1() {
    let num = parseInt(prompt("1. Digite um número inteiro:"));
    
    if (isNaN(num)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    console.log(`--- Números de 1 até ${num} ---`);
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}