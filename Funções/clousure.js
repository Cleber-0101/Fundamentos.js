function lembrarSoma(u) {
    return function () {
        return u + u;
    }
}

let soma1 = lembrarSoma(2);
console.log(soma1(5));

// clousure é quando um função lembra de variaveis do lugar aonde foi criada e sempre retorna uma função\   
//Closure é, de fato, quando uma função mantém o acesso às variáveis do escopo onde ela foi criada, mesmo após o escopo original ter terminado.E, geralmente, closures envolvem retornar uma função que mantém esse acesso à variável.


// let soma2 = lembrarSoma(2);
// console.log(soma2(5));

