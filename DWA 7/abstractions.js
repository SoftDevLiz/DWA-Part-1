// BEST ABSTRACTIONS

// 1. themeUtils.js
// 2. searchDropdownUtils.js

// 3. 

/** `updateShowMoreBtn` updates the 'show more' button visually depending on the `remainingBooks`
 * @param {object} object - The object that you want to update the 'show more' button for. This
 * can be `books` or `searchResults`.
 */
const updateShowMoreBtn = (object) => {
    data.list.button.innerHTML =
      /* html */
      `<span>Show more</span>
        <span class="list__remaining"> (${remainingBooks(object)})</span>`;
  };

  // WORST ABSTRACTIONS

// 1. 

/** Filters the books based on the user's search form entries.
 * @param {array} books - The array of books to be filtered
 * @param {object} filters - The object containing the user's search form entries
 */
const filterBooks = (books, filters) => {
    /** The below for...of loop loops through the books array and checks to see
     * if the title, author and genre match the user's search form entries.
     * If it matches it pushes the book/data to the `searchResults` array.
     */
    for (let book of books) {
      /** Checks to see if the user's entry in the title field matches any of the book's titles.
       * @returns {boolean} - Returns true or false based on whether the title matches or not.
       */
      let titleMatch =
        filters.title.trim() === "" ||
        book.title.toLowerCase().includes(filters.title.toLowerCase());
  
      /** Checks to see if the user's entry in the author field matches any of the book's authors.
       * @returns {boolean} - Returns true or false based on whether the author matches or not.
       */
      let authorMatch =
        filters.author === "any" || book.author === filters.author;
  
      /** Checks to see if the user's entry in the genre field matches any of the book's genres.
       * @returns {boolean} - Returns true or false based on whether the genre matches or not.
       */
      let genreMatch = filters.genre === "any";
  
      /** The below for...of loop loops through every book's genres list
       * and checks to see if it matches the user's entry in the genre field.
       * If it matches it sets `genreMatch` to true.
       */
      for (let singleGenre of book.genres) {
        if (singleGenre === filters.genre) {
          genreMatch = true;
        }
      }
  
      if (titleMatch && authorMatch && genreMatch) {
        searchResults.push(book);
      }
    }
  };

// 2. 

/** `createBookElement` creates the button element for each of our main list of books and then creates the innerHTML of the button.
 */
const createBookElement = ({ author, image, title, id }) => {
  // Create the button element for each book ↓

  /** `bookElement` creates/holds a button element for each book which the user can click on to view the book preview. */
  const bookElement = document.createElement("button");

  // Set the class and attribute of the button element ↓

  bookElement.classList = "preview";
  bookElement.setAttribute("book-id", id);

  // Set the innerHTML of the button element ↓

  bookElement.innerHTML = /* html */ `
  <img class="preview__image" src="${image}"/>

    <div class="preview__info">
      <h3 class="preview__title">${title}</h3>
      <div class="preview__author">${authors[author]}</div>
  </div>`;

  return bookElement;
};

// 3.

/** `day` contains the dark and light colours for the day theme */
const day = {
  dark: "10, 10, 20",
  light: "255, 255, 255",
};

/** `night` contains the dark and light colours for the night theme */
const night = {
  dark: "255, 255, 255",
  light: "10, 10, 20",
};

// IMPROVEMENTS 

// 1. 

const filterBooks = (books, filters) => {

  for (let book of books) {

    checkTitleMatch()
    checkAuthorMatch()
    checkGenreMatch()

    if (titleMatch && authorMatch && genreMatch) {
      searchResults.push(book);
    }
  }
};

// 2. 

const createBookHtml = ({ author, image, title, id }) => {

  createBookElement()

  bookElement.innerHTML = /* html */ `
  <img class="preview__image" src="${image}"/>

    <div class="preview__info">
      <h3 class="preview__title">${title}</h3>
      <div class="preview__author">${authors[author]}</div>
  </div>`;

  return bookElement;
};

// 3. 

const themeReferences = {
  day: {
    light: "255, 255, 255",
    dark: "10, 10, 20",
  },
  night: {
    light: "10, 10, 20",
    dark: "255, 255, 255",
  }
};