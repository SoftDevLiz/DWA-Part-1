import { books, authors } from "../JavaScript/data.js";

const template = document.createElement("template")

template.innerHTML = /* html */ `
<style>

* {
    box-sizing: border-box;
  }

  .overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-width: 0;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
    animation-name: enter;
    animation-duration: 0.6s;
    z-index: 10;
    background-color: rgba(var(--color-light), 1);
  }
  
  @media (min-width: 30rem) {
    .overlay {
      max-width: 30rem;
      left: 0%;
      top: 0;
      border-radius: 8px;;
    }
  }
  
  .overlay__form {
    padding-bottom: 0.5rem;
    margin: 0 auto;
  }
  
  .overlay__row {
    display: flex;
    gap: 0.5rem;
    margin: 0 auto;
    justify-content: center;
  }
  
  .overlay__button {
    font-family: Roboto, sans-serif;
    background-color: rgba(var(--color-blue), 0.1);
    transition: background-color 0.1s;
    border-width: 0;
    border-radius: 6px;
    height: 2.75rem;
    cursor: pointer;
    width: 50%;
    color: rgba(var(--color-blue), 1);
    font-size: 1rem;
    border: 1px solid rgba(var(--color-blue), 1);
  }
  
  .overlay__button_primary {
    background-color: rgba(var(--color-blue), 1);
    color: rgba(var(--color-force-light), 1);
  }
  
  .overlay__button:hover {
    background-color: rgba(var((var(--color-blue))), 0.2);
  }
  
  
  .overlay__button_primary:hover {
    background-color: rgba(var(--color-blue), 0.8);
    color: rgba(var(--color-force-light), 1);
  }
  
  .overlay__input {
    width: 100%;
    margin-bottom: 0.5rem;
    background-color: rgba(var(--color-dark), 0.05);
    border-width: 0;
    border-radius: 6px;
    width: 100%;
    height: 4rem;
    color: rgba(var(--color-dark), 1);
    padding: 1rem 0.5rem 0 0.75rem;
    font-size: 1.1rem;
    font-weight: bold;
    font-family: Roboto, sans-serif;
    cursor: pointer;
  }
  
  .overlay__input_select {
    padding-left: 0.5rem;
  }
  
  .overlay__field {
    position: relative;
    display: block;
  }
  
  .overlay__label {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    font-size: 0.85rem;
    color: rgba(var(--color-dark), 0.4);
  }
  
  .overlay__input:hover {
    background-color: rgba(var(--color-dark), 0.1);
  }
  
  .overlay__title {
    padding: 1rem 0 0.25rem;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1;
    letter-spacing: -0.1px;
    max-width: 25rem;
    margin: 0 auto;
    color: rgba(var(--color-dark), 0.8)
  }
  
  .overlay__blur {
    width: 100%;
    height: 200px;
    filter: blur(10px);
    opacity: 0.5;
    transform: scale(2);
  }
  
  .overlay__image {
    max-width: 10rem;
    position: absolute;
    top: 1.5m;
    left: calc(50% - 5rem);
    border-radius: 2px;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
  }
  
  .overlay__data {
    font-size: 0.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    color: rgba(var(--color-dark), 0.8)
  }
  
  .overlay__data_secondary {
    color: rgba(var(--color-dark), 0.6)
  }
  
  .overlay__content {
    padding: 2rem 1.5rem;
    text-align: center;
    padding-top: 3rem;
  }
  
  .overlay__preview {
    overflow: hidden;
    margin: -1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .overlay__background {
    background: rgba(var(--color-dark), 0.6);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
</style>

<dialog class="overlay" data-list-active>

<div class="overlay__preview">
  <img class="overlay__blur" data-list-blur src=""/>
  <img class="overlay__image" data-list-image src=""/>
</div>

<div class="overlay__content">
  <h3 class="overlay__title" data-list-title></h3>
  <div class="overlay__data" data-list-subtitle></div>
  <p class="overlay__data overlay__data_secondary" data-list-description></p>
</div>

<div class="overlay__row">
  <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
</div>

</dialog>`;

export class bookPreview extends HTMLElement {
    activeBook = "";
    /**
     * Holds references to necessary elements inside of the shadow DOM
     */
    shadowData = {};
    /**
     * References the pre-existing book list that is rendered in the HTML.
     * This is used to add the event listener to the book list.
     */
    bookList = document.querySelector("[data-list-items]");

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      const { content } = template;
      this.shadowRoot.appendChild(content.cloneNode(true));
      
      this.shadowData = {
        active: this.shadowRoot.querySelector("[data-list-active]"),
        blur: this.shadowRoot.querySelector("[data-list-blur]"),
        img: this.shadowRoot.querySelector("[data-list-image]"),
        title: this.shadowRoot.querySelector("[data-list-title"),
        subtitle: this.shadowRoot.querySelector("[data-list-subtitle]"),
        description: this.shadowRoot.querySelector("[data-list-description]"),
        closeBtn: this.shadowRoot.querySelector("[data-list-close]")
      }
    }

    connectedCallback() {
      const { shadowData } = this;

      this.bookList.addEventListener("click", (event) => {

        let element = event.target.closest("[book-id]");
        let previewId = element ? element.getAttribute("book-id") : "";
  
          for (let singleBook of books) {
            if (singleBook.id === previewId) {
            this.activeBook = singleBook;
              }
            }

              this.populatePreview();
      })

      shadowData.closeBtn.addEventListener("click", (event) => {
        shadowData.active.close();
      })
    };

    populatePreview = () => {
      const { shadowData } = this;

      shadowData.img.setAttribute("src", this.activeBook.image);
      shadowData.blur.setAttribute("src", this.activeBook.image);
      shadowData.title.innerHTML = this.activeBook.title;
      shadowData.subtitle.innerHTML = `${authors[this.activeBook.author]} (${new Date(this.activeBook.published).getFullYear()})`;
      shadowData.description.innerHTML = this.activeBook.description;
      shadowData.description.style.overflowY = "auto";
      shadowData.active.show()
  }
}
customElements.define('book-preview', bookPreview)