/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const library = [
  {
    name: 'It',
    author: 'Stephan King',
    pages: 300,
    hasRead: false,
  },
  {
    name: 'Rich Dad Poor Dad',
    author: 'Robert Kiyo',
    pages: 350,
    hasRead: false,
  }
];

function displayBooks(arr) {
  const bookShelf = document.getElementById('bookshelf');
  for (let i = 0; i < arr.length; i++) {
    const infoDiv = document.createElement('div');
    infoDiv.className = 'books';
    infoDiv.id = `book${i}`;
    const book = arr[i];
    const bookCover = document.createElement('img');
    bookCover.className = 'book-cover';
    infoDiv.appendChild(bookCover);
    const bookInfo = document.createElement('div');
    const bookName = document.createElement('p');
    bookName.innerText = book.name;
    bookInfo.appendChild(bookName);
    const bookAuthor = document.createElement('p');
    bookAuthor.innerText = book.author;
    bookInfo.appendChild(bookAuthor);
    const bookPages = document.createElement('p');
    bookPages.innerText = book.pages;
    bookInfo.appendChild(bookPages);
    infoDiv.appendChild(bookInfo);
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'buttons-div';
    const markReadButton = document.createElement('button');
    markReadButton.id = `mark-read-button${i}`;
    markReadButton.className = 'mark-read-button';
    markReadButton.innerText = 'Mark Read';
    const deleteButton = document.createElement('button');
    deleteButton.id = `delete-button${i}`;
    deleteButton.className = 'delete-button';
    deleteButton.innerText = 'Delete';
    buttonDiv.appendChild(markReadButton);
    buttonDiv.appendChild(deleteButton);
    bookInfo.appendChild(buttonDiv);
    bookShelf.appendChild(infoDiv);
  }
}

displayBooks(library);

const addButton = document.getElementById('add-book');
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

