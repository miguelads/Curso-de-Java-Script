/**A ideia é repetir uma ação até atingir uma condição,
 * ao invez de repitimos o mesmo codigo varias vezes fazemos um loop!
 * no java script tem duas estruturas o while e o for
 */

//usando o while
/*
let x = 10;
while(x > 0){
    console.log(x);
    x = x -1;
}

*/
/*
usando o do while!!

let x = 10; 

do{
   console.log(x);
   x = x -1;
 }while(x > 0);

*/

/** usando o For! */
/*
for(let x =10; x > 0; x--){
    console.log("o valor é " + x);
}*/

/** Usando o break *//*
let nome = "Matheus";
for(let i=0; i<10; i++){
    if(i == 3){
       nome = "João";
    }

    if(i == 5 && nome == "João"){
        console.log("O nome é joão pode parar");
        break;// para o loop...
    }
    console.log(`o nome é ${nome} o indice ${i}`);
}*/

/**Pulando uma execução do loop usando continue 
 * ou seja ele não imprime os numeros pares cai no continue e ele imprime os impares
*/
/*
let o = 0;
while(o < 100){
    o++;
    if(o % 2 == 1){// no caso ele não mostra o impar so o par
        console.log('caiu no continue');
        continue;
    }
    console.log(o);
}
/*
for(let i=0; i < 25; i++){
     if(i % 2 == 0){//não mostra o par e sim o impar
         console.log('caiu no continue');
         continue;
     }
     console.log(i);
}*/


/**quando tem a necessidade de varios ifs untilizamos o switch */
let nome = prompt("Qual seu nome?");
switch(nome){

    case "Sulamyta":
        console.log("Miguel Te Ama!");
        break;
    case "Miguel":
        console.log("Sulamyta Te Ama!");
        break;
    default:
        console.log("Feliz dia dos Namorados");
        break;

}
