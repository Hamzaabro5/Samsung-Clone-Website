const textarea = document.querySelector(`textarea`)
const imgchange = document.querySelector(`.imgchangeindexmobile`)
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
    imageSrc
  };

  let cart = JSON.parse(localStorage.getItem('carts')) || [];
  cart.push(product);
  localStorage.setItem('carts', JSON.stringify(cart));
  alert(`Item Added`)

  // window.location.href = 'cart.html';
}



function modalSubmit() {
  window.location.reload
  alert(`FeedBack Submitted`);
  console.log(textarea.value);
  textarea.value = ``
}

