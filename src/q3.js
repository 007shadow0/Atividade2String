function espaco(palavras){
    return palavras.split(" ");
    // O metodo .split irá dividir por virgula sempre que encontrar um espaço, ja que foi definido no delimitador
}

console.log(espaco("Vinícius Ramalho")); //"Vínicius","Ramalho"
console.log(espaco("Linguagem Script")); //"Linguagem","Script"
