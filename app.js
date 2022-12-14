// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

let myLibrary = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, read: false },
];

function createBookCard(title, author, pages) {
  let bookCard = document.createElement("div");
  bookCard.classList = "bookCard";
  let bookInfo = document.createElement("div");
  bookInfo.classList = "bookInfo";

  bookCard.append(bookInfo);

  let pTitle = document.createElement("p");
  pTitle.classList = "title";
  pTitle.textContent = title;
  let pAuthor = document.createElement("p");
  pAuthor.classList = "author";
  pAuthor.textContent = author;
  let pPages = document.createElement("p");
  pPages.classList = "pages";
  pPages.textContent = pages;

  bookInfo.append(pTitle, pAuthor, pPages);

  let buttons = document.createElement("div");
  buttons.classList = "buttons";
  let aButton = document.createElement("button");
  aButton.textContent = "Not read";
  aButton.id = "readStatus";
  bButton = document.createElement("button");
  bButton.textContent = "Delete";
  bButton.id = "deleteBook";
  buttons.append(aButton, bButton);

  bookCard.append(buttons);
  return bookCard;
}

let booksContainer = document.querySelector(".books");

booksContainer.append(
  createBookCard(myLibrary[0].title, myLibrary[0].author, myLibrary[0].pages)
);

function displayBook() {}

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
console.log("test");
