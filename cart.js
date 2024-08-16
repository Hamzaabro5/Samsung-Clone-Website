   // cart prod local storage me jayeingi
   const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
   // item display karane kelie
   function displayCart() {
     const   
  cartItems = document.getElementById('cart-items');
     cartItems.innerHTML = '';
 
     cart.forEach(product => {
       const card = document.createElement('div');
       card.classList.add('card');
       card.innerHTML = `
       <img src="${product.imageSrc}"  class="card-img-top w-100" alt="...">
       <div class="card-body">
           <h4 class="card-title text-center fw-bold">${product.brand}</h4>
           <p class="card-text text-center"><span class="fw-bold">Memory:</span> ${product.memory}</p>
           <p class="card-text text-center"><span class="fw-bold">Price:</span> ${product.price}</p>
           </div>
           <div class="d-flex justify-content-center my-3">
           <button class="btn btn-md btn-danger" onclick="removeProduct(${product.id})">Remove</button>
           </div>
       `;
       cartItems.appendChild(card);
     });
   }
 
   // item remove krne kelie
   function removeProduct(id) {
     const cart = JSON.parse(localStorage.getItem('cart')) || [];
     const updatedCart = cart.filter(product => product.id !== id);
     localStorage.setItem('cart', JSON.stringify(updatedCart));
     displayCart();
     window.location.reload();
   }
 
   displayCart();
