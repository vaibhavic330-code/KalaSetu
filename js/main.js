window.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  ["year", "year2", "year3"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = year;
  });
  updateCartCount();
});

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function setCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = getCart().length;
  const cartEls = document.querySelectorAll("#cart-count");
  cartEls.forEach(el => (el.textContent = count));
}

function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  setCart(cart);
  alert(`${product.name} added to cart!`);
}
