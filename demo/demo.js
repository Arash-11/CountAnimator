const btn = document.querySelector('button');

const options = {
  start: 0,
  end: 50,
  steps: 1,
  delay: 70
};

const countAnimator = new CountAnimator('div', options);

btn.addEventListener('click', () => {
  countAnimator.init();
});
