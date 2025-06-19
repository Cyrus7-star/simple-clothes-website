function addToCart(item) {
  document.getElementById('cart').innerHTML = `<p>${item} added to cart!</p>`;
}
function filterProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    const name = products[i].getElementsByTagName("h2")[0].innerText.toLowerCase();
    products[i].style.display = name.includes(input) ? "block" : "none";
  }
}


