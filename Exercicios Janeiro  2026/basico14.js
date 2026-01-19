// Liberando acesso somente pra usuarios autenticados 

let usuario = 18
const autenticado = false 

if(usuario >= 18 && autenticado == true){
    console.log("Usuario autorizado")
}else{
    console.log("Não permitido")
}



let compraOnline = 10.00
const possuiLimiteEspecial = true

if(compraOnline >= 1 || possuiLimiteEspecial){
    console.log("Possui formas de realizar uma compra")
}else{
    console.log("Não tem saldo o suficiente")
}

let user = false

if(!user){
    console.log("Funcionalidade liberada")
}else{
    console.log("Não esta liberada")
}