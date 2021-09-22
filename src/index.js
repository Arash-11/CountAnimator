class CountAnimator {
  /**
   * @param {String} selector - selector for element to target
   * @param {Object} options - object that holds optional arguments
   * @param {Number} options.start - number to start counting from. Default value is 0
   * @param {Number} options.end - number to stop counting at. Default value is 100
   * @param {Number} options.steps - steps to increment or decrement by. Default value is 1
   * @param {Number} options.delay - time delay between increments or decrements. Default value is 50
   */
  constructor(selector, options = {}) {
    this._el = document.querySelector(selector);
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
    const func = start < end ? this.#increment : this.#decrement;
    this._animateFunc = () => this.#animate(func);

    requestAnimationFrame(() => this._animateFunc());
  }

  #animate(func) {
    if (!this._el.innerText) {
      this._el.innerText = this._options.start;
    } else {
      const condition = this.#checkForPauseCondition(parseInt(this._el.innerText, 10));
      if (condition) return;
      func.call(this);
    }

    setTimeout(() => {
      requestAnimationFrame(this._animateFunc);
    }, this._options.delay);
  }

  #checkForPauseCondition(currentNum) {
    const { start, end } = this._options;
    if (start > end) {
      return currentNum <= end;
    } else {
      return currentNum >= end;
    }
  }

  #increment() {
    this._el.innerText = parseInt(this._el.innerText, 10) + this._options.steps;
  }

  #decrement() {
    this._el.innerText = parseInt(this._el.innerText, 10) - this._options.steps;
  }
};

export default CountAnimator;
