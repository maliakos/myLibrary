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
function createCard(obj = new Book(), index) {
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

  cardUnorderedList = document.createElement("ul");
  cardContent.appendChild(cardUnorderedList);
  cardUnorderedList.insertAdjacentHTML(
    "beforeend",
    `<li>Author: <span> ${obj.author}</span></li>`
  );
  cardUnorderedList.insertAdjacentHTML(
    "beforeend",
    `<li>Pages: <span> ${obj.pageNumber}</span></li>`
  );
  cardUnorderedList.insertAdjacentHTML(
    "beforeend",
    `<li>Read: <span> ${obj.read ? "Yes!" : "Not Yet!"}</span></li>`
  );
  cardButtonGroup = document.createElement("div");
  cardButtonGroup.classList.add("button-group");
  cardContent.appendChild(cardButtonGroup);

  cardButtonRead = document.createElement("button");
  cardButtonRead.setAttribute("data-index", index);
  cardButtonDelete = cardButtonRead.cloneNode(true);
  cardButtonRead.classList.add(obj.read ? "read" : "unread");
  cardButtonDelete.classList.add("delete");
  cardButtonRead.textContent = obj.read ? "Read" : "Not Read";
  cardButtonDelete.textContent = "Delete";
  cardButtonGroup.appendChild(cardButtonRead);
  cardButtonGroup.appendChild(cardButtonDelete);
}

function displayCards(arr = []) {
  arr.forEach((card, index) => {
    createCard(card, index);
  });
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};
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

displayCards(myLibrary);

//Event Listeners
const addBookButton = document.getElementById("add_book");
addBookButton.addEventListener("click", () => {
  document.querySelector(".add-book-modal").style.display = "flex";
});
const deleteButtons = document.querySelectorAll(".delete");
console.log(deleteButtons);
deleteButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    myLibrary.splice(e.target.dataset.index, 1);
    console.log(myLibrary);
    e.target.parentNode.parentNode.parentNode.remove();
    document.querySelectorAll(".card .delete").forEach((button, index) => {
      button.dataset.index = index;
    });
  });
});

const readButtons = document.querySelectorAll(
  ".button-group button:not(.delete)"
);
readButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    myLibrary[+e.target.dataset.index].toggleRead();
    e.target.classList.toggle("read");
    e.target.classList.toggle("unread");
    e.target.innerHTML == "Read"
      ? (e.target.innerHTML = "Not Read")
      : (e.target.innerHTML = "Read");
  });
});
