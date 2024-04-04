import { LitElement, html } from "../libs/lit-html.js";
import { state, number } from "../scripts.js";


export class addButton extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html 
        `<sl-button ?disabled="${state.phase === "maxReached" ? true : false}" @click="${this.plus}" class="add_btn" variant="default" size="large" circle>
            <sl-icon name="plus-lg" label="Settings"></sl-icon>
        </sl-button>`
    }

    plus() {
        state.data.countValue++;
        
        number.value = state.data.countValue;

        if (state.data.countValue >= state.data.MAX_NUMBER) {
            state.phase = "maxReached";
            console.log(state.phase === "maxReached");
        }
    }
}

customElements.define("add-btn", addButton)