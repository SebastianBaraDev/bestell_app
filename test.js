let shoppingCart = [];

function init() {
  renderDishes();
  renderShoppingCart();
}

function renderDishes() {
  renderCategory("premium_cuts", "meat_dishes");
  renderCategory("sides", "side_dishes");
  renderCategory("drinks", "drinks");
}

function renderCategory(category, containerId) {
  let container = document.getElementById(containerId);
  container.innerHTML = "";

  let filteredDishes = myDishes.filter(dish => dish.category === category);

  for (let i = 0; i < filteredDishes.length; i++) {
    let dish = filteredDishes[i];
    container.innerHTML += getDishTemplate(dish);
  }
}

function addToCart(id) {
  let dish = myDishes.find(d => d.id === id);
  dish.amount++;
  if (!shoppingCart.includes(dish)) {
      shoppingCart.push(dish);
    }
    renderDishes();
    renderShoppingCart();
}

function renderShoppingCart(){
  renderShoppingCartDesktop();
  renderPriceSectionDesktop();
  renderShoppingCartMobile();
  renderPriceSectionMobile();
  renderEmptyBasketInfo();
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
  if(document.getElementById('dishWrapper').innerHTML != ''){
  prices.innerHTML = getPriceTemplate(subtotal, total);
  }
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

  const prices = document.getElementById('mobilePriceSection');
  prices.innerHTML = '';
  if(document.getElementById('mobileDishWrapper').innerHTML != ''){
  prices.innerHTML = getPriceTemplate(subtotal, total);
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
  renderDishes();  
  renderShoppingCart();
}

function increaseAmount(id) {
  let dish = shoppingCart.find(d => d.id === id);
  if (dish.amount < 20) {
    dish.amount++;
  } else {
    alert("You cannot order more than 20 of the same dish.");
  }
  renderShoppingCart()
}

function deleteDish(id){
  let dish = myDishes.find(d => d.id === id);
  dish.amount = 0;

  shoppingCart.splice(shoppingCart.indexOf(dish), 1);
  renderDishes();
  renderShoppingCart();
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
  renderShoppingCart();
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

function renderEmptyBasketInfo(){
    let emptyBasket = document.getElementById('dishWrapper');
    if(emptyBasket.innerHTML === "")
        emptyBasket.innerHTML += getInfoCartTemplate();
}