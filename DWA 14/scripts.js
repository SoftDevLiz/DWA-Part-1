// const MAX_NUMBER = "";
// const MIN_NUMBER = "";
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
hasReset: false,

};

const addHandler = () => {
  state.normal = !state.normal;
  state.isAdding = !state.isAdding;

  const newValue = parseInt(number.value) + STEP_AMOUNT;
  number.value = newValue;

  if (subtract.disabled === true) {
    subtract.disabled = false;
  }

  if (newValue >= MAX_NUMBER) {
    add.disabled = true;
  }
};

const subtractHandler = () => {
  state.isSubtracting = !state.isSubtracting;

  const newValue = parseInt(number.value) - STEP_AMOUNT;
  number.value = newValue;

  if (add.disabled === true) {
    add.disabled = false;
  }

  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};

const resetHandler = () => {
  state.normal = true;
  state.hasReset = !state.hasReset;
  number.value = 0;
}

add.addEventListener("click", addHandler);
subtract.addEventListener("click", subtractHandler);
reset.addEventListener("click", resetHandler);