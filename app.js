// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

let myLibrary = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, read: false },
  {
    title: "The Second Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: false,
  },
  {
    title: "third",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: true,
  },
  {
    title: "fourth",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: false,
  },
];
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

function Book(title, author, pages, read) {
  // the constructor...
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

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

console.log("test");

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
    // console.log(anInput.checkValidity);
    if (anInput.checkValidity() === false) {
      console.log("invalid");
      valid = false;
    }
    console.log(anInput.type);
    if (anInput.type !== "checkbox" && anInput.checkValidity() === true) {
      console.log(anInput.value);
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
    console.log(result);
    bookForm.reset();
    dialog.close();
  }
});

dialog.addEventListener("close", () => {
  console.log(dialog.returnValue);
});

// functions of bookCards

function deleteBookBTNEvent(aButton) {
  aButton.addEventListener("click", () => {
    let index = aButton.dataset.index;
    console.log(index);
    document.querySelector(`.bookCard[data-index="${index}"]`).remove();
    myLibrary.splice(index, 1);
  });
}

function readBookBTNEvent(aButton) {
  aButton.addEventListener("click", () => {
    let index = aButton.dataset.index;
    myLibrary[index].read = !myLibrary[index].read;
    aButton.textContent = myLibrary[index].read ? "Have Read" : "Not read";
  });
}
