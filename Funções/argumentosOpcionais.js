function soma(a,b){
    if(a === undefined || b === undefined){
        console.log("Esta função precisa ter os dois argumentos")
    } else {
        return a + b
    }
}

console.log(soma(1))
console.log(soma(2,3))


const falar = (nome = "Cleber") => {
    console.log("oi " + nome)
}

falar()


const cadastrar = (nome, cidade = "Não informada") => {
  console.log(nome + " mora em " + cidade)
}

cadastrar("Ana", "São Paulo")
cadastrar("João")
