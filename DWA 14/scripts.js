import { addButton } from "./components/add-button.js";

export const number = document.querySelector('[data-key="number"]');

export const state = {
    phase: 'idle',
    data: {
      MAX_NUMBER: 5,
      MIN_NUMBER: -5,
    }
  }