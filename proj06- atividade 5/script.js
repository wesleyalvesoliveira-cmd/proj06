// ====================================================================
// 5) Números pares em um intervalo
// ====================================================================
function exercicio5() {
    let num1 = parseInt(prompt("5. Digite o primeiro número do intervalo:"));
    let num2 = parseInt(prompt("5. Digite o segundo número do intervalo:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, digite números válidos.");
        return;
    }

    // Identifica o menor e o maior para o laço funcionar não importando a ordem digitada
    let menor = Math.min(num1, num2);
    let maior = Math.max(num1, num2);
    
    let pares = [];

    for (let i = menor; i <= maior; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }

    let resultado = `Os números pares entre ${menor} e ${maior} são: ${pares.join(', ')}`;
    alert(resultado);
    console.log(resultado);
}