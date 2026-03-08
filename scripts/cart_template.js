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

function getPriceTemplate(subtotal, total) {
  return `
        <hr>
    <div class="priceContainer">

      <div class="priceInfo">
        <div class="textArea">
          <p>Zwischensumme:</p>
          <p>Lieferkosten:</p>
          <p>Gesamtsumme:</p>
        </div>

        <div class="priceArea">
          <p>${subtotal.toFixed(2).replace('.',',')} €</p>
          <p>5,00 €</p>
          <p>${total.toFixed(2).replace('.',',')} €</p>
        </div>
      </div>
      
        <button class="button" onclick="showOrderSuccessDialog()">Send Order</button>

    </div>
  `;
}