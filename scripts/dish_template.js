function getMeatDishTemplate() {
  return `
<div class="dishWidget">
    <img src="assets/img/menu_1.png" class="dishImage">
  <div class="gap">
    <div class="menuDescription">
        <h3 class="menuTitle">${premiumCuts[0].name}</h3>
        <p>Tomatensauce, Mozzarella, Basilikum</p>
    </div>
    <div class="menuAssets">
        <p class="price">€ 7,50</p>
        <button class="addToCartButton" onclick="addToCart()">Add to basket</button>
    </div>
  </div>
</div>
`
}

function getSidesDishTemplate() {
  return `
<div class="dishWidget">
    <img src="assets/img/menu_1.png" class="dishImage">
  <div class="gap">
    <div class="menuDescription">
        <h3 class="menuTitle">${sideDishes[0].name}</h3>
        <p>Tomatensauce, Mozzarella, Basilikum</p>
    </div>
    <div class="menuAssets">
        <p class="price">€ 7,50</p>
        <button class="addToCartButton" onclick="addToCart()">Add to basket</button>
    </div>
  </div>
</div>
`
}

function getDrinksDishTemplate() {
  return `
<div class="dishWidget">
    <img src="assets/img/menu_1.png" class="dishImage">
  <div class="gap">
    <div class="menuDescription">
        <h3 class="menuTitle">${drinks[0].name}</h3>
        <p>Tomatensauce, Mozzarella, Basilikum</p>
    </div>
    <div class="menuAssets">
        <p class="price">€ 7,50</p>
        <button class="addToCartButton" onclick="addToCart()">Add to basket</button>
    </div>
  </div>
</div>
`
}