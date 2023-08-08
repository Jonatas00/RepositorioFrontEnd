const frutas = ["Maçã", "Laranja"]

frutas.unshift("Banana");

frutas.shift();

// find

const numeros = [1, 2, 3, 4, 5, 6];

const numeroPar = numeros.find((num) => num % 2 == 0);
console.log(numeroPar);

// filter
const numerosPares = numeros.filter((num) => num % 2 ==0);
console.log(numerosPares);

// trim

const frase = " Olá, mundo!   "
const novaFrase = frase.trim()
console.log(novaFrase)

const frase2 = "Javascript is amazing!"
console.log(frase2.startsWith("Java"))
