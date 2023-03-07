$('.Frame4_slick_all').slick({
  dots: true,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
})

$(document).ready(function () {
  setTimeout(function () {
    $('.Frame2_h1').css('opacity', '1').css('transform', 'translateY(0%)')
    setTimeout(function () {
      $('.Frame2_p').css('opacity', '1').css('transform', 'translateY(0%)')
    }, 400)
  })
})
