import { LitElement, html } from "../libs/lit-html.js";
import { state, number } from "../scripts.js";

export class addButton extends LitElement {

    constructor() {
        super(); 
    }

    render() {
        return html 
        `<button ?disabled="${state.phase === "maxReached" ? true : false}" @click="${this.plus}"><i class="fas fa-plus"></i> Add</button>`
    }

    plus() {
        state.data.countValue++;
        
        number.value = state.data.countValue;

        if (state.data.countValue >= state.data.MAX_NUMBER) {
            state.phase = "maxReached";
        }
    }
}

customElements.define("add-btn", addButton)



