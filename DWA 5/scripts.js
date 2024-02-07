const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
// Targeting the body for later use
const body = document.body;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  // If statement checking that the inputs are not the wrong ones
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again."; 
        } else if (dividend < 0 || divider < 0) {
            result.innerText = "Division not performed. Invalid number provided. Try again."
            console.error("This can't be right")
        } else if (typeof dividend === "string" || typeof divider === "string") {
            const errorMessage = document.createElement("h1");
            errorMessage.innerText = "Something critical went wrong. Please reload the page.";
            body.innerHTML = "";
            body.appendChild(errorMessage);
            console.error("This can't be right");
        } else {
            // Added `Math.floor()` to round down to nearest whole number
            result.innerText = Math.floor(dividend / divider);
  }
});

/*  It would be much better to target the text field and make it so that the user cannot proceed unless a positive number is entered in both fields, instead of
*   having this long nested `if else` statement
*/