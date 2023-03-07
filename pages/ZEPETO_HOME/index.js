$('.bul').slick({
  autoplay: true,
  centerMode: true,
  adaptiveHeight: true,
  draggable: true,
  slidesToShow: 5,
})

$(document).ready(function () {
  $('.Frame2_title').css('opacity', '1').css('transform', 'translateY(0%)')
  setTimeout(function () {
    $('.btn-link').css('opacity', '1').css('transform', 'translate(-50%,0%)')
  }, 400)
  $(window).on('scroll', function () {
    var windowHeight = $(window).height()
    var scrollHeight = $(document).scrollTop()
    $('.Frame3_title').each(function () {
      var elementPosition = $(this).offset().top
      if (scrollHeight > elementPosition - windowHeight) {
        $(this).css('opacity', '1').css('transform', 'translate(-50%,0%)')
        setTimeout(function () {
          $(window).on('scroll', function () {
            var windowHeight = $(window).height()
            var scrollHeight = $(document).scrollTop()
            $('.Frame3_p').each(function () {
              var elementPosition = $(this).offset().top
              if (scrollHeight > elementPosition - windowHeight) {
                $(this)
                  .css('opacity', '1')
                  .css('transform', 'translate(-50%,0%)')
              }
            })
          })
        }, 400)
        $(window).on('scroll', function () {
          var windowHeight = $(window).height()
          var scrollHeight = $(document).scrollTop()
          $('.Frame3_img').each(function () {
            var elementPosition = $(this).offset().top
            if (scrollHeight > elementPosition - windowHeight) {
              $(this).css('opacity', '1').css('transform', 'translate(-50%,0%)')
            }
          })
        })
        setTimeout(function () {
          $(window).on('scroll', function () {
            var windowHeight = $(window).height()
            var scrollHeight = $(document).scrollTop()
            $('.Frame3_text').each(function () {
              var elementPosition = $(this).offset().top
              if (scrollHeight > elementPosition - windowHeight) {
                $(this).css('opacity', '1').css('transform', 'translateY(0%)')
              }
            })
          })
        }, 1000)
        setTimeout(function () {
          $(window).on('scroll', function () {
            var windowHeight = $(window).height()
            var scrollHeight = $(document).scrollTop()
            $('.Frame4_title').each(function () {
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
            $('.Frame4_title').each(function () {
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
            $('.Frame4_box > ul').each(function () {
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
            $('.Frame5_title').each(function () {
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
            $('.Frame5_p').each(function () {
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
            $('.bul').each(function () {
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
            $('.Frame6_title').each(function () {
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
            $('.Frame6_p').each(function () {
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
            $('.Frame7_title').each(function () {
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
            $('.Frame7_p').each(function () {
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
            $('.Frame7 > button').each(function () {
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
            $('.Frame7_rg').each(function () {
              var elementPosition = $(this).offset().top
              if (scrollHeight > elementPosition - windowHeight) {
                $(this).css('opacity', '1').css('transform', 'translateY(0%)')
              }
            })
          })
        }, 500)
      }
    })
  })
})
