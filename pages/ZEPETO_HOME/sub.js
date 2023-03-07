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
    }, 300)
    setTimeout(function () {
      $('.Frame2_support')
        .css('opacity', '1')
        .css('transform', 'translateY(0%)')
    }, 600)
    setTimeout(function () {
      $('.Frame2_ul').css('opacity', '1').css('transform', 'translateY(0%)')
    }, 900)
    setTimeout(function () {
      $(window).on('scroll', function () {
        var windowHeight = $(window).height()
        var scrollHeight = $(document).scrollTop()
        $('.Frame3_h2').each(function () {
          var elementPosition = $(this).offset().top
          if (scrollHeight > elementPosition - windowHeight) {
            $(this).css('opacity', '1').css('transform', 'translateY(0%)')
          }
        })
      })
    }, 500)
    setTimeout(function () {
      $(window).on('scroll', function () {
        var windowHeight = $(window).height()
        var scrollHeight = $(document).scrollTop()
        $('.Frame3_ul').each(function () {
          var elementPosition = $(this).offset().top
          if (scrollHeight > elementPosition - windowHeight) {
            $(this).css('opacity', '1').css('transform', 'translateY(0%)')
          }
        })
      })
    }, 500)
    setTimeout(function () {
      $(window).on('scroll', function () {
        var windowHeight = $(window).height()
        var scrollHeight = $(document).scrollTop()
        $('.Frame3_img').each(function () {
          var elementPosition = $(this).offset().top
          if (scrollHeight > elementPosition - windowHeight) {
            $(this).css('opacity', '1').css('transform', 'translateY(0%)')
          }
        })
      })
    }, 500)
    setTimeout(function () {
      $(window).on('scroll', function () {
        var windowHeight = $(window).height()
        var scrollHeight = $(document).scrollTop()
        $('.Frame4_h2').each(function () {
          var elementPosition = $(this).offset().top
          if (scrollHeight > elementPosition - windowHeight) {
            $(this).css('opacity', '1').css('transform', 'translateY(0%)')
          }
        })
      })
    }, 500)
    setTimeout(function () {
      $(window).on('scroll', function () {
        var windowHeight = $(window).height()
        var scrollHeight = $(document).scrollTop()
        $('.Frame4_p').each(function () {
          var elementPosition = $(this).offset().top
          if (scrollHeight > elementPosition - windowHeight) {
            $(this).css('opacity', '1').css('transform', 'translateY(0%)')
          }
        })
      })
    }, 500)
    setTimeout(function () {
      $(window).on('scroll', function () {
        var windowHeight = $(window).height()
        var scrollHeight = $(document).scrollTop()
        $('.Frame5_h2').each(function () {
          var elementPosition = $(this).offset().top
          if (scrollHeight > elementPosition - windowHeight) {
            $(this).css('opacity', '1').css('transform', 'translateY(0%)')
          }
        })
      })
    }, 500)
    setTimeout(function () {
      $(window).on('scroll', function () {
        var windowHeight = $(window).height()
        var scrollHeight = $(document).scrollTop()
        $('.Frame6_h2').each(function () {
          var elementPosition = $(this).offset().top
          if (scrollHeight > elementPosition - windowHeight) {
            $(this).css('opacity', '1').css('transform', 'translateY(0%)')
          }
        })
      })
    }, 500)
    setTimeout(function () {
      $(window).on('scroll', function () {
        var windowHeight = $(window).height()
        var scrollHeight = $(document).scrollTop()
        $('.Frame6_rectangle').each(function () {
          var elementPosition = $(this).offset().top
          if (scrollHeight > elementPosition - windowHeight) {
            $(this).css('opacity', '1').css('transform', 'translateY(0%)')
          }
        })
      })
    }, 500)
  })
})
