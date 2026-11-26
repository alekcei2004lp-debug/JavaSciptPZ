let prices = [25, 368, 164, 580, 820, 12, 370];

const priceList = document.querySelector('.price-list');
const ascBtn = document.querySelector('.asc-btn');
const descBtn = document.querySelector('.desc-btn');

const renderList = () => {
  priceList.innerHTML = '';

  prices.forEach((price) => {
    const item = document.createElement('li');
    item.textContent = price;
    priceList.appendChild(item);
  });
};

renderList();

ascBtn.addEventListener('click', () => {
  const sorted = prices.slice();
  sorted.sort((a, b) => a - b);
  prices = sorted;
  renderList();
});

descBtn.addEventListener('click', () => {
  const sorted = prices.slice();
  sorted.sort((a, b) => b - a);
  prices = sorted;
  renderList();
});
