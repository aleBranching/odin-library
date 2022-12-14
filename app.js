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

function displayBook() {}

function Book() {
  // the constructor...
}

function libraryBookToScreen(index) {
  booksContainer.append(
    createBookCard(
      myLibrary[index].title,
      myLibrary[index].author,
      myLibrary[index].pages
    )
  );
}

function addBookToLibrary(index) {
  // do stuff here
}

console.log("test");

// modal

// let addBookBTN = document.querySelector("#addBook");
// let dialog = document.querySelector("dialog");
// let bookForm = document.querySelector("#bookForm");
// let submitBTN = document.querySelector("#formSubmit");
// let bookFormCloseBTN = document.querySelector(
//   "dialog .material-symbols-outlined"
// );

// addBookBTN.addEventListener("click", () => dialog.showModal());

// bookFormCloseBTN.addEventListener("click", () => {
//   dialog.close();
// });

// submitBTN.addEventListener("click", (e) => {
//   // bookForm;
//   console.log(e);
//   console.log(bookForm);
// });

// dialog.addEventListener("close", () => {
//   console.log(dialog.returnValue);
// });

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Update details" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener("close", () => {
  console.log(favDialog.returnValue);
});
