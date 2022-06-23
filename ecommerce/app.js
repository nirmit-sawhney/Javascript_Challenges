const menuItems = [
  {
    name: 'French Fries with Ketchup',
    price: 223,
    image: 'plate__french-fries.png',
    alt: 'French Fries',
    count: 0
  },
  {
    name: 'Salmon and Vegetables',
    price: 512,
    image: 'plate__salmon-vegetables.png',
    alt: 'Salmon and Vegetables',
    count: 0
  },
  {
    name: 'Spaghetti Meat Sauce',
    price: 782,
    image: 'plate__spaghetti-meat-sauce.png',
    alt: 'Spaghetti with Meat Sauce',
    count: 0
  },
  {
    name: 'Bacon, Eggs, and Toast',
    price: 599,
    image: 'plate__bacon-eggs.png',
    alt: 'Bacon, Eggs, and Toast',
    count: 0
  },
  {
    name: 'Chicken Salad with Parmesan',
    price: 698,
    image: 'plate__chicken-salad.png',
    alt: 'Chicken Salad with Parmesan',
    count: 0
  },
  {
    name: 'Fish Sticks and Fries',
    price: 634,
    image: 'plate__fish-sticks-fries.png',
    alt: 'Fish Sticks and Fries',
    count: 0
  }
];

const add = document.querySelectorAll('.add');
const cart = document.querySelector('.cart-summary');
const empty = document.querySelector('.empty');
const subtotalDiv = document.querySelector('.amount.price.subtotal');
const taxDiv = document.querySelector('.amount.price.tax');
const totalDiv = document.querySelector('.amount.price.total');
let taxValue = 0;
let subTotalValue = 0;
let totalValue = 0;

const updatePrice = () => {
  subTotalValue = 0;
  for (let i = 0; i < menuItems.length; i++) {
    subTotalValue += menuItems[i].price * menuItems[i].count;
  }
  taxValue = subTotalValue * 0.0975;
  taxValue = Math.round(taxValue) / 100;
  subTotalValue = subTotalValue / 100;
  taxDiv.innerText = '$' + taxValue;
  totalValue = subTotalValue + taxValue;
  totalValue = Math.round(totalValue * 100) / 100;
  subtotalDiv.innerText = '$' + subTotalValue;
  totalDiv.innerText = '$' + totalValue;
  if (subTotalValue == 0) {
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
  }
};

const updateItem = (item, quantity, subtotal) => {
  quantity.innerHTML = item.count;
  subtotal.innerHTML = '$' + (item.count * item.price) / 100;
  updatePrice();
};

const appendItem = (btn, idx) => {
  let li = document.createElement('li');
  li.setAttribute('id', idx);
  let img = document.createElement('img');

  let divPlate = document.createElement('div');
  divPlate.setAttribute('class', 'plate');
  img.setAttribute('src', `images/${menuItems[idx].image}`);
  img.setAttribute('alt', menuItems[idx].alt);
  img.setAttribute('class', 'plate');
  divPlate.append(img);
  let quantity = document.createElement('div');
  quantity.setAttribute('class', 'quantity');
  menuItems[idx].count += 1;
  quantity.innerHTML = menuItems[idx].count;
  divPlate.append(quantity);
  li.append(divPlate);

  let divContent = document.createElement('div');
  divContent.setAttribute('class', 'content');
  let name = document.createElement('p');
  name.setAttribute('class', 'menu-item');
  name.innerHTML = menuItems[idx].name;
  divContent.append(name);
  let price = document.createElement('p');
  price.setAttribute('class', 'price');
  price.innerHTML = '$' + menuItems[idx].price / 100;
  divContent.append(price);
  li.append(divContent);

  let divBtn = document.createElement('div');
  divBtn.setAttribute('class', 'quantity__wrapper');
  let decBtn = document.createElement('button');
  decBtn.setAttribute('class', 'decrease');
  img = document.createElement('img');
  img.setAttribute('src', 'images/chevron.svg');
  decBtn.append(img);
  divBtn.append(decBtn);
  divBtn.append(quantity);
  let incBtn = document.createElement('button');
  incBtn.setAttribute('class', 'increase');
  img = document.createElement('img');
  img.setAttribute('src', 'images/chevron.svg');
  incBtn.append(img);
  divBtn.append(incBtn);
  li.append(divBtn);

  let divSubtotal = document.createElement('div');
  divSubtotal.setAttribute('class', 'subtotal');
  divSubtotal.innerHTML =
    '$' + (menuItems[idx].price * quantity.innerHTML) / 100;
  li.append(divSubtotal);

  decBtn.addEventListener('click', () => {
    if (menuItems[idx].count == 1) {
      cart.removeChild(li);
      btn.classList.remove('in-cart');
      btn.classList.add('add');
      btn.disabled = false;
      btn.innerText = 'Add to cart';
    }
    menuItems[idx].count--;
    updateItem(menuItems[idx], quantity, divSubtotal);
  });

  incBtn.addEventListener('click', () => {
    menuItems[idx].count++;
    updateItem(menuItems[idx], quantity, divSubtotal);
  });

  cart.append(li);
  updatePrice();
};

const addItemToCart = (btn, idx) => {
  appendItem(btn, idx);
  btn.classList.remove('add');
  btn.classList.add('in-cart');
  btn.innerHTML = '';
  const img = document.createElement('img');
  img.setAttribute('src', 'images/check.svg');
  btn.append(img);
  btn.append('In Cart');
  btn.disabled = true;
};

add.forEach((elem, idx) => {
  elem.addEventListener('click', () => {
    addItemToCart(elem, idx);
  });
});
