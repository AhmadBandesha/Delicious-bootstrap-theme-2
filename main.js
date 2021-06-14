// ------------------------------------- main slider ------------------------------------------

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  // effect: 'fade',
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ------------------------------------- responsive nav bar ------------------------------------------

window.addEventListener('scroll', () => {
  if (scrollY > 50) {
    $('.contact').css({ top: '-8vh' })
    $('.nav-bar').css({ top: '0', background: 'rgb(0,0,0,0.8)' })
  } else {
    $('.contact').css({ top: '0vh' })
    $('.nav-bar').css({ top: '8vh', background: 'transparent' })
  }
})