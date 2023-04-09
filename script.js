$(document).ready(function() {
  var $hamburguer = $('.burguer');
  var $menu = $('.menu');

  // Abre e fechar o menu
  $hamburguer.click(function() {
    $hamburguer.toggleClass('active');
    $menu.toggleClass('active');
    $('body').toggleClass('menu-open');
  });

  // Fecha o menu ao clicar em um link
  $menu.find('a').click(function() {
    $hamburguer.removeClass('active');
    $menu.removeClass('active');
    $('body').removeClass('menu-open');
  });

  // Fecha o menu ao clicar fora dele
  $(document).click(function(event) {
    if (!$(event.target).closest('.burguer, .menu').length) {
      $hamburguer.removeClass('active');
      $menu.removeClass('active');
      $('body').removeClass('menu-open');
    }
  });

  // Fecha o menu ao redimensionar a janela
  $(window).resize(function() {
    if ($(window).width() > 1000) {
      $menu.removeClass('active');
      $hamburguer.removeClass('active');
      $('body').removeClass('menu-open');
    }
  });
});


const navSlide = () => {
  const burguer = document.querySelector('.burguer');

//Event click burguer
  burguer.addEventListener('click', ()=>{
      
    //Burguer animation
      burguer.classList.toggle('toggle');
  });

}

navSlide();


