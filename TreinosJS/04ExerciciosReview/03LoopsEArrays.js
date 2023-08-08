let nomes = ["Jonatas", "João", "Nathan", "Paulo", "Gustavo"];

//1
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log('*'.repeat(50))

//2
for (let nome of nomes) {
  console.log(nome)
}

console.log('*'.repeat(50))

//3
nomes.forEach(nome => { console.log(nome) })

