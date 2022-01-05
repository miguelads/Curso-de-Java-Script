let usuario = 17;
let cnh = false;

if(usuario >= 18 && cnh != true){
    console.log("Usuário não pode dirigir, pois não tem CNH");
}else if(usuario >=18 && cnh == true){
    console.log("Usuário pode dirigir, pois tem habilitação e cnh");
}else{
    console.log("Não pode dirigir pois não tem nem idade para dirigir e nem cnh!");
}