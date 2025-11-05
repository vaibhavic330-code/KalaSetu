const products = [
  {
    id: 1,
    name: "Madhubani Painting",
    description: "Traditional painting from Bihar.",
    price: 1200,
    region: "Bihar",
    image: "assets/madhubani.jpg"
  },
  {
    id: 2,
    name: "Bandhani Dupatta",
    description: "Colorful tie-dye dupatta from Gujarat.",
    price: 800,
    region: "Gujarat",
    image: "assets/bandhani.jpg"
  },
  {
    id: 3,
    name: "Terracotta Pottery",
    description: "Handmade pottery from Maharashtra.",
    price: 600,
    region: "Maharashtra",
    image: "assets/terracotta.jpg"
  }
];

const listEl = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const regionFilter = document.getElementById("region-filter");

function renderProducts(items) {
  listEl.innerHTML = items
    .map(
      p => `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="price">₹${p.price}</div>
        <button class="btn" onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
      </div>
    `
    )
    .join("");
}

function applyFilters() {
  const q = searchInput.value.toLowerCase();
  const region = regionFilter.value;
  const filtered = products.filter(p => {
    const matchQ = p.name.toLowerCase().includes(q);
    const matchRegion = region === "" || p.region === region;
    return matchQ && matchRegion;
  });
  renderProducts(filtered);
}

renderProducts(products);
searchInput.addEventListener("input", applyFilters);
regionFilter.addEventListener("change", applyFilters);
