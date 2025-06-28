let cartCount = 0;

function addToCart() {
    cartCount++;
    const counter = document.getElementById('cart-counter');
    if (counter) {
        counter.textContent = cartCount;
    }
}
