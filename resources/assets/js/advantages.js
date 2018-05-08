const opts = {
  threshold: [0.9],
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.intersectionRatio > 0.9) {
      entry.target.classList.add('batons--visible');
      observer.unobserve(entry.target);
    }

  });
}, opts);

const advantagesSection = document.querySelector('#advantages-section');
observer.observe(advantagesSection);

const chart = document.querySelector('#chart');
const batons = chart.querySelectorAll('[data-percentage]');

[].map.call(batons, elm => {
  // const h = (elm.dataset.percentage / 100) * chart.clientHeight;
  const h = (elm.dataset.percentage / 100) * 300;
  elm.style.height = `${h}px`;
});
