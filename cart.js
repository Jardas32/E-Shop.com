const cardStorege = JSON.parse(localStorage.getItem('carts')) || [];
const countCart = document.querySelector('.countCart');
console.log(cardStorege);

countCart.textContent = cardStorege.length;

