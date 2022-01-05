function autoEscola(idade){
    if(idade < 18){
        return `desculpe não pode entrar na auto escola, pois sua idade ${idade} é menor de 18 anos!`
    }else{
        return `Seja bem vindo a auto escola pois sua idade ${idade} anos é permitida para o processo de aprendizado! `
    }
}

console.log(autoEscola(18));