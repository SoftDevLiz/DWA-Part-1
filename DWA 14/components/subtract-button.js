import { LitElement, html } from "../libs/lit-html.js";
import { state, number } from "../scripts.js";


export class subtractButton extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html 
        `<button ?disabled="${state.phase === "minReached" ? true : false}"  @click="${this.minus}"><i class="fas fa-plus"></i> Minus</button>`
    }

    minus() {
        state.data.countValue--;
        
        number.value = state.data.countValue;

        if (state.data.countValue <= state.data.MIN_NUMBER) {
            state.phase = "minReached";
            console.log(state.phase === "minReached");
        }
    }
}

customElements.define("subtract-btn", subtractButton)
