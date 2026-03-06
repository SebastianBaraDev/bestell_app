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
  let dish = myDishes.find(d => d.id === id); // Filter = Array / Find = Eizelnes Element
  dish.amount++;
  if (!shoppingCart.includes(dish)) {
      shoppingCart.push(dish);
    }
  renderShoppingCartDesktop();
}

function renderShoppingCartDesktop() {
  let shoppingCartDesktop = document.getElementById('dishWrapper');
  shoppingCartDesktop.innerHTML = '';

  for (let i = 0; i < shoppingCart.length; i++) {
       const dish = shoppingCart[i];
       const price = dish.price * dish.amount;
       shoppingCartDesktop.innerHTML += getCartTemplate(dish, price);
      }
}

function renderPriceSectionDesktop(dish, price, amount) {
  let prices = document.getElementById('priceSection');
  prices.innerHTML = '';
  prices.innerHTML = get
}

function renderShoppingCartMobile() {
  let shoppingCartMobile = document.getElementById('dishWrapper');
  shoppingCartMobile.innerHTML = '';

  for (let i = 0; i < shoppingCart.length; i++) {
       const dish = shoppingCart[i];
       const price = dish.price * dish.amount;
       shoppingCartMobile.innerHTML += getCartTemplate(dish, price);
      }
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
}

function increaseAmount(id) {
  let dish = shoppingCart.find(d => d.id === id);
  if (dish.amount < 20) {
    dish.amount++;
  } else {
    alert("You cannot order more than 20 of the same dish.");
  }
  renderShoppingCartDesktop();
}

//Gericht entfernen - Delete Function
//Gesamtpreis berechnen
//Bestellung abschicken (Dialog mit Bestätigung)