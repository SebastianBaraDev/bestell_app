const premiumCuts = myDishes.filter(d => d.category === "premium_cuts");
const sideDishes = myDishes.filter(d => d.category === "sides");
const drinks = myDishes.filter(d => d.category === "drinks");

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

//Warenkorb in Responsive als Overlay mit Button zum Öffnen unten
//Gerichte Widgets mit onclick --> Warenkorb

function addToCart(dishId) {
    
}
  //Zwischenvariable oder Array
//Gericht Anzahl erhöhen und senken
  //Push - Splice
//Gericht entfernen - Delete Function
//Gesamtpreis berechnen
//Bestellung abschicken (Dialog mit Bestätigung)