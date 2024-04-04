import { LitElement, html } from "../libs/lit-html.js";
import { state, number } from "../scripts.js";


export class addButton extends LitElement {
    static properties = {
        countValue: {type: Number},
    }

    constructor() {
        super();
        this.countValue = 0;
    }

    render() {
        return html 
        `<sl-button ?disabled="${state.phase === "maxReached" ? true : false}" @click="${this.plus}" class="add_btn" variant="default" size="large" circle>
            <sl-icon name="plus-lg" label="Settings"></sl-icon>
        </sl-button>`
    }

    plus() {
        this.countValue++;
        
        number.value = this.countValue;

        console.log(this.countValue);
        
        if (this.countValue >= state.data.MAX_NUMBER) {
            state.phase = "maxReached";
            console.log(state.phase);
        }
    }
}

customElements.define("add-btn", addButton)