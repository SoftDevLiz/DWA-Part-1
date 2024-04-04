import { LitElement, html } from "../libs/lit-html.js";
import { state, number } from "../scripts.js";


export class resetButton extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html 
        `<sl-button @click="${this.reset}" size="large" pill>Reset</sl-button>`
    }

    reset() {
        state.data.countValue = 0;
        number.value = state.data.countValue;
        state.phase = "idle";
    }
}

customElements.define("reset-btn", resetButton);