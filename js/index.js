$(document).ready(function(){
    $(".carousel").slick({
      autoplay: true,
      autoplaySpeed: 2500,
      dots: false,
      arrows: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      swipeToSlide: true,
      swipe: true,
      touchThreshold: 10,
    });
  });
  