import { genreFragment, authorFragment } from "./scripts.js";
import { genres, authors } from "./data.js";
import { data } from "./scripts.js";

// Created the createAnyGenreOpt function ↓

/** Creates the 'all genres' option for the genre dropdown list. */
export const createAnyGenreOpt = () => {
    /** `allGenresOpt` creates and holds a new HTML 'option' element for the
     *  'All Genres' option. This needs to be done separately from the other genres,
     *   because it will have the value of 'any'.
     */
    const allGenresOpt = document.createElement("option");
  
    // Used .value to add 'any' value to the 'All Genres' option ↓
  
    allGenresOpt.value = "any";
  
    // Used .textContent to add 'All Genres' text to the 'All Genres' option ↓
  
    allGenresOpt.textContent = "All Genres";
  
    // Append the 'All Genres' option to the `genreFragment` ↓
  
    genreFragment.appendChild(allGenresOpt);
  };
  
  // Created the populateGenreDropdown function ↓
  
  /** Populates the genre dropdown list with all of the genres. */
  export const populateGenreDropdown = () => {
    // Used a for...of loop to loop through each property of the `genres` object ↓
  
    /** The below for...of loop loops through each property of the `genres` object.
     *  It then creates an HTML 'option' element for each genre and appends it to the `genreFragment`
     *  which follows on from the 'All Genres' option element.
     *  The element value is set to the id of the genre and the textContent is set to the genre name.
     */
    for (let [id, genre] of Object.entries(genres)) {
      /** `genreOption` creates and holds an HTML 'option' element for our dropdown list
       * that contains the genre id and genre name. */
      const genreOption = document.createElement("option");
      genreOption.value = id;
      genreOption.textContent = genre;
      genreFragment.appendChild(genreOption);
    }
  
    // Used `data` reference to append the `genreFragment` to the genre search form, which will make it visible in the UI ↓
  
    data.search.genres.appendChild(genreFragment);
  };

  // Created the createAnyAuthorOpt function ↓

/** Creates the 'all authors' option for the author dropdown list. */
export const createAnyAuthorOpt = () => {
    /** `allAuthorsOpt` creates and holds a new HTML 'option' element for the
     *  'All Authors' option. This needs to be done separately from the other genres,
     *   because it will have the value of 'any'.
     */
    const allAuthorsOpt = document.createElement("option");
  
    // Used .value to add 'any' value to the 'All Authors' option ↓
  
    allAuthorsOpt.value = "any";
  
    // Used .textContent to add 'All Authors' text to the 'All Authors' option ↓
  
    allAuthorsOpt.textContent = "All Authors";
  
    // Append the 'All Authors' option to the `authorFragment` ↓
  
    authorFragment.appendChild(allAuthorsOpt);
  };
  
  // Created the populateAuthorDropdown function ↓
  
  /** Populates the author dropdown list with all of the authors. */
  export const populateAuthorDropdown = () => {
    // Used a for...of loop to loop through each property of the `authors` object ↓
  
    /** The below for...of loop loops through each property of the `authors` object.
     *  It then creates an HTML option element for each author and appends it to the `authorFragment`
     *  which follows on from the 'All Authors' option element.
     *  The element value is set to the id of the author and the textContent is set to the author name.
     */
    for (let [id, author] of Object.entries(authors)) {
      /** authorOption creates and holds an HTML 'option' element for our dropdown list
       * that contains the author id and author name.
       */
      const authorOption = document.createElement("option");
      authorOption.value = id;
      authorOption.textContent = author;
      authorFragment.appendChild(authorOption);
    }
    // Used `data` reference to append the `authorFragment` to the author search form, which will make it visible in the UI ↓
  
    data.search.authors.appendChild(authorFragment);
  };