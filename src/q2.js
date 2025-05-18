function verstring(valor){ 
    // Criada a função e definido no nome do parametro
    if(valor===""){  
        // Irá usar o parametro de igualdade estrita e se falor igualmente a "", 
        // Retornara dizendo que o valor está vazio
        return 'Está vazia';
    }
    else if(valor.trim()===''){
        // Trim irá remover os espaços em branco da string.
        // Se após isso a string ainda for vazia, ela estava em branco.

        return "Está em branco";
    }
    else{ // Caso não tenha sido nenhum dos anteriores, significa que exibirá que não está vazia 
        return "Não está vazia";
    }
}

console.log(verstring('')); // Está vazia
console.log(verstring("Vinícius")); // Não está vazia
console.log(verstring('   ')); // Está em branco
