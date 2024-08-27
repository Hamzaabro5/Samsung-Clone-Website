const cartItemsList = document.getElementById('cart-items');

function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem('carts')) || [];

  cartItemsList.innerHTML = '';

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="${item.imageSrc}" alt="${item.brand} ${item.color}">
      <div class="card">
        <span>Brand: ${item.brand}</span>
        <span>Color: ${item.color}</span>
        <span>Memory: ${item.memory}</span>
        <span>Price: ${item.price}</span>
        <span>Quantity: ${item.quantity}</span>
        <button data-brand="${item.brand}" data-color="${item.color}" data-memory="${item.memory}">Remove</button>
      </div>
    `;


    const removeButton = listItem.querySelector('button');
    removeButton.addEventListener('click', event => {
      const brand = event.target.dataset.brand;
      const color = event.target.dataset.color;
      const memory = event.target.dataset.memory;

      const existingProductIndex = cart.findIndex(item => item.brand === brand && item.color === color && item.memory === memory);

      if (existingProductIndex !== -1) {
        if (cart[existingProductIndex].quantity > 1) {
          cart[existingProductIndex].quantity--;
        } else {
          cart.splice(existingProductIndex, 1);
        }

        localStorage.setItem('carts', JSON.stringify(cart));
        displayCartItems();
      }
    });

    cartItemsList.appendChild(listItem);
  });
}

displayCartItems();