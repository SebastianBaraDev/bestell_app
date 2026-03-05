function getMeatDishTemplate(meatDishesIndex) {
  return `
<div class="dishWidget">
    <img src="${premiumCuts[meatDishesIndex].picture}" class="dishImage">
  <div class="gap">
    <div class="menuDescription">
        <h3 class="menuTitle">${premiumCuts[meatDishesIndex].name}</h3>
        <p>${premiumCuts[meatDishesIndex].description}</p>
    </div>
    <div class="menuAssets">
        <p class="price">${premiumCuts[meatDishesIndex].price.toFixed(2)} €</p>
        <button class="addToCartButton" onclick="addToCart()">Add to basket</button>
    </div>
  </div>
</div>
`
}

function getSidesDishTemplate(sideDishesIndex) {
  return `
<div class="dishWidget">
    <img src="${sideDishes[sideDishesIndex].picture}" class="dishImage">
  <div class="gap">
    <div class="menuDescription">
        <h3 class="menuTitle">${sideDishes[sideDishesIndex].name}</h3>
        <p>${sideDishes[sideDishesIndex].description}</p>
    </div>
    <div class="menuAssets">
        <p class="price">${sideDishes[sideDishesIndex].price.toFixed(2)} €</p>
        <button class="addToCartButton" onclick="addToCart()">Add to basket</button>
    </div>
  </div>
</div>
`
}

function getDrinksDishTemplate(drinksIndex) {
  return `
<div class="dishWidget">
    <img src="${drinks[drinksIndex].picture}" class="dishImage">
  <div class="gap">
    <div class="menuDescription">
        <h3 class="menuTitle">${drinks[drinksIndex].name}</h3>
        <p>${drinks[drinksIndex].description}</p>
    </div>
    <div class="menuAssets">
        <p class="price">${drinks[drinksIndex].price.toFixed(2)} €</p>
        <button class="addToCartButton" onclick="addToCart()">Add to basket</button>
    </div>
  </div>
</div>
`
}