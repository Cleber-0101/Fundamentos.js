for (let i = 1; i <= 3; i++) {
    let nota = Number(prompt(`Digite a nota do aluno ${i}:`))

    if (nota >= 7) {
        alert("Aprovado")
    } else if (nota >= 5 && nota < 7) {
        alert("Recuperação")
    } else {
        alert("Aluno Reprovado")
    }
}
