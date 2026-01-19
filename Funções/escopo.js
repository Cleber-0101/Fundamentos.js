// O que acontece dentro de uma função separado do escopo global

let n = 10;

const numero = function(){
    let n = 100
    console.log(n)
}

//Na chamada da função o JS não sobreescreve as variaveis de escpoco global
numero()

//Imprimindo a variavel de escopo global 
console.log(n)


// Mais sobre escopos 