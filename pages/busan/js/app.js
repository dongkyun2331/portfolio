$(document).ready(function () {
  $('.wbox_01ul').slick({
    vertical: true,
    draggable: false,
    dots: false,
    arrows: false,
  })

  $('.bul').slick({
    draggable: false,
    dots: false,
    arrows: false,
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

  var intervalId = null // setInterval() 함수의 반환 값

  $('.start').click(function () {
    // setInterval() 함수로 일정 간격으로 코드를 반복 실행
    intervalId = setInterval(function () {
      $('.wbox_01ul').slick('slickNext')
      $('.bul').slick('slickNext')
    }, 3000) // 3초 간격으로 실행
  })

  $('.stop').click(function () {
    clearInterval(intervalId) // setInterval() 함수를 중지
  })
})

$(document).ready(function () {
  $('.y1').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  })
})
