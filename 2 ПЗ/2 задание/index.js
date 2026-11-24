const list = document.querySelector('.list');
const addBtn = document.querySelector('.add-btn');
const removeBtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', function () {
  const item = document.createElement('li');
  item.textContent = 'Новый элемент списка';
  list.appendChild(item);
});

removeBtn.addEventListener('click', function () {
  if (list.lastElementChild) {
    list.lastElementChild.remove();
  }
});
