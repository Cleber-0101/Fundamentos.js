// function primeiro(n) {
//     return function segundo() {
//         return n * 2
//     }
// }

// let somaDoraDeNumeros = primeiro(3)
// console.log(somaDoraDeNumeros())

// //2
// const params = (a, b = 10) => {
//     return a + b
// }

// console.log(params(15))



// //3 Clousure contador regressivo
// function contagemRegressiva(n) {
//     let valor = n

//     return function decrementando() {
//         if (valor >= 0) {
//             return valor--
//         }
//     }
// }

// let decrementando2 = contagemRegressiva(10)

// console.log(decrementando2())
// console.log(decrementando2())
// console.log(decrementando2())
// console.log(decrementando2())
// console.log(decrementando2())
// console.log(decrementando2())
// console.log(decrementando2())
// console.log(decrementando2())
// console.log(decrementando2())
// console.log(decrementando2())


// function aleatorio(num){
//     return Math.floor(Math.random() * num) + 1 
// }

// console.log(aleatorio(10))


function detectaOsTipos(valor) {
    if (typeof valor === "number") {
        console.log("Tipo Number")
    } else if(typeof valor === "String"){
        console.log("Este dado é uma String")
    }else if(typeof valor === "Boolean"){
        console.log("Este dado é um Boolean")
    }
}

detectaOsTipos(122)
detectaOsTipos("teste")
detectaOsTipos(false)


function textoLongo(texto){
    if(texto.length > 10){
        return "Texto muito longo"
    }

    return "Dentro do limite"
}

console.log(textoLongo("Ola mundo"))
console.log(textoLongo("Ola mundoaaaaaaaaaaaaaaaaaaaaa"))

