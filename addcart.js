function addtoCart() {
  // product details post kelie
  const card = event.target.closest('.card');
  const brand = card.querySelector('.brand').textContent;
  const color = card.querySelector('.card-text span').textContent.split(':')[1].trim();
  const memory = card.querySelector('.memory').textContent;
  const price = card.querySelector('.price').textContent;
  const imageSrc = card.querySelector('img').src;

  // Create product object
  const product = {
    brand,
    color,
    memory,
    price,
    imageSrc
  };

  // cart me add krene kelie
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`Item Added`)

  // direct cart wala page khulega
  // window.location.href = 'cart.html';
}
