const timeline = document.querySelector('#timeline');
const boxes = timeline.querySelectorAll('.timeline-box');

// Observable for boxes
const opts = {
  threshold: [0.7],
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.intersectionRatio > 0.7) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
      console.log('timeline box visible');
    }

  });
}, opts);

boxes.forEach(boxe => observer.observe(boxe));