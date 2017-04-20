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
