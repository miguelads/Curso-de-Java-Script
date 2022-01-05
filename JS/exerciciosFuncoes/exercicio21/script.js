function verifica(valor){ 
   if(typeof valor === 'number'){
       console.log("è um Numero");
   }else if(typeof valor === 'boolean'){
       console.log(" Valor Boleano");
   }else if(typeof valor === 'string'){
       console.log("é uma String");
   }else{
       console.log(" é nenhuma das opções informadas");
   }
}
verifica(30);


