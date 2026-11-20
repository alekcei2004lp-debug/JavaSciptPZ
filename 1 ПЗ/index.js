const books = [
    "Мастер и Маргарита",
    "Гарри Поттер",
    "Над пропастью во ржи",
    "Властелин колец",
    "Дюна",
    "Отцы и дети"
];

const bookList = document.getElementById("book-list");
const addBookButton = document.getElementById("add-book");
const searchBookButton = document.getElementById("search-book");

function renderBooks(foundIndex = -1) {
    bookList.innerHTML = "";

    books.forEach((book, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}) ${book}`;

        if (index === foundIndex) {
            listItem.classList.add("found");
        }

        bookList.appendChild(listItem);
    });
}

addBookButton.addEventListener("click", () => {
    const title = prompt("Введите название книги:");

    if (title === null || title.trim() === "") {
        alert("Название книги не введено!");
        return;
    }

    books.push(title.trim());
    renderBooks();
});

searchBookButton.addEventListener("click", () => {
    const query = prompt("Введите название книги для поиска:");

    if (query === null) {
        return;
    }

    const foundIndex = books.findIndex((book) =>
        book.toLowerCase() === query.trim().toLowerCase()
    );

    renderBooks(foundIndex);

    if (foundIndex === -1) {
        alert("Книга не найдена!");
    }
});

renderBooks();