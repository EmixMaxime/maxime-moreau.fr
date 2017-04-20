const scrollTo = require('scroll-to');

const links = document.querySelectorAll('#topbar .topbar-link');

links.forEach(function(link) {
  const anchor = link.getAttribute('href');
  const target = document.querySelector(anchor);
  const y = target.getBoundingClientRect().top + window.scrollY;

  link.addEventListener('click', function () {
    scrollTo(0, y);
  });
});

// Les mobiles n'ont pas besoin de la sticky bar
if (window.innerWidth > 600) {
  const throttle = require('lodash/throttle');

  const getTop = elm => {
    return elm.getBoundingClientRect().top
  }

  const topbar = document.querySelector('#topbar');

  const stickyTobar = () => {
    if (window.scrollY > 60) {
      topbar.classList.add('topbar--stick');
    }

    if (window.scrollY == 0) {
      topbar.classList.remove('topbar--stick');
    }
  };

  window.addEventListener('scroll', throttle(stickyTobar, 200));
}
