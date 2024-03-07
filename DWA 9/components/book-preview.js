import { data } from "../JavaScript/scripts.js";
import { books, authors } from "../JavaScript/data.js";

// const template = document.createElement('template')

// template.innerHTML = /* html */ `
//   <style>

//   .preview {
//     border-width: 0;
//     width: 100%;
//     font-family: Roboto, sans-serif;
//     padding: 0.5rem 1rem;
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//     text-align: left;
//     border-radius: 8px;
//     border: 1px solid rgba(var(--color-dark), 0.15);
//     background: rgba(var(--color-light), 1);
//   }
  
//   @media (min-width: 60rem) {
//     .preview {
//       padding: 1rem;
//     }
//   }
  
//   .preview_hidden {
//     display: none;
//   }
  
//   .preview:hover {
//     background: rgba(var(--color-blue), 0.05);
//   }
  
//   .preview__image {
//     width: 48px;
//     height: 70px;
//     object-fit: cover;
//     background: grey;
//     border-radius: 2px;
//     box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
//       0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
//   }
  
//   .preview__info {
//     padding: 1rem;
//   }
  
//   .preview__title {
//     margin: 0 0 0.5rem;
//     font-weight: bold;
//     display: -webkit-box;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;  
//     overflow: hidden;
//     color: rgba(var(--color-dark), 0.8)
//   }
  
//   .preview__author {
//     color: rgba(var(--color-dark), 0.4);
//   }

//   </style>

//   `;

class BookPreviewComponent extends HTMLElement {
  inner = this.attachShadow({mode: "closed"});

  // Gets the tasks ready
  constructor() {
    super();
    this.activeBook = "";

    this.identifyBook = (event) => {

      /** `element` checks for the closest element that was clicked on which includes "[book-id]", returns true or false. */
      let element = event.target.closest("[book-id]");
      /** `previewId` is a ternary that checks if `element` is truthy, if so it gets the id attribute.*/
      let previewId = element ? element.getAttribute("book-id") : "";
        
          
        
      /** The below for...of loop loops through each book in the `books` array
      * and checks to see if the id of the book strictly matches the id of the
      * book that was clicked on. If it matches it assigns the `singleBook` to the `activeBook` variable. */
      for (let singleBook of books) {
      if (singleBook.id === previewId) {
          this.activeBook = singleBook;
          }
        }
    };

    this.populatePreview = (this.activeBook) => {

      data.list.image.setAttribute("src", this.activeBook.image);
      data.list.blur.setAttribute("src", this.activeBook.image);
      data.list.title.innerHTML = this.activeBook.title;
    
    
    
      data.list.subtitle.innerHTML = `${authors[this.activeBook.author]} (${new Date(
        this.activeBook.published
      ).getFullYear()})`;
      data.list.description.innerHTML = this.activeBook.description;
    
    
    
      data.list.description.style.overflowY = "auto";
    };
    
  };

  // Uses tasks
  connectedCallback() {
    
    data.list.items.addEventListener("click", (event) => {
    this.identifyBook(event);
    this.populatePreview(this.activeBook);
    data.list.active.show();
    })

    data.list.close.addEventListener("click", () => {
    data.list.active.close();
    });

}

};

customElements.define('book-preview', BookPreviewComponent);