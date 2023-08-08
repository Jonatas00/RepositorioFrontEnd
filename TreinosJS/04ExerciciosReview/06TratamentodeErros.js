// Tratamento de erros

const idade = 15;

try {
  if (idade < 18) {
    throw new Error("Menor de idade")
  }
} catch (error) {
  console.log(error.message)
}

console.log("continuando...")