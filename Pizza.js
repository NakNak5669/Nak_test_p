let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let boxAll = document.createElement('div');
let titleMenu = document.querySelector('.title-menu');
boxAll.classList.add('box-all'); // Create box-all container dynamically
document.body.appendChild(boxAll); // Append it to the body
titleMenu.insertAdjacentElement('afterend', boxAll);

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    { id: 1, name: 'Canadian', image: '11.webp', price: 10 },
    { id: 2, name: 'Pepperoni', image: '12.webp', price: 14 },
    { id: 3, name: 'Delicious cheese', image: '13 pizza.avif', price: 16 },
    { id: 4, name: 'HighResolution', image: '15 pizza.jpg', price: 15 },
    { id: 5, name: 'Mozzarella', image: '16 pizza.avif', price: 22 },
    { id: 6, name: 'Carbonara ', image: '17 pizza.avif', price: 25 },
    { id: 7, name: 'Fresh', image: '18 pizza.jpg', price: 19 },
    { id: 8, name: 'Fresh tasty four', image: '19 pizza.avif', price: 30 },
];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        // Create product card dynamically
        let newDiv = document.createElement('div');
        newDiv.classList.add('list');

        newDiv.innerHTML = `
            <img src="./Image/${value.image}" alt="${value.name}">
            <h3>${value.name}</h3>
            <h4>${value.price}$</h4>
            <button onclick="add(${key})">Add</button>`;

        boxAll.appendChild(newDiv); // Append product cards to box-all
    });
}
initApp();

function add(key) {
    if (listCards[key] == null) {
        // Copy product from list to cart
        listCards[key] = { ...products[key], quantity: 1 };
    } else {
        listCards[key].quantity++;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        if (value) {
            totalPrice += value.price * value.quantity;
            count += value.quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="./Image/${value.image}" alt="${value.name}"></div>
                <div>${value.name}</div>
                <div>${(value.price * value.quantity).toLocaleString()}$</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;

            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString() + '$';
    quantity.innerText = count;
}

function changeQuantity(key, qty) {
    if (qty === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = qty;
    }
    reloadCard();
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function toggleCard() {
    document.querySelector('.card').classList.toggle('active');
  }


