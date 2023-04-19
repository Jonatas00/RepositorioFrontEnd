// Variável para guardar a posição da última div ativa
var lastActive = 0;
    
// Função para verificar quando o usuário faz a rolagem
window.addEventListener('scroll', function() {
  // Loop pelas divs de conteúdo
  var boxes = document.querySelectorAll('.box');
  for (var i = 0; i < boxes.length; i++) {
    // Verifica se a div está visível na viewport
    var position = boxes[i].getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    if (position < windowHeight / 2) {
      // Atualiza a última div ativa
      lastActive = i;
    }
  }
});

// Função para tratar o evento de scroll
window.addEventListener('wheel', function(event) {
  // Verifica a direção do scroll (para cima ou para baixo)
  var direction = event.deltaY < 0 ? -1 : 1;

  // Atualiza a última div ativa de acordo com a direção do scroll
  lastActive += direction;

  // Limita o valor da última div ativa aos índices válidos
  var boxes = document.querySelectorAll('.box');
  lastActive = Math.max(0, Math.min(boxes.length - 1, lastActive));

  // Move suavemente para a próxima ou anterior div
  var scrollTo = boxes[lastActive].getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({
    top: scrollTo,
    behavior: 'smooth'
  });

  // Cancela o evento de scroll padrão para evitar comportamento indesejado
  event.preventDefault();
});