import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

let products = document.querySelectorAll('.product');
products.forEach(product => {
  
  let data_price = document.querySelector('.price').textContent;
  product.setAttribute('data-price',data_price);
  
});
});
