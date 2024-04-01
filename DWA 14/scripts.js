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
  context: {
    MAX_NUMBER: 10,
    MIN_NUMBER: -10,
    STEP_AMOUNT: 2,
  }
}

const actions = {
    idle: {
      add: transition('add'),
      subtract: transition('subtract'),
      reset: invalid('reset', 'idle')
    },
    add: {
      add: "",
      subtract: transition('subtract'),
      reset: transition('idle'),
    },
    maxReached: {
      add: invalid('add', 'maxReached'),
      subtract: transition('subtract'),
      reset: transition('reset'),
    },
    subtract: {
      add: transition('add'),
      subtract: "",
      reset: transition('idle')
    },
    minReached: {
      add: transition('add'),
      subtract: invalid('subtract', 'minReached'),
      reset: transition('idle'),
    },
}



const addHandler = () => {
  state.normal = false;
  state.minimumReached = false;

  number.value = parseInt(number.value) + STEP_AMOUNT;

  if (number.value === MAX_NUMBER) {
    state.maximumReached = true;
    add.disabled = true;
    subtract.disabled = false;
  } else if (number.value > MIN_NUMBER) {
    state.minimumReached = false;
    subtract.disabled = false;
  }
};

const subtractHandler = () => {
  state.normal = false;
  state.maximumReached = false;

  number.value = parseInt(number.value) - STEP_AMOUNT;

  if (number.value === MIN_NUMBER) {
    state.minimumReached = true;
    subtract.disabled = true;
    add.disabled = false;
  } else if (number.value < MAX_NUMBER) {
    state.maximumReached = false;
    add.disabled = false;
  }
};

const resetHandler = () => {
  state.normal = true,
  state.maximumReached = false,
  state.minimumReached = false,
  number.value = 0;

  if (add.disabled) {
    add.disabled = false;
  }

  if (subtract.disabled) {
    subtract.disabled = false;
  }

}

add.addEventListener("click", addHandler);
subtract.addEventListener("click", subtractHandler);
reset.addEventListener("click", resetHandler);
