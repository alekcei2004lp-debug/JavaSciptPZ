const books = [
    "Мастер и Маргарита",
    "Гарри Поттер",
    "Над пропастью во ржи",
    "Властелин колец",
    "Дюна",
    "Отцы и дети"
];

const bookList = document.querySelector(".book-list");
const addBookButton = document.querySelector(".add-book");
const searchBookButton = document.querySelector(".search-book");

// Добавляем в DOM только одну книгу.
function appendBook(book, index) {
    const item = document.createElement("li");
    item.classList.add("book-item");
    item.textContent = `${index + 1}) ${book}`;
    bookList.appendChild(item);
}

// Первоначальный вывод книг из массива.
books.forEach((book, index) => appendBook(book, index));

addBookButton.addEventListener("click", () => {
    const input = prompt("Введите название книги:");
    const title = input === null ? "" : input.trim();

    if (title === "") {
        alert("Название книги не введено!");
        return;
    }

    books.push(title);
    bookList.querySelector(".found")?.classList.remove("found");
    appendBook(title, books.length - 1);
});

searchBookButton.addEventListener("click", () => {
    const input = prompt("Введите название книги для поиска:");

    if (input === null) {
        return;
    }

    const searchTitle = input.trim().toLowerCase();
    const foundIndex = books.findIndex(
        (book) => book.toLowerCase() === searchTitle
    );

    // Убираем предыдущее выделение без перерисовки списка.
    bookList.querySelector(".found")?.classList.remove("found");

    if (foundIndex === -1) {
        alert("Книга не найдена!");
        return;
    }

    const foundBook = bookList.querySelector(
        `.book-item:nth-child(${foundIndex + 1})`
    );

    foundBook.classList.add("found");
});