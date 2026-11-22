const products = [
    "Яблоки",
    "Книга",
    "Молоко",
    "Арбуз",
    "Сахар",
    "Кофе",
    "Макароны"
];

const productList = document.querySelector(".product-list");
const addProductButton = document.querySelector(".add-product");

function sortProducts() {
    products.sort((a, b) => a.localeCompare(b, "ru"));
}

function createProductItem(name) {
    const item = document.createElement("li");
    item.classList.add("product-item");
    item.textContent = name;
    return item;
}

sortProducts();

products.forEach((name) => {
    productList.appendChild(createProductItem(name));
});

addProductButton.addEventListener("click", () => {
    const input = prompt("Введите название товара:");
    const name = input === null ? "" : input.trim();
    if (name === "") {
        alert("Название товара не введено!");
        return;
    }

    products.push(name);
    sortProducts();

    const index = products.indexOf(name);
    const nextItem = productList.querySelector(
        `.product-item:nth-child(${index + 1})`
    );

    const item = createProductItem(name);
    if (nextItem === null) {
        productList.appendChild(item);
    } else {
        productList.insertBefore(item, nextItem);
    }
});