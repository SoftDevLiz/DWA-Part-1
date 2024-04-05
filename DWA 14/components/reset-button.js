import { LitElement, html } from "../libs/lit-html.js";
import { state, number } from "../scripts.js";


export class resetButton extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html 
        `<button @click="${this.reset}"><i class="fas fa-plus"></i> Reset</button>`
    }

    reset() {
        state.data.countValue = 0;
        number.value = state.data.countValue;
        state.phase = "idle";
    }
}

customElements.define("reset-btn", resetButton);