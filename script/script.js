/* eslint-disable no-unused-vars */
const library = [];

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
  const newBook = new Book();
  library.push(newBook);
}
