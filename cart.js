

const cartItemsList = document.getElementById('cart-items');

  function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('carts')) || [];

    cartItemsList.innerHTML = '';

      cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${item.imageSrc}" alt="${item.brand} ${item.color}">
                <div class="card p-2">
                 <span>Brand: ${item.brand}</span>
                 <span>Color: ${item.color}</span>
                 <span>Memory: ${item.memory}</span>
                 <span>Price: ${item.price}</span>
                 <span>Quantity: ${item.quantity}</span>
                 <button class="btn btn-danger m-3" data-brand="${item.brand}" data-color="${item.color}" data-memory="${item.memory}">Remove</button>
                  </div>
                `;
                cartItemsList.appendChild(listItem);
            });
      }

displayCartItems();












