const premiumCuts = myDishes.filter(d => d.category === "premium_cuts");
const sideDishes = myDishes.filter(d => d.category === "sides");
const drinks = myDishes.filter(d => d.category === "drinks");

let shoppingCart = [];

function init() {
  renderDishes();
}

function renderDishes() {
  renderMeatDishes(premiumCuts);
  renderSideDishes(sideDishes);
  renderDrinks(drinks);
}

function renderMeatDishes(premiumCuts) {
  let meatDishesContainer = document.getElementById("meat_dishes");
  meatDishesContainer.innerHTML = "";
  for (let meatDishesIndex = 0; meatDishesIndex < premiumCuts.length; meatDishesIndex++) {
    meatDishesContainer.innerHTML += getMeatDishTemplate(meatDishesIndex);
  }
}

function renderSideDishes(sideDishes) {
  let sideDishesContainer = document.getElementById("side_dishes");
  sideDishesContainer.innerHTML = "";
  for (let sideDishesIndex = 0; sideDishesIndex < sideDishes.length; sideDishesIndex++) {
    sideDishesContainer.innerHTML += getSidesDishTemplate(sideDishesIndex);
  }
}

function renderDrinks(drinks) {
  let drinksContainer = document.getElementById("drinks");
  drinksContainer.innerHTML = "";
  for (let drinksIndex = 0; drinksIndex < drinks.length; drinksIndex++) {
    drinksContainer.innerHTML += getDrinksDishTemplate(drinksIndex);
  }
}

function addToCart(id) {
  let dish = myDishes.find(d => d.id === id);
  dish.amount++;
  if (!shoppingCart.includes(dish)) {
      shoppingCart.push(dish);
    }
  renderShoppingCartDesktop();
  renderPriceSectionDesktop();
  renderShoppingCartMobile();
  renderPriceSectionMobile();
}

function renderShoppingCartDesktop() {
  let shoppingCartDesktop = document.getElementById('dishWrapper');
  shoppingCartDesktop.innerHTML = '';

  for (let i = 0; i < shoppingCart.length; i++) {
       const dish = shoppingCart[i];
       const price = dish.price * dish.amount;
       shoppingCartDesktop.innerHTML += getCartTemplate(dish, price);
      }
  renderPriceSectionDesktop();
  renderPriceSectionMobile();
}

function renderPriceSectionDesktop() {
  const subtotal = calculateSubtotal();
  const deliverycost = shoppingCart.length > 0 ? 5 : 0;
  const total = subtotal + deliverycost;

  let prices = document.getElementById('priceSection');
  prices.innerHTML = '';
  prices.innerHTML = getPriceTemplate(subtotal, total)
}

function renderShoppingCartMobile() {
  let shoppingCartMobile = document.getElementById('mobileDishWrapper');
  shoppingCartMobile.innerHTML = '';

  for (let i = 0; i < shoppingCart.length; i++) {
       const dish = shoppingCart[i];
       const price = dish.price * dish.amount;
       shoppingCartMobile.innerHTML += getCartTemplate(dish, price);
      }
}

function renderPriceSectionMobile() {
  const subtotal = calculateSubtotal();
  const deliverycost = shoppingCart.length > 0 ? 5 : 0;
  const total = subtotal + deliverycost;

  let prices = document.getElementById('mobilePriceSection');
  prices.innerHTML = '';
  prices.innerHTML = getPriceTemplate(subtotal, total)
}

function decreaseAmount(id){
  let dish = shoppingCart.find(d => d.id === id);
  if (dish.amount > 1) {
    dish.amount--;
  } else {
      shoppingCart.splice(shoppingCart.indexOf(dish), 1);
      dish.amount--;
    }
  renderShoppingCartDesktop();
  renderShoppingCartMobile();
}

function increaseAmount(id) {
  let dish = shoppingCart.find(d => d.id === id);
  if (dish.amount < 20) {
    dish.amount++;
  } else {
    alert("You cannot order more than 20 of the same dish.");
  }
  renderShoppingCartDesktop();
  renderShoppingCartMobile();
}

function deleteDish(id){
  let dish = myDishes.find(d => d.id === id);
  dish.amount = 0;

  let cartDish = shoppingCart.find(d => d.id === id);
  shoppingCart.splice(shoppingCart.indexOf(dish), 1);
  cartDish = 0;

  renderShoppingCartDesktop();
  renderShoppingCartMobile();
}  

function calculateSubtotal() {
  let subtotal = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    subtotal += shoppingCart[i].price * shoppingCart[i].amount;
  }

  return subtotal;
}

function showOrderSuccessDialog(){
  hideBasketMobile();
  cleanBaskets();
  const dialog = document.getElementById("orderSuccessDialog");
  dialog.showModal();
  setTimeout(() => {
  dialog.classList.add('hide'); //starts CSS Fade-out
  setTimeout(() => dialog.close(), 500); // .close() after Fade-out time
}, 4000);
}

function cleanBaskets(){
  let shoppingCartDesktop = document.getElementById('dishWrapper');
  shoppingCartDesktop.innerHTML = '';
  let prices = document.getElementById('priceSection');
  prices.innerHTML = '';
  let shoppingCartMobile = document.getElementById('mobileDishWrapper');
  shoppingCartMobile.innerHTML = '';
  let mobilePrices = document.getElementById('mobilePriceSection');
  mobilePrices.innerHTML = '';
  resetArrays();
}

function resetArrays(){
  shoppingCart = [];
    for (let i = 0; i < myDishes.length; i++) {
       const dish = myDishes[i];
       dish.amount = 0;
}
}

function hideOrderSuccessDialog(){
  document.getElementById("orderSuccessDialog").close();
}

function showBasketMobileDialog() {
    document.getElementById("mobileBasketDialog").showModal();
}

function hideBasketMobile() {
    document.getElementById("mobileBasketDialog").close();
}