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

addFirstTwoBooks();
displayBooks(library);
addDeleteFunctionality();
addReadFunctionality();

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

function displayBooks(arr) {
  const bookShelf = document.getElementById('bookshelf');
  for (let i = 0; i < arr.length; i++) {
    const infoDiv = document.createElement('div');
    infoDiv.className = 'books';
    infoDiv.id = `book${i}`;
    const book = arr[i];
    const bookCover = document.createElement('img');
    bookCover.className = 'book-cover';
    bookCover.classList.add('image');
    bookCover.setAttribute('src', bookCovers[i]);
    infoDiv.appendChild(bookCover);
    const bookInfo = document.createElement('div');
    const bookName = document.createElement('p');
    bookName.classList.add('libre-caslon');
    bookName.classList.add('small');
    bookName.innerText = book.name;
    bookInfo.appendChild(bookName);
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('montserrat');
    bookAuthor.classList.add('smaller');
    bookAuthor.innerText = book.author;
    bookInfo.appendChild(bookAuthor);
    infoDiv.appendChild(bookInfo);
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'buttons-div';
    const markReadButton = document.createElement('button');
    markReadButton.id = `mark-read-button${i}`;
    markReadButton.className = 'mark-read-button';
    markReadButton.classList.add('montserrat');
    markReadButton.classList.add('smaller');
    markReadButton.innerText = `${(library[i].hasRead) ? 'Read' : 'Mark Read'}`;
    const deleteButton = document.createElement('button');
    deleteButton.id = `${i}`;
    deleteButton.className = 'delete-button';
    deleteButton.classList.add('montserrat');
    deleteButton.classList.add('smaller');
    deleteButton.innerText = 'Delete';
    buttonDiv.appendChild(markReadButton);
    buttonDiv.appendChild(deleteButton);
    bookInfo.appendChild(buttonDiv);
    bookShelf.appendChild(infoDiv);
  }
}

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

function clearDisplay() {
  const bookShelf = document.getElementById('bookshelf');
  let removedChild = bookShelf.lastChild;
  while (removedChild) {
    bookShelf.removeChild(removedChild);
    removedChild = bookShelf.lastChild;
  }
}

function openForm() {
  const form = document.getElementById('addbook-form');
  form.style.display = 'grid';
}

function closeForm() {
  const form = document.getElementById('addbook-form');
  form.style.display = 'none';
}

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

function addReadFunctionality() {
  const readButtons = document.querySelectorAll('.mark-read-button');
  for (const button of readButtons) {
    button.addEventListener('click', () => {
      const index = Number(button.id.match(/\d+/g));
      console.log(index);
      library[index].read();
      button.innerText = 'Read';
      clearDisplay();
      displayBooks(library);
      addReadFunctionality();
    })
  }
}

function addFirstTwoBooks() {
  const book1 = new Book('It', 'Stephan King', 300, false);
  const book2 = new Book('JavaScript: The Definitive Guide', 'David Flanagan', 700, false);
  library.push(book1);
  library.push(book2);
}