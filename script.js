// Obtém a barra de navegação
var navbar = document.getElementById("navbar");

// Obtém a posição inicial da barra de navegação
var sticky = navbar.offsetTop;

// Adiciona um listener para o evento de rolar a página
window.onscroll = function() {
  // Verifica se o usuário rolou além da posição inicial da barra de navegação
  if (window.pageYOffset >= sticky) {
    // Se sim, fixa a barra de navegação no topo
    navbar.style.position = "fixed";
    navbar.style.top = "auto";
  } else {
    // Se não, restaura o comportamento normal
    navbar.style.position = "relative";
    navbar.style.top = "auto";
  }
};
