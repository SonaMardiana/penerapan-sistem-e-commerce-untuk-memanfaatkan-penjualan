// Event listener untuk tombol "Add to Cart"
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName =
      button.previousElementSibling.previousElementSibling.textContent;
    alert(`${productName} added to cart!`);
  });
});
