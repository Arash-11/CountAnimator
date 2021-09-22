class CountAnimator {
  /**
   * @param {HTMLElement} el - element to target
   * @param {Object} options - object that holds optional arguments
   * @param {Number} options.start - number to start counting from. Default value is 0
   * @param {Number} options.end - number to stop counting at. Default value is 100
   * @param {Number} options.steps - steps to increment or decrement by. Default value is 1
   * @param {Number} options.delay - time delay between increments or decrements. Default value is 50
   */
  constructor(el, options = {}) {
    this._el = el;
    this._options = {
      start: 0,
      end: 100,
      ...options,
    };

    const { end, steps, delay } = this._options;
    const tempSteps = Math.ceil(Math.abs(steps));

    this._options.steps = (!tempSteps || tempSteps > Math.abs(end)) ? 1 : tempSteps;
    this._options.delay = Math.min(Math.abs(delay || 50), 100);
    this._animateFunc = null;
  }

  init() {
    const { start, end } = this._options;

    requestAnimationFrame(() => {
      const func = start < end ? this.#increment : this.#decrement;
      this._animateFunc = () => this.#animate(func);
      this._animateFunc();
    });
  }

  #animate(func) {
    const { start, end, delay } = this._options;

    if (parseInt(this._el.innerText, 10) >= end) return;

    if (!this._el.innerText) {
      this._el.innerText = start;
    } else {
      func.call(this);
    }

    setTimeout(() => {
      requestAnimationFrame(this._animateFunc);
    }, delay);
  }

  #increment() {
    this._el.innerText = parseInt(this._el.innerText, 10) + this._options.steps;
  }

  #decrement() {
    this._el.innerText = parseInt(this._el.innerText, 10) - this._options.steps;
  }
};

export default CountAnimator;
