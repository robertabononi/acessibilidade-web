//Variáveis
var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var noticias = document.querySelectorAll('.listaDeArtigos-item');

new0.style.display = 'block';

//Criando indicador de slide atual
var indicadorSlideAtual = document.createElement('span');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.id ='escondeVisualmente';
indicadorSlideAtual.textContent = '(Slide atual)';

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {

    //btn.href = 'javascript:voide(0)';
    //Evita o deslocamento da tela ao clicar em alguma notícia

    noticias.forEach(function(noticia) {
      noticia.style.display = 'none';

      if (this.getAttribute('data-sliderItem') === noticia.getAttribute('data-noticia')) {
        noticia.style.display = 'block';
      }
    }.bind(this));

    document.querySelector('.listaDeArtigos-slider-item .escondeVisualmente').remove();
    this.append(indicadorSlideAtual);

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
});