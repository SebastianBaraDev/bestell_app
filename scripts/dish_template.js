function getDishTemplate(dish) {

  let buttonText = dish.amount > 0 ? `Added ${dish.amount}` : "Add to basket";

  return `
  <div class="dishWidget" id="dish-${dish.id}">
      <img src="${dish.picture}" class="dishImage">

      <div class="gap">

          <div class="menuDescription">
              <h3 class="menuTitle">${dish.name}</h3>
              <p>${dish.description}</p>
          </div>

          <div class="menuAssets">
              <p class="price">${dish.price.toFixed(2)} €</p>
              <button class="button" id="btn-${dish.id}" onclick="addToCart(${dish.id})">${buttonText}</button>
          </div>

      </div>
  </div>
  `;
}