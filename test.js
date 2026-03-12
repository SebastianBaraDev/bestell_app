let shoppingCart = [];
const DELIVERY_COST = 5;


/* ---------------- INIT ---------------- */

function init() {
  renderDishes();
  renderShoppingCart();
}


/* ---------------- DISH RENDERING ---------------- */

function renderDishes() {
  renderCategory("premium_cuts", "meat_dishes");
  renderCategory("sides", "side_dishes");
  renderCategory("drinks", "drinks");
}

function renderCategory(category, containerId) {

  let container = document.getElementById(containerId);
  container.innerHTML = "";

  let filteredDishes = myDishes.filter(d => d.category === category);

  for (let i = 0; i < filteredDishes.length; i++) {
    container.innerHTML += getDishTemplate(filteredDishes[i]);
  }

}


/* ---------------- CART RENDERING ---------------- */

function renderShoppingCart() {

  renderCart("dishWrapper", "desktop");
  renderCart("mobileDishWrapper", "mobile");

  updatePrices();
  renderEmptyBasketInfo();

}

function renderCart(containerId, prefix) {

  let container = document.getElementById(containerId);
  container.innerHTML = "";

  for (let i = 0; i < shoppingCart.length; i++) {

    let dish = shoppingCart[i];
    let price = dish.price * dish.amount;

    container.innerHTML += getCartTemplate(dish, price, prefix);

  }

}


/* ---------------- ADD TO CART ---------------- */

function addToCart(id) {

  let dish = myDishes.find(d => d.id === id);

  dish.amount++;

  if (!shoppingCart.includes(dish)) {
    shoppingCart.push(dish);
  }

  updateDishWidget(id);
  renderShoppingCart();

}


/* ---------------- INCREASE ---------------- */

function increaseAmount(id) {

  let dish = shoppingCart.find(d => d.id === id);

  dish.amount++;

  updateDishWidget(id);
  renderShoppingCart();

}


/* ---------------- DECREASE ---------------- */

function decreaseAmount(id) {

  let dish = shoppingCart.find(d => d.id === id);

  if (dish.amount > 1) {

    dish.amount--;

  } else {

    shoppingCart.splice(shoppingCart.indexOf(dish), 1);
    dish.amount = 0;

  }

  updateDishWidget(id);
  renderShoppingCart();

}


/* ---------------- DELETE ---------------- */

function deleteDish(id) {

  let dish = myDishes.find(d => d.id === id);

  dish.amount = 0;

  shoppingCart.splice(shoppingCart.indexOf(dish), 1);

  updateDishWidget(id);
  renderShoppingCart();

}


/* ---------------- BUTTON UPDATE ---------------- */

function updateDishWidget(id) {

  let dish = myDishes.find(d => d.id === id);

  let button = document.getElementById(`btn-${id}`);

  if (button) {

    button.innerText = dish.amount > 0
      ? `Added ${dish.amount}`
      : "Add to basket";

  }

}


/* ---------------- PRICE CALCULATION ---------------- */

function updatePrices() {

  let desktop = document.getElementById("priceSection");
  let mobile = document.getElementById("mobilePriceSection");

  if (shoppingCart.length === 0) {

    desktop.innerHTML = "";
    mobile.innerHTML = "";

    return;
  }

  const subtotal = calculateSubtotal();
  const total = subtotal + DELIVERY_COST;

  desktop.innerHTML = getPriceTemplate(subtotal, total);
  mobile.innerHTML = getPriceTemplate(subtotal, total);

}

function calculateSubtotal() {

  let subtotal = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    subtotal += shoppingCart[i].price * shoppingCart[i].amount;
  }

  return subtotal;

}


/* ---------------- EMPTY BASKET ---------------- */

function renderEmptyBasketInfo() {

  if (shoppingCart.length > 0) return;

  let desktop = document.getElementById('dishWrapper');
  let mobile = document.getElementById('mobileDishWrapper');

  desktop.innerHTML = getInfoCartTemplate();
  mobile.innerHTML = getInfoCartTemplate();

}


/* ---------------- ORDER SUCCESS ---------------- */

function showOrderSuccessDialog() {

  hideBasketMobile();

  cleanBaskets();
  renderShoppingCart();

  const dialog = document.getElementById("orderSuccessDialog");

  dialog.showModal();

  setTimeout(() => {

    dialog.classList.add('hide');

    setTimeout(() => dialog.close(), 500);

  }, 4000);

}

function hideOrderSuccessDialog() {
  document.getElementById("orderSuccessDialog").close();
}


/* ---------------- MOBILE BASKET ---------------- */

function showBasketMobileDialog() {
  document.getElementById("mobileBasketDialog").showModal();
}

function hideBasketMobile() {
  document.getElementById("mobileBasketDialog").close();
}


/* ---------------- RESET CART ---------------- */

function cleanBaskets() {

  document.getElementById('dishWrapper').innerHTML = '';
  document.getElementById('priceSection').innerHTML = '';

  document.getElementById('mobileDishWrapper').innerHTML = '';
  document.getElementById('mobilePriceSection').innerHTML = '';

  resetArrays();

}

function resetArrays() {

  shoppingCart = [];

  for (let i = 0; i < myDishes.length; i++) {

    let dish = myDishes[i];
    dish.amount = 0;

    let button = document.getElementById(`btn-${dish.id}`);

    if (button) {
      button.innerText = "Add to basket";
    }

  }

}