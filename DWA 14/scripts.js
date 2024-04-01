const MAX_NUMBER = 10;
const MIN_NUMBER = -10;
const STEP_AMOUNT = 2;

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const reset = document.querySelector('[data-key="reset"');

const state = {
normal: true,
isAdding: false,
maximumReached: false,
isSubtracting: false,
minimumReached: false,
};

console.log(state);

const addHandler = () => {
  state.normal = false;
  state.isAdding = !state.isAdding;

  const newValue = parseInt(number.value) + STEP_AMOUNT;
  number.value = newValue;

  if (newValue >= MAX_NUMBER) {
    state.maximumReached = !state.maximumReached;
    add.disabled = true;
  }

  console.log(state);

};

const subtractHandler = () => {
  state.normal = false;
  state.isSubtracting = !state.isSubtracting;

  const newValue = parseInt(number.value) - STEP_AMOUNT;
  number.value = newValue;

  if (newValue <= MIN_NUMBER) {
    state.minimumReached = !state.minimumReached;
    subtract.disabled = true;
  }

  console.log(state);
};

const resetHandler = () => {
  state.normal = true,
  state.isAdding = false,
  state.maximumReached = false,
  state.isSubtracting = false,
  state.minimumReached = false,
  
  number.value = 0;

  console.log(state);
}

add.addEventListener("click", addHandler);
subtract.addEventListener("click", subtractHandler);
reset.addEventListener("click", resetHandler);
