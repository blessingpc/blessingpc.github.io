const carticon = document.getElementById('carticon');
const cart = document.getElementById('cart');
const closecart = document.getElementById('closecart');


if (carticon) {
    carticon.addEventListener('click', () => {
        cart.classList.add('active');
    })
}