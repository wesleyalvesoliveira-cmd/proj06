// ====================================================================
// 2) Soma de 10 números inteiros
// ====================================================================
function exercicio2() {
    let soma = 0;
    
    for (let i = 1; i <= 10; i++) {
        let valor = parseInt(prompt(`2. Digite o ${i}º número inteiro:`));
        // Se o usuário não digitar um número, consideramos 0 para não quebrar a conta
        soma += isNaN(valor) ? 0 : valor; 
    }
    
    alert(`A soma dos 10 números é: ${soma}`);
    console.log(`A soma dos 10 números é: ${soma}`);
}