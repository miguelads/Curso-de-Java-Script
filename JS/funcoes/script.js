/*
function imprimirConsole(){
    console.log("Ola Mundo! com JavaScript!");
}*/

// e precisamos invocar a função chamando ela conforme abaixo

//imprimirConsole();
/*
function imprimirNumero(numero){
    console.log("O número é: " + numero);
}
imprimirNumero(2);
imprimirNumero(7);
imprimirNumero(34);
imprimirNumero(19);
// escreveu uma so função e usou ela varias vezes!

// função para pegar um numero aleatorio
function numeroAleatorio(){
    console.log(Math.random());
}
numeroAleatorio();*/

/**função para retornar os parametros */

/*
function multiplicar(x,y,z){
    return x * y * z;
}
console.log(multiplicar(5,2,6));

const mult = multiplicar(6,6,3);
console.log("A multiplicações são " + mult);
*/

/** quando declaramos uma variavel global ela pode ter um valor e pode ter o mesmo nome da variavel dentro de uma função pois ja é outro escopo!*/
/*
let y = 10;

function lerNumero(){
    let y = 20;
    console.log(y);
}

lerNumero();
console.log(y);*/

// escopo das funções
/*
let x = 10;

if(x > 5){
    let x = 20;
    x++;
    console.log(x);
}
console.log(x);*/


//escopo aninhado, podemos ter mais niveis de escopo
/*podemos usar a mesma variavel dentro de escopos aninhados da função pois não é uma variavel global*/ 
/*
let y = 6;

function multiplicar(x,z){
    let y = x * z;
    if(y > 10){
        let y = 0;
        console.log(y);
    }
        console.log(y);
}
multiplicar(3,7);
console.log(y);
*/


/*Arrow functions exemplo abaixo
const parOuImpar = (n) =>{
    return n % 2 == 0;
}
if(parOuImpar(5) == false){
    console.log("número é impar ");
}else{
    console.log("número não é impar ");
}

Outro exemplo de Arrow functions, sem passar parametros
let mensagem = () =>{
    console.log("Ola mundo");
}
Outro exemplo de Arrow functions, com parametros
let soma = (a,b) =>{
    return a + b;
}
console.log(soma(10,10));

Outro exemplo de Arrow functions, calculando raiz quadrada!
let raiz = (x) =>{
    return x * x;
}

console.log(raiz(7));

// argunmento opcionais, voce pode passar um paramentro e não passar o outro: exemplo!

function nomeComIdade(nome,idade){
    if(idade == undefined){
        console.log("Seu nome é " + nome);
    }else{
        console.log("Seu nome é " + nome + " e sua idade é " + idade);
    }
}

console.log(nomeComIdade("miguel", 34));

//Argumentos com valores default:

function repetirFrase(frase, n=2){
    for(let x=1; x <= n; x++){
        console.log(frase + " " + x);
    }
}
console.log(repetirFrase(3));

*/

//clousure significa(fechamento)função que se lembra do ambiente que ela foi criada ou seja uma função que vai retornar outra função, usado para simular metodos privados do jova script.
/*
function lembrarSoma(x){
   return function(y){
        return x + y;
   }
}

let soma1 = lembrarSoma(2);//ou seja ele lembrou do valor 2
console.log(soma1(5));// e somou com o valor 5.

let soma2 = lembrarSoma(12);//ou seja ele lembrou do valor 2
console.log(soma2(6));// e somou com o valor 6.*/

// function Recursion, permite uma função se chamar novamente exemplo.
/*
function recursao(n){
    if(n -1 < 2){
      console.log("Recursão Parou");
    }else if(n % 2 != 0){
        console.log("Número ímpar " + n);
        recursao(n - 1);
    }else{
        console.log("Número par " + n);
        recursao(n - 2);
    }
}
recursao(17);*/

// Arrow Function
const imparOuPar = (n)=>{
    return n % 2;
}
valor = prompt("Digite um valor inteiro");
if(imparOuPar(valor) == 0){
     console.log("O númeor é par");
}else{
    console.log("O número é impar");
}