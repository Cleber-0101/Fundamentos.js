//mutação, um obejto pode herdar todoas as caracteristicas do outro, virando uma referencia 

let obj1 = {
    pontos :  100
}

obj2 = obj1

let obj3 = {
    prontos : 10101
}

obj3 = obj1

console.log(obj1 == obj2)
console.log(obj1 == obj3)