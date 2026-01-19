function exClousure(x){
    return function(a){
        return x + a
    }
}

let somarFuncoes =  exClousure(100)
console.log(somarFuncoes(300))

let somarFuncoes2 = exClousure(300)
console.log(somarFuncoes2(300))