import { authors, genres, books } from "../JavaScript/data.js"

const template = document.createElement("template")

template.innerHTML = /* html */ `
<style>

.preview {
    border-width: 0;
    width: 100%;
    font-family: Roboto, sans-serif;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    border-radius: 8px;
    border: 1px solid rgba(var(--color-dark), 0.15);
    background: rgba(var(--color-light), 1);
  }
  
  @media (min-width: 60rem) {
    .preview {
      padding: 1rem;
    }
  }
  
  .preview_hidden {
    display: none;
  }
  
  .preview:hover {
    background: rgba(var(--color-blue), 0.05);
  }
  
  .preview__image {
    width: 48px;
    height: 70px;
    object-fit: cover;
    background: grey;
    border-radius: 2px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  }
  
  .preview__info {
    padding: 1rem;
  }
  
  .preview__title {
    margin: 0 0 0.5rem;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    color: rgba(var(--color-dark), 0.8)
  }
  
  .preview__author {
    color: rgba(var(--color-dark), 0.4);
  }

</style>

<img class="preview__image" data-img/>

    <div class="preview__info" data-info>
        <h3 class="preview__title" data-title></h3>
        <div class="preview__author" data-author></div>
    </div>
`;

customElements.define('single-book-element',
class createBookElement extends HTMLElement {
    inner = this.attachShadow({ mode: 'closed' });
   

    constructor () {
        const createBookElement = ({ author, image, title, id}) => {

            const bookElement = document.createElement("button");
            
                bookElement
                .setAttribute("book-id", id);

                
                

                


        }
    }

    connectedCallback () {

    }
})