// const MAX_NUMBER = 10;
// const MIN_NUMBER = -10;
// const STEP_AMOUNT = 2;

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const reset = document.querySelector('[data-key="reset"');

// const state = {
// normal: true,
// maximumReached: false,
// minimumReached: false,
// };

const transition = (phase) => {
  return () => {state.phase = phase};
};

const invalid = (task, phase) => () => {
  throw new Error(`Can't perform ${task} in ${phase}.`);
};

const state = {
  phase: 'idle',
  data: {
    MAX_NUMBER: 10,
    MIN_NUMBER: -10,
    STEP_AMOUNT: 2,
  }
}

const actions = {
    idle: {
      add: transition('adding'),
      subtract: transition('subtracting'),
      reset: invalid('reset', 'idle')
    },
    adding: {
      add: "",
      subtract: transition('subtracting'),
      reset: transition('idle'),
    },
    maxReached: {
      add: invalid('adding', 'maxReached'),
      subtract: transition('subtracting'),
      reset: transition('idle'),
    },
    subtracting: {
      add: transition('adding'),
      subtract: "",
      reset: transition('idle')
    },
    minReached: {
      add: transition('adding'),
      subtract: invalid('subtract', 'minReached'),
      reset: transition('idle'),
    },
}

const addHandler = () => {

};

const subtractHandler = () => {

};

const resetHandler = () => {

}

add.addEventListener("click", addHandler);
subtract.addEventListener("click", subtractHandler);
reset.addEventListener("click", resetHandler);
