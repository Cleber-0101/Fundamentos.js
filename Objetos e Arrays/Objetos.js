// criando objetos

const pessoa = {
    nome : "cleber",
    idade:  26,
    cidade: "São Paulo"
}

//criando um propriedade
pessoa.tomDePele = "Branco"
pessoa.paisDeOrigem = "Brasil"
pessoa.salariMensal = 5.000
pessoa.nome = "Cleber"

//deletando propriedades
delete pessoa.nome

console.log(pessoa.idade)
console.log(pessoa.nome)
console.log(pessoa.cidade)
console.log(pessoa.tomDePele)
console.log(pessoa.paisDeOrigem)

console.log(pessoa)


const atleta = {
    altura: 1.85,
    esporte: "muay-thai"
}

//geranca de propriedades
Object.assign(pessoa,atleta)

console.log(pessoa)