/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const library = [];

const bookCovers = [
  './assets/images/it ends with us.jpg',
  './assets/images/it.jpg',
  './assets/images/the house of eve.jpg',
];

function Book(name, author, pages, hasRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;

  this.read = () => {
    this.hasRead = !(this.hasRead);
  };
}

// initial call of the functions to start the functionalities
addFirstTwoBooks();
displayBooks(library);
addDeleteFunctionality();
addReadFunctionality();

// form segment
const formButton = document.getElementById('add-book');
formButton.addEventListener('click', openForm);

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  clearDisplay();
  displayBooks(library);
  addDeleteFunctionality();
});

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', closeForm);

// to loop over the library array to display books on the web page
function displayBooks(arr) {
  // all the books will go into the book shelf
  const bookShelf = document.getElementById('bookshelf');
  for (let i = 0; i < arr.length; i++) {

    // create a div for each book
    const infoDiv = document.createElement('div');
    infoDiv.className = 'books';
    infoDiv.id = `book${i}`;

    // get each book object from the library array
    const book = arr[i];

    // give the books their bookcovers
    const bookCover = document.createElement('img');
    bookCover.className = 'book-cover';
    bookCover.classList.add('image');
    // get the link for the src attribute of the img tag from the book covers array
    bookCover.setAttribute('src', bookCovers[i]);
    // and then add the book covers to the book div
    infoDiv.appendChild(bookCover);

    /* book infos such as names and authors will go inside another div
       each book div will have an image for book cover and a div for book infos
       book info div will have two <p> for name and author */
    const bookInfo = document.createElement('div');
    const bookName = document.createElement('p');
    bookName.classList.add('libre-caslon');
    bookName.classList.add('small');
    bookName.innerText = book.name;
    // add the name <p> to the book info div
    bookInfo.appendChild(bookName);
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('montserrat');
    bookAuthor.classList.add('smaller');
    bookAuthor.innerText = book.author;
    // add the author <p> to the book info div
    bookInfo.appendChild(bookAuthor);

    /* at this point, the book div has a book cover and a book infos div
       containing two <p>, name and author.
       now we will add a button div to the book infos div */
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'buttons-div';
    const markReadButton = document.createElement('button');
    markReadButton.id = `mark-read-button${i}`;
    markReadButton.className = 'mark-read-button';
    markReadButton.classList.add('montserrat');
    markReadButton.classList.add('smaller');
    // if the book object's hasRead property is true, it will display 'Read'. Otherwise, 'Mark Read'
    markReadButton.innerText = `${(library[i].hasRead) ? 'Read' : 'Mark Read'}`;
    const deleteButton = document.createElement('button');
    deleteButton.id = `${i}`;
    deleteButton.className = 'delete-button';
    deleteButton.classList.add('montserrat');
    deleteButton.classList.add('smaller');
    deleteButton.innerText = 'Delete';

    // now add the two buttons to the button div
    buttonDiv.appendChild(markReadButton);
    buttonDiv.appendChild(deleteButton);

    // add the button div to the book infos div
    bookInfo.appendChild(buttonDiv);

    // now add the book infos div to the book div
    infoDiv.appendChild(bookInfo);

    /* now that the book div has all the components, the book cover
       the book infos div containing the name, author and a div with two buttons,
       we will finally add the book div to the book shelf. */
    bookShelf.appendChild(infoDiv);
  }
}

// to add new books with the form
function addBookToLibrary() {
  const book = document.getElementById('addbook-form');
  if (!(book.elements[1].value) || !(book.elements[2].value)) {
    return;
  }
  const name = book.elements[1].value;
  const author = book.elements[2].value;
  const pages = book.elements[3].value;
  const hasRead = book.elements[4].value;
  const newBook = new Book(name, author, pages, hasRead);
  library.push(newBook);
}

/* every time we add a new book or mark read on a book,
   we will first clear the displayed books on the webpage
   because the array has mutated and we need to display the mutated array.
   If we don't clear the display, the old books will overlap with the new books. */
function clearDisplay() {
  const bookShelf = document.getElementById('bookshelf');
  let removedChild = bookShelf.lastChild;
  while (removedChild) {
    bookShelf.removeChild(removedChild);
    removedChild = bookShelf.lastChild;
  }
}

// open form button functionality
function openForm() {
  const form = document.getElementById('addbook-form');
  form.style.display = 'grid';
}

// close form button functionality
function closeForm() {
  const form = document.getElementById('addbook-form');
  form.style.display = 'none';
}

/* delete the book by splicing the book object
   from the library array. We need to first get the
   index of the book object to be deleted.
   we associated the index of the object with the id of the displayed delete button
   so we will use that information and perform the slice method. */
function addDeleteFunctionality() {
  const deleteButtons = document.querySelectorAll('.delete-button');
  for (const button of deleteButtons) {
    button.addEventListener('click', () => {
      const index = button.id;
      library.splice(index, 1);
      clearDisplay();
      displayBooks(library);
      addDeleteFunctionality();
    });
  }
}

/* same with delete functionality. The difference here is that
   because the id of the displayed mark read button contains not only
   the digits so we will need to extract the digit from the id first.
   We use RegEx for that. The digit we get will correspond to the index
   of the book object in the library array. */
function addReadFunctionality() {
  const readButtons = document.querySelectorAll('.mark-read-button');
  for (const button of readButtons) {
    button.addEventListener('click', () => {
      const index = Number(button.id.match(/\d+/g));
      library[index].read();
      clearDisplay();
      displayBooks(library);
      addReadFunctionality();
    })
  }
}

// simply to add some books initially so it won't be empty
function addFirstTwoBooks() {
  const book1 = new Book('It', 'Stephan King', 300, false);
  const book2 = new Book('JavaScript: The Definitive Guide', 'David Flanagan', 700, false);
  library.push(book1);
  library.push(book2);
}