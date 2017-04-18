const opts = {
  threshold: [0.9],
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.intersectionRatio > 0.9) {
      entry.target.classList.add('batons--visible');
      observer.unobserve(entry.target);
      console.log('batons visible');
    }

  });
}, opts);

const advantagesSection = document.querySelector('#advantages-section');
observer.observe(advantagesSection);
