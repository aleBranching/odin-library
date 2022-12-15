// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
function bookFunction() {}

bookFunction.prototype.changeRead = function () {
  this.read = !this.read;
};

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype = Object.create(bookFunction.prototype);

let myLibrary = [
  new Book("The Hobbit", "JRR tolkien", 6969, true),
  new Book("The Second Hobbit", "J.R.R. Tolkien", 295, false),
  new Book("third", "J.R.R. Tolkien", 295, true),
  new Book("fourth", "J.R.R. Tolkien", 295, false),
];

function libraryBookToScreen(index) {
  booksContainer.append(
    createBookCard(
      myLibrary[index].title,
      myLibrary[index].author,
      myLibrary[index].pages,
      myLibrary[index].read,
      index
    )
  );
}

function addBookToLibrary(bookOBJ) {
  myLibrary.push(bookOBJ);
  // do stuff here
}

// let book1 = new Book();
// book1.author = "aaaa";
// book1.title = "alfna";
// book1.pages = 21;
// book1.read = false;

// addBookToLibrary(new Book("The Hobbit", "JRR tolkien", 6969, true));

function createBookCard(title, author, pages, read, index) {
  let bookCard = document.createElement("div");
  bookCard.setAttribute(`data-index`, index);
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
  aButton.textContent = read ? "Have Read" : "Not read";
  aButton.id = "readStatus";
  aButton.setAttribute(`data-index`, index);

  bButton = document.createElement("button");
  bButton.textContent = "Delete";
  bButton.id = "deleteBook";
  bButton.setAttribute(`data-index`, index);
  buttons.append(aButton, bButton);
  deleteBookBTNEvent(bButton);
  readBookBTNEvent(aButton);

  bookCard.append(buttons);
  return bookCard;
}

let booksContainer = document.querySelector(".books");

displayBook(myLibrary);
function displayBook(library) {
  library.forEach((aBook, index) => {
    libraryBookToScreen(index);
  });
}

// modal

let addBookBTN = document.querySelector("#addBook");
let dialog = document.querySelector("dialog");
let bookForm = document.querySelector("#bookForm");
let submitBTN = document.querySelector("#formSubmit");
let bookFormCloseBTN = document.querySelector(
  "dialog .material-symbols-outlined"
);

// Inputs
let bookTitleINPT = document.querySelector("input#bookTitle");
let authorINPT = document.querySelector("input#author");
let pagesINPT = document.querySelector("input#pages");
let readINPT = document.querySelector("input#read");

let formInputs = [bookTitleINPT, authorINPT, pagesINPT, readINPT];

addBookBTN.addEventListener("click", () => dialog.showModal());

bookFormCloseBTN.addEventListener("click", () => {
  dialog.close();
});

submitBTN.addEventListener("click", (e) => {
  let result = new Book();
  let valid = true;
  formInputs.forEach((anInput) => {
    if (anInput.checkValidity() === false) {
      valid = false;
    }

    if (anInput.type !== "checkbox" && anInput.checkValidity() === true) {
      let key = anInput.name;
      let value = anInput.value;

      result[`${key}`] = value;
    } else if (anInput.type == "checkbox") {
      let key = anInput.name;
      let value = anInput.checked;

      result[`${key}`] = value;
      // result.push(anInput.checked);
    }
  });
  if (valid) {
    addBookToLibrary(result);
    libraryBookToScreen(myLibrary.length - 1);

    bookForm.reset();
    dialog.close();
  }
});

// functions of bookCards

function deleteBookBTNEvent(aButton) {
  aButton.addEventListener("click", () => {
    let index = aButton.dataset.index;

    document.querySelector(`.bookCard[data-index="${index}"]`).remove();
    myLibrary.splice(index, 1);
  });
}

function readBookBTNEvent(aButton) {
  aButton.addEventListener("click", () => {
    let index = aButton.dataset.index;

    myLibrary[index].changeRead();
    aButton.textContent = myLibrary[index].read ? "Have Read" : "Not read";
  });
}
