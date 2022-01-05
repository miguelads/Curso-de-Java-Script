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

