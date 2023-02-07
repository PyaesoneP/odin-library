/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const library = [];
const addButton = document.getElementById('');
addButton.addEventListener('click', addBookToLibrary);

function Book(name, author, pages, hasRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;

  this.Read = () => {
    this.hasRead = !this.hasRead;
  };
}

function addBookToLibrary() {
  const book = document.getElementById('');
  const name = book.elements[0].value;
  const author = book.elements[1].value;
  const pages = book.elements[2].value;
  const hasRead = book.elements[3].value;
  const newBook = new Book(name, author, pages, hasRead);
  library.push(newBook);
}

function displayBooks() {
  for (let i = 0; i < library.length; i++) { /* empty */ }
}
