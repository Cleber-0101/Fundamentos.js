// 1️⃣ Função de soma

// Crie uma função que receba dois números como parâmetros e retorne a soma deles.
// Depois, chame essa função passando valores diferentes e exiba o resultado no console.

function somaDeNumeros(a,b){
    console.log(a + b)
}
somaDeNumeros(5,3)



// 2️⃣ Verificar maioridade

// Crie uma função que receba a idade de uma pessoa e retorne:
// "Maior de idade" se a idade for 18 ou mais
// "Menor de idade" caso contrário
// Mostre o retorno no console.

function IdadePessoa(idade){
    if(idade >= 18){
        console.log("Maior de idade")
    }else if(idade <= 17){
        console.log("Menor de idade")
    }
}
IdadePessoa(13)


// 3️⃣ Dobro de um número

// Crie uma função que receba um número e retorne o dobro desse número.
// Teste a função com pelo menos 3 valores diferentes.

function dobroDeNumero(numero){
  console.log(numero * 2)
}

dobroDeNumero(1)
dobroDeNumero(2)
dobroDeNumero(3)