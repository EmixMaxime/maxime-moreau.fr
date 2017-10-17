import './site-main.scss';

import '../../js/advantages';
import '../../js/creations';
import '../../js/timeline';
import '../../js/topbar';

console.log('site-main.js')

// Petit polyfill
if (NodeList.prototype.forEach === undefined) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

const chart = document.querySelector('#chart');
const batons = chart.querySelectorAll('[data-percentage]');

batons.forEach(elm => {
  const h = (elm.dataset.percentage / 100) * chart.clientHeight;
  elm.style.height = `${h}px`;
});

// Observable

const opts = {
  threshold: [0.5],
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.intersectionRatio > 0.5) {
      entry.target.classList.add('observable--visible');
      observer.unobserve(entry.target);
      console.log('section visible');
    }

  });
}, opts);

const observables = document.querySelectorAll('.observe');
observables.forEach(observable => observer.observe(observable));