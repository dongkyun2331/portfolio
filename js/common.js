window.addEventListener('scroll', function () {
  console.log(window.scrollY)
  const menu = document.querySelector('.header')
  menu.classList.toggle('sticky', window.scrollY > 50)
})
