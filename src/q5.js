function abreviar(nome){
    let separar= nome.split(' ');
    //divide o string "nome" em um array usando o o metodo .split
    //separa devido o .split('')
    
    if (separar.length>= 2){// verifica se o array tem dois elementos, no caso o nome e o sobrenome

        let nomeprincipal= separar[0];// o primerio elemento do array, no caso o primeiro nome
        
        let sobrenome = separar[1][0];// pega o o elemento no indice 1
        
        return `${nomeprincipal} ${sobrenome}.`;
        //retorna o primeiro nome, seguido da inicial do sobrenome e um ponto
    } else {
        return nome;// Aqui retornará caso seja apenas um nome, sem necessidade da abreviação
    }
}
console.log(abreviar("Vinícius Ramalho"));// Vinícius R.
