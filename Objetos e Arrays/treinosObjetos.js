let objs = {
    nome: "Cleber",
    idade: 26,
    andar: function () {
        console.log("caminhando..")
    },
    Trabalho : "Analista de TI",
    Algo: "Algo desnecessario para eu deletar "
}

console.log(objs)
objs.andar()

delete objs.Algo
console.log(objs)
