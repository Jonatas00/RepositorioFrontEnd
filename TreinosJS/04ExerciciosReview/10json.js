//JSON (javascript object notation)

const pessoa = {
  nome: "Jonatas",
  idade: 30,
  trabalhando: false
}
const jsonString = JSON.stringify(pessoa);
console.log(jsonString)

const json = '{"nome":"Jonatas","idade":30,"trabalhando":false}'

const pessoa2 = JSON.parse(json)

console.log(pessoa2)