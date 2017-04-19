
// Animation sur le hover
const targets = document.querySelectorAll('.creation-box-wrapper');

targets.forEach(elm => {
  const snap = Snap(elm.querySelector('svg'));
  const path = snap.select('path');

  const pathConfig = {
    from: path.attr('d'),
    to: elm.getAttribute('data-path-hover'),
  };

  const opts = {
    speed: 450,
    easing: mina.backout,
  };

  elm.addEventListener('mouseenter', () => {
    path.animate({'path': pathConfig.to}, opts.speed, opts.easing);
  });

  elm.addEventListener('mouseleave', () => {
    path.animate({'path': pathConfig.from}, opts.speed, opts.easing);
  });

});

// Details

const worksWrapper = document.querySelector('#creation-wrapper');
const worksDetailsWrapper = document.querySelector('#creation-info-wrapper');

const works = Array.from(worksWrapper.querySelectorAll('[data-refwork]'));
const worksDetails = Array.from(worksDetailsWrapper.querySelectorAll('[data-work]'));

// work : element, target: element
const worksTree = works.reduce((acc, work) => {

  const refwork = work.getAttribute('data-refwork');
  const target = worksDetails.filter(wd => wd.getAttribute('data-work') === refwork)[0];

  acc.set(refwork, target );
  return acc;

}, new Map());

console.log(worksTree);

let showedElement = null;

const close = document.querySelector('#creation-info-close');
console.log({close})
close.addEventListener('click', () => {
  showedElement.classList.remove('show');
  worksDetailsWrapper.classList.remove('show');
  showedElement = null;
});

works.forEach(work => {

  work.addEventListener('click', function (e) {
    e.preventDefault();
    const refwork = this.getAttribute('data-refwork');
    const target = worksTree.get(refwork);
    
    if (showedElement === null) {
      worksDetailsWrapper.classList.add('show');
    }

    if (showedElement !== target) {
      if (showedElement) {
        showedElement.classList.remove('show');
      }

      showedElement = target;
      target.classList.add('show');
    }

  });

});

