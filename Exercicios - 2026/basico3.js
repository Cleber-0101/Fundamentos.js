let lendoPrimeiroNumeros = prompt("Primeiro numero")
let lendoSegundoNumeros = prompt("Segundo numero")

if(lendoPrimeiroNumeros > lendoSegundoNumeros){
    alert(`O Primeiro é maior ${lendoPrimeiroNumeros}`)
}else if(lendoPrimeiroNumeros < lendoSegundoNumeros){
    alert(`O segundo é menor ${lendoSegundoNumeros}`)
}else if(lendoPrimeiroNumeros === lendoSegundoNumeros){
    alert("Os numero são iguais")
}