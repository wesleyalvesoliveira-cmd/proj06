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