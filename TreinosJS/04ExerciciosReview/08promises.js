// Promises

const promessa = new Promise((resolve, reject) => {
  const condicao = false

  if (condicao) {
    resolve("A condição é verdadeira")
  } else {
    reject("A condição é falsa")
  }
})

promessa.then((mensagem) => {
  console.log(mensagem)
}).catch((erro) => {
  console.log(erro)
})

const promise1 = Promise.resolve("Teste 'instantaneo'")
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2500, "testando");
})

Promise.all([promise1, promise2]).then((valores) => console.log(valores))