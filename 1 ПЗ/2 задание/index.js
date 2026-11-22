const heights = [164, 157, 160, 143, 170];
const heightList = document.querySelector(".height-list");
const addHeightButton = document.querySelector(".add-height");
const filterButton = document.querySelector(".filter-heights");
let minHeight = null;
let visibleCount = 0;
function appendHeight(height) {
    const item = document.createElement("li");
    visibleCount++;
    item.textContent = `${visibleCount}) ${height}`;
    heightList.appendChild(item);
}

function renderHeights(list) {
    heightList.replaceChildren();
    visibleCount = 0;
    list.forEach(appendHeight);
}

addHeightButton.addEventListener("click", () => {
    const input = prompt("Введите рост ученика:");
    const value = input === null ? "" : input.trim();
    if (value === "") {
        alert("Рост не введён!");
        return;
    }

    const height = +value;
    if (isNaN(height) || !isFinite(height) || height <= 0) {
        alert("Введите корректный рост!");
        return;
    }

    heights.push(height);
    if (minHeight === null || height >= minHeight) {
        appendHeight(height);
    }
});

filterButton.addEventListener("click", () => {
    const input = prompt("Введите минимальный рост:");
    const value = input === null ? "" : input.trim();
    if (value === "") {
        minHeight = null;
        renderHeights(heights);
        return;
    }

    const threshold = +value;
    if (isNaN(threshold) || !isFinite(threshold) || threshold < 0) {
        alert("Введите корректное число!");
        return;
    }

    minHeight = threshold;
    renderHeights(heights.filter((height) => height >= minHeight));
});

renderHeights(heights);