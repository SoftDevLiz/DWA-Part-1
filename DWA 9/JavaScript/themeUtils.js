import { data } from "./scripts.js";

/** `day` contains the dark and light colours for the day theme */
const day = {
    dark: "10, 10, 20",
    light: "255, 255, 255",
  };
  
  /** `night` contains the dark and light colours for the night theme */
  const night = {
    dark: "255, 255, 255",
    light: "10, 10, 20",
  };
  
  // Created the `setThemeToNight` function ↓
  
  /** Sets the theme to night */
  export const setThemeToNight = () => {
    document.documentElement.style.setProperty("--color-dark", night.dark);
    document.documentElement.style.setProperty("--color-light", night.light);
  };
  
  // Created the `setThemeToDay` function ↓
  
  /** Sets the theme to day */
  export const setThemeToDay = () => {
    document.documentElement.style.setProperty("--color-dark", day.dark);
    document.documentElement.style.setProperty("--color-light", day.light);
  };

/** Checks the users default browser theme */
export const checkDefaultTheme = () => {
    // Start a ternary that checks if the user's default browser preferred theme is dark/night ↓
  
    data.settings.theme.value === "night" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setThemeToNight()
      : setThemeToDay();
  };