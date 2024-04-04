import { addButton } from "./components/add-button.js";
import { subtractButton } from "./components/subtract-button.js";
import { resetButton } from "./components/reset-button.js";

export const number = document.querySelector('[data-key="number"]');

export const state = {
    phase: 'idle',
    data: {
      countValue: 0,
      MAX_NUMBER: 5,
      MIN_NUMBER: -5,
    }
  }

  