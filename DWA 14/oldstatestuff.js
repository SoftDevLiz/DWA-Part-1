
const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const reset = document.querySelector('[data-key="reset"');

const transition = (phase) => {
  return () => {state.phase = phase};
};

const invalid = (task, phase) => () => {
  throw new Error(`Can't perform ${task} in ${phase}.`);
};

  const subtractHandler = () => {

  };
  
  const resetHandler = () => {
  
  }

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
      handler: addHandler,
      subtract: transition('subtracting'),
      resetHandler,
    },
    maxReached: {
      add: invalid('adding', 'maxReached'),
      subtract: transition('subtracting'),
      resetHandler,
    },
    subtracting: {
      handler: subtractHandler,
      add: transition('adding'),
      resetHandler,
    },
    minReached: {
      add: transition('adding'),
      subtract: invalid('subtract', 'minReached'),
      resetHandler,
    },
}

function addHandler() {
  if (state.phase === 'adding') {
    number.value = number.value + state.data.STEP_AMOUNT;
  }
   }; 

add.addEventListener("click", () => actions[state.phase].handler());
subtract.addEventListener("click", subtractHandler);
reset.addEventListener("click", resetHandler);
