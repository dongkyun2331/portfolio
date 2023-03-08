$(document).ready(function () {
  $('.wbox_01ul').slick({
    vertical: true,
    draggable: false,
  })

  $('.bul').slick({
    draggable: false,
  })

  $('.slide_slick').slick({
    nextArrow: $('.right2'),
    prevArrow: $('.left2'),
  })

  $('.gray_slick').slick({
    nextArrow: $('.right3'),
    prevArrow: $('.left3'),
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
})
