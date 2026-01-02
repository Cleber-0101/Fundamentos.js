let usuario = "Cleber"
let senha = 12345


for (let n = 1; n <= 2 ; n++) {

    let user = prompt(`Qual seu usuario ${n}`)
    let pass = Number(prompt(`Qual sua senha ${n}`))

    if (user === usuario && pass === senha) {
        alert("Usuario aceito")
    } else {
        alert("Usuario negado")
    }
}
