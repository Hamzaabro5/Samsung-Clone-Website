// const textarea = document.querySelector(`textarea`)
// const imgchange = document.querySelector(`.imgchangeindexmobile`)
// function addtoCart() {
  
//   const card = event.target.closest('.card');
//   const brand = card.querySelector('.brand').textContent;
//   const color = card.querySelector('.card-text span').textContent.split(':')[1].trim();
//   const memory = card.querySelector('.memory').textContent;
//   const price = card.querySelector('.price').textContent;
//   const imageSrc = card.querySelector('img').src;

//   const product = {
//     brand,
//     color,
//     memory,
//     price,
//     imageSrc
//   };

//   let cart = JSON.parse(localStorage.getItem('carts')) || [];
//   cart.push(product);
//   localStorage.setItem('carts', JSON.stringify(cart));
//   alert(`Item Added`)

//   window.location.href = '../cart.html';
// }



// function modalSubmit() {
//   window.location.reload
//   alert(`FeedBack Submitted`);
//   console.log(textarea.value);
//   textarea.value = ``
// }






























const textarea = document.querySelector(`textarea`);
const imgchange = document.querySelector(`.imgchangeindexmobile`);

function addtoCart() {
  const card = event.target.closest('.card');
  const brand = card.querySelector('.brand').textContent;
  const color = card.querySelector('.card-text span').textContent.split(':')[1].trim();
  const memory = card.querySelector('.memory').textContent;
  const price = card.querySelector('.price').textContent;
  const imageSrc = card.querySelector('img').src;

  const product = {
    brand,
    color,
    memory,
    price,
    imageSrc,
    quantity: 1 // Initialize quantity for new products
  };

  // Check if cart exists in localStorage
  let cart = JSON.parse(localStorage.getItem('carts')) || [];

  // Find existing product in the cart
  const existingProductIndex = cart.findIndex(item => item.brand === product.brand && item.color === product.color && item.memory === product.memory);

  if (existingProductIndex !== -1) {
    // Product already exists, increase quantity
    cart[existingProductIndex].quantity++;
  } else {
    // New product, add it with initial quantity 1
    cart.push(product);
  }

  // Update localStorage with the modified cart
  localStorage.setItem('carts', JSON.stringify(cart));
  alert(`Item Added (Quantity: ${cart[existingProductIndex] ? cart[existingProductIndex].quantity : 1})`);

  // Optional: Update cart display on current page (consider using a separate function)
  // updateCartDisplay();
}

function updateCartDisplay() {
  // Logic to fetch cart items from localStorage and update the cart UI
  // (e.g., using a templating engine or DOM manipulation)
}

function modalSubmit() {
  window.location.reload(); // Reload the page to potentially update cart display
  alert(`Feedback Submitted`);
  console.log(textarea.value);
  textarea.value = ''; // Clear textarea after submitting feedback
}

// Add event listeners (assuming you have buttons with appropriate classes)
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => button.addEventListener('click', addtoCart));