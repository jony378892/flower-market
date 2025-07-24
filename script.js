function showMessage() {
  alert("Flower Added to Cart");
}

// Attach to all buttons with class 'cartButton'
document.querySelectorAll("#cartButton").forEach((btn) => {
  btn.addEventListener("click", showMessage);
});
