const heights = [164, 157, 160, 143, 170];
const heightList = document.getElementById("height-list");
const addHeightButton = document.getElementById("add-height");
const filterButton = document.getElementById("filter-heights");
function renderHeights(list = heights) {
    heightList.innerHTML = "";
    list.forEach((height, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}) ${height}`;
        heightList.appendChild(item);
    });
}

addHeightButton.addEventListener("click", () => {
    const input = prompt("Введите рост ученика:");
    if (input === null || input.trim() === "") {
        alert("Рост не введён!");
        return;
    }

    const height = Number(input);
    if (!Number.isFinite(height) || height <= 0) {
        alert("Введите корректный рост!");
        return;
    }

    heights.push(height);
    renderHeights();
});

filterButton.addEventListener("click", () => {
    const input = prompt("Введите минимальный рост:");
    if (input === null || input.trim() === "") {
        renderHeights();
        return;
    }

    const minHeight = Number(input);
    if (!Number.isFinite(minHeight) || minHeight < 0) {
        alert("Введите корректное число!");
        return;
    }

    const filteredHeights = heights.filter(
        (height) => height >= minHeight
    );
    renderHeights(filteredHeights);
});

renderHeights();