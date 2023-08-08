//
let listaDeCompras = []

listaDeCompras.push("Banana", "Maçã", "Pera", "Uva", "Abacaxi")
listaDeCompras.shift()

//console.log(listaDeCompras)

//

let numeros = [3, 7, 14, 21, 29, 36, 42]

let d7m10 = numeros.find( num => num % 7 == 0 && num > 10)
//console.log(d7m10)

//

let numeros2 = [5, 10, 15, 20, 25, 30, 35, 40];
let numerosFiltrados = numeros2.filter((num) => num > 20);

// console.log(numerosFiltrados);
//

let string = "  Bom dia, mundo!  ";
let novaString = string.trim().split(" ")

console.log(novaString)