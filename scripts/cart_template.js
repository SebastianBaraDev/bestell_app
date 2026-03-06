function getCartTemplate(dish, price) {
  return `
    <div class="dishContainer">

        <h3>${dish.name}</h3>
        <div class="dishSubline">
          <img src="./assets/icons/minus.png" onclick="decreaseAmount(${dish.id})">
          <p>${dish.amount} x </p>
          <img src="./assets/icons/plus.png" onclick="increaseAmount(${dish.id})">
          <p>${price.toFixed(2).replace('.', ',')} €</p>
          <img src="./assets/icons/trash.png" onclick="deleteDish(${dish.id})">
        </div>

    </div>
  `;
}