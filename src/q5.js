function abreviar(nome){
    let separar= nome.split(' ');
    //.split(" ") divide o string "nome" em um array, utilizando o espaço para separar as palavras
    
    if (separar.length>= 2){// verifica se o array tem dois elementos ou mais, no caso o nomeinicial e o sobrenome

        let nomeinicial= separar[0];// o primerio elemento do array, no caso o primeiro nome
        
        let sobrenome = separar[1][0];// pega o primeiro caracter do segundo nome, no caso o sobrenome
        
        return `${nomeinicial} ${sobrenome}.`;
        //retorna o primeiro nome, seguido da inicial do sobrenome e um ponto
    } else {
        return nome;// Aqui retornará caso seja apenas um nome, sem necessidade da abreviação
    }
}
console.log(abreviar("Vinícius Ramalho"));// Vinícius R.
