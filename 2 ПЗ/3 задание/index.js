let prices = [25, 368, 164, 580, 820, 12, 370];

const priceList = document.querySelector('.price-list');
const ascBtn = document.querySelector('.asc-btn');
const descBtn = document.querySelector('.desc-btn');

function renderList() {
  priceList.innerHTML = '';

  prices.forEach(function (price) {
    const item = document.createElement('li');
    item.textContent = price;
    priceList.appendChild(item);
  });
}

renderList();

ascBtn.addEventListener('click', function () {
  const sorted = prices.slice();
  sorted.sort(function (a, b) {
    return a - b;
  });
  prices = sorted;
  renderList();
});

descBtn.addEventListener('click', function () {
  const sorted = prices.slice();
  sorted.sort(function (a, b) {
    return b - a;
  });
  prices = sorted;
  renderList();
});
