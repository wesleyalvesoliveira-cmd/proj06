// ====================================================================
// 4) Média de 5 notas
// ====================================================================
function exercicio4() {
    let soma = 0;
    
    for (let i = 1; i <= 5; i++) {
        // Usamos parseFloat para permitir notas quebradas (ex: 7.5)
        let nota = parseFloat(prompt(`4. Digite a ${i}ª nota:`));
        soma += isNaN(nota) ? 0 : nota;
    }
    
    let media = soma / 5;
    alert(`A média das 5 notas é: ${media.toFixed(2)}`);
    console.log(`A média das notas é: ${media.toFixed(2)}`);
}