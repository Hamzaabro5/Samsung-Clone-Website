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
           <h5 class="card-title">${product.brand}</h5>
           <p class="card-text">Color: ${product.color}</p>
           <p class="card-text">Memory: ${product.memory}</p>
           <p class="card-text">Price: ${product.price}</p>
         </div>
         <button class="btn btn-md btn-danger" onclick="removeProduct(${product.id})">Remove</button>
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
