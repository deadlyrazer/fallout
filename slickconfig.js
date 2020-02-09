$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  useTransform: true,
  speed: 0,
  prevArrow: '<i class="material-icons slick-prev">keyboard_arrow_left</i>',
  nextArrow: '<i class="material-icons  slick-next">keyboard_arrow_right</i>'
});

$('.slider-nav')
  .on('init', function(event, slick) {
    $('.slider-nav .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    slidesToShow: 6,
    slidesToScroll: 4,
    dots: false,
    focusOnSelect: false,
    infinite: false,
    prevArrow: '<i class="material-icons slick-prev">keyboard_arrow_left</i>',
    nextArrow: '<i class="material-icons  slick-next">keyboard_arrow_right</i>',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          prevArrow:
            '<i class="material-icons slick-prev slick-prev--small">keyboard_arrow_left</i>',
          nextArrow:
            '<i class="material-icons  slick-next slick-next--small">keyboard_arrow_right</i>'
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          prevArrow:
            '<i class="material-icons slick-prev slick-prev--small">keyboard_arrow_left</i>',
          nextArrow:
            '<i class="material-icons  slick-next slick-next--small">keyboard_arrow_right</i>'
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          prevArrow:
            '<i class="material-icons slick-prev slick-prev--small">keyboard_arrow_left</i>',
          nextArrow:
            '<i class="material-icons  slick-next slick-next--small">keyboard_arrow_right</i>'
        }
      }
    ]
  });

$('.slider-for').on('afterChange', function(event, slick, currentSlide) {
  $('.slider-nav').slick('slickGoTo', currentSlide);
  let currrentNavSlideElem = `.slider-nav .slick-slide[data-slick-index="${currentSlide}"]`;
  $('.slider-nav .slick-slide.is-active').removeClass('is-active');
  $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
  event.preventDefault();
  let goToSingleSlide = $(this).data('slick-index');

  $('.slider-for').slick('slickGoTo', goToSingleSlide);
});
