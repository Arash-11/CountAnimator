const el = document.querySelector('div');
const btn = document.querySelector('button');

const options = {
  start: -4,
  end: 60,
  steps: 2,
  delay: 70
};

const countAnimator = new CountAnimator(el, options);

btn.addEventListener('click', () => {
  countAnimator.init();
});
