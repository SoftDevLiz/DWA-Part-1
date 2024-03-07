let activeBook = "";

const bookPreviewFactory = () => {
    
    /** Identifies the `activeBook` the user has clicked on to view the preview.
        * @param {target} event - The event target that the user has clicked on.
        */
    const identifyBook = (event) => {
 

            /** `element` checks for the closest element that was clicked on which includes "[book-id]", returns true or false. */
            let element = event.target.closest("[book-id]");
            /** `previewId` is a ternary that checks if `element` is truthy, if so it gets the id attribute.*/
            let previewId = element ? element.getAttribute("book-id") : "";
      
        
      
            /** The below for...of loop loops through each book in the `books` array
            * and checks to see if the id of the book strictly matches the id of the
            * book that was clicked on. If it matches it assigns the `singleBook` to the `activeBook` variable. */
            for (let singleBook of books) {
            if (singleBook.id === previewId) {
            activeBook = singleBook;
          }
        }
    }

    /** Populates the preview overlay with the `activeBook` data.
    * @param {object} activeBook - The object containing the data of the unique book that the user has clicked on
    */
    const populatePreview = (activeBook) => {

    data.list.image.setAttribute("src", activeBook.image);
    data.list.blur.setAttribute("src", activeBook.image);
    data.list.title.innerHTML = activeBook.title;
  
  
  
    data.list.subtitle.innerHTML = `${authors[activeBook.author]} (${new Date(
      activeBook.published
    ).getFullYear()})`;
    data.list.description.innerHTML = activeBook.description;
  
  
  
    data.list.description.style.overflowY = "auto";
    };

    return {
        identifyBook: identifyBook,
        populatePreview: populatePreview
    }

}