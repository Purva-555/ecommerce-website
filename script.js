const cartItems = [];

function addToCart(productName) {
  cartItems.push(productName);
  updateCart();
}

function updateCart() {
  const cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartElement.appendChild(li);
  });
}
