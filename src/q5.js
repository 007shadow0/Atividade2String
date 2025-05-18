function abreviar(nome){
    //
    //
    //
    let separar= nome.split(' ');//
    //
    //
    //
    if (separar.length>= 2){//
        let nomeprincipal= separar[0];//
        let sobrenome = separar[1][0];//
        return `${nomeprincipal} ${sobrenome}.`;//
    } else {
        return nome;//
    }
}
console.log(abreviar("Vinícius Ramalho"));// Vinícius R.