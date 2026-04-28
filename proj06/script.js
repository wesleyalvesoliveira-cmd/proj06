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

// ====================================================================
// 3) Tabuada de 1 a 10
// ====================================================================
function exercicio3() {
    let num = parseInt(prompt("3. Digite um número para ver sua tabuada:"));
    
    if (isNaN(num)) return;

    console.log(`--- Tabuada do ${num} ---`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

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

/* Para testar, basta chamar a função desejada. 
  Remova os comentários abaixo para executar no console do navegador:
*/

// exercicio1();
// exercicio2();
// exercicio3();
// exercicio4();
// exercicio5();