$(document).ready(function() {
  $(".slides").slick({
    infinite: true,           // бесконечный цикл
    slidesToShow: 1,          // один слайд за раз
    slidesToScroll: 1,        // один слайд листаем
    arrows: true,             // включаем стрелки
    prevArrow: $(".polygon-arrow-left"),
    nextArrow: $(".polygon-arrow-right"),
    dots: false,              // точки отключены
    speed: 600,
    cssEase: 'ease',
    centerMode: true,         // центрируем активный слайд
    variableWidth: true,      // учитываем разные ширины слайдов (для gap)
  });
});