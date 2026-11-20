const products = [
    "Яблоки",
    "Книга",
    "Молоко",
    "Арбуз",
    "Сахар",
    "Кофе",
    "Макароны"
];

const productList = document.getElementById("product-list");
const addProductButton = document.getElementById("add-product");
function renderProducts() {
    products.sort((a, b) => a.localeCompare(b, "ru"));
    productList.innerHTML = "";
    products.forEach((product, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}) ${product}`;
        productList.appendChild(item);
    });
}

addProductButton.addEventListener("click", () => {
    const name = prompt("Введите название товара:");
    if (name === null || name.trim() === "") {
        alert("Название товара не введено!");
        return;
    }

    products.push(name.trim());
    renderProducts();
});

renderProducts();