function somarNumeros(){
    let count = 0

    return function(){
        count++
        return count
    }
}

let c = somarNumeros()
console.log(c())
console.log(c())
console.log(c())
console.log(c())
console.log(c())



function somarNumero(x){
    return function(a){
        return a + x
    }
}

let f = somarNumero(1)
console.log(f(5))