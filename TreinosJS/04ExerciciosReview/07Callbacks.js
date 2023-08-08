// Callbacks

function cumprimentar(nome, callback) {
  console.log("Olá,", nome)
  callback();
}

function mostrarSaudacao(){
  console.log("Como você está?")
}

cumprimentar("Jonatas", mostrarSaudacao);

// Settimeout

setTimeout(() => {
  cumprimentar("Fernando", mostrarSaudacao)
}, 2000);