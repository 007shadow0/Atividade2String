// O typeof verifica e retorna o tipo da variável
function verificarsestring(valor){  
    // Irá definir um parametro
    return typeof valor === "string";
    // Aqui irá verificar se o valor fornecido ée um tipo string.
    // Caso seja uma string, retorna "true" e caso não seja, retorna "false" 
}
console.log(verificarsestring("JavaScript")) //true
console.log(verificarsestring(1,2,3)) //false
console.log(verificarsestring("Laboratorio")) //true
console.log(verificarsestring([19,5,2025])) //false
