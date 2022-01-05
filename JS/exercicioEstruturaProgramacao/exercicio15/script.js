//O número é primo quando é dividido por 1 e ele mesmo.
let num = prompt("digite um numero!");
let divisoes = 0;

for(i = 1; i <= num; i++){
    if(num % i == 0){
        divisoes++;
    }
}

if(divisoes == 2){
    console.log(`o número ${num} é primo`);
}else{
    console.log(`o número ${num} não é primo`);
}

//para dizer se o numero é primo ou não