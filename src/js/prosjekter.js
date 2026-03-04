$(document).ready(function () {
  $(".project-slider").each(function () {

    const $slider = $(this).find(".slides");
    const $prev = $(this).find(".polygon-arrow-left");
    const $next = $(this).find(".polygon-arrow-right");

    $slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $prev,
      nextArrow: $next,
      dots: false,
      speed: 600,
      cssEase: "ease",
      centerMode: true,
      variableWidth: true,
    });

  });
});