let myLibrary = [];

function Book(title, author, pageNumber, read) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pageNumber} pages, ${
      this.read ? "i allready read it" : "not read yet"
    }.`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
function createCard(obj = new Book()) {
  cardContainer = document.querySelector(".grid-container");
  card = document.createElement("div");
  card.classList.add("card");
  cardContainer.appendChild(card);

  cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = obj.title;
  card.appendChild(cardTitle);

  cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  card.appendChild(cardContent);

  cardContent.insertAdjacentHTML(
    "beforeend",
    `<li>Author: <span> ${obj.author}</span></li>`
  );
  cardContent.insertAdjacentHTML(
    "beforeend",
    `<li>Pages: <span> ${obj.pageNumber}</span></li>`
  );
  cardContent.insertAdjacentHTML(
    "beforeend",
    `<li>Read: <span> ${obj.read ? "Yes!" : "Not Yet!"}</span></li>`
  );
}

theHobbit = new Book("The Hobbit", "J.R. Tolkien", "800", true);
theFly = new Book("The Fly", "Jason Statham", "600", false);
harryPotter_1 = new Book("Harry Potter 1", "J.K Rowling", "483", true);
harryPotter_2 = new Book("Harry Potter 2", "J.K Rowling", "453", true);
harryPotter_3 = new Book("Harry Potter 3", "J.K Rowling", "478", true);
addBookToLibrary(theHobbit);
addBookToLibrary(theFly);
addBookToLibrary(harryPotter_1);
addBookToLibrary(harryPotter_2);
addBookToLibrary(harryPotter_3);
console.log(myLibrary);
