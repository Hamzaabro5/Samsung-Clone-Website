// const cartItemsList = document.getElementById('cart-items');

// function displayCartItems() {
//   const cart = JSON.parse(localStorage.getItem('carts')) || [];

//   if (cart.length === 0) {
//     cartItemsList.innerHTML = '<h3 class="empty-cart mt-3">No Item Found.....</h3>';
//   } else {
//     cartItemsList.innerHTML = '';

//     cart.forEach(item => {
//       const listItem = document.createElement('li');
//       listItem.innerHTML = `
//       <img width="200px" src="${item.imageSrc}" alt="${item.brand} ${item.color}">
//       <div class="card border-0 text-center">
//       <h3 class="my-3">${item.brand}</h3>
//           <span><b>Memory:</b> ${item.memory}</span>
//           <span class="my-2"><b>Price:</b> ${item.price}</span>
//           <span><b>Quantity:</b> ${item.quantity}</span>
//           <button class="btn btn-danger rounded-5 m-3" data-brand="${item.brand}" data-color="${item.color}" data-memory="${item.memory}">Remove</button>
//         </div>
//       `;

//       const removeButton = listItem.querySelector('button');
//           removeButton.addEventListener('click', event => {
//             const brand = event.target.dataset.brand;
//             const color = event.target.dataset.color;
//             const memory = event.target.dataset.memory;
      
//             const existingProductIndex = cart.findIndex(item => item.brand === brand && item.color === color && item.memory === memory);
      
//             if (existingProductIndex !== -1) {
//               if (cart[existingProductIndex].quantity > 1) {
//                 cart[existingProductIndex].quantity--;
//               } else {
//                 cart.splice(existingProductIndex, 1);
//               }
      
//               localStorage.setItem('carts', JSON.stringify(cart));
//               displayCartItems();
//             }
//           });

//       cartItemsList.appendChild(listItem);
//     });
//   }
// }

// displayCartItems();



























const cartItemsList = document.getElementById('cart-items');
const cart = JSON.parse(localStorage.getItem('carts')) || [];

function displayCartItems() {
  
  if (!cart || !cart.length) {
    cartItemsList.innerHTML = '<h3 class="empty-cart mt-3">No Item Found.....</h3>';
  } else {
    cartItemsList.innerHTML = ''; 

    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML += `
        <img width="200px" src="${item.imageSrc}" alt="${item.brand} ${item.color}">
        <div class="card border-0 text-center">
          <h3 class="my-3">${item.brand}</h3>
          <span><b>Memory:</b> ${item.memory}</span>
          <span class="my-2"><b>Price:</b> ${item.price}</span>
          <div class="quantity-container d-flex justify-content-center align-items-center">
          <b>Quantity:</b> 
            <button class="btn btn-sm btn-outline-primary rounded-circle mx-2" data-brand="${item.brand}" data-color="${item.color}" data-memory="${item.memory}" onclick="decreaseQuantity(this)">-</button>
            <span class="quantity mx-2">${item.quantity}</span>
            <button class="btn btn-sm btn-outline-primary rounded-circle mx-2" data-brand="${item.brand}" data-color="${item.color}" data-memory="${item.memory}" onclick="increaseQuantity(this)">+</button>
          </div>

          <button class="btn btn-danger delete-btn rounded-5 m-3" data-brand="${item.brand}" data-color="${item.color}" data-memory="${item.memory}">Remove Item</button>
        </div>
      `;
      
      const removeButton = listItem.querySelector('.delete-btn');
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
}

function decreaseQuantity(buttonElement) {
  const brand = buttonElement.dataset.brand;
  const color = buttonElement.dataset.color;
  const memory = buttonElement.dataset.memory;

  const existingProductIndex = cart.findIndex(item => item.brand === brand && item.color === color && item.memory === memory);

  if (existingProductIndex !== -1) {
    const currentQuantity = cart[existingProductIndex].quantity;

    if (currentQuantity > 1) {
      cart[existingProductIndex].quantity--;
      const quantitySpan = buttonElement.parentElement.querySelector('.quantity');
      quantitySpan.textContent = currentQuantity - 1;
      localStorage.setItem('carts', JSON.stringify(cart));
    } else {
      cart.splice(existingProductIndex, 1);
      localStorage.setItem('carts', JSON.stringify(cart));
      displayCartItems();
    }
  }
}

function increaseQuantity(buttonElement) {
  const brand = buttonElement.dataset.brand;
  const color = buttonElement.dataset.color;
  const memory = buttonElement.dataset.memory;

  const existingProductIndex = cart.findIndex(item => item.brand === brand && item.color === color && item.memory === memory);

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity++;
    const quantitySpan = buttonElement.parentElement.querySelector('.quantity');
    quantitySpan.textContent = cart[existingProductIndex].quantity;
    localStorage.setItem('carts', JSON.stringify(cart));
  }
}

displayCartItems();