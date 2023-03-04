$(document).ready(function(){
    $(".carousel").slick({
      autoplay: true,
      autoplaySpeed: 1500,
      dots: false,
      arrows: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      swipeToSlide: true,
      swipe: true,
      touchThreshold: 5,
    });
  });


  const carouselContainer = document.querySelector('.carousel-container-shop');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const images = carouselContainer.getElementsByTagName('img');
let currentIndex = 0;

// esconde todas as imagens, exceto a primeira
for (let i = 1; i < images.length; i++) {
  images[i].style.display = 'none';
}

// adiciona um event listener para o botão "anterior"
prevButton.addEventListener('click', () => {
  images[currentIndex].style.display = 'none'; // esconde a imagem atual
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1; // atualiza o índice
  images[currentIndex].style.display = 'block'; // mostra a nova imagem
});

// adiciona um event listener para o botão "próximo"
nextButton.addEventListener('click', () => {
  images[currentIndex].style.display = 'none'; // esconde a imagem atual
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1; // atualiza o índice
  images[currentIndex].style.display = 'block'; // mostra a nova imagem
});
let intervalId = setInterval(() => {
  images[currentIndex].style.display = 'none'; // esconde a imagem atual
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1; // atualiza o índice
  images[currentIndex].style.display = 'block'; // mostra a nova imagem
}, 4000);

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  const title = faq.querySelector('.faq-title');
  const answer = faq.querySelector('.faq-answer');

  title.addEventListener('click', () => {
    faq.classList.toggle('open');
  });
});

