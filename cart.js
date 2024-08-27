const cartItemsList = document.getElementById('cart-items');

function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem('carts')) || [];

  cartItemsList.innerHTML = '';

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="${item.imageSrc}" alt="${item.brand} ${item.color}">
      <div class="card border-0 text-center">
        <h3 class="my-3">${item.brand}</h3>
        <span><b>Memory:</b> ${item.memory}</span>
        <span class="my-2"><b>Price:</b> ${item.price}</span>
        <span><b>Quantity:</b> ${item.quantity}</span>
        <button class="btn btn-danger rounded-5 m-3" data-brand="${item.brand}" data-color="${item.color}" data-memory="${item.memory}">Remove</button>
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