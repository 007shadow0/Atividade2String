function cortar(palavras, quantidadecaracter){
    // A função criada, definidad com cortar, defini dois parametros, palavras e quantidadecaracter.
    // "palavra" é a string que será cortada
    // "quantidadecaracter" se´r a aqunatidade que será mantida
    return palavras.slice(0, quantidadecaracter);
    //o metrodo .slice irá cortar uma parte da string
    // A quantidade cortada, mas se´r até um valor anterior ao dele já que o indice inicial é o zero"
}

console.log(cortar("Vinícius", 4)) // Vini
console.log(cortar("Script", 5)) // Scrip
console.log(cortar("IFPB", 2)) //IF