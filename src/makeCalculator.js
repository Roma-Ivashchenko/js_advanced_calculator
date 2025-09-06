'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    add: (current, value) => current + value,
    subtract: (current, value) => current - value,
    multiply: (current, value) => current * value,
    divide: (current, value) => current / value,

    result: 0,

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}
module.exports = makeCalculator;
