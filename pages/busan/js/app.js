$('.wbox_01ul').slick({
  vertical: true,
  draggable: false,
  dots: false,
  arrows: false,
  pauseOnHover: false,
})

$('.bul').slick({
  draggable: false,
  dots: false,
  arrows: false,
  pauseOnHover: false,
})

$('.slide_slick').slick({
  nextArrow: $('.right2'),
  prevArrow: $('.left2'),
})

$('.photo_slick').slick({
  nextArrow: $('.right3'),
  prevArrow: $('.left3'),
})

$('.photo_slick').on('afterChange', function (event, slick, currentSlide) {
  $('.number').text(currentSlide + 1)
})

$('.play3').click(function () {
  if ($(this).find('i').hasClass('xi-play')) {
    $('.photo_slick').slick('slickPlay')
    $(this).find('i').removeClass('xi-play').addClass('xi-pause')
  } else {
    $('.photo_slick').slick('slickPause')
    $(this).find('i').removeClass('xi-pause').addClass('xi-play')
  }
})

$('.right').click(function () {
  $('.wbox_01ul').slick('slickNext')
  $('.bul').slick('slickNext')
})

$('.left').click(function () {
  $('.wbox_01ul').slick('slickPrev')
  $('.bul').slick('slickPrev')
})

$('.start').click(function () {
  $('.wbox_01ul').slick('slickPlay')
  $('.bul').slick('slickPlay')
})

$('.stop').click(function () {
  $('.wbox_01ul').slick('slickPause')
  $('.bul').slick('slickPause')
})

$('.y1').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,

  fixedContentPos: false,
})

$('.photo1').hover(function () {
  $('.wave1').toggleClass('move')
  $('.photo_image1').toggleClass('move')
  $('.photo_p1').toggleClass('move')
  $('.plus1').toggleClass('move')
})
