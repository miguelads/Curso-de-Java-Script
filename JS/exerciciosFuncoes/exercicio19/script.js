function aleatorio(numeroMax){
    return Math.floor(Math.random() * numeroMax) + 1;
    /** este metodo Math.floor() ele serve para arredondar o numero o mais um é para retorna o numero aleatorio se não vai retornar um a menos por conta do metodo floor*/
}

const Naleatorio = Math.random();

function roleta(numero){
    return Math.floor(Naleatorio * numero) + 1;
}


console.log(aleatorio(10));
console.log(aleatorio(50));
console.log(aleatorio(1000));

console.log(roleta(10));