const itemsEl = document.getElementById("cart-items");
const summaryEl = document.getElementById("cart-summary");
const checkoutBtn = document.getElementById("checkout-btn");
const clearBtn = document.getElementById("clear-btn");

function renderCart() {
  const cart = getCart();
  if (cart.length === 0) {
    itemsEl.innerHTML = "<p>Your cart is empty.</p>";
    summaryEl.innerHTML = "";
    return;
  }

  let total = 0;
  itemsEl.innerHTML = cart
    .map((item, i) => {
      total += item.price;
      return `
        <div class="cart-item">
          <div class="meta">
            <img src="${item.image}" alt="${item.name}">
            <div>
              <strong>${item.name}</strong><br>
              ₹${item.price}
            </div>
          </div>
          <button class="btn btn-outline" onclick="removeItem(${i})">Remove</button>
        </div>
      `;
    })
    .join("");

  summaryEl.innerHTML = `<strong>Total: ₹${total}</strong>`;
}

function removeItem(i) {
  const cart = getCart();
  cart.splice(i, 1);
  setCart(cart);
  renderCart();
}

checkoutBtn.addEventListener("click", () => {
  const cart = getCart();
  if (cart.length === 0) return alert("Your cart is empty!");
  const name = prompt("Enter your name for order confirmation:");
  if (!name) return;
  alert(`Thank you, ${name}! Your order has been placed (demo).`);
  localStorage.removeItem("cart");
  renderCart();
});

clearBtn.addEventListener("click", () => {
  if (confirm("Clear your cart?")) {
    localStorage.removeItem("cart");
    renderCart();
  }
});

renderCart();
